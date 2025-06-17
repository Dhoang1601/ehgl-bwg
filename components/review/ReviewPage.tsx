
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Page, CategoryDetails } from '../../types';
import { LessonContentData, LessonPage, FillBlankPageData, SortPageData, MultipleChoicePageData, TrueFalsePageData, SortWordItem } from '../learning/LessonDetailPage';
import { generatedLessonModules } from '../../src/data/lessonLoader';
import { interactiveQuestionTypes } from '../../hooks/useLessonData';
import ResultPopup from '../learning/ResultPopup';
import LoadingOverlay from '../LoadingOverlay';
import { ArrowLeftIcon, FlameIcon as FlameIconSolid } from '../icons/ProfileIcons';
import { ClipboardListIcon } from '../icons/NavIcons';
import { loadSound, playSound } from '../../src/utils/audioUtils'; 
import { isSameDay } from '../../src/utils/dateUtils';

// Main App Header and Bottom Navigation are now rendered in App.tsx
import ReviewQuitConfirmationPopup from './ReviewQuitConfirmationPopup';


// Question Type Components
import FillBlankType from '../learning/questiontypes/FillBlankType';
import SortType from '../learning/questiontypes/SortType';
import MultipleChoiceType from '../learning/questiontypes/MultipleChoiceType';
import TrueFalseType from '../learning/questiontypes/TrueFalseType';

interface ReviewPageProps {
  lessonsStatus: Record<string, 'unlocked' | 'completed'>;
  categoryDetails: CategoryDetails;
  onNavigate: (page: Page) => void; // Kept for internal navigation or actions
  areSoundEffectsEnabled: boolean;
  persistedReviewStreak: number;
  setPersistedReviewStreak: (streak: number) => void;
  userName: string; // Kept if needed for display within review page content
  userXP: number; // Kept if needed for logic
  userLevel: number; // Kept if needed for logic
  userStreak: number; 
  lastStreakUpdate: string | null;
  // isExiting prop removed
}

type ReviewSessionState = 'idle' | 'loading_questions' | 'active' | 'all_questions_exhausted' | 'no_reviewable_questions';

interface ReviewQuestionBase {
  lessonId: string;
  pageIndex: number;
  uniqueId: string;
  xp?: number;
}

type ReviewFillBlankQuestion = FillBlankPageData & ReviewQuestionBase;
type ReviewSortQuestion = SortPageData & ReviewQuestionBase;
type ReviewMultipleChoiceQuestion = MultipleChoicePageData & ReviewQuestionBase;
type ReviewTrueFalseQuestion = TrueFalsePageData & ReviewQuestionBase;

type ReviewQuestion =
  | ReviewFillBlankQuestion
  | ReviewSortQuestion
  | ReviewMultipleChoiceQuestion
  | ReviewTrueFalseQuestion;


const MAX_REPETITIONS_PER_QUESTION = 3;
// Height of the internal fixed action button footer in ReviewPage (active session)
// P-3 (12px) + Button PY-3 (12px top/bottom) + Button text (approx 20px) + Border (2px) ~ 46px. Rounded up to 60px for safety.
// pb-16 (64px) in Tailwind units, to be safe.
const REVIEW_ACTION_FOOTER_HEIGHT_CLASS = 'pb-[76px]'; // Approx 60px for button area + a bit more for spacing from bottom of viewport or main nav


const ReviewPage: React.FC<ReviewPageProps> = ({
  lessonsStatus,
  categoryDetails,
  onNavigate, // Prop kept
  areSoundEffectsEnabled,
  persistedReviewStreak,
  setPersistedReviewStreak,
  userName, // Prop kept
  userXP, // Prop kept
  userLevel, // Prop kept
  userStreak, // Prop kept
  lastStreakUpdate, // Prop kept
}) => {
  const [sessionState, setSessionState] = useState<ReviewSessionState>('idle');
  
  const [allReviewableQuestions, setAllReviewableQuestions] = useState<ReviewQuestion[]>([]);
  const [currentQuestionPool, setCurrentQuestionPool] = useState<ReviewQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<ReviewQuestion | null>(null);
  const [currentQuestionAnswer, setCurrentQuestionAnswer] = useState<any>(null);
  
  const [sessionStreak, setSessionStreak] = useState(0);
  const [maxSessionStreak, setMaxSessionStreak] = useState(0); 
  const [questionRepetitionMap, setQuestionRepetitionMap] = useState<Map<string, number>>(new Map());

  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCurrentAnswerCorrect, setIsCurrentAnswerCorrect] = useState<boolean | null>(null);
  const [resultPopup, setResultPopup] = useState<{ isOpen: boolean; type: 'correct' | 'incorrect'; title: string; message: string; } | null>(null);
  const [showQuitReviewPopup, setShowQuitReviewPopup] = useState(false);

  const [correctSound, setCorrectSound] = useState<AudioBuffer | null>(null);
  const [incorrectSound, setIncorrectSound] = useState<AudioBuffer | null>(null);

  useEffect(() => {
    let isMounted = true;
    const initSounds = async () => {
      const loadedCorrect = await loadSound('sounds/correct.mp3');
      const loadedIncorrect = await loadSound('sounds/incorrect.mp3');
      if (isMounted) {
        setCorrectSound(loadedCorrect);
        setIncorrectSound(loadedIncorrect);
      }
    };
    initSounds();
    return () => { isMounted = false; };
  }, []);

  useEffect(() => {
    const completedLessonIds = Object.entries(lessonsStatus)
      .filter(([, status]) => status === 'completed')
      .map(([lessonId]) => lessonId);

    if (completedLessonIds.length === 0) {
      setSessionState('no_reviewable_questions');
      setAllReviewableQuestions([]);
      return;
    }

    const questions: ReviewQuestion[] = [];
    completedLessonIds.forEach(lessonId => {
      const lessonData = generatedLessonModules[lessonId];
      if (lessonData) {
        lessonData.pages.forEach((page, pageIndex) => {
          if (interactiveQuestionTypes.includes(page.type)) {
            questions.push({
              ...(page as Extract<LessonPage, { type: 'fill-blank' | 'sort' | 'multiple-choice' | 'true-false' }>),
              lessonId: lessonId,
              pageIndex: pageIndex,
              uniqueId: `${lessonId}_p${pageIndex}`,
              xp: (lessonData as any).xp / lessonData.pages.filter(p => interactiveQuestionTypes.includes(p.type)).length || 5
            });
          }
        });
      }
    });
    
    setAllReviewableQuestions(questions);
    if (questions.length === 0) {
         setSessionState('no_reviewable_questions');
    } else {
        setSessionState('idle');
    }
  }, [lessonsStatus]);


  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const startReviewSession = () => {
    if (allReviewableQuestions.length === 0) {
      setSessionState('no_reviewable_questions');
      return;
    }
    setSessionState('loading_questions');
    const shuffledQuestions = shuffleArray(allReviewableQuestions);
    setCurrentQuestionPool(shuffledQuestions);
    setQuestionRepetitionMap(new Map());
    setSessionStreak(0);
    setMaxSessionStreak(0); 
    setCurrentQuestion(null);
    setIsAnswerChecked(false);
    setIsCurrentAnswerCorrect(null);
    setResultPopup(null);
    setShowQuitReviewPopup(false);
    
    setTimeout(() => {
      loadNextQuestion(shuffledQuestions, new Map());
      setSessionState('active');
    }, 100); 
  };
  
  const loadNextQuestion = (pool?: ReviewQuestion[], reps?: Map<string, number>) => {
    const currentPool = pool || currentQuestionPool;
    const currentReps = reps || questionRepetitionMap;

    let nextQ: ReviewQuestion | null = null;
    let availableForSelection = currentPool.filter(q => (currentReps.get(q.uniqueId) || 0) < MAX_REPETITIONS_PER_QUESTION);
    
    if (availableForSelection.length > 0) {
        availableForSelection.sort((a, b) => (currentReps.get(a.uniqueId) || 0) - (currentReps.get(b.uniqueId) || 0));
        nextQ = availableForSelection[0];
    }

    if (nextQ) {
      setCurrentQuestion(nextQ);
      setCurrentQuestionAnswer(null);
      setIsAnswerChecked(false);
      setIsCurrentAnswerCorrect(null);
      setQuestionRepetitionMap(prevMap => {
        const newMap = new Map(prevMap);
        newMap.set(nextQ!.uniqueId, (newMap.get(nextQ!.uniqueId) || 0) + 1);
        return newMap;
      });
    } else {
      setSessionState('all_questions_exhausted');
    }
  };

  const handleAnswerChange = (answer: any) => {
    if (!isAnswerChecked) {
      setCurrentQuestionAnswer(answer);
    }
  };

  const checkCurrentAnswer = useCallback(() => {
    if (!currentQuestion) return false;
    let isCorrect = false;
    switch (currentQuestion.type) {
      case 'fill-blank':
        isCorrect = currentQuestionAnswer === (currentQuestion as ReviewFillBlankQuestion).correctOptionId;
        break;
      case 'sort':
        const userAnswerSort = currentQuestionAnswer as string[];
        const correctOrderSort = (currentQuestion as ReviewSortQuestion).correctOrderIds;
        if (Array.isArray(userAnswerSort) && correctOrderSort) {
          if (Array.isArray(correctOrderSort[0])) {
            const possibleOrders = correctOrderSort as string[][];
            isCorrect = possibleOrders.some(order => 
              userAnswerSort.length === order.length && userAnswerSort.every((item, index) => item === order[index])
            );
          } else {
            const singleOrder = correctOrderSort as string[];
            if (userAnswerSort.length === singleOrder.length) {
              isCorrect = userAnswerSort.every((item, index) => item === singleOrder[index]);
            }
          }
        }
        break;
      case 'multiple-choice':
        isCorrect = currentQuestionAnswer === (currentQuestion as ReviewMultipleChoiceQuestion).correctOptionId;
        break;
      case 'true-false':
        isCorrect = currentQuestionAnswer === (currentQuestion as ReviewTrueFalseQuestion).correctAnswer;
        break;
      default:
        isCorrect = true; 
    }
    return isCorrect;
  }, [currentQuestion, currentQuestionAnswer]);

  const handleCheckOrContinue = () => {
    if (resultPopup?.isOpen) return;

    if (isAnswerChecked) { 
      setResultPopup(null);
      loadNextQuestion();
    } else { 
      if (!currentQuestion) return;
      const isCorrect = checkCurrentAnswer();
      setIsCurrentAnswerCorrect(isCorrect);
      setIsAnswerChecked(true);

      if (isCorrect) {
        if (areSoundEffectsEnabled) playSound(correctSound);
        setSessionStreak(prev => {
          const newStreak = prev + 1;
          setMaxSessionStreak(currentMax => Math.max(currentMax, newStreak));
          if (newStreak > persistedReviewStreak) {
            setPersistedReviewStreak(newStreak); 
          }
          return newStreak;
        });
        setResultPopup({ isOpen: true, type: 'correct', title: 'Chính xác!', message: 'Tuyệt vời!' });
      } else {
        if (areSoundEffectsEnabled) playSound(incorrectSound);
        setSessionStreak(0); 
        setResultPopup({ isOpen: true, type: 'incorrect', title: 'Chưa đúng!', message: (currentQuestion as any).hint || 'Cố gắng hơn nhé!' });
      }
    }
  };
  
  const handleAttemptQuitReview = () => {
    setShowQuitReviewPopup(true);
  };

  const handleQuitReviewConfirmed = () => {
    setShowQuitReviewPopup(false);
    onNavigate('learning'); 
  };
  
  const handleBackToMainPageFromCompletion = () => {
    onNavigate('learning'); 
  };

  const pageMotionProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
  };

  // This is the INTERNAL fixed header for the review session
  const renderActiveSessionHeader = () => (
    <header className="fixed top-[52px] left-0 right-0 z-20 flex items-center justify-between p-3 bg-white shadow-sm h-16 shrink-0"> {/* Positioned below MainHeader */}
      <button onClick={handleAttemptQuitReview} className="p-2 text-gray-600 hover:text-gray-800" aria-label="Thoát ôn tập">
        <ArrowLeftIcon className="w-6 h-6" />
      </button>
      <h2 className="text-lg font-semibold text-gray-800 text-center truncate px-2 flex-1">
        Ôn tập
      </h2>
      <div className={`flex items-center space-x-1 text-orange-500 ${sessionState === 'active' ? 'opacity-100' : 'opacity-0'}`}>
        <FlameIconSolid className="w-5 h-5" />
        <span className="font-bold text-sm">{sessionStreak}</span>
      </div>
    </header>
  );

  const renderQuestionContent = () => {
    if (!currentQuestion) return <p className="text-gray-500">Đang tải câu hỏi...</p>;
    const questionKey = currentQuestion.uniqueId;

    switch (currentQuestion.type) {
      case 'fill-blank':
        return <FillBlankType key={questionKey} pageData={currentQuestion} categoryDetails={categoryDetails} selectedOptionId={currentQuestionAnswer} onOptionSelect={handleAnswerChange} isAnswerChecked={isAnswerChecked} isCorrect={isCurrentAnswerCorrect} />;
      case 'sort':
        const currentOrderIds = currentQuestionAnswer as string[] || [];
        const currentOrderItems = currentOrderIds
            .map(id => (currentQuestion as ReviewSortQuestion).words.find(w => w.id === id))
            .filter((item): item is SortWordItem => !!item);
        return <SortType key={questionKey} pageData={currentQuestion} categoryDetails={categoryDetails} currentOrder={currentOrderItems} onWordMove={(wordId, action) => {
            let newOrderIds: string[];
            const currentSelectedIds = (currentQuestionAnswer as string[] || []);
            if (action === 'select') newOrderIds = [...currentSelectedIds, wordId];
            else if (action === 'remove') newOrderIds = currentSelectedIds.filter(id => id !== wordId);
            else newOrderIds = [];
            handleAnswerChange(newOrderIds);
        }} isAnswerChecked={isAnswerChecked} isCorrect={isCurrentAnswerCorrect} />;
      case 'multiple-choice':
        return <MultipleChoiceType key={questionKey} pageData={currentQuestion} categoryDetails={categoryDetails} selectedOptionId={currentQuestionAnswer} onOptionSelect={handleAnswerChange} isAnswerChecked={isAnswerChecked} isCorrect={isCurrentAnswerCorrect} />;
      case 'true-false':
        return <TrueFalseType key={questionKey} pageData={currentQuestion} categoryDetails={categoryDetails} selectedAnswer={currentQuestionAnswer} onAnswerSelect={handleAnswerChange} isAnswerChecked={isAnswerChecked} isCorrect={isCurrentAnswerCorrect} />;
      default:
        const exhaustiveCheck: never = currentQuestion;
        return <p>Loại câu hỏi không hỗ trợ ôn tập.</p>;
    }
  };

  let actionButtonText = "KIỂM TRA";
  let actionButtonDisabled = false;
   if (isAnswerChecked) {
    actionButtonText = "TIẾP TỤC";
  } else if (currentQuestion) {
    if (currentQuestion.type === 'fill-blank' || currentQuestion.type === 'multiple-choice' || currentQuestion.type === 'true-false') {
      actionButtonDisabled = currentQuestionAnswer === null || currentQuestionAnswer === undefined;
    } else if (currentQuestion.type === 'sort') {
      actionButtonDisabled = !Array.isArray(currentQuestionAnswer) || currentQuestionAnswer.length === 0;
    }
  }

  if (sessionState === 'idle' || sessionState === 'no_reviewable_questions') {
    return (
      <motion.div 
        {...pageMotionProps}
        className="flex flex-col h-full bg-gray-100"
        style={{ paddingTop: '52px', paddingBottom: '64px' }} // Account for external Header & Footer
      >
        <main className="flex-grow overflow-hidden flex flex-col items-center justify-center text-center p-6"> {/* pt-0 removed, p-6 for internal spacing */}
            {sessionState === 'no_reviewable_questions' && (
              <>
                <ClipboardListIcon className="w-16 h-16 text-gray-400 mb-4" />
                <p className="text-gray-600 text-lg">Hãy học các bài ở trang chính trước đã em nhé!</p>
                <p className="text-gray-500 text-sm mt-1"></p>
                <button
                  onClick={() => onNavigate('learning')}
                  className={`mt-6 py-2 px-6 rounded-lg text-white font-semibold ${categoryDetails.colors.progressBarFill} hover:opacity-90`}
                >
                  Về Trang Chính
                </button>
              </>
            )}
            {sessionState === 'idle' && allReviewableQuestions.length > 0 && (
              <>
                <h1 className="text-3xl font-bold text-gray-800 mb-3">Bắt đầu ôn tập</h1>
                <div className="flex items-center text-orange-500 mb-6">
                  <FlameIconSolid className="w-6 h-6 mr-1.5" />
                  <p className="text-lg">Chuỗi trả lời đúng cao nhất: <span className="font-bold">{persistedReviewStreak}</span></p>
                </div>
                <button
                  onClick={startReviewSession}
                  className={`py-3 px-8 rounded-xl text-white font-semibold text-lg shadow-md
                              ${categoryDetails.colors.progressBarFill} hover:opacity-90 transition-opacity`}
                >
                  BẮT ĐẦU ÔN TẬP
                </button>
              </>
            )}
        </main>
      </motion.div>
    );
  }

  // Determine main content bottom padding for active session
  // Active session has its own footer button, which must be above the global MainBottomNavigation
  let mainContentPaddingBottomClass = REVIEW_ACTION_FOOTER_HEIGHT_CLASS; // For active state
  if (sessionState === 'all_questions_exhausted') {
      mainContentPaddingBottomClass = "pb-4"; // Standard padding when only MainBottomNav is present
  } else if (sessionState === 'loading_questions') {
      mainContentPaddingBottomClass = "pb-4";
  }

  return (
    <motion.div 
      {...pageMotionProps}
      className="flex flex-col h-full bg-gray-100"
      style={{ paddingTop: '52px', paddingBottom: '64px' }} // Account for external Header & Footer
    >
      {renderActiveSessionHeader()} {/* This is the INTERNAL header for review session */}
      
      {/* The main content area needs to account for the INTERNAL fixed header's height (pt-16) 
          AND the paddingBottom for its own action footer or the global bottom nav */}
      <main className={`flex-grow overflow-y-auto pt-16 ${mainContentPaddingBottomClass} flex flex-col`}>
        {sessionState === 'loading_questions' && <LoadingOverlay />}
        
        {sessionState === 'active' && currentQuestion && (
          <div className="flex-grow flex flex-col justify-center items-center p-1 w-full max-w-2xl mx-auto">
              <div className="w-full h-full bg-white shadow rounded-lg flex flex-col justify-center">
                  {renderQuestionContent()}
              </div>
          </div>
        )}
        
        {sessionState === 'all_questions_exhausted' && (
           <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
            <ClipboardListIcon className="w-16 h-16 text-green-500 mb-4" />
            <p className="text-green-600 text-xl font-semibold mb-2">Bạn giỏi quá!</p>
            <p className="text-gray-700 mb-1">Chuỗi đúng kỳ này: {maxSessionStreak}</p>
            <p className="text-gray-700 mb-6">Hãy học thêm các bài để chúng mình cùng tiếp tục ôn tập nhé.</p>
            <div className="space-y-3 w-full max-w-xs">
                <button
                    onClick={startReviewSession}
                    className={`w-full py-3 px-6 rounded-xl text-white font-semibold ${categoryDetails.colors.progressBarFill} hover:opacity-90`}
                >
                    Ôn tập lại
                </button>
                <button
                    onClick={handleBackToMainPageFromCompletion}
                    className="w-full py-3 px-6 rounded-xl text-gray-700 bg-gray-200 hover:bg-gray-300 font-semibold"
                >
                    Về Trang Chính
                </button>
            </div>
          </div>
        )}
      </main>
      
      {sessionState === 'active' && currentQuestion && (
        // This footer is for the ReviewPage's own action button during an active session
        // It needs to be above the MainBottomNavigation (64px height)
        <footer className="fixed left-0 right-0 p-3 bg-white border-t border-gray-200 z-20 bottom-16"> {/* bottom-16 (64px) */}
            <button
            onClick={handleCheckOrContinue}
            disabled={actionButtonDisabled || resultPopup?.isOpen || showQuitReviewPopup}
            className={`w-full py-3 px-6 rounded-xl text-white font-semibold text-base transition-colors duration-200
                        ${(actionButtonDisabled || resultPopup?.isOpen || showQuitReviewPopup) ? 'bg-gray-400 cursor-not-allowed' : `${categoryDetails.colors.progressBarFill} hover:opacity-90`}`}
            >
            {actionButtonText}
            </button>
        </footer>
      )}

      {resultPopup?.isOpen && (
        <ResultPopup
          isOpen={resultPopup.isOpen}
          onClose={() => {
            setResultPopup(null);
            if (isAnswerChecked) setTimeout(() => loadNextQuestion(), 50); 
          }}
          type={resultPopup.type}
          title={resultPopup.title}
          message={resultPopup.message}
          actionButtonText="TIẾP TỤC"
          onAction={() => {
            setResultPopup(null);
            loadNextQuestion();
          }}
          showOverlay={false}
        />
      )}
      {showQuitReviewPopup && (
        <ReviewQuitConfirmationPopup
            isOpen={showQuitReviewPopup}
            onClose={() => setShowQuitReviewPopup(false)}
            onConfirmQuit={handleQuitReviewConfirmed}
            currentStreak={maxSessionStreak}
            categoryDetails={categoryDetails}
        />
      )}
    </motion.div>
  );
};

export default ReviewPage;
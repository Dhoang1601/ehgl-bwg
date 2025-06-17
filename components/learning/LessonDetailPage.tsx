
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { CategoryDetails } from '../../types';
import { ArrowLeftIcon } from '../icons/ProfileIcons';
import HeartIcon from '../icons/HeartIcon';
import ResultPopup from './ResultPopup';
import LessonCompleteScreen from './LessonCompleteScreen';
import LoadingOverlay from '../LoadingOverlay';
import { loadSound, playSound } from '../../src/utils/audioUtils'; 
import QuitConfirmationPopup from './QuitConfirmationPopup';
import { useLessonData, interactiveQuestionTypes } from '../../hooks/useLessonData'; // Import hook and types

// Question Type Components
import ReadingType from './questiontypes/ReadingType';
import FillBlankType from './questiontypes/FillBlankType';
import SortType from './questiontypes/SortType';
import MultipleChoiceType from './questiontypes/MultipleChoiceType';
import TrueFalseType from './questiontypes/TrueFalseType';

// --- START: Lesson Page Data Structure Definitions (kept for type usage within this file) ---
export interface TextPageData { type: 'text'; content: string; }
export interface ImagePageData { type: 'image'; imageUrl: string; altText?: string; }
export interface HeadingPageData { type: 'heading'; content: string; }
export interface SubheadingPageData { type: 'subheading'; content: string; }

export interface ReadingPageData {
  type: 'reading';
  passage: string;
  durationSeconds?: number;
}

export interface FillBlankOption { id: string; text: string; }
export interface FillBlankPageData {
  type: 'fill-blank';
  questionTextBeforeBlank: string;
  questionTextAfterBlank?: string;
  options: FillBlankOption[];
  correctOptionId: string;
  hint?: string;
}

export interface SortWordItem { id: string; text: string; }
export interface SortPageData {
  type: 'sort';
  prompt?: string;
  words: SortWordItem[];
  correctOrderIds: string[] | string[][]; 
  hint?: string;
}

export interface MultipleChoiceOption { id: string; text: string; }
export interface MultipleChoicePageData {
  type: 'multiple-choice';
  questionText: string;
  options: MultipleChoiceOption[];
  correctOptionId: string;
  hint?: string;
}

export interface TrueFalsePageData {
  type: 'true-false';
  questionText: string;
  correctAnswer: boolean;
  hint?: string;
}

export type LessonPage =
  | TextPageData | ImagePageData | HeadingPageData | SubheadingPageData
  | ReadingPageData | FillBlankPageData | SortPageData | MultipleChoicePageData | TrueFalsePageData;

export interface LessonContentData {
  title: string;
  pages: LessonPage[];
  xp: number;
  nextLessonId?: string;
}
// --- END: Lesson Page Data Structure Definitions ---

type LessonOutcome = 'completed' | 'failed' | 'inprogress';

interface LessonDetailPageProps {
  lessonId: string;
  lessonTitle: string; // Used for the header, distinct from lessonData.title for content
  initialLives: number;
  initialQuestionIndex: number;
  selectedCategory: string; 
  categoryDetails: CategoryDetails;
  onBackToMain: () => void; 
  onCompleteLesson: (lessonId: string, xpGained: number, nextLessonId?: string) => void;
  updateLessonProgressInApp: (lives: number, currentQuestionIndex: number) => void;
  isExiting?: boolean;
  areSoundEffectsEnabled: boolean; // Added prop
}

const DEFAULT_READING_TIME = 15;
const POST_COMPLETION_LOADER_DURATION = 700; // ms

const LessonDetailPage: React.FC<LessonDetailPageProps> = ({
  lessonId,
  lessonTitle, // Prop for header display
  initialLives,
  initialQuestionIndex,
  selectedCategory, 
  categoryDetails,
  onBackToMain,
  onCompleteLesson,
  updateLessonProgressInApp,
  isExiting = false,
  areSoundEffectsEnabled, // Destructure prop
}) => {
  const { lessonData, isLoading, error, totalInteractiveQuestions } = useLessonData(lessonId);
  const [pageVisible, setPageVisible] = useState(false);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(initialQuestionIndex);
  const [lives, setLives] = useState(initialLives);
  const [userAnswers, setUserAnswers] = useState<Record<string, any>>({});
  
  const [resultPopupState, setResultPopupState] = useState<{ isOpen: boolean; type: 'correct' | 'incorrect'; title: string; message: string; actionButtonText?: string; onAction?: () => void; showOverlay?: boolean; } | null>(null);
  
  const [lessonOutcome, setLessonOutcome] = useState<LessonOutcome>('inprogress');
  const [showLessonCompleteScreen, setShowLessonCompleteScreen] = useState(false);
  const [showPostCompletionLoader, setShowPostCompletionLoader] = useState(false);
  
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCurrentAnswerCorrect, setIsCurrentAnswerCorrect] = useState<boolean | null>(null);

  const [readingTimer, setReadingTimer] = useState(DEFAULT_READING_TIME);
  const [isReadingTimerActive, setIsReadingTimerActive] = useState(false);
  const timerIntervalRef = useRef<number | null>(null);

  const [correctSound, setCorrectSound] = useState<AudioBuffer | null>(null);
  const [incorrectSound, setIncorrectSound] = useState<AudioBuffer | null>(null);

  const [showQuitConfirmation, setShowQuitConfirmation] = useState(false); 

  useEffect(() => {
    let isMounted = true;
    const initSounds = async () => {
      const loadedCorrectSound = await loadSound('sounds/correct.mp3');
      if (isMounted) setCorrectSound(loadedCorrectSound);
      const loadedIncorrectSound = await loadSound('sounds/incorrect.mp3');
      if (isMounted) setIncorrectSound(loadedIncorrectSound);
    };
    initSounds();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (isExiting || showLessonCompleteScreen) {
      setPageVisible(false); 
    } else {
      const timer = requestAnimationFrame(() => setPageVisible(true));
      return () => cancelAnimationFrame(timer);
    }
  }, [isExiting, showLessonCompleteScreen]); 

  useEffect(() => {
    if (!showLessonCompleteScreen) { 
      updateLessonProgressInApp(lives, currentQuestionIndex);
    }
  }, [lives, currentQuestionIndex, updateLessonProgressInApp, showLessonCompleteScreen]);

  useEffect(() => {
    // Reset core lesson state when lessonId changes or data loads/reloads
    setLessonOutcome('inprogress');
    setShowLessonCompleteScreen(false);
    setCorrectAnswersCount(0);
    setCurrentQuestionIndex(initialQuestionIndex); // Reset to initial index for the new/reloaded lesson
    setLives(initialLives); // Reset lives for the new/reloaded lesson
    setUserAnswers({}); // Clear previous answers
    resetQuestionState(true); // Reset detailed question state

    if (!isLoading && lessonData) {
      if (initialLives <= 0 && initialQuestionIndex < lessonData.pages.length) {
        setLessonOutcome('failed');
        setShowLessonCompleteScreen(true);
      } else if (initialQuestionIndex >= lessonData.pages.length && initialQuestionIndex > 0 && lessonData.pages.length > 0) {
        setLessonOutcome('completed');
        setShowLessonCompleteScreen(true);
      } else {
        setLessonOutcome('inprogress');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessonId, lessonData, isLoading, error, initialLives, initialQuestionIndex]);


  useEffect(() => {
    if (lives <= 0 && lessonOutcome === 'inprogress' && !isLoading && lessonData && currentQuestionIndex < lessonData.pages.length) {
      setLessonOutcome('failed');
      setShowLessonCompleteScreen(true);
    }
  }, [lives, lessonOutcome, isLoading, lessonData, currentQuestionIndex]);


  const currentPageData = lessonData?.pages[currentQuestionIndex];

  useEffect(() => {
    if (currentPageData?.type === 'reading' && !isAnswerChecked && !resultPopupState?.isOpen && lessonOutcome === 'inprogress') {
      setIsReadingTimerActive(true);
      setReadingTimer(currentPageData.durationSeconds || DEFAULT_READING_TIME);
      
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);

      timerIntervalRef.current = window.setInterval(() => {
        setReadingTimer(prev => {
          if (prev <= 1) {
            if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
            setIsReadingTimerActive(false);
            setIsAnswerChecked(true); 
            setIsCurrentAnswerCorrect(true); 
            
            if (areSoundEffectsEnabled) playSound(correctSound);
            setResultPopupState({
              isOpen: true,
              type: 'correct',
              title: 'Đã đọc xong!',
              message: 'Bạn đã hoàn thành phần đọc. Hãy tiếp tục nhé.',
              actionButtonText: 'TIẾP TỤC',
              showOverlay: false, 
              onAction: () => { 
                setResultPopupState(null);
                if (lessonData) {
                  if (currentQuestionIndex < lessonData.pages.length - 1) {
                    setCurrentQuestionIndex(prevIdx => prevIdx + 1);
                    resetQuestionState();
                  } else { 
                    setLessonOutcome('completed');
                    setShowLessonCompleteScreen(true);
                  }
                }
              }
            });
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      setIsReadingTimerActive(false);
    }
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [currentPageData, currentQuestionIndex, isAnswerChecked, resultPopupState?.isOpen, lessonData, correctSound, lessonOutcome, areSoundEffectsEnabled]);


  const handleAnswerChange = (questionIdOrIndex: string | number, answer: any) => {
    setUserAnswers(prev => ({ ...prev, [questionIdOrIndex.toString()]: answer }));
  };
  
  const resetQuestionState = (clearCurrentAnswer: boolean = true) => {
    setIsAnswerChecked(false);
    setIsCurrentAnswerCorrect(null);
    if (clearCurrentAnswer) {
      setUserAnswers(prev => {
        const newAnswers = {...prev};
        // The key is currentQuestionIndex, which changes for a new question.
        // If we want to clear the specific answer for the *current* question index before advancing:
        delete newAnswers[currentQuestionIndex.toString()]; 
        return newAnswers;
      });
    }
  };

  const checkAnswer = useCallback(() => {
    if (!currentPageData || !interactiveQuestionTypes.includes(currentPageData.type)) {
      return true; 
    }

    const userAnswer = userAnswers[currentQuestionIndex.toString()]; 
    let correct = false;

    switch (currentPageData.type) {
      case 'fill-blank':
        correct = userAnswer === currentPageData.correctOptionId;
        break;
      case 'sort':
        if (Array.isArray(userAnswer) && currentPageData.correctOrderIds) {
          if (Array.isArray(currentPageData.correctOrderIds[0])) { 
            const possibleOrders = currentPageData.correctOrderIds as string[][];
            correct = possibleOrders.some(order =>
              userAnswer.length === order.length && userAnswer.every((item, index) => item === order[index])
            );
          } else { 
            const singleOrder = currentPageData.correctOrderIds as string[];
            if (userAnswer.length === singleOrder.length) {
              correct = userAnswer.every((item, index) => item === singleOrder[index]);
            }
          }
        }
        break;
      case 'multiple-choice':
        correct = userAnswer === currentPageData.correctOptionId;
        break;
      case 'true-false':
        correct = userAnswer === currentPageData.correctAnswer;
        break;
    }
    return correct;
  }, [currentPageData, userAnswers, currentQuestionIndex]);

  const handleActionClick = useCallback(() => {
    if (!lessonData || !currentPageData || lessonOutcome !== 'inprogress') return;

    if (resultPopupState?.isOpen || showQuitConfirmation) return; 

    if (isAnswerChecked) { 
      if (currentQuestionIndex < lessonData.pages.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        resetQuestionState();
      } else { 
        setLessonOutcome('completed');
        setShowLessonCompleteScreen(true);
      }
    } else { 
      const currentType = currentPageData.type;
      
      if (!interactiveQuestionTypes.includes(currentType)) { 
          if (currentQuestionIndex < lessonData.pages.length - 1) {
              setCurrentQuestionIndex(prev => prev + 1);
              resetQuestionState();
          } else {
              setLessonOutcome('completed');
              setShowLessonCompleteScreen(true);
          }
          return;
      }

      const isCorrect = checkAnswer();
      setIsCurrentAnswerCorrect(isCorrect);
      setIsAnswerChecked(true); 

      if (isCorrect) {
        if (areSoundEffectsEnabled) playSound(correctSound);
        if (interactiveQuestionTypes.includes(currentPageData.type)) { 
            setCorrectAnswersCount(prev => prev + 1);
        }
        setResultPopupState({
          isOpen: true,
          type: 'correct',
          title: 'Chính xác!',
          message: (currentPageData as any).explanation || 'Tuyệt vời! Bạn đã trả lời đúng.',
          actionButtonText: 'TIẾP TỤC',
          showOverlay: false, 
          onAction: () => { 
             setResultPopupState(null); 
             if (currentQuestionIndex < lessonData.pages.length - 1) {
                setCurrentQuestionIndex(prev => prev + 1);
                resetQuestionState();
              } else { 
                setLessonOutcome('completed');
                setShowLessonCompleteScreen(true);
              }
          }
        });
      } else {
        if (areSoundEffectsEnabled) playSound(incorrectSound);
        const newLives = lives - 1;
        setLives(newLives);
        if (newLives <= 0) {
          setLessonOutcome('failed');
          setShowLessonCompleteScreen(true); 
        } else {
          setResultPopupState({
            isOpen: true,
            type: 'incorrect',
            title: 'Chưa đúng rồi!',
            message: (currentPageData as any).hint || 'Hãy thử lại nhé.',
            actionButtonText: 'THỬ LẠI',
            showOverlay: false, 
            onAction: () => {
                resetQuestionState(false); 
                setResultPopupState(null);
            }
          });
        }
      }
    }
  }, [lessonData, currentPageData, resultPopupState, lessonOutcome, isAnswerChecked, checkAnswer, currentQuestionIndex, lives, setLives, correctSound, incorrectSound, showQuitConfirmation, areSoundEffectsEnabled]);
  
  const handleContinueFromCompletionScreen = useCallback(() => {
    if (!lessonData) return;
    setShowPostCompletionLoader(true);
    setTimeout(() => {
      setShowPostCompletionLoader(false); 
      if (lessonOutcome === 'failed') {
        onBackToMain(); 
      } else if (lessonOutcome === 'completed') {
        onCompleteLesson(lessonId, lessonData.xp, lessonData.nextLessonId);
        onBackToMain(); 
      }
    }, POST_COMPLETION_LOADER_DURATION);
  }, [lessonData, lessonId, onCompleteLesson, onBackToMain, lessonOutcome]);

  
  const handleAttemptQuit = () => {
    if (lessonOutcome === 'inprogress' && !showLessonCompleteScreen) {
        setShowQuitConfirmation(true);
    } else {
        onBackToMain(); 
    }
  };

  const handleConfirmQuit = () => {
    setShowQuitConfirmation(false);
    onBackToMain(); 
  };


  const progressPercentage = lessonData ? ((currentQuestionIndex) / lessonData.pages.length) * 100 : 0;
  
  let actionButtonText = "TIẾP TỤC";
  let actionButtonDisabled = false;
  let actionButtonColorClass = categoryDetails.colors.progressBarFill;

  if (lessonOutcome !== 'inprogress' || showLessonCompleteScreen || resultPopupState?.isOpen || showQuitConfirmation) { 
    actionButtonDisabled = true; 
    actionButtonColorClass = 'bg-gray-400';
  } else if (currentPageData?.type === 'reading') {
    if (isReadingTimerActive) {
      actionButtonText = `Hãy dành ra ${readingTimer} giây để đọc và ghi nhớ`;
      actionButtonDisabled = true;
      actionButtonColorClass = 'bg-gray-400';
    } else if (!isAnswerChecked) { 
       actionButtonText = "TIẾP TỤC"; 
       actionButtonDisabled = true; 
       actionButtonColorClass = 'bg-gray-400';
    } else { 
        actionButtonText = "TIẾP TỤC";
    }
  } else if (!isAnswerChecked) {
    const typeForButtonLogic = currentPageData?.type;
    if (typeForButtonLogic && interactiveQuestionTypes.includes(typeForButtonLogic)) {
        actionButtonText = "KIỂM TRA";
        const userAnswerForCurrent = userAnswers[currentQuestionIndex.toString()];
        if (typeForButtonLogic === 'fill-blank' || typeForButtonLogic === 'multiple-choice' || typeForButtonLogic === 'true-false') {
            actionButtonDisabled = userAnswerForCurrent === undefined || userAnswerForCurrent === null;
        } else if (typeForButtonLogic === 'sort') {
            actionButtonDisabled = !Array.isArray(userAnswerForCurrent) || userAnswerForCurrent.length === 0;
        }
    } else { 
        actionButtonText = "TIẾP TỤC";
        actionButtonDisabled = false; 
    }
    if (actionButtonDisabled) {
        actionButtonColorClass = 'bg-gray-400';
    }
  } else { 
      actionButtonText = "TIẾP TỤC";
  }

  // --- Render Logic ---
  if (isLoading) return ( <div className="flex items-center justify-center min-h-screen bg-white"><LoadingOverlay/></div>);
  if (error) return ( <div className="flex flex-col items-center justify-center min-h-screen text-red-500 p-4 text-center bg-white">
      <p className="font-semibold text-lg mb-2">Lỗi tải bài học</p>
      <p className="text-sm">{error}</p>
      <button 
        onClick={onBackToMain} 
        className={`mt-6 py-2 px-4 rounded-lg text-white font-semibold ${categoryDetails.colors.progressBarFill}`}
      >
        Quay lại
      </button>
    </div>);
  if (!lessonData && !showLessonCompleteScreen) return ( <div className="flex items-center justify-center min-h-screen text-gray-600 bg-white">Không tìm thấy dữ liệu bài học.</div>);

  if (showPostCompletionLoader) {
    return <LoadingOverlay />;
  }

  if (showLessonCompleteScreen && lessonData) {
    const displayXp = lessonOutcome === 'failed' ? 0 : lessonData.xp;
    return (
      <LessonCompleteScreen
        xpReward={displayXp}
        remainingLives={lives} 
        categoryDetails={categoryDetails}
        onContinue={handleContinueFromCompletionScreen}
        isLessonSuccessfullyCompleted={lessonOutcome === 'completed'}
        isExiting={isExiting} 
      />
    );
  }
  
  if (!lessonData || lessonOutcome !== 'inprogress') { 
    return <div className="flex items-center justify-center min-h-screen bg-white">Đang xử lý trạng thái bài học...</div>;
  }


  const renderPageContent = () => {
    if (!currentPageData) return <p className="text-gray-600 p-4">Đang tải nội dung trang...</p>;
    const questionKey = `${lessonId}-q${currentQuestionIndex}`;
    switch (currentPageData.type) {
      case 'text': return <p key={questionKey} className="p-4 text-gray-700 leading-relaxed text-base whitespace-pre-line">{currentPageData.content}</p>;
      case 'image': return <img key={questionKey} src={currentPageData.imageUrl} alt={currentPageData.altText || 'Hình ảnh bài học'} className="max-w-full h-auto rounded-md my-4 shadow" />;
      case 'heading': return <h1 key={questionKey} className="p-4 text-2xl font-bold text-gray-800 text-center">{currentPageData.content}</h1>;
      case 'subheading': return <h2 key={questionKey} className="p-4 text-xl font-semibold text-gray-700 text-center">{currentPageData.content}</h2>;
      case 'reading':
        return <ReadingType 
                    key={questionKey} 
                    pageData={currentPageData} 
                    categoryDetails={categoryDetails} 
                />;
      case 'fill-blank':
        return <FillBlankType 
                    key={questionKey}
                    pageData={currentPageData} 
                    categoryDetails={categoryDetails}
                    selectedOptionId={userAnswers[currentQuestionIndex.toString()] || null} 
                    onOptionSelect={(optionId) => handleAnswerChange(currentQuestionIndex.toString(), optionId)}
                    isAnswerChecked={isAnswerChecked}
                    isCorrect={isCurrentAnswerCorrect}
                />;
      case 'sort':
        const currentOrderIds = userAnswers[currentQuestionIndex.toString()] as string[] || [];
        const currentOrderItems = currentOrderIds
            .map(id => (currentPageData as SortPageData).words.find(w => w.id === id))
            .filter((item): item is SortWordItem => !!item);

        return <SortType
                    key={questionKey}
                    pageData={currentPageData as SortPageData} 
                    categoryDetails={categoryDetails}
                    currentOrder={currentOrderItems}
                    onWordMove={(wordId, action) => {
                        let newOrderIds: string[];
                        const currentSelectedIds = (userAnswers[currentQuestionIndex.toString()] as string[] || []);
                        if (action === 'select') {
                            newOrderIds = [...currentSelectedIds, wordId];
                        } else if (action === 'remove') { 
                            newOrderIds = currentSelectedIds.filter(id => id !== wordId);
                        } else { 
                            newOrderIds = [];
                        }
                        handleAnswerChange(currentQuestionIndex.toString(), newOrderIds);
                    }}
                    isAnswerChecked={isAnswerChecked}
                    isCorrect={isCurrentAnswerCorrect}
                />;
      case 'multiple-choice':
        return <MultipleChoiceType 
                    key={questionKey}
                    pageData={currentPageData}
                    categoryDetails={categoryDetails}
                    selectedOptionId={userAnswers[currentQuestionIndex.toString()] || null}
                    onOptionSelect={(optionId) => handleAnswerChange(currentQuestionIndex.toString(), optionId)}
                    isAnswerChecked={isAnswerChecked}
                    isCorrect={isCurrentAnswerCorrect}
                />;
      case 'true-false':
        return <TrueFalseType
                    key={questionKey}
                    pageData={currentPageData}
                    categoryDetails={categoryDetails}
                    selectedAnswer={userAnswers[currentQuestionIndex.toString()] === undefined ? null : userAnswers[currentQuestionIndex.toString()]}
                    onAnswerSelect={(answer) => handleAnswerChange(currentQuestionIndex.toString(), answer)}
                    isAnswerChecked={isAnswerChecked}
                    isCorrect={isCurrentAnswerCorrect}
                />;
      default: 
        const exhaustiveCheck: never = currentPageData; 
        return <p key={questionKey} className="p-4">Loại nội dung không được hỗ trợ: {(exhaustiveCheck as any).type}</p>;
    }
  };
  
  return (
     <div className={`flex flex-col h-screen bg-gray-100 transition-opacity duration-300 ease-in-out ${(pageVisible && !isExiting) ? 'opacity-100' : 'opacity-0'}`}>
      <header className="flex items-center justify-between p-3 bg-white shadow-sm h-16 shrink-0">
        <button 
          onClick={handleAttemptQuit} 
          className="p-2 text-gray-600 hover:text-gray-800"
          aria-label="Thoát bài học"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <h2 className="text-lg font-semibold text-gray-800 text-center truncate px-2 flex-1">
          {lessonTitle} {/* Use prop lessonTitle for header */}
        </h2>
        <div className="flex items-center space-x-1.5 text-red-500">
          <HeartIcon className="w-5 h-5" />
          <span className="font-bold text-sm">{lives < 0 ? 0 : lives}</span>
        </div>
      </header>
      
      <div className="flex items-center px-3 py-1.5 bg-white border-b border-gray-200">
        <div className={`w-full h-1.5 rounded-full ${categoryDetails.colors.progressBarFill.replace('bg-','bg-opacity-30')}`}>
          <div
            className={`h-full rounded-full ${categoryDetails.colors.progressBarFill} transition-all duration-300 ease-linear`}
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <span className="ml-3 text-xs font-medium text-gray-500">{Math.min(currentQuestionIndex +1, lessonData.pages.length)}/{lessonData.pages.length}</span>
      </div>

      <main className="flex-grow overflow-y-auto p-1 bg-gray-100 flex flex-col items-stretch">
         <div className="flex-grow flex flex-col justify-center items-center w-full max-w-2xl mx-auto bg-white shadow rounded-lg mb-2">
            {renderPageContent()}
        </div>
      </main>

      <footer className="p-3 bg-white border-t border-gray-200 shrink-0">
        <button
          onClick={handleActionClick}
          disabled={actionButtonDisabled} 
          className={`w-full py-3 px-6 rounded-xl text-white font-semibold text-base transition-colors duration-200
                      ${(actionButtonDisabled) ? 'bg-gray-400 cursor-not-allowed' : `${actionButtonColorClass} hover:opacity-90`}`}
        >
          {actionButtonText}
        </button>
      </footer>

       {resultPopupState?.isOpen && (
          <ResultPopup 
            isOpen={resultPopupState.isOpen}
            onClose={() => {
                if (resultPopupState.type === 'incorrect') {
                    resetQuestionState(false); 
                }
                setResultPopupState(null);
            }}
            type={resultPopupState.type}
            title={resultPopupState.title} 
            message={resultPopupState.message}
            actionButtonText={resultPopupState.actionButtonText}
            onAction={resultPopupState.onAction}
            showOverlay={false} 
          />
        )}

      {showQuitConfirmation && (
        <QuitConfirmationPopup
          isOpen={showQuitConfirmation}
          onClose={() => setShowQuitConfirmation(false)}
          onConfirmQuit={handleConfirmQuit}
          categoryDetails={categoryDetails}
        />
      )}
    </div>
  );
};
export default LessonDetailPage;

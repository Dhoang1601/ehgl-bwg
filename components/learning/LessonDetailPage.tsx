

console.log("START PARSING: components/learning/LessonDetailPage.tsx"); // Diagnostic log

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { CategoryDetails } from '../../types';
import { ArrowLeftIcon } from '../icons/ProfileIcons';
import HeartIcon from '../icons/HeartIcon';
import ResultPopup from './ResultPopup';
// GameOverPopup import removed
import LessonCompleteScreen from './LessonCompleteScreen';
import LoadingOverlay from '../LoadingOverlay';
import { loadSound, playSound } from '../../src/utils/audioUtils'; 
import QuitConfirmationPopup from './QuitConfirmationPopup'; // Import the new popup

// Question Type Components
import ReadingType from './questiontypes/ReadingType';
import FillBlankType from './questiontypes/FillBlankType';
import SortType from './questiontypes/SortType';
import MultipleChoiceType from './questiontypes/MultipleChoiceType';
import TrueFalseType from './questiontypes/TrueFalseType';

// --- START: Lesson Page Data Structure Definitions ---
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
  correctOrderIds: string[] | string[][]; // Updated to allow array of arrays
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

// --- START: Static Lesson Imports ---
import xt_bm_1 from '../../data/lessons/xung-toi/baimodau_1.ts';
import xt_bm_2 from '../../data/lessons/xung-toi/baimodau_2.ts';
import xt_bm_3 from '../../data/lessons/xung-toi/baimodau_3.ts';
import xt_bm_4 from '../../data/lessons/xung-toi/baimodau_4.ts';
import xt_bm_5 from '../../data/lessons/xung-toi/baimodau_5.ts';
import xt_b1_1 from '../../data/lessons/xung-toi/bai1_1.ts';
import xt_b1_2 from '../../data/lessons/xung-toi/bai1_2.ts';
import xt_b1_3 from '../../data/lessons/xung-toi/bai1_3.ts';
import xt_b1_4 from '../../data/lessons/xung-toi/bai1_4.ts';
import xt_b1_5 from '../../data/lessons/xung-toi/bai1_5.ts';
import xt_b2_1 from '../../data/lessons/xung-toi/bai2_1.ts'; 
import xt_b2_2 from '../../data/lessons/xung-toi/bai2_2.ts'; 
import xt_b2_3 from '../../data/lessons/xung-toi/bai2_3.ts'; 
import xt_b2_4 from '../../data/lessons/xung-toi/bai2_4.ts'; 
import xt_b2_5 from '../../data/lessons/xung-toi/bai2_5.ts'; 

// Imports for Xưng Tội 2 (Bài 14)
import xt2_b14_1 from '../../data/lessons/xung-toi/bai14_1.ts';
import xt2_b14_2 from '../../data/lessons/xung-toi/bai14_2.ts';
import xt2_b14_3 from '../../data/lessons/xung-toi/bai14_3.ts';
import xt2_b14_4 from '../../data/lessons/xung-toi/bai14_4.ts';
import xt2_b14_5 from '../../data/lessons/xung-toi/bai14_5.ts';

// Imports for Xưng Tội 2 (Bài 15)
import xt2_b15_1 from '../../data/lessons/xung-toi/bai15_1.ts';
import xt2_b15_2 from '../../data/lessons/xung-toi/bai15_2.ts';
import xt2_b15_3 from '../../data/lessons/xung-toi/bai15_3.ts';
import xt2_b15_4 from '../../data/lessons/xung-toi/bai15_4.ts';
import xt2_b15_5 from '../../data/lessons/xung-toi/bai15_5.ts';
// TODO: Add imports for Xưng Tội 2, Bài 16 when available

import ts_bm_1 from '../../data/lessons/them-suc/baimodau_1.ts';
import sd_bm_1 from '../../data/lessons/song-dao/baimodau_1.ts';

const lessonModules: Record<string, LessonContentData> = {
  'xung-toi/baimodau_1': xt_bm_1,
  'xung-toi/baimodau_2': xt_bm_2,
  'xung-toi/baimodau_3': xt_bm_3,
  'xung-toi/baimodau_4': xt_bm_4,
  'xung-toi/baimodau_5': xt_bm_5,
  'xung-toi/bai1_1': xt_b1_1,
  'xung-toi/bai1_2': xt_b1_2,
  'xung-toi/bai1_3': xt_b1_3,
  'xung-toi/bai1_4': xt_b1_4,
  'xung-toi/bai1_5': xt_b1_5,
  'xung-toi/bai2_1': xt_b2_1, 
  'xung-toi/bai2_2': xt_b2_2, 
  'xung-toi/bai2_3': xt_b2_3, 
  'xung-toi/bai2_4': xt_b2_4, 
  'xung-toi/bai2_5': xt_b2_5, 

  // Mappings for Xưng Tội 2 (Bài 14)
  'xung-toi/bai14_1': xt2_b14_1,
  'xung-toi/bai14_2': xt2_b14_2,
  'xung-toi/bai14_3': xt2_b14_3,
  'xung-toi/bai14_4': xt2_b14_4,
  'xung-toi/bai14_5': xt2_b14_5,

  // Mappings for Xưng Tội 2 (Bài 15)
  'xung-toi/bai15_1': xt2_b15_1,
  'xung-toi/bai15_2': xt2_b15_2,
  'xung-toi/bai15_3': xt2_b15_3,
  'xung-toi/bai15_4': xt2_b15_4,
  'xung-toi/bai15_5': xt2_b15_5,
  // TODO: Add mappings for Xưng Tội 2, Bài 16 when available

  'them-suc/baimodau_1': ts_bm_1,
  'song-dao/baimodau_1': sd_bm_1,
  // TODO: Add other lesson imports/mappings here as they are created
};
// --- END: Static Lesson Imports ---

const interactiveQuestionTypes: LessonPage['type'][] = ['fill-blank', 'sort', 'multiple-choice', 'true-false'];

type LessonOutcome = 'completed' | 'failed' | 'inprogress';

interface LessonDetailPageProps {
  lessonId: string;
  lessonTitle: string;
  initialLives: number;
  initialQuestionIndex: number;
  selectedCategory: string;
  categoryDetails: CategoryDetails;
  onBackToMain: () => void; 
  onCompleteLesson: (lessonId: string, xpGained: number, nextLessonId?: string) => void;
  updateLessonProgressInApp: (lives: number, currentQuestionIndex: number) => void;
  isExiting?: boolean;
}

const getLessonFileDetails = (lessonId: string, categoryKey: string): { categorySlugForPath: string, fileName: string } | null => {
  const parts = lessonId.split('-'); // e.g., "xungtoi-unit1-l1" OR "xungtoi2-unit14-l1"
  if (parts.length < 3) {
    console.error(`Invalid lessonId format: ${lessonId}`);
    return null;
  }

  let categorySlugForPath: string;
  switch (categoryKey.toLowerCase()) {
    case 'xungtoi': categorySlugForPath = 'xung-toi'; break;
    case 'themsuc': categorySlugForPath = 'them-suc'; break;
    case 'songdao': categorySlugForPath = 'song-dao'; break;
    default:
      console.error(`Unknown categoryKey for path generation: ${categoryKey}`);
      return null;
  }

  const unitIdentifierPart = parts[1]; // e.g., "unit1" (from xungtoi-unit1), "unit14" (from xungtoi2-unit14)
  const lessonNumberInUnitMatch = parts[parts.length -1].match(/^l(\d+)$/); // Use parts.length -1 for lesson number part
  
  if (!lessonNumberInUnitMatch || !lessonNumberInUnitMatch[1]) {
    console.error(`Invalid lesson number format in lessonId: ${parts[parts.length -1]}`);
    return null;
  }
  const lessonNum = lessonNumberInUnitMatch[1];

  let filePrefix = '';

  // Handle "Xưng Tội 1" (lessons like "xungtoi-unitX-lY")
  if (lessonId.startsWith('xungtoi-') && !lessonId.startsWith('xungtoi2-')) { 
    if (unitIdentifierPart === 'unit1') { 
      filePrefix = `baimodau`;
    } else if (unitIdentifierPart === 'unit2') { 
      filePrefix = `bai1`;
    } else if (unitIdentifierPart === 'unit3') { 
      filePrefix = `bai2`;
    } // Add more "Xưng Tội 1" unit to filePrefix mappings if needed
    else {
      console.warn(`Xưng Tội 1: Unit identifier "${unitIdentifierPart}" needs specific file prefix handling. Lesson ID: ${lessonId}`);
      // Fallback for Xưng Tội 1 if a new unit pattern is introduced without explicit handling
      filePrefix = `xt1_u${unitIdentifierPart.replace('unit','')}_l`; // e.g. xt1_u4_l
      return { categorySlugForPath, fileName: `${filePrefix}${lessonNum}` }; // Return directly for fallback
    }
  }
  // Handle "Xưng Tội 2" (lessons like "xungtoi2-unitX-lY")
  else if (lessonId.startsWith('xungtoi2-')) { 
    const unitNumberMatch = unitIdentifierPart.match(/^unit(\d+)$/); // e.g. "unit14" -> "14"
    if (unitNumberMatch && unitNumberMatch[1]) {
      const numericUnitPart = unitNumberMatch[1]; 
      filePrefix = `bai${numericUnitPart}`; // Forms "bai14", "bai15"
    } else {
      console.warn(`Xưng Tội 2: Unit identifier "${unitIdentifierPart}" format unexpected. Lesson ID: ${lessonId}`);
      filePrefix = `xt2_u${unitIdentifierPart.replace('unit','')}_l`; // e.g. xt2_uSomeOtherFormat_l
      return { categorySlugForPath, fileName: `${filePrefix}${lessonNum}` }; // Return directly for fallback
    }
  }
  // Handle "Thêm Sức 1" (example, adjust if file names differ for its units)
  else if (lessonId.startsWith('themsuc-') && !lessonId.startsWith('themsuc2-')) { // Assuming TS1 only for now
     if (unitIdentifierPart === 'unit1') {
        filePrefix = 'baimodau'; // Assuming themsuc-unit1-lX maps to baimodau_X.ts for Thêm Sức
     } // Add more "Thêm Sức 1" unit to filePrefix mappings if needed (e.g. for unit2, unit3)
     else {
        console.warn(`Thêm Sức 1: Unit identifier "${unitIdentifierPart}" needs specific file prefix handling. Lesson ID: ${lessonId}`);
        filePrefix = `ts1_u${unitIdentifierPart.replace('unit','')}_l`;
        return { categorySlugForPath, fileName: `${filePrefix}${lessonNum}` };
     }
  }
  // Handle "Sống Đạo 1" (example, adjust if file names differ for its units)
  else if (lessonId.startsWith('songdao-') && !lessonId.startsWith('songdao2-')) { // Assuming SD1 only for now
      if (unitIdentifierPart === 'unit1') {
        filePrefix = 'baimodau'; // Assuming songdao-unit1-lX maps to baimodau_X.ts for Sống Đạo
      } // Add more "Sống Đạo 1" unit to filePrefix mappings if needed
      else {
        console.warn(`Sống Đạo 1: Unit identifier "${unitIdentifierPart}" needs specific file prefix handling. Lesson ID: ${lessonId}`);
        filePrefix = `sd1_u${unitIdentifierPart.replace('unit','')}_l`;
        return { categorySlugForPath, fileName: `${filePrefix}${lessonNum}` };
      }
  }
  // Generic fallback if no specific category/class prefix matched above
  else {
    console.warn(`General: Unit identifier "${unitIdentifierPart}" from lessonId "${lessonId}" might not have explicit file prefix handling.`);
    // A more generic fallback if category/class structure isn't explicitly handled above
    // It might use the first part of lessonId (e.g., "xungtoi", "themsuc", "xungtoi2")
    const categoryClassPrefix = parts[0]; // e.g. "xungtoi", "xungtoi2", "themsuc"
    filePrefix = `${categoryClassPrefix}_u${unitIdentifierPart.replace('unit','')}_l`; // e.g. xungtoi2_u14_l
    return { categorySlugForPath, fileName: `${filePrefix}${lessonNum}` };
  }

  return { categorySlugForPath, fileName: `${filePrefix}_${lessonNum}` };
};


const DEFAULT_READING_TIME = 15;
const POST_COMPLETION_LOADER_DURATION = 700; // ms

const LessonDetailPage: React.FC<LessonDetailPageProps> = ({
  lessonId,
  lessonTitle,
  initialLives,
  initialQuestionIndex,
  selectedCategory,
  categoryDetails,
  onBackToMain,
  onCompleteLesson,
  updateLessonProgressInApp,
  isExiting = false,
}) => {
  const [lessonData, setLessonData] = useState<LessonContentData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pageVisible, setPageVisible] = useState(false);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(initialQuestionIndex);
  const [lives, setLives] = useState(initialLives);
  const [userAnswers, setUserAnswers] = useState<Record<string, any>>({});
  
  const [resultPopupState, setResultPopupState] = useState<{ isOpen: boolean; type: 'correct' | 'incorrect'; title: string; message: string; actionButtonText?: string; onAction?: () => void; showOverlay?: boolean; } | null>(null);
  
  const [lessonOutcome, setLessonOutcome] = useState<LessonOutcome>('inprogress');
  const [showLessonCompleteScreen, setShowLessonCompleteScreen] = useState(false);
  const [showPostCompletionLoader, setShowPostCompletionLoader] = useState(false);
  
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [totalInteractiveQuestions, setTotalInteractiveQuestions] = useState(0);

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
    const fetchLessonContent = () => { 
      setIsLoading(true); 
      setError(null);
      setLessonOutcome('inprogress'); 
      
      const fileDetails = getLessonFileDetails(lessonId, selectedCategory);
      if (!fileDetails) {
        setError(`Lỗi phân tích ID bài học: ${lessonId}. Không thể xác định tệp bài học.`); 
        setIsLoading(false); 
        return;
      }
      
      try {
        const moduleKey = `${fileDetails.categorySlugForPath}/${fileDetails.fileName}`;
        console.log(`Attempting to load module with key: ${moduleKey}`); // Debug log
        const data = lessonModules[moduleKey];
        
        if (!data) {
          console.error(`Lesson content not found for key: ${moduleKey}. File details:`, fileDetails, "Lesson ID:", lessonId, "Selected Category:", selectedCategory);
          throw new Error(`Nội dung bài học không được tìm thấy cho khóa: ${moduleKey}. (ID Bài học: ${lessonId})`);
        }
        
        setLessonData(data);
        const interactiveCount = data.pages.filter(p => interactiveQuestionTypes.includes(p.type)).length;
        setTotalInteractiveQuestions(interactiveCount);
        setCorrectAnswersCount(0); 

        if (initialLives <= 0 && initialQuestionIndex < data.pages.length) {
          setLessonOutcome('failed');
          setShowLessonCompleteScreen(true);
        } else if (initialQuestionIndex >= data.pages.length) {
          setLessonOutcome('completed');
          setShowLessonCompleteScreen(true);
        } else {
          setLessonOutcome('inprogress');
        }

      } catch (err) {
        console.error("Không tải được nội dung bài học:", err);
        setError(`Nội dung bài học không tìm thấy. Chi tiết: ${(err as Error).message}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchLessonContent();
  }, [lessonId, selectedCategory, initialLives, initialQuestionIndex]);


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
            
            playSound(correctSound);
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
  }, [currentPageData, currentQuestionIndex, isAnswerChecked, resultPopupState?.isOpen, lessonData, correctSound, lessonOutcome]);


  const handleAnswerChange = (questionIdOrIndex: string | number, answer: any) => {
    setUserAnswers(prev => ({ ...prev, [questionIdOrIndex.toString()]: answer }));
  };
  
  const resetQuestionState = (clearCurrentAnswer: boolean = true) => {
    setIsAnswerChecked(false);
    setIsCurrentAnswerCorrect(null);
    if (clearCurrentAnswer) {
      setUserAnswers(prev => {
        const newAnswers = {...prev};
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
        playSound(correctSound);
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
        playSound(incorrectSound);
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
  }, [lessonData, currentPageData, resultPopupState, lessonOutcome, isAnswerChecked, checkAnswer, currentQuestionIndex, lives, setLives, correctSound, incorrectSound, showQuitConfirmation]);
  
  const handleContinueFromCompletionScreen = useCallback(() => {
    if (!lessonData) return;
    setShowPostCompletionLoader(true);
    setTimeout(() => {
      setShowPostCompletionLoader(false); 
      if (lessonOutcome === 'failed') {
        onBackToMain(); 
      } else if (lessonOutcome === 'completed') {
        onCompleteLesson(lessonId, lessonData.xp, lessonData.nextLessonId);
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
          {lessonTitle}
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
console.log("END PARSING: components/learning/LessonDetailPage.tsx"); // Diagnostic log
export default LessonDetailPage;
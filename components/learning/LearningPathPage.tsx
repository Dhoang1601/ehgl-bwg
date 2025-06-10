
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { CategoryDetails, Page } from '../../types'; 
import Header from './Header';
import ChapterBanner from './ChapterBanner';
import LearningPathContent, { LessonRefMap } from './LearningPathContent';
import BottomNavigation from './BottomNavigation';
import LessonPopup from './LessonPopup';
import LessonSelectionList from './LessonSelectionList'; 
import LessonInfoPanel from './LessonInfoPanel'; // Import new component
// Import the static data structure and relevant interfaces
import { APP_LEARNING_PATH_DATA, LearningPathData as StaticLearningPathData, Unit, Lesson } from '../../src/data/appStructureData';
// Import lesson info types and data
import { LessonInfoData } from '../../src/data/info/lessonInfoTypes';
import xungtoi_unit1_info from '../../src/data/info/xung-toi/xungtoi_unit1_info.ts';
import xungtoi_unit2_info from '../../src/data/info/xung-toi/xungtoi_unit2_info.ts';
import xungtoi_unit3_info from '../../src/data/info/xung-toi/xungtoi_unit3_info.ts';
// Add other static imports for lesson info data here as needed
// e.g., import themsuc_unit1_info from '../../src/data/info/them-suc/themsuc_unit1_info.ts';

// Helper to convert unit ID to info module key
// e.g., "xungtoi-unit1" -> "xungtoi_unit1_info"
const unitIdToInfoKey = (unitId: string): string => {
  return unitId.replace(/-/g, '_') + '_info';
};

// Map of statically imported lesson info modules
const lessonInfoModules: Record<string, LessonInfoData> = {
  'xungtoi_unit1_info': xungtoi_unit1_info,
  'xungtoi_unit2_info': xungtoi_unit2_info,
  'xungtoi_unit3_info': xungtoi_unit3_info,
  // Add other imported info modules here
  // 'themsuc_unit1_info': themsuc_unit1_info,
};


interface ProcessedLearningPathData {
  categoryName: string;
  staticChapterTitle: string; 
  units: Unit[]; 
  totalLessons: number;
}

interface LearningPathPageProps {
  selectedCategory: string; 
  selectedClass: string;    
  categoryDetails: CategoryDetails;
  userXP: number;
  userLevel: number;
  lessonsStatus: Record<string, 'unlocked' | 'completed'>;
  updateUserProgress: (xpGained: number, completedLessonId?: string, nextLessonId?: string) => void;
  onResetProgress: () => void;
  onNavigate: (page: Page) => void;
  onStartLesson: (lessonId: string, lessonTitle: string) => void; 
  isExiting?: boolean; 
}

const deepCopy = <T extends unknown>(obj: T): T => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(deepCopy) as any;
  }
  const copied: Record<string, any> = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      copied[key] = deepCopy(obj[key]);
    }
  }
  return copied as T;
};

const findActualInitialActiveUnitIndex = (processedUnitsList: Unit[]): number => {
    for (let i = 0; i < processedUnitsList.length; i++) {
        const unit = processedUnitsList[i];
        if (unit.lessons.length > 0 && unit.lessons[0].status === 'unlocked') {
            return i;
        }
    }
    for (let i = 0; i < processedUnitsList.length; i++) {
        const unit = processedUnitsList[i];
        if (unit.lessons.some(lesson => lesson.status === 'unlocked')) {
            return i;
        }
    }
    return 0;
};

const HEADER_HEIGHT = 52; 
const CHAPTER_BANNER_FULL_HEIGHT = 40; 
const CHAPTER_BANNER_SHRUNK_HEIGHT = 31; 


const LearningPathPage: React.FC<LearningPathPageProps> = ({
  selectedCategory,
  selectedClass,
  categoryDetails,
  userXP,
  userLevel,
  lessonsStatus,
  updateUserProgress, 
  onResetProgress,
  onNavigate,
  onStartLesson,
  isExiting = false,
}) => {
  const [learningData, setLearningData] = useState<ProcessedLearningPathData | null>(null);
  const [lessonForPopup, setLessonForPopup] = useState<Lesson | null>(null);
  const [lessonPopupRefState, setLessonPopupRefState] = useState<React.RefObject<HTMLButtonElement> | null>(null);
  
  const [isLessonPopupMounted, setIsLessonPopupMounted] = useState(false);
  const [isLessonPopupVisible, setIsLessonPopupVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(false);
  const [errorLoadingPath, setErrorLoadingPath] = useState<string | null>(null);

  const mainScrollRef = useRef<HTMLDivElement>(null);
  const lessonRefs = useRef<LessonRefMap>({});
  const unitSectionRefs = useRef<React.RefObject<HTMLElement>[]>([]);
  
  const [activeUnitIndex, setActiveUnitIndex] = useState(0);
  const activeUnitIndexRef = useRef(activeUnitIndex); 

  const [dynamicBannerChapterTitle, setDynamicBannerChapterTitle] = useState(''); 
  const [dynamicBannerLessonTitle, setDynamicBannerLessonTitle] = useState(''); 

  const [isLessonSelectionModeActive, setIsLessonSelectionModeActive] = useState(false);
  const [isLessonInfoModeActive, setIsLessonInfoModeActive] = useState(false); // New state for lesson info
  const [currentUnitInfoData, setCurrentUnitInfoData] = useState<LessonInfoData | null>(null); // New state for info data


  const bannerCurrentHeight = isLessonSelectionModeActive || isLessonInfoModeActive ? CHAPTER_BANNER_SHRUNK_HEIGHT : CHAPTER_BANNER_FULL_HEIGHT;
  const currentStickyHeaderHeight = HEADER_HEIGHT + bannerCurrentHeight;
  const fullStickyHeaderAndBannerHeight = HEADER_HEIGHT + CHAPTER_BANNER_FULL_HEIGHT;


  useEffect(() => {
    activeUnitIndexRef.current = activeUnitIndex;
  }, [activeUnitIndex]);

  useEffect(() => {
    if (!isExiting) {
      const timer = requestAnimationFrame(() => setPageVisible(true));
      return () => cancelAnimationFrame(timer);
    } else {
      setPageVisible(false); 
      setIsLessonSelectionModeActive(false); 
      setIsLessonInfoModeActive(false); // Close info panel on page exit
      setCurrentUnitInfoData(null);
    }
  }, [isExiting]);

  useEffect(() => {
    setErrorLoadingPath(null);
    const categoryData = APP_LEARNING_PATH_DATA[selectedCategory];
    if (!categoryData) {
      setErrorLoadingPath(`Không tìm thấy dữ liệu cho ngành "${selectedCategory}".`);
      setLearningData(null);
      return;
    }

    const staticClassData = categoryData[selectedClass];
    if (!staticClassData) {
      setErrorLoadingPath(`Không tìm thấy dữ liệu cho lớp "${selectedClass}" trong ngành "${selectedCategory}".`);
      setLearningData(null);
      return;
    }

    const processedUnits = deepCopy(staticClassData.units);
    processedUnits.forEach((unit) => {
      let previousLessonInUnitWasCompleted = false; 
      unit.lessons.forEach((lesson, lessonIndex) => {
        const storedStatus = lessonsStatus[lesson.id];
        if (storedStatus === 'completed') {
          lesson.status = 'completed';
          previousLessonInUnitWasCompleted = true; 
        } else if (lessonIndex === 0) { 
          lesson.status = 'unlocked';
          previousLessonInUnitWasCompleted = false; 
        } else if (previousLessonInUnitWasCompleted) { 
          lesson.status = 'unlocked';
          previousLessonInUnitWasCompleted = false; 
        } else {
          lesson.status = 'locked';
          previousLessonInUnitWasCompleted = false;
        }
        if (!lessonRefs.current[lesson.id]) {
          lessonRefs.current[lesson.id] = React.createRef<HTMLButtonElement>();
        }
      });
    });
    
    const dataToSet: ProcessedLearningPathData = {
      categoryName: staticClassData.categoryName,
      staticChapterTitle: staticClassData.currentChapterTitle,
      units: processedUnits,
      totalLessons: staticClassData.totalLessons,
    };
    setLearningData(dataToSet);

    unitSectionRefs.current = dataToSet.units.map(
        (_, i) => unitSectionRefs.current[i] || React.createRef<HTMLElement>()
    );
    
    const initialUnitIdx = findActualInitialActiveUnitIndex(processedUnits);
    setActiveUnitIndex(initialUnitIdx); 
    
    setDynamicBannerChapterTitle(staticClassData.currentChapterTitle); 
    if (processedUnits[initialUnitIdx]) {
        setDynamicBannerLessonTitle(processedUnits[initialUnitIdx].title);
    } else if (processedUnits.length > 0 && processedUnits[0]) {
        setDynamicBannerLessonTitle(processedUnits[0].title || "Tổng quan lớp học");
    } else {
        setDynamicBannerLessonTitle("Tổng quan lớp học");
    }

  }, [selectedCategory, selectedClass, lessonsStatus]);


  useEffect(() => {
    if (!mainScrollRef.current || !learningData || unitSectionRefs.current.length === 0 || mainScrollRef.current.clientHeight <= 0) {
        // Wait for mainScrollRef to be available and have dimensions
        return;
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
        let newActiveUnitIdx = activeUnitIndexRef.current;
        const intersectingUnits = entries
            .filter(entry => entry.isIntersecting)
            .map(entry => {
                const index = unitSectionRefs.current.findIndex(ref => ref.current === entry.target);
                return { index, boundingClientRect: entry.boundingClientRect, target: entry.target };
            })
            .filter(unit => unit.index !== -1)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (intersectingUnits.length > 0) {
            const highestVisibleUnit = intersectingUnits[0];
            if (highestVisibleUnit.index !== activeUnitIndexRef.current) {
                newActiveUnitIdx = highestVisibleUnit.index;
            }
        }
      
        if (newActiveUnitIdx !== activeUnitIndexRef.current) {
            setActiveUnitIndex(newActiveUnitIdx);
        }
    };
    
    const observerOptions = {
        root: mainScrollRef.current,
        rootMargin: `-${currentStickyHeaderHeight -1}px 0px -${mainScrollRef.current.clientHeight - currentStickyHeaderHeight - 50}px 0px`, 
        threshold: 0.01, 
    };

    let observer: IntersectionObserver | null = null;
    try {
      observer = new IntersectionObserver(observerCallback, observerOptions);
      unitSectionRefs.current.forEach(ref => {
          if (ref.current) observer?.observe(ref.current);
      });
    } catch (e) {
      console.error("Failed to create IntersectionObserver:", e);
      // Handle error, perhaps by not observing, or logging
    }


    return () => {
        unitSectionRefs.current.forEach(ref => {
            if (ref.current && observer) observer.unobserve(ref.current);
        });
        if (observer) {
          observer.disconnect();
        }
    };
  }, [learningData, currentStickyHeaderHeight]); // Rerun if learningData or sticky height changes

  useEffect(() => {
    if (learningData && learningData.units[activeUnitIndex]) {
        setDynamicBannerLessonTitle(learningData.units[activeUnitIndex].title);
         // If lesson info mode is active, update its content if the active unit changes
        if (isLessonInfoModeActive) {
            const unitId = learningData.units[activeUnitIndex].id;
            const infoKey = unitIdToInfoKey(unitId);
            const infoData = lessonInfoModules[infoKey];
            setCurrentUnitInfoData(infoData || null);
        }
    } else if (learningData && isLessonInfoModeActive) {
        // activeUnitIndex might be out of bounds or units array is empty
        setCurrentUnitInfoData(null);
    }

    if (learningData) { 
        setDynamicBannerChapterTitle(learningData.staticChapterTitle);
    }
  }, [activeUnitIndex, learningData, isLessonInfoModeActive]);


  const closeLessonPopup = useCallback(() => {
    setIsLessonPopupVisible(false); 
    setTimeout(() => {
      setIsLessonPopupMounted(false);
      setLessonForPopup(null);
      setLessonPopupRefState(null);
    }, 150); 
  }, []);
  
  const openLessonPopup = useCallback((lesson: Lesson, ref: React.RefObject<HTMLButtonElement>) => {
    if (isLessonSelectionModeActive || isLessonInfoModeActive) return; 
    if (lesson.status !== 'locked') {
      setLessonForPopup(lesson);
      setLessonPopupRefState(ref);
      setIsLessonPopupMounted(true);
      requestAnimationFrame(() => { 
        setIsLessonPopupVisible(true);
      });
    }
  }, [isLessonSelectionModeActive, isLessonInfoModeActive]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if (isLessonPopupMounted && lessonPopupRefState?.current && !lessonPopupRefState.current.contains(event.target as Node)) {
             const popupEl = document.querySelector('[role="dialog"][aria-labelledby="lesson-popup-title"]');
             if (popupEl && !popupEl.contains(event.target as Node)) {
                closeLessonPopup();
             }
        }
    };

    if (isLessonPopupMounted) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLessonPopupMounted, lessonPopupRefState, closeLessonPopup]);


  useEffect(() => {
    const mainEl = mainScrollRef.current;
    const handleScroll = () => {
      if (isLessonPopupMounted) {
        closeLessonPopup();
      }
    };

    if (mainEl && isLessonPopupMounted) {
      mainEl.addEventListener('scroll', handleScroll, { passive: true });
    }
    return () => {
      if (mainEl) {
        mainEl.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isLessonPopupMounted, closeLessonPopup]);

  const handlePopupAction = useCallback(() => {
    if (!lessonForPopup) return;
    onStartLesson(lessonForPopup.id, lessonForPopup.title);
    closeLessonPopup();
  }, [lessonForPopup, onStartLesson, closeLessonPopup]);

  const handleBannerTextClick = useCallback(() => {
    if (isLessonInfoModeActive) {
      setIsLessonInfoModeActive(false);
      setCurrentUnitInfoData(null);
    } else {
      setIsLessonInfoModeActive(true);
      setIsLessonSelectionModeActive(false); // Ensure selection list is closed
      if (learningData && learningData.units[activeUnitIndexRef.current]) {
        const unitId = learningData.units[activeUnitIndexRef.current].id;
        const infoKey = unitIdToInfoKey(unitId);
        const infoData = lessonInfoModules[infoKey];
        setCurrentUnitInfoData(infoData || null); // Set to null if not found to show a message
      } else {
        setCurrentUnitInfoData(null);
      }
    }
  }, [isLessonInfoModeActive, learningData]);

  const handleBannerMenuIconClick = useCallback(() => {
    if (isLessonInfoModeActive) {
      setIsLessonInfoModeActive(false); // Close info panel
      setCurrentUnitInfoData(null);
    } else if (isLessonSelectionModeActive) {
      setIsLessonSelectionModeActive(false); // Close selection list
    } else {
      setIsLessonSelectionModeActive(true); // Open selection list
      setIsLessonInfoModeActive(false); // Ensure info panel is closed
      setCurrentUnitInfoData(null);
    }
  }, [isLessonInfoModeActive, isLessonSelectionModeActive]);

  const handleSelectUnitFromList = useCallback((unitIndex: number) => {
    if (learningData && unitSectionRefs.current[unitIndex] && unitSectionRefs.current[unitIndex].current) {
        const unitElement = unitSectionRefs.current[unitIndex].current;
        if (unitElement) {
            // Calculate the target scroll position to align the top of the unit element
            // with the bottom of the sticky header/banner.
            const scrollContainer = mainScrollRef.current;
            if (scrollContainer) {
                const unitTopRelativeToContainer = unitElement.offsetTop - scrollContainer.offsetTop;
                scrollContainer.scrollTo({
                    top: unitTopRelativeToContainer - fullStickyHeaderAndBannerHeight, // Adjusted to account for the banner
                    behavior: 'smooth'
                });
            }
        }
    }
    setActiveUnitIndex(unitIndex); 
    setIsLessonSelectionModeActive(false); 
  }, [learningData, unitSectionRefs, setActiveUnitIndex, setIsLessonSelectionModeActive, fullStickyHeaderAndBannerHeight]);


  if (errorLoadingPath) {
    return <div className={`flex flex-col items-center justify-center min-h-screen transition-opacity duration-300 ease-in-out p-4 text-center ${pageVisible && !isExiting ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-red-600 font-semibold text-lg">Lỗi tải dữ liệu học tập:</p>
        <p className="text-gray-700">{errorLoadingPath}</p>
        <button 
            onClick={onResetProgress} 
            className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md"
        >
            Chọn lại Ngành/Lớp
        </button>
    </div>;
  }
  
  if (!learningData) {
    return <div className={`flex items-center justify-center min-h-screen transition-opacity duration-300 ease-in-out ${pageVisible && !isExiting ? 'opacity-100' : 'opacity-0'}`}>Đang tải dữ liệu học tập...</div>;
  }

  const xpToNextLevel = (userLevel + 1) * 100;

  return (
    <div className={`flex flex-col h-screen transition-opacity duration-500 ease-in-out ${pageVisible && !isExiting ? 'opacity-100' : 'opacity-0'}`}>
      <Header 
        categoryColors={categoryDetails.colors} 
        userLevel={userLevel}
        userXP={userXP}
        xpToNextLevel={xpToNextLevel}
        onReset={onResetProgress}
      />
      <ChapterBanner
        categoryColors={categoryDetails.colors}
        chapterTitle={dynamicBannerChapterTitle} 
        lessonTitle={dynamicBannerLessonTitle} 
        onTextClick={handleBannerTextClick}
        onMenuIconClick={handleBannerMenuIconClick} // Changed prop name
        isLessonSelectionModeActive={isLessonSelectionModeActive}
        isLessonInfoModeActive={isLessonInfoModeActive} // Pass new state
      />
      
      {learningData && (
        <LessonSelectionList
            units={learningData.units}
            isActive={isLessonSelectionModeActive}
            onUnitSelect={handleSelectUnitFromList}
            topOffset={HEADER_HEIGHT + CHAPTER_BANNER_SHRUNK_HEIGHT} // Always shrunk height when active
            categoryColors={categoryDetails.colors} 
        />
      )}

      {learningData && (
        <LessonInfoPanel
          unitInfoData={currentUnitInfoData}
          isActive={isLessonInfoModeActive}
          topOffset={HEADER_HEIGHT + CHAPTER_BANNER_SHRUNK_HEIGHT} // Always shrunk height when active
          // categoryColors={categoryDetails.colors} // Not strictly needed if bg is always white
        />
      )}
      
      <main 
        ref={mainScrollRef} 
        className="flex-grow overflow-y-auto pb-20 bg-gray-50"
        style={{ 
          // paddingTop: `${currentStickyHeaderHeight}px`, // Padding is implicitly handled by scroll target logic now
          position: 'relative', 
          zIndex: 1, 
          isolation: 'isolate', 
          display: isLessonInfoModeActive ? 'none' : 'block', // Hide main content if info panel is active
        }}
      > 
        <div style={{height: `${fullStickyHeaderAndBannerHeight}px`}} /> {/* Spacer for initial view */}
        <LearningPathContent
          units={learningData.units}
          categoryColors={categoryDetails.colors}
          onLessonClick={openLessonPopup}
          lessonRefs={lessonRefs}
          unitSectionRefs={unitSectionRefs}
          scrollMarginTopValue={fullStickyHeaderAndBannerHeight} 
        />
      </main>

      <BottomNavigation activeTab="home" onNavigate={onNavigate} />

      {isLessonPopupMounted && lessonForPopup && lessonPopupRefState?.current && (
        <LessonPopup
          lesson={lessonForPopup}
          categoryColors={categoryDetails.colors}
          targetElement={lessonPopupRefState.current}
          onStart={handlePopupAction} 
          onReview={handlePopupAction} 
          onClose={closeLessonPopup}
          isVisible={isLessonPopupVisible}
        />
      )}
    </div>
  );
};

export default LearningPathPage;

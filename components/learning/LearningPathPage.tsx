
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { CategoryDetails, Page } from '../../types'; 
// Header and BottomNavigation are now rendered in App.tsx
import ChapterBanner from './ChapterBanner';
import LearningPathContent, { LessonRefMap } from './LearningPathContent';
import LessonPopup from './LessonPopup';
import LessonSelectionList from './LessonSelectionList'; 
import LessonInfoPanel from './LessonInfoPanel'; 
import { APP_LEARNING_PATH_DATA, LearningPathData as StaticLearningPathData, Unit, Lesson } from '../../src/data/appStructureData';
import { LessonInfoData } from '../../src/data/info/lessonInfoTypes';

import { xungToiLop1UnitInfoData } from '../../src/data/info/xung-toi/xung_toi_lop_1_info';
import { xungToiLop2UnitInfoData } from '../../src/data/info/xung-toi/xung_toi_lop_2_info'; 
import { xungToiLop3UnitInfoData } from '../../src/data/info/xung-toi/xung_toi_lop_3_info'; 
import { themSucLop1UnitInfoData } from '../../src/data/info/them-suc/them_suc_lop_1_info';
import { themSucLop2UnitInfoData } from '../../src/data/info/them-suc/them_suc_lop_2_info';
import { themSucLop3UnitInfoData } from '../../src/data/info/them-suc/them_suc_lop_3_info';
import { songDaoLop1UnitInfoData } from '../../src/data/info/song-dao/song_dao_lop_1_info';
import { songDaoLop2UnitInfoData } from '../../src/data/info/song-dao/song_dao_lop_2_info';
import { songDaoLop3UnitInfoData } from '../../src/data/info/song-dao/song_dao_lop_3_info';


const unitIdToInfoKey = (unitId: string): string => {
  return unitId.replace(/-/g, '_') + '_info';
};

const ALL_CLASS_UNIT_INFO_DATA: Record<string, Record<string, Record<string, LessonInfoData>>> = {
  "xungtoi": {
    "Xưng Tội 1": xungToiLop1UnitInfoData,
    "Xưng Tội 2": xungToiLop2UnitInfoData, 
    "Xưng Tội 3": xungToiLop3UnitInfoData, 
  },
  "themsuc": {
    "Thêm Sức 1": themSucLop1UnitInfoData, 
    "Thêm Sức 2": themSucLop2UnitInfoData,
    "Thêm Sức 3": themSucLop3UnitInfoData,
  },
  "songdao": {
    "Sống Đạo 1": songDaoLop1UnitInfoData, 
    "Sống Đạo 2": songDaoLop2UnitInfoData,
    "Sống Đạo 3": songDaoLop3UnitInfoData,
  }
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
  userXP: number; // Still needed for logic, though Header is external
  userLevel: number; // Still needed for logic
  lessonsStatus: Record<string, 'unlocked' | 'completed'>;
  updateUserProgress: (xpGained: number, completedLessonId?: string, nextLessonId?: string) => void;
  onResetProgress: () => void;
  onNavigate: (page: Page) => void;
  onStartLesson: (lessonId: string, lessonTitle: string) => void; 
  targetLessonIdForScroll: string | null; 
  onScrollTargetProcessed: () => void; 
  userStreak: number; 
  lastStreakUpdate: string | null;
  // isExiting prop removed
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
    if (processedUnitsList.every(unit => unit.lessons.every(lesson => lesson.status === 'completed'))) {
      return 0;
    }
    return 0; 
};

// Constants for internal layout calculations, assuming main header height is 52px
const MAIN_HEADER_HEIGHT = 52; // This is now external to this component
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
  targetLessonIdForScroll,
  onScrollTargetProcessed,
  userStreak, 
  lastStreakUpdate, 
}) => {
  const [learningData, setLearningData] = useState<ProcessedLearningPathData | null>(null);
  const [lessonForPopup, setLessonForPopup] = useState<Lesson | null>(null);
  const [lessonPopupRefState, setLessonPopupRefState] = useState<React.RefObject<HTMLButtonElement> | null>(null);
  
  const [isLessonPopupMounted, setIsLessonPopupMounted] = useState(false);
  const [isLessonPopupVisible, setIsLessonPopupVisible] = useState(false);
  const [errorLoadingPath, setErrorLoadingPath] = useState<string | null>(null);

  const mainScrollRef = useRef<HTMLDivElement>(null);
  const lessonRefs = useRef<LessonRefMap>({});
  const unitSectionRefs = useRef<React.RefObject<HTMLElement>[]>([]);
  
  const [activeUnitIndex, setActiveUnitIndex] = useState(0);
  const activeUnitIndexRef = useRef(activeUnitIndex); 

  const [dynamicBannerChapterTitle, setDynamicBannerChapterTitle] = useState(''); 
  const [dynamicBannerLessonTitle, setDynamicBannerLessonTitle] = useState(''); 

  const [isLessonSelectionModeActive, setIsLessonSelectionModeActive] = useState(false);
  const [isLessonInfoModeActive, setIsLessonInfoModeActive] = useState(false); 
  const [currentUnitInfoData, setCurrentUnitInfoData] = useState<LessonInfoData | null>(null); 
  
  const [currentClassInfoModules, setCurrentClassInfoModules] = useState<Record<string, LessonInfoData>>({});
  const [expandedUnits, setExpandedUnits] = useState<Record<string, boolean>>({});
  const [initialScrollPerformed, setInitialScrollPerformed] = useState(false);
  const [scrollToUnitContainingLessonId, setScrollToUnitContainingLessonId] = useState<string | null>(null);

  // Effective top offset for ChapterBanner (it's fixed relative to viewport, below main header)
  const chapterBannerTopOffset = MAIN_HEADER_HEIGHT;
  const bannerCurrentHeight = isLessonSelectionModeActive || isLessonInfoModeActive ? CHAPTER_BANNER_SHRUNK_HEIGHT : CHAPTER_BANNER_FULL_HEIGHT;
  // Sticky header height *within this component's scrollable area* is just the ChapterBanner
  const currentStickyHeaderHeight = bannerCurrentHeight; 
  const fullStickyHeaderAndBannerHeight = CHAPTER_BANNER_FULL_HEIGHT;


  useEffect(() => {
    activeUnitIndexRef.current = activeUnitIndex;
  }, [activeUnitIndex]);

  useEffect(() => {
    // Page visibility is now handled by Framer Motion in App.tsx
    // This effect might be simplified or removed if pageVisible state is no longer needed
    if (isLessonSelectionModeActive || isLessonInfoModeActive) {
      // Actions when panels are active
    } else {
      // Actions when panels are inactive
    }
  }, [isLessonSelectionModeActive, isLessonInfoModeActive]);

  useEffect(() => {
    const classInfoData = ALL_CLASS_UNIT_INFO_DATA[selectedCategory]?.[selectedClass];
    if (classInfoData) {
      setCurrentClassInfoModules(classInfoData);
    } else {
      setCurrentClassInfoModules({});
      console.warn(`Unit info data for ${selectedCategory} - ${selectedClass} not found or not yet combined.`);
    }
  }, [selectedCategory, selectedClass]);

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
    const initialExpandedState: Record<string, boolean> = {};
    processedUnits.forEach((unit) => {
      let previousLessonInUnitWasCompleted = false; 
      let allLessonsInUnitCompleted = true;
      unit.lessons.forEach((lesson, lessonIndex) => {
        const storedStatus = lessonsStatus[lesson.id];
        if (storedStatus === 'completed') {
          lesson.status = 'completed';
          previousLessonInUnitWasCompleted = true; 
        } else {
          allLessonsInUnitCompleted = false;
          if (lessonIndex === 0) { 
            lesson.status = 'unlocked';
            previousLessonInUnitWasCompleted = false; 
          } else if (previousLessonInUnitWasCompleted) { 
            lesson.status = 'unlocked';
            previousLessonInUnitWasCompleted = false; 
          } else {
            lesson.status = 'locked';
            previousLessonInUnitWasCompleted = false;
          }
        }
        if (!lessonRefs.current[lesson.id]) {
          lessonRefs.current[lesson.id] = React.createRef<HTMLButtonElement>();
        }
      });
      initialExpandedState[unit.id] = !allLessonsInUnitCompleted; 
    });
    setExpandedUnits(initialExpandedState);
    
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
    setInitialScrollPerformed(false); 
  }, [selectedCategory, selectedClass, lessonsStatus]);

  useEffect(() => {
    if (targetLessonIdForScroll) {
      setScrollToUnitContainingLessonId(targetLessonIdForScroll);
      setInitialScrollPerformed(false); 
    }
  }, [targetLessonIdForScroll]);


  useEffect(() => {
    if (!learningData || !mainScrollRef.current || unitSectionRefs.current.length === 0) {
      return;
    }
  
    let targetUnitIndex = -1;
    let targetUnitIdForExpansion: string | null = null;
    let scrollBehavior: ScrollBehavior = 'auto';
  
    if (scrollToUnitContainingLessonId) {
      learningData.units.forEach((unit, index) => {
        if (unit.lessons.some(lesson => lesson.id === scrollToUnitContainingLessonId)) {
          targetUnitIndex = index;
          targetUnitIdForExpansion = unit.id;
        }
      });
  
      if (targetUnitIndex !== -1 && targetUnitIdForExpansion) {
        scrollBehavior = 'smooth'; 
        const currentUnitId = targetUnitIdForExpansion;
        if (expandedUnits[currentUnitId] === false) {
          setExpandedUnits(prev => ({ ...prev, [currentUnitId]: true }));
           setTimeout(() => performScroll(targetUnitIndex, scrollBehavior, true), 350); 
        } else {
          performScroll(targetUnitIndex, scrollBehavior, true);
        }
      } else {
        onScrollTargetProcessed(); 
        setScrollToUnitContainingLessonId(null);
        if (!initialScrollPerformed) {
          const initialActiveIdx = findActualInitialActiveUnitIndex(learningData.units);
          performScroll(initialActiveIdx, 'auto', false);
          setActiveUnitIndex(initialActiveIdx);
        }
      }
    } else if (!initialScrollPerformed) {
      const initialActiveIdx = findActualInitialActiveUnitIndex(learningData.units);
      performScroll(initialActiveIdx, 'auto', false);
      setActiveUnitIndex(initialActiveIdx);
    }
  
    function performScroll(unitIdx: number, behavior: ScrollBehavior, isTargetedScroll: boolean) {
      const targetUnitRef = unitSectionRefs.current[unitIdx];
      if (targetUnitRef?.current && mainScrollRef.current) {
        const scrollContainer = mainScrollRef.current;
        const unitElement = targetUnitRef.current;
        if (unitElement.offsetParent !== null) { 
          requestAnimationFrame(() => {
            const unitTopRelativeToContainer = unitElement.offsetTop - scrollContainer.offsetTop;
            // Scroll margin is now just for ChapterBanner as main Header is external
            scrollContainer.scrollTo({
              top: unitTopRelativeToContainer - CHAPTER_BANNER_FULL_HEIGHT, 
              behavior: behavior
            });
            if (isTargetedScroll) {
              onScrollTargetProcessed();
              setScrollToUnitContainingLessonId(null);
            }
            setInitialScrollPerformed(true);
          });
        } else if (isTargetedScroll) { 
            onScrollTargetProcessed();
            setScrollToUnitContainingLessonId(null);
        }
      } else if (isTargetedScroll) { 
          onScrollTargetProcessed();
          setScrollToUnitContainingLessonId(null);
      }
    }
  }, [
    learningData, 
    scrollToUnitContainingLessonId, 
    initialScrollPerformed, 
    onScrollTargetProcessed, 
    expandedUnits, 
    setExpandedUnits, 
    setActiveUnitIndex 
  ]);


  useEffect(() => {
    if (!mainScrollRef.current || !learningData || unitSectionRefs.current.length === 0 || mainScrollRef.current.clientHeight <= 0) {
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
        // currentStickyHeaderHeight is now just the ChapterBanner's height
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
    }

    return () => {
        unitSectionRefs.current.forEach(ref => {
            if (ref.current && observer) observer.unobserve(ref.current);
        });
        if (observer) {
          observer.disconnect();
        }
    };
  }, [learningData, currentStickyHeaderHeight]); 

  useEffect(() => {
    if (learningData && learningData.units[activeUnitIndex]) {
        setDynamicBannerLessonTitle(learningData.units[activeUnitIndex].title);
        if (isLessonInfoModeActive) {
            const unitId = learningData.units[activeUnitIndex].id;
            const infoKey = unitIdToInfoKey(unitId);
            const infoData = currentClassInfoModules[infoKey]; 
            setCurrentUnitInfoData(infoData || null);
        }
    } else if (learningData && isLessonInfoModeActive) {
        setCurrentUnitInfoData(null);
    }

    if (learningData) { 
        setDynamicBannerChapterTitle(learningData.staticChapterTitle);
    }
  }, [activeUnitIndex, learningData, isLessonInfoModeActive, currentClassInfoModules]);


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
      setIsLessonSelectionModeActive(false); 
      if (learningData && learningData.units[activeUnitIndexRef.current]) {
        const unitId = learningData.units[activeUnitIndexRef.current].id;
        const infoKey = unitIdToInfoKey(unitId);
        const infoData = currentClassInfoModules[infoKey]; 
        setCurrentUnitInfoData(infoData || null); 
      } else {
        setCurrentUnitInfoData(null);
      }
    }
  }, [isLessonInfoModeActive, learningData, currentClassInfoModules]);

  const handleBannerMenuIconClick = useCallback(() => {
    if (isLessonInfoModeActive) {
      setIsLessonInfoModeActive(false); 
      setCurrentUnitInfoData(null);
    } else if (isLessonSelectionModeActive) {
      setIsLessonSelectionModeActive(false); 
    } else {
      setIsLessonSelectionModeActive(true); 
      setIsLessonInfoModeActive(false); 
      setCurrentUnitInfoData(null);
    }
  }, [isLessonInfoModeActive, isLessonSelectionModeActive]);

  const handleSelectUnitFromList = useCallback((unitIndex: number) => {
    if (learningData && unitSectionRefs.current[unitIndex] && unitSectionRefs.current[unitIndex].current) {
        const unitElement = unitSectionRefs.current[unitIndex].current;
        if (unitElement) {
            const scrollContainer = mainScrollRef.current;
            if (scrollContainer) {
                const unitTopRelativeToContainer = unitElement.offsetTop - scrollContainer.offsetTop;
                scrollContainer.scrollTo({
                    top: unitTopRelativeToContainer - CHAPTER_BANNER_FULL_HEIGHT, // Adjust for ChapterBanner height only
                    behavior: 'smooth'
                });
            }
        }
    }
    setActiveUnitIndex(unitIndex); 
    setIsLessonSelectionModeActive(false); 
  }, [learningData, unitSectionRefs, setActiveUnitIndex, setIsLessonSelectionModeActive]);

  const toggleUnitExpansion = (unitId: string) => {
    setExpandedUnits(prev => ({ ...prev, [unitId]: !prev[unitId] }));
  };
  
  const pageMotionProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
  };

  if (errorLoadingPath) {
    return <motion.div {...pageMotionProps} className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <p className="text-red-600 font-semibold text-lg">Lỗi tải dữ liệu học tập:</p>
        <p className="text-gray-700">{errorLoadingPath}</p>
        <button 
            onClick={onResetProgress} 
            className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md"
        >
            Chọn lại Ngành/Lớp
        </button>
    </motion.div>;
  }
  
  if (!learningData) {
    return <motion.div {...pageMotionProps} className="flex items-center justify-center min-h-screen">Đang tải dữ liệu học tập...</motion.div>;
  }

  return (
    <motion.div 
      {...pageMotionProps}
      className="flex flex-col h-full" 
      style={{ paddingBottom: '64px' }} // Account for external MainBottomNavigation
    >
      {/* Main Header is now external, rendered in App.tsx */}
      <ChapterBanner
        categoryColors={categoryDetails.colors}
        chapterTitle={dynamicBannerChapterTitle} 
        lessonTitle={dynamicBannerLessonTitle} 
        onTextClick={handleBannerTextClick}
        onMenuIconClick={handleBannerMenuIconClick} 
        isLessonSelectionModeActive={isLessonSelectionModeActive}
        isLessonInfoModeActive={isLessonInfoModeActive}
        style={{ top: `${MAIN_HEADER_HEIGHT}px` }} 
      />
      
      {learningData && (
        <LessonSelectionList
            units={learningData.units}
            isActive={isLessonSelectionModeActive}
            onUnitSelect={handleSelectUnitFromList}
            topOffset={MAIN_HEADER_HEIGHT + CHAPTER_BANNER_SHRUNK_HEIGHT} 
            categoryColors={categoryDetails.colors} 
        />
      )}

      {learningData && (
        <LessonInfoPanel
          unitInfoData={currentUnitInfoData}
          isActive={isLessonInfoModeActive}
          topOffset={MAIN_HEADER_HEIGHT + CHAPTER_BANNER_SHRUNK_HEIGHT} 
        />
      )}
      
      <main 
        ref={mainScrollRef} 
        className="flex-grow overflow-y-auto bg-gray-50" 
        style={{ 
          position: 'relative', 
          zIndex: 1, 
          isolation: 'isolate', 
          display: isLessonInfoModeActive ? 'none' : 'block', 
        }}
      > 
        <div style={{height: `${fullStickyHeaderAndBannerHeight}px`}} /> 
        <LearningPathContent
          units={learningData.units}
          categoryColors={categoryDetails.colors}
          onLessonClick={openLessonPopup}
          lessonRefs={lessonRefs}
          unitSectionRefs={unitSectionRefs}
          scrollMarginTopValue={fullStickyHeaderAndBannerHeight}
          expandedUnits={expandedUnits}
          onToggleUnitExpansion={toggleUnitExpansion}
        />
      </main>

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
    </motion.div>
  );
};

export default LearningPathPage;
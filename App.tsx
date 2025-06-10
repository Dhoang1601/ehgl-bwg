

import React, { useState, useEffect, useCallback } from 'react';
import WelcomePage from './components/WelcomePage';
import SelectCategoryPage from './components/SelectCategoryPage';
import SelectClassPage from './components/SelectClassPage';
import LearningPathPage from './components/learning/LearningPathPage';
// Import the new static data structure
import { APP_LEARNING_PATH_DATA } from './src/data/appStructureData';
import ProfilePage from './components/profile/ProfilePage';
import LessonDetailPage from './components/learning/LessonDetailPage'; 
import LoadingOverlay from './components/LoadingOverlay';
import { useLocalStorageState } from './hooks/useLocalStorageState';
import { Page, CategoryDetails, CATEGORY_STYLES } from './types'; 

const WELCOME_EXIT_DURATION = 300;
const LOADING_TRANSITION_DURATION = 700; 
const SELECT_CLASS_EXIT_DURATION = 300;
const PROFILE_EXIT_DURATION = 300;
const LEARNING_PAGE_EXIT_DURATION = 300;
const LESSON_DETAIL_EXIT_DURATION = 300;

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('welcome');
  const [selectedCategory, setSelectedCategory] = useLocalStorageState<string | null>('giaoly_selectedCategory', null); // e.g., "xungtoi"
  const [selectedClass, setSelectedClass] = useLocalStorageState<string | null>('giaoly_selectedClass', null); // e.g., "Xưng Tội 1"
  
  const [userXP, setUserXP] = useLocalStorageState<number>('giaoly_userXP', 0);
  const [userLevel, setUserLevel] = useLocalStorageState<number>('giaoly_userLevel', 0);
  const [lessonsStatus, setLessonsStatus] = useLocalStorageState<Record<string, 'unlocked' | 'completed'>>('giaoly_lessonsStatus', {});

  const [currentLessonInfo, setCurrentLessonInfo] = useLocalStorageState<{ id: string; title: string; lives?: number; currentQuestionIndex?: number} | null>('giaoly_currentLessonInfo', null);

  const [isAppLoading, setIsAppLoading] = useState(true);
  const [isExitingWelcomePage, setIsExitingWelcomePage] = useState(false);
  const [isLoadingTransition, setIsLoadingTransition] = useState(false);
  const [isFadingOutSelectClass, setIsFadingOutSelectClass] = useState(false);
  const [isExitingProfilePage, setIsExitingProfilePage] = useState(false);
  const [isExitingLearningPage, setIsExitingLearningPage] = useState(false);
  const [isExitingLessonDetailPage, setIsExitingLessonDetailPage] = useState(false);


  useEffect(() => {
    if (currentPage !== 'profile' && currentPage !== 'lessonDetail') {
      if (selectedCategory && selectedClass) {
        setCurrentPage('learning');
      } else {
        setCurrentPage('welcome');
      }
    }
    setIsAppLoading(false);
  }, []); 

  const handleStartLearning = () => {
    setIsExitingWelcomePage(true);
    setTimeout(() => {
      setCurrentPage('selectCategory');
      setIsExitingWelcomePage(false); 
    }, WELCOME_EXIT_DURATION);
  };

  const handleCategoryConfirm = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage('selectClass');
  };

  const handleClassConfirm = (className: string) => {
    setSelectedClass(className);
    setIsLoadingTransition(true);

    setTimeout(() => {
      setIsFadingOutSelectClass(true);
      setTimeout(() => {
        setCurrentPage('learning');
        setIsLoadingTransition(false);
        setIsFadingOutSelectClass(false);
      }, SELECT_CLASS_EXIT_DURATION);
    }, LOADING_TRANSITION_DURATION);
  };

  const resetAllProgress = () => {
    setSelectedCategory(null);
    setSelectedClass(null);
    setUserXP(0);
    setUserLevel(0);
    setLessonsStatus({});
    setCurrentLessonInfo(null); 
  }

  const handleResetProgressAndLogout = () => {
    let exitDuration = 0;
    let exitSetter: React.Dispatch<React.SetStateAction<boolean>> | null = null;

    if (currentPage === 'profile') {
        exitSetter = setIsExitingProfilePage;
        exitDuration = PROFILE_EXIT_DURATION;
    } else if (currentPage === 'lessonDetail') {
        exitSetter = setIsExitingLessonDetailPage;
        exitDuration = LESSON_DETAIL_EXIT_DURATION;
    } else if (currentPage === 'learning') { 
        exitSetter = setIsExitingLearningPage; 
        exitDuration = LEARNING_PAGE_EXIT_DURATION;
    }


    if (exitSetter) {
        exitSetter(true);
        setTimeout(() => {
            resetAllProgress();
            setCurrentPage('welcome');
            exitSetter?.(false);
        }, exitDuration);
    } else {
        resetAllProgress();
        setCurrentPage('welcome');
    }
  };
  
  const handleChangeCourse = () => {
    if (currentPage === 'profile') {
        setIsExitingProfilePage(true);
        setTimeout(() => {
            setSelectedCategory(null); 
            setSelectedClass(null);
            setCurrentLessonInfo(null);
            setCurrentPage('selectCategory');
            setIsExitingProfilePage(false);
        }, PROFILE_EXIT_DURATION);
    } else {
        setSelectedCategory(null);
        setSelectedClass(null);
        setCurrentLessonInfo(null);
        setCurrentPage('selectCategory');
    }
  };

  const handleBackToCategorySelect = () => {
    setCurrentPage('selectCategory');
  };
  
  const updateUserProgress = useCallback((xpGained: number, completedLessonId?: string, nextLessonId?: string) => {
    if (xpGained > 0) {
      const newXP = userXP + xpGained;
      const xpToNextLevel = (userLevel + 1) * 100;
      let newLevel = userLevel;
      if (newXP >= xpToNextLevel) {
        newLevel += 1;
      }
      setUserXP(newXP);
      setUserLevel(newLevel);
    }

    setLessonsStatus(prevStatus => {
      const newStatus = {...prevStatus};
      if (completedLessonId && xpGained > 0) { // Only mark completed if XP gained (i.e., not failed)
        newStatus[completedLessonId] = 'completed';
      }
      if (nextLessonId && newStatus[nextLessonId] !== 'completed' && newStatus[completedLessonId] === 'completed') {
        newStatus[nextLessonId] = 'unlocked';
      }
      return newStatus;
    });
  }, [userXP, userLevel, setLessonsStatus, setUserLevel, setUserXP]);

  const handleNavigation = (page: Page) => {
    if ((page === 'learning' || page === 'profile' || page === 'lessonDetail') && (!selectedCategory || !selectedClass)) {
      handleResetProgressAndLogout(); 
      return;
    }

    let exitSetter: React.Dispatch<React.SetStateAction<boolean>> | null = null;
    let exitDuration = 0;

    if (currentPage === 'profile' && page !== 'profile') {
        exitSetter = setIsExitingProfilePage;
        exitDuration = PROFILE_EXIT_DURATION;
    } else if (currentPage === 'learning' && page !== 'learning' && page !== 'lessonDetail') {
        exitSetter = setIsExitingLearningPage;
        exitDuration = LEARNING_PAGE_EXIT_DURATION;
    } else if (currentPage === 'lessonDetail' && page !== 'lessonDetail') {
        exitSetter = setIsExitingLessonDetailPage;
        exitDuration = LESSON_DETAIL_EXIT_DURATION;
    }


    if (exitSetter) {
        exitSetter(true);
        setTimeout(() => {
            setCurrentPage(page);
            if (page !== 'lessonDetail') setCurrentLessonInfo(null); 
            exitSetter?.(false);
        }, exitDuration);
    } else {
        setCurrentPage(page);
        if (page !== 'lessonDetail') setCurrentLessonInfo(null);
    }
  };
  
  const handleProfileBackToLearning = () => {
    setIsExitingProfilePage(true);
    setTimeout(() => {
        setCurrentPage('learning');
        setIsExitingProfilePage(false);
    }, PROFILE_EXIT_DURATION);
  };

  const handleStartLesson = (lessonId: string, lessonTitle: string) => {
    setIsExitingLearningPage(true);
    setTimeout(() => {
      setCurrentLessonInfo({ id: lessonId, title: lessonTitle, lives: 5, currentQuestionIndex: 0 });
      setCurrentPage('lessonDetail');
      setIsExitingLearningPage(false);
    }, LEARNING_PAGE_EXIT_DURATION);
  };

  const handleBackFromLessonDetail = useCallback(() => { 
    setIsExitingLessonDetailPage(true);
    setTimeout(() => {
      setCurrentPage('learning');
      setCurrentLessonInfo(null); 
      setIsExitingLessonDetailPage(false);
    }, LESSON_DETAIL_EXIT_DURATION);
  }, [setCurrentPage, setCurrentLessonInfo, setIsExitingLessonDetailPage]);
  
  const handleCompleteLesson = useCallback((lessonId: string, xpGained: number, nextLessonId?: string) => {
    updateUserProgress(xpGained, lessonId, nextLessonId); 
    setCurrentLessonInfo(prev => prev ? {...prev, currentQuestionIndex: Infinity, lives: prev.lives } : null); 
    handleBackFromLessonDetail(); 
  }, [updateUserProgress, setCurrentLessonInfo, handleBackFromLessonDetail]);

  const updateLessonProgressInAppCallback = useCallback((lives: number, currentQuestionIndex: number) => {
    setCurrentLessonInfo(prev => {
        if (prev && prev.currentQuestionIndex !== Infinity) { // Only update if lesson is not marked as fully completed/exited
            return {...prev, lives, currentQuestionIndex };
        }
        return prev;
    });
  }, [setCurrentLessonInfo]);


  if (isAppLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Đang tải ứng dụng...</p>
      </div>
    );
  }
  
  const renderPage = () => {
    if (currentPage === 'welcome') {
      return <WelcomePage onStartLearning={handleStartLearning} isExiting={isExitingWelcomePage} />;
    }

    if (currentPage === 'selectCategory') {
      return (
        <SelectCategoryPage
          onCategoryConfirm={handleCategoryConfirm}
          onBack={handleResetProgressAndLogout}
        />
      );
    }

    if (currentPage === 'selectClass') {
      if (!selectedCategory) {
        handleNavigation('welcome');
        return null;
      }
      return (
        <SelectClassPage
          selectedCategory={selectedCategory}
          onClassConfirm={handleClassConfirm}
          onBack={handleBackToCategorySelect}
          isFadingOut={isFadingOutSelectClass}
        />
      );
    }

    if (currentPage === 'learning') {
      if (!selectedCategory || !selectedClass) {
        handleNavigation('welcome');
        return null;
      }
      const categoryInfo = CATEGORY_STYLES[selectedCategory];
      if (!categoryInfo) {
          console.error("Invalid category for learning page:", selectedCategory);
          handleNavigation('welcome');
          return null;
      }
      return (
        <LearningPathPage
          selectedCategory={selectedCategory}
          selectedClass={selectedClass}
          categoryDetails={categoryInfo}
          userXP={userXP}
          userLevel={userLevel}
          lessonsStatus={lessonsStatus}
          updateUserProgress={updateUserProgress}
          onResetProgress={handleResetProgressAndLogout}
          onNavigate={handleNavigation}
          onStartLesson={handleStartLesson} 
          isExiting={isExitingLearningPage} 
        />
      );
    }

    if (currentPage === 'lessonDetail') {
      if (!selectedCategory || !selectedClass || !currentLessonInfo) {
        handleNavigation('learning'); 
        return null; 
      }
      const categoryInfo = CATEGORY_STYLES[selectedCategory];
      if (!categoryInfo) {
        handleNavigation('welcome');
        return null;
      }
      return (
        <LessonDetailPage
          lessonId={currentLessonInfo.id}
          lessonTitle={currentLessonInfo.title}
          initialLives={currentLessonInfo.lives !== undefined ? currentLessonInfo.lives : 5}
          initialQuestionIndex={currentLessonInfo.currentQuestionIndex !== undefined ? currentLessonInfo.currentQuestionIndex : 0}
          selectedCategory={selectedCategory}
          categoryDetails={categoryInfo}
          onBackToMain={handleBackFromLessonDetail}
          onCompleteLesson={handleCompleteLesson} 
          updateLessonProgressInApp={updateLessonProgressInAppCallback}
          isExiting={isExitingLessonDetailPage}
        />
      );
    }

    if (currentPage === 'profile') {
      if (!selectedCategory || !selectedClass) {
          handleNavigation('welcome');
          return null;
      }
      const categoryThemeInfo = CATEGORY_STYLES[selectedCategory];
      if (!categoryThemeInfo) {
          console.error("Invalid category for profile page styles:", selectedCategory);
          handleNavigation('welcome');
          return null;
      }

      const classDataFromStatic = APP_LEARNING_PATH_DATA[selectedCategory]?.[selectedClass];
      if (!classDataFromStatic) {
          console.error(`Profile Page: Could not find static data for category "${selectedCategory}" and class "${selectedClass}".`);
          handleNavigation('welcome'); // Or show an error specific to profile
          return <div className="p-4 text-red-500">Lỗi: Không tải được dữ liệu hồ sơ. Vui lòng thử chọn lại Ngành/Lớp.</div>;
      }
      
      const totalLessonsCount = classDataFromStatic.totalLessons;
      const categoryDisplayName = classDataFromStatic.categoryName;
      const completedLessonsCount = Object.values(lessonsStatus).filter(status => status === 'completed').length;

      return (
        <ProfilePage
          userName="Học viên GiaoLy"
          selectedCategoryName={categoryDisplayName} // Using name from static data
          selectedClassName={selectedClass} // selectedClass is already the display name like "Xưng Tội 1"
          userXP={userXP}
          userLevel={userLevel}
          completedLessonsCount={completedLessonsCount}
          totalLessonsCount={totalLessonsCount}
          lessonsStatus={lessonsStatus}
          onNavigate={handleNavigation}
          onChangeCourse={handleChangeCourse}
          onBack={handleProfileBackToLearning} 
          categoryDetails={categoryThemeInfo} // For theming
          isExiting={isExitingProfilePage}
        />
      );
    }
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Trang không xác định</p>
      </div>
    );
  };

  return (
    <>
      {renderPage()}
      {isLoadingTransition && <LoadingOverlay />}
    </>
  );
};

export default App;

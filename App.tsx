
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomePage from './components/WelcomePage';
import SetUsernamePage from './components/SetUsernamePage'; 
import SelectCategoryPage from './components/SelectCategoryPage';
import SelectClassPage from './components/SelectClassPage';
import LearningPathPage from './components/learning/LearningPathPage';
import PrayersPage from './components/PrayersPage'; 
import ReviewPage from './components/review/ReviewPage'; 
import { APP_LEARNING_PATH_DATA } from './src/data/appStructureData';
import ProfilePage from './components/profile/ProfilePage';
import LessonDetailPage from './components/learning/LessonDetailPage';
import LoadingOverlay from './components/LoadingOverlay';
import LevelUpPopup from './components/popups/LevelUpPopup'; 
import { useLocalStorageState } from './hooks/useLocalStorageState';
import { Page, CategoryDetails, CATEGORY_STYLES, PrayerCategoryKey } from './types';
import { loadSound, playSound } from './src/utils/audioUtils';
import { isSameDay, isYesterday, formatDateToYYYYMMDD } from './src/utils/dateUtils';

// Import components that will be part of the static shell for main app pages
import MainHeader from './components/learning/Header'; // Main app header
import MainBottomNavigation from './components/learning/BottomNavigation'; // Main app bottom navigation
import SettingsPopup from './components/profile/SettingsPopup';


const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useLocalStorageState<PrayerCategoryKey | null>('giaoly_selectedCategory', null);
  const [selectedClass, setSelectedClass] = useLocalStorageState<string | null>('giaoly_selectedClass', null);
  const [userName, setUserName] = useLocalStorageState<string>('giaoly_userName', "Học viên GiaoLy");
  const [persistedAvatar, setPersistedAvatar] = useLocalStorageState<string | null>('giaoly_userAvatar', null);
  const [persistedReviewStreak, setPersistedReviewStreak] = useLocalStorageState<number>('giaoly_persistedReviewStreak', 0);


  const [currentPage, setCurrentPage] = useState<Page>(() => {
    const initialSelectedCategory = localStorage.getItem('giaoly_selectedCategory');
    const initialSelectedClass = localStorage.getItem('giaoly_selectedClass');
    if (initialSelectedCategory && initialSelectedCategory !== 'null' && initialSelectedClass && initialSelectedClass !== 'null') {
      return 'learning';
    }
    return 'welcome';
  });

  const [userXP, setUserXP] = useLocalStorageState<number>('giaoly_userXP', 0);
  const [userLevel, setUserLevel] = useLocalStorageState<number>('giaoly_userLevel', 0);
  const [lessonsStatus, setLessonsStatus] = useLocalStorageState<Record<string, 'unlocked' | 'completed'>>('giaoly_lessonsStatus', {});
  const [areSoundEffectsEnabled, setAreSoundEffectsEnabled] = useLocalStorageState<boolean>('giaoly_soundEffectsEnabled', true);

  const [userStreak, setUserStreak] = useLocalStorageState<number>('giaoly_userStreak', 0);
  const [lastStreakUpdate, setLastStreakUpdate] = useLocalStorageState<string | null>('giaoly_lastStreakUpdate', null);

  const [currentLessonInfo, setCurrentLessonInfo] = useLocalStorageState<{ id: string; title: string; lives?: number; currentQuestionIndex?: number} | null>('giaoly_currentLessonInfo', null);

  const [isAppLoading, setIsAppLoading] = useState(true);
  const [isLoadingTransition, setIsLoadingTransition] = useState(false); // For SelectClassPage loading
  const [showLevelUpPopup, setShowLevelUpPopup] = useState(false);
  const [newlyAchievedLevel, setNewlyAchievedLevel] = useState(0);
  const [levelUpSound, setLevelUpSound] = useState<AudioBuffer | null>(null);
  const [targetLessonIdForScroll, setTargetLessonIdForScroll] = useState<string | null>(null);
  const [isSettingsPopupOpen, setIsSettingsPopupOpen] = useState(false);


  useEffect(() => {
    const initSounds = async () => {
      const loadedLevelUpSound = await loadSound('/sounds/level_up.mp3');
      setLevelUpSound(loadedLevelUpSound);
    };
    initSounds();

    if (userStreak > 0 && lastStreakUpdate) {
      const today = new Date();
      const lastUpdateDate = new Date(lastStreakUpdate);
      if (!isSameDay(lastUpdateDate, today) && !isYesterday(lastUpdateDate, today)) {
        setUserStreak(0);
      }
    }
    
    // Initial page validation logic
    if (currentPage === 'learning' || currentPage === 'profile' || currentPage === 'lessonDetail' || currentPage === 'prayers' || currentPage === 'review') {
        if (!selectedCategory || !selectedClass) setCurrentPage('welcome');
    } else if (currentPage === 'selectClass' && !selectedCategory) {
        setCurrentPage(userName === "Học viên GiaoLy" || !userName ? 'setUsername' : 'selectCategory');
    } else if (currentPage === 'selectCategory' && (userName === "Học viên GiaoLy" || !userName)) {
        setCurrentPage('setUsername');
    }

    setIsAppLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleStartLearning = () => {
    setCurrentPage('setUsername'); 
  };
  
  const handleUsernameConfirm = (name: string) => {
    setUserName(name);
    setCurrentPage('selectCategory');
  };

  const handleResumeLearning = () => {
    setCurrentPage('learning');
  };

  const handleStartOverFromWelcome = () => {
    resetAllProgress(); 
    handleStartLearning(); 
  };


  const handleCategoryConfirm = (category: PrayerCategoryKey) => {
    setSelectedCategory(category);
    setCurrentPage('selectClass');
  };

  const handleClassConfirm = (className: string) => {
    setSelectedClass(className);
    setIsLoadingTransition(true); // Start loading animation
    setTimeout(() => {
        setCurrentPage('learning');
        setIsLoadingTransition(false); // End loading animation
    }, 700); // Simulate loading time
  };

  const resetAllProgress = () => {
    setSelectedCategory(null);
    setSelectedClass(null);
    setUserXP(0);
    setUserLevel(0);
    setLessonsStatus({});
    setCurrentLessonInfo(null);
    setTargetLessonIdForScroll(null);
    setUserStreak(0);
    setLastStreakUpdate(null);
    setPersistedReviewStreak(0); 
  };

  const handleResetProgressAndLogout = () => {
    resetAllProgress();
    setUserName("Học viên GiaoLy"); 
    setPersistedAvatar(null); 
    setCurrentPage('welcome');
    setIsSettingsPopupOpen(false);
  };

  const handleChangeCourse = () => {
    setSelectedCategory(null);
    setSelectedClass(null);
    setCurrentLessonInfo(null); 
    setTargetLessonIdForScroll(null); 
    setCurrentPage('selectCategory'); 
    setIsSettingsPopupOpen(false);
  };


  const handleBackToWelcome = () => {
    setCurrentPage('welcome');
  };

  const handleBackToSetUsername = () => {
    setCurrentPage('setUsername');
  };

  const handleBackToCategorySelect = () => {
    setCurrentPage('selectCategory');
  };


  const updateUserProgress = useCallback((xpGained: number, completedLessonId?: string, nextLessonId?: string) => {
    const oldLevel = userLevel;

    if (completedLessonId && lessonsStatus[completedLessonId] === 'completed' && xpGained > 0) {
        setLessonsStatus(prevStatus => {
            const newStatus = {...prevStatus};
            if (nextLessonId && newStatus[nextLessonId] !== 'completed' && newStatus[completedLessonId] === 'completed') {
                newStatus[nextLessonId] = 'unlocked';
            }
            return newStatus;
        });
        return;
    }

    let newXP = userXP;
    let newLevel = userLevel;

    if (xpGained > 0) {
      newXP = userXP + xpGained;
      const xpToNextLevel = (userLevel + 1) * 100;
      if (newXP >= xpToNextLevel) {
        newLevel += 1;
        let tempXP = newXP;
        let tempLevel = userLevel;
        while(tempXP >= (tempLevel + 1) * 100) {
            tempXP -= (tempLevel + 1) * 100;
            tempLevel++;
        }
        newLevel = tempLevel;
      }
      setUserXP(newXP);
      setUserLevel(newLevel);
    }

    if (newLevel > oldLevel) {
      setNewlyAchievedLevel(newLevel);
      setShowLevelUpPopup(true);
      if (areSoundEffectsEnabled) playSound(levelUpSound);
    }

    setLessonsStatus(prevStatus => {
      const newStatus = {...prevStatus};
      if (completedLessonId && xpGained > 0) {
        newStatus[completedLessonId] = 'completed';
      }
      if (nextLessonId && newStatus[nextLessonId] !== 'completed' && (newStatus[completedLessonId] === 'completed' || !completedLessonId)) {
        newStatus[nextLessonId] = 'unlocked';
      }
      return newStatus;
    });

    if (completedLessonId && xpGained > 0) {
        const today = new Date();
        const todayString = formatDateToYYYYMMDD(today);

        if (!lastStreakUpdate || userStreak === 0) {
            setUserStreak(1);
            setLastStreakUpdate(todayString);
        } else {
            const lastUpdateDate = new Date(lastStreakUpdate);
            if (isSameDay(lastUpdateDate, today)) {
                if (userStreak === 0) {
                    setUserStreak(1);
                }
            } else if (isYesterday(lastUpdateDate, today)) {
                setUserStreak(prev => prev + 1);
                setLastStreakUpdate(todayString);
            } else {
                setUserStreak(1);
                setLastStreakUpdate(todayString);
            }
        }
    }

  }, [userXP, userLevel, lessonsStatus, setLessonsStatus, setUserLevel, setUserXP, levelUpSound, areSoundEffectsEnabled, userStreak, lastStreakUpdate, setUserStreak, setLastStreakUpdate]);

  const handleNavigation = (page: Page) => {
    if ((page === 'learning' || page === 'profile' || page === 'lessonDetail' || page === 'prayers' || page === 'review')) {
      if (!selectedCategory || !selectedClass) {
          setCurrentPage('welcome');
          resetAllProgress(); 
          setUserName("Học viên GiaoLy");
          setPersistedAvatar(null);
          return;
      }
    } else if (page === 'selectCategory' && (userName === "Học viên GiaoLy" || !userName)) {
        setCurrentPage('setUsername');
        return;
    } else if (page === 'selectClass' && !selectedCategory) {
        setCurrentPage(userName === "Học viên GiaoLy" || !userName ? 'setUsername' : 'selectCategory');
        return;
    }
    
    if (page !== 'lessonDetail') setCurrentLessonInfo(null);
    setCurrentPage(page);
  };

  const handleProfileBackToLearning = () => {
    handleNavigation('learning'); 
  };


  const handleStartLesson = (lessonId: string, lessonTitle: string) => {
    setCurrentLessonInfo({ id: lessonId, title: lessonTitle, lives: 5, currentQuestionIndex: 0 });
    setCurrentPage('lessonDetail');
  };

  const handleBackFromLessonDetail = useCallback(() => {
    if (currentLessonInfo?.id) {
      setTargetLessonIdForScroll(currentLessonInfo.id);
    }
    setCurrentPage('learning');
    setCurrentLessonInfo(null);
  }, [currentLessonInfo, setCurrentPage, setCurrentLessonInfo, setTargetLessonIdForScroll]);

  const handleCompleteLesson = useCallback((lessonId: string, xpGained: number, nextLessonId?: string) => {
    updateUserProgress(xpGained, lessonId, nextLessonId);
    setCurrentLessonInfo(prev => prev ? {...prev, currentQuestionIndex: Infinity, lives: prev.lives } : null);
  }, [updateUserProgress, setCurrentLessonInfo]);

  const updateLessonProgressInAppCallback = useCallback((lives: number, currentQuestionIndex: number) => {
    setCurrentLessonInfo(prev => {
        if (prev && prev.currentQuestionIndex !== Infinity) {
            return {...prev, lives, currentQuestionIndex };
        }
        return prev;
    });
  }, [setCurrentLessonInfo]);

  const handleScrollTargetProcessed = useCallback(() => {
    setTargetLessonIdForScroll(null);
  }, [setTargetLessonIdForScroll]);

  const mainAppPages: Page[] = ['learning', 'prayers', 'review', 'profile'];
  const isMainAppPageActive = mainAppPages.includes(currentPage);
  const currentCategoryDetails = selectedCategory ? CATEGORY_STYLES[selectedCategory] : null;

  const isStreakActiveToday = useMemo(() => {
    if (userStreak === 0 || !lastStreakUpdate) return false;
    const today = new Date();
    const lastUpdateDate = new Date(lastStreakUpdate);
    return isSameDay(lastUpdateDate, today);
  }, [userStreak, lastStreakUpdate]);


  if (isAppLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Đang tải ứng dụng...</p>
      </div>
    );
  }

  const renderPage = () => {
    // Onboarding Pages
    if (currentPage === 'welcome') {
      return (
        <WelcomePage
          key="welcome"
          onStartLearning={handleStartLearning}
          previouslySelectedCategory={(selectedCategory && selectedClass) ? selectedCategory : null} 
          previouslySelectedClassName={(selectedCategory && selectedClass) ? selectedClass : null} 
          onResumeLearning={handleResumeLearning}
          onStartOver={handleStartOverFromWelcome}
        />
      );
    }
    if (currentPage === 'setUsername') {
      return (
        <SetUsernamePage
          key="setUsername"
          currentName={userName}
          onConfirm={handleUsernameConfirm}
          onBack={handleBackToWelcome}
          persistedAvatar={persistedAvatar}
          setPersistedAvatar={setPersistedAvatar}
        />
      );
    }
    if (currentPage === 'selectCategory') {
      if (userName === "Học viên GiaoLy" || !userName) { 
          handleNavigation('setUsername'); return null; 
      }
      return ( <SelectCategoryPage key="selectCategory" userName={userName} onCategoryConfirm={handleCategoryConfirm} onBack={handleBackToSetUsername} /> );
    }
    if (currentPage === 'selectClass') {
      if (!selectedCategory || userName === "Học viên GiaoLy" || !userName) {
        handleNavigation(userName === "Học viên GiaoLy" || !userName ? 'setUsername' : 'selectCategory'); return null;
      }
      return ( <SelectClassPage key="selectClass" userName={userName} selectedCategory={selectedCategory} onClassConfirm={handleClassConfirm} onBack={handleBackToCategorySelect} /> );
    }

    // Main App Pages - These now render only their core content
    if (!selectedCategory || !selectedClass || !currentCategoryDetails) {
      if (isMainAppPageActive || currentPage === 'lessonDetail') {
        handleNavigation('welcome'); // Should redirect if essential data is missing
        return <motion.div key="redirecting">Đang chuyển hướng...</motion.div>;
      }
    }

    if (currentPage === 'learning' && selectedCategory && selectedClass && currentCategoryDetails) {
      return (
        <LearningPathPage
          key="learning"
          selectedCategory={selectedCategory}
          selectedClass={selectedClass}
          categoryDetails={currentCategoryDetails}
          userXP={userXP}
          userLevel={userLevel}
          lessonsStatus={lessonsStatus}
          updateUserProgress={updateUserProgress}
          onResetProgress={handleResetProgressAndLogout} 
          onNavigate={handleNavigation} 
          onStartLesson={handleStartLesson}
          targetLessonIdForScroll={targetLessonIdForScroll}
          onScrollTargetProcessed={handleScrollTargetProcessed}
          userStreak={userStreak} 
          lastStreakUpdate={lastStreakUpdate} 
        />
      );
    }
    if (currentPage === 'prayers' && selectedCategory && selectedClass && currentCategoryDetails) {
      return (
        <PrayersPage
          key="prayers"
          selectedCategory={selectedCategory}
          categoryDetails={currentCategoryDetails}
          onNavigate={handleNavigation} 
          userXP={userXP}
          userLevel={userLevel}
          userStreak={userStreak}
          lastStreakUpdate={lastStreakUpdate}
        />
      );
    }
    if (currentPage === 'review' && selectedCategory && selectedClass && currentCategoryDetails) {
      return (
        <ReviewPage
          key="review"
          lessonsStatus={lessonsStatus}
          categoryDetails={currentCategoryDetails}
          onNavigate={handleNavigation} 
          areSoundEffectsEnabled={areSoundEffectsEnabled}
          persistedReviewStreak={persistedReviewStreak}
          setPersistedReviewStreak={setPersistedReviewStreak}
          userName={userName}
          userXP={userXP}
          userLevel={userLevel}
          userStreak={userStreak}
          lastStreakUpdate={lastStreakUpdate}
        />
      );
    }
    if (currentPage === 'profile' && selectedCategory && selectedClass && currentCategoryDetails) {
      const classDataFromStatic = APP_LEARNING_PATH_DATA[selectedCategory]?.[selectedClass];
      if (!classDataFromStatic) {
        handleNavigation('welcome'); return <motion.div key="profile-error">Lỗi tải dữ liệu hồ sơ.</motion.div>;
      }
      const totalLessonsCount = classDataFromStatic.totalLessons;
      const categoryDisplayName = classDataFromStatic.categoryName;
      const completedLessonsCount = Object.values(lessonsStatus).filter(status => status === 'completed').length;
      return (
        <ProfilePage
          key="profile"
          userName={userName}
          setUserName={setUserName}
          selectedCategoryName={categoryDisplayName}
          selectedClassName={selectedClass}
          userXP={userXP}
          userLevel={userLevel}
          completedLessonsCount={completedLessonsCount}
          totalLessonsCount={totalLessonsCount}
          lessonsStatus={lessonsStatus}
          onNavigate={handleNavigation} 
          onChangeCourse={() => { setIsSettingsPopupOpen(true); }} 
          onResetProgress={() => { setIsSettingsPopupOpen(true); }} 
          onBack={handleProfileBackToLearning} 
          categoryDetails={currentCategoryDetails}
          areSoundEffectsEnabled={areSoundEffectsEnabled}
          setAreSoundEffectsEnabled={setAreSoundEffectsEnabled}
          appVersion="1.0.4" 
          userStreak={userStreak}
          lastStreakUpdate={lastStreakUpdate}
          persistedAvatar={persistedAvatar} 
          setPersistedAvatar={setPersistedAvatar}
        />
      );
    }
    if (currentPage === 'lessonDetail' && selectedCategory && currentLessonInfo && currentCategoryDetails) {
      return (
        <LessonDetailPage
          key="lessonDetail"
          lessonId={currentLessonInfo.id}
          lessonTitle={currentLessonInfo.title}
          initialLives={currentLessonInfo.lives !== undefined ? currentLessonInfo.lives : 5}
          initialQuestionIndex={currentLessonInfo.currentQuestionIndex !== undefined ? currentLessonInfo.currentQuestionIndex : 0}
          selectedCategory={selectedCategory}
          categoryDetails={currentCategoryDetails}
          onBackToMain={handleBackFromLessonDetail}
          onCompleteLesson={handleCompleteLesson}
          updateLessonProgressInApp={updateLessonProgressInAppCallback}
          areSoundEffectsEnabled={areSoundEffectsEnabled}
        />
      );
    }

    return <motion.div key="unknown-page" className="flex items-center justify-center min-h-screen">Trang không xác định</motion.div>;
  };
  
  const getActiveTabForBottomNav = (): 'home' | 'shield' | 'review' | 'bookmark' | 'user' => {
    if (currentPage === 'learning') return 'home';
    if (currentPage === 'prayers') return 'shield';
    if (currentPage === 'review') return 'review';
    if (currentPage === 'profile') return 'user';
    return 'home'; // Default or for pages not in bottom nav
  };

  return (
    <div className="flex flex-col h-screen">
      {isMainAppPageActive && currentCategoryDetails && (
        <MainHeader
          categoryColors={currentCategoryDetails.colors}
          userLevel={userLevel}
          userXP={userXP}
          xpToNextLevel={(userLevel + 1) * 100}
          userStreak={userStreak}
          isStreakActiveToday={isStreakActiveToday}
          showSettingsIcon={isMainAppPageActive} 
          onSettingsClick={() => setIsSettingsPopupOpen(true)}
          className={isSettingsPopupOpen ? 'opacity-50 pointer-events-none transition-opacity duration-150' : 'transition-opacity duration-150'}
        />
      )}
      
      <AnimatePresence mode="wait" initial={false}>
        {renderPage()}
      </AnimatePresence>

      {isMainAppPageActive && (
        <MainBottomNavigation
          activeTab={getActiveTabForBottomNav()}
          onNavigate={handleNavigation}
        />
      )}

      {isLoadingTransition && <LoadingOverlay />}
      {showLevelUpPopup && currentCategoryDetails && (
        <LevelUpPopup
          isOpen={showLevelUpPopup}
          onClose={() => setShowLevelUpPopup(false)}
          level={newlyAchievedLevel}
          categoryDetails={currentCategoryDetails}
          areSoundEffectsEnabled={areSoundEffectsEnabled}
        />
      )}
      {isSettingsPopupOpen && currentCategoryDetails && (
        <SettingsPopup
            isOpen={isSettingsPopupOpen}
            onClose={() => setIsSettingsPopupOpen(false)}
            onResetProgress={handleResetProgressAndLogout}
            onChangeCourse={handleChangeCourse}
            areSoundEffectsEnabled={areSoundEffectsEnabled}
            setAreSoundEffectsEnabled={setAreSoundEffectsEnabled}
            appVersion="1.0.4"
            categoryDetails={currentCategoryDetails}
        />
      )}
    </div>
  );
};

export default App;

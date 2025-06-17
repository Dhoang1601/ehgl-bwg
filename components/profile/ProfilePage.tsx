

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Page, CategoryDetails } from '../../types';
// BottomNavigation and ProfileHeader are now handled/rendered in App.tsx
import StatisticCard from './StatisticCard';
import AchievementCard from './AchievementCard';
import { AvatarPlaceholderIcon, FlameIcon, TrophyIcon, BookOpenIcon, TargetIcon, AwardIcon, PencilIcon } from '../icons/ProfileIcons';
// SettingsPopup is now invoked from App.tsx via global Header's settings icon when on profile page
import { APP_LEARNING_PATH_DATA } from '../../src/data/appStructureData'; 


interface ProfilePageProps {
  userName: string;
  setUserName: (name: string) => void; 
  selectedCategoryName: string; 
  selectedClassName: string;    
  userXP: number;
  userLevel: number;
  completedLessonsCount: number;
  totalLessonsCount: number;
  lessonsStatus: Record<string, 'unlocked' | 'completed'>; 
  onNavigate: (page: Page) => void; // For BottomNav, now handled by App.tsx
  onChangeCourse: () => void; // Now called from SettingsPopup in App.tsx
  onResetProgress: () => void;  // Now called from SettingsPopup in App.tsx
  onBack: () => void; // Could be used if there's an internal back button still
  categoryDetails: CategoryDetails; 
  areSoundEffectsEnabled: boolean; 
  setAreSoundEffectsEnabled: (enabled: boolean) => void; 
  appVersion: string; 
  userStreak: number; 
  lastStreakUpdate: string | null; 
  persistedAvatar: string | null; 
  setPersistedAvatar: (avatar: string | null) => void; 
  // isExiting prop removed
}

const ProfilePage: React.FC<ProfilePageProps> = ({
  userName,
  setUserName,
  selectedCategoryName,
  selectedClassName,
  userXP,
  userLevel,
  completedLessonsCount,
  totalLessonsCount,
  lessonsStatus,
  onNavigate, // Prop kept for potential future use, but BottomNav is external
  onChangeCourse, // Prop kept, but settings popup is external
  onResetProgress, // Prop kept, but settings popup is external
  onBack, // Prop kept
  categoryDetails,
  areSoundEffectsEnabled, // Prop kept
  setAreSoundEffectsEnabled, // Prop kept
  appVersion, // Prop kept
  userStreak, 
  lastStreakUpdate, 
  persistedAvatar, 
  setPersistedAvatar, 
}) => {
  const [isProgressPopoverOpen, setIsProgressPopoverOpen] = useState(false);
  const [popoverCompletedLessons, setPopoverCompletedLessons] = useState<string[]>([]);
  const progressPopoverTimeoutRef = useRef<number | null>(null);

  const [isEditingName, setIsEditingName] = useState(false);
  const [editableName, setEditableName] = useState(userName);
  const fileInputRef = useRef<HTMLInputElement>(null);
  // isSettingsPopupOpen state is now managed in App.tsx

  useEffect(() => {
    if (!isEditingName) {
      setEditableName(userName); 
    }
  }, [userName, isEditingName]);

  const progressPercentage = totalLessonsCount > 0 ? (completedLessonsCount / totalLessonsCount) * 100 : 0;

  const allAchievements = [
    { id: 'ach_xp_1', name: 'Tân Binh', icon: AwardIcon, xpThreshold: 10 },
    { id: 'ach_lessons_1', name: 'Siêng Năng', icon: AwardIcon, lessonThreshold: 5 },
    { id: 'ach_level_1', name: 'Cấp 1', icon: TrophyIcon, levelThreshold: 1 },
    { id: 'ach_xp_50', name: 'Năng Nổ', icon: AwardIcon, xpThreshold: 50 },
    { id: 'ach_lessons_10', name: 'Chăm Chỉ', icon: AwardIcon, lessonThreshold: 10 },
    { id: 'ach_level_3', name: 'Cấp 3', icon: TrophyIcon, levelThreshold: 3 },
    { id: 'ach_complete_all', name: 'Hoàn Tất', icon: TrophyIcon, lessonThreshold: totalLessonsCount > 0 ? totalLessonsCount : 999 },
    { id: 'ach_xp_200', name: 'Kỳ Cựu', icon: AwardIcon, xpThreshold: 200 },
  ];

  const processedAchievements = allAchievements.map(ach => {
    let earned = false;
    if (ach.xpThreshold !== undefined && userXP >= ach.xpThreshold) earned = true;
    if (ach.lessonThreshold !== undefined && completedLessonsCount >= ach.lessonThreshold) earned = true;
    if (ach.levelThreshold !== undefined && userLevel >= ach.levelThreshold) earned = true;
    if (ach.id === 'ach_complete_all') {
        earned = totalLessonsCount > 0 && completedLessonsCount >= totalLessonsCount;
    }
    return { ...ach, earned };
  }).sort((a,b) => (a.earned === b.earned) ? 0 : a.earned ? -1 : 1); 


  const getDataKeyForCategory = (styleKey: 'green' | 'blue' | 'yellow'): string => {
    if (styleKey === 'green') return 'xungtoi';
    if (styleKey === 'blue') return 'themsuc';
    if (styleKey === 'yellow') return 'songdao';
    console.warn("ProfilePage: Unknown styleKey for data lookup:", styleKey);
    return ''; 
  };
  
  const handleProgressMouseEnter = () => {
    if (progressPopoverTimeoutRef.current) {
      clearTimeout(progressPopoverTimeoutRef.current);
      progressPopoverTimeoutRef.current = null;
    }
    const dataCategoryKey = getDataKeyForCategory(categoryDetails.styleKey);
    const categoryPathData = APP_LEARNING_PATH_DATA[dataCategoryKey]?.[selectedClassName];

    if (categoryPathData) {
      const completed: string[] = [];
      categoryPathData.units.forEach(unit => {
        unit.lessons.forEach(lesson => {
          if (lessonsStatus[lesson.id] === 'completed') {
            completed.push(lesson.title);
          }
        });
      });
      setPopoverCompletedLessons(completed);
      setIsProgressPopoverOpen(true);
    } else {
        console.warn(`ProfilePage: Could not find path data for ${dataCategoryKey} - ${selectedClassName}`);
        setPopoverCompletedLessons([]);
        setIsProgressPopoverOpen(true); 
    }
  };

  const handleProgressMouseLeave = () => {
    progressPopoverTimeoutRef.current = window.setTimeout(() => {
      setIsProgressPopoverOpen(false);
    }, 200);
  };

  const handlePopoverMouseEnter = () => {
    if (progressPopoverTimeoutRef.current) {
      clearTimeout(progressPopoverTimeoutRef.current);
      progressPopoverTimeoutRef.current = null;
    }
  };

  const handlePopoverMouseLeave = () => {
    setIsProgressPopoverOpen(false);
  };

  const handleNameEditToggle = () => {
    if (isEditingName) { 
      setEditableName(userName); 
    }
    setIsEditingName(!isEditingName);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditableName(e.target.value);
  };

  const handleNameSave = () => {
    if (editableName.trim() === "") {
        alert("Tên không được để trống.");
        setEditableName(userName); 
        return;
    }
    setUserName(editableName);
    setIsEditingName(false);
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPersistedAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleRemoveAvatar = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    setPersistedAvatar(null);
  };

  // Settings Popup is now opened via global header in App.tsx

  const nameEditButtonBgColor = categoryDetails.colors.progressBarFill; 
  const nameEditButtonHoverBgColor = nameEditButtonBgColor.replace('bg-', 'hover:bg-').replace('-500', '-600').replace('-600','-700'); 
  const nameEditButtonFocusRing = categoryDetails.colors.logo.replace('text-', 'focus:ring-');
  
  const pageMotionProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
  };

  return (
    <motion.div 
      {...pageMotionProps}
      className="flex flex-col h-full bg-gray-50" 
      style={{ paddingTop: '52px', paddingBottom: '64px' }} // Offset for external Header and BottomNav
    >
      {/* ProfileHeader is removed, MainHeader is rendered in App.tsx */}
      <main className="flex-grow overflow-y-auto px-4 space-y-6 pt-4 pb-4"> {/* Internal padding */}
        <section className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-auto"> {/* mt-0 is fine as parent pt-4 handles it */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-28 h-28 mb-3">
              <div 
                className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center shadow-md cursor-pointer overflow-hidden"
                onClick={handleAvatarClick}
                role="button"
                aria-label="Thay đổi ảnh đại diện"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleAvatarClick()}
              >
                {persistedAvatar ? (
                  <img src={persistedAvatar} alt="User Avatar" className="w-full h-full rounded-full object-cover" />
                ) : (
                  <AvatarPlaceholderIcon className="w-16 h-16 text-gray-500" />
                )}
              </div>
              <button
                onClick={handleAvatarClick}
                className="absolute bottom-0 right-0 bg-green-600 text-white p-2 rounded-full shadow-md border-2 border-white hover:bg-green-700 transition-colors"
                aria-label="Chỉnh sửa ảnh đại diện"
              >
                <PencilIcon className="w-4 h-4" />
              </button>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept="image/png, image/jpeg, image/gif"
            />
            {persistedAvatar && (
              <button 
                onClick={handleRemoveAvatar}
                className="text-xs text-red-500 hover:text-red-700 underline mb-3"
                aria-label="Xóa avatar hiện tại"
              >
                Xóa Avatar
              </button>
            )}

            {!isEditingName ? (
              <div className="flex items-center justify-center mt-2">
                <h2 className="text-2xl font-bold text-gray-900">{userName}</h2>
                <button onClick={handleNameEditToggle} className="ml-2 p-1 text-green-600 hover:text-green-700" aria-label="Chỉnh sửa tên">
                  <PencilIcon className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="w-full max-w-xs mt-2">
                <input 
                  type="text" 
                  value={editableName} 
                  onChange={handleNameChange} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 text-center text-lg"
                  aria-label="Nhập tên mới"
                />
                <div className="flex justify-center space-x-2 mt-2">
                  <button 
                    onClick={handleNameSave} 
                    className={`px-4 py-1.5 text-sm font-medium text-white rounded-md ${nameEditButtonBgColor} ${nameEditButtonHoverBgColor} focus:outline-none focus:ring-2 focus:ring-offset-1 ${nameEditButtonFocusRing}`}
                  >
                    Lưu
                  </button>
                  <button 
                    onClick={handleNameEditToggle} 
                    className="px-4 py-1.5 text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-400"
                  >
                    Hủy
                  </button>
                </div>
              </div>
            )}
            
            <p className="text-sm text-gray-500 mt-1">{selectedClassName} ({selectedCategoryName})</p>
          </div>
        </section>

        <section className="w-full max-w-md mx-auto"> 
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 px-1">THỐNG KÊ</h3>
          <div className="grid grid-cols-2 gap-4">
            <StatisticCard
              label="Day streak"
              value={userStreak.toString()} 
              Icon={FlameIcon}
              iconBgColor={lastStreakUpdate && new Date(lastStreakUpdate).toDateString() === new Date().toDateString() && userStreak > 0 ? "bg-orange-500" : "bg-gray-400"}
              bgColor={lastStreakUpdate && new Date(lastStreakUpdate).toDateString() === new Date().toDateString() && userStreak > 0 ? "bg-orange-50" : "bg-gray-100"}
              borderColor={lastStreakUpdate && new Date(lastStreakUpdate).toDateString() === new Date().toDateString() && userStreak > 0 ? "border-orange-200" : "border-gray-200"}
              textColor={lastStreakUpdate && new Date(lastStreakUpdate).toDateString() === new Date().toDateString() && userStreak > 0 ? "text-orange-600" : "text-gray-500"}
            />
            <StatisticCard
              label="Total XP"
              value={userXP.toString()}
              Icon={TrophyIcon}
              iconBgColor="bg-yellow-500"
              bgColor="bg-yellow-50"
              borderColor="border-yellow-200"
              textColor="text-yellow-600"
            />
            <StatisticCard
              label="Bài học"
              value={completedLessonsCount.toString()}
              Icon={BookOpenIcon}
              iconBgColor="bg-blue-500"
              bgColor="bg-blue-50"
              borderColor="border-blue-200"
              textColor="text-blue-600"
            />
            <StatisticCard
              label="Level"
              value={userLevel.toString()}
              Icon={TargetIcon}
              iconBgColor="bg-green-500"
              bgColor="bg-green-50"
              borderColor="border-green-200"
              textColor="text-green-600"
            />
          </div>
        </section>

        <section 
          className="relative w-full max-w-md mx-auto"  
          onMouseEnter={handleProgressMouseEnter}
          onMouseLeave={handleProgressMouseLeave}
          onFocus={handleProgressMouseEnter}
          onBlur={handleProgressMouseLeave}
          tabIndex={0}
          aria-describedby="progress-popover"
        >
          <div className="flex justify-between items-center mb-1">
            <h3 className="text-base text-gray-600">Tiến độ khóa học</h3>
            <p className="text-sm text-gray-800 font-medium">{completedLessonsCount}/{totalLessonsCount}</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className={`${categoryDetails.colors.progressBarFill} h-2.5 rounded-full transition-all duration-500 ease-out`}
              style={{ width: `${progressPercentage.toFixed(1)}%` }}
              aria-valuenow={progressPercentage}
              aria-valuemin={0}
              aria-valuemax={100}
              role="progressbar"
              aria-label={`Tiến độ khóa học: ${progressPercentage.toFixed(1)}%`}
            ></div>
          </div>
          <p className="text-xs text-gray-500 text-center mt-1">
            {progressPercentage.toFixed(1)}% hoàn thành
          </p>

          {isProgressPopoverOpen && (
            <div
              id="progress-popover"
              role="tooltip"
              onMouseEnter={handlePopoverMouseEnter}
              onMouseLeave={handlePopoverMouseLeave}
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-gray-800 text-white text-xs rounded-lg shadow-xl z-20 transition-opacity duration-200 ease-in-out opacity-100"
              aria-live="polite"
            >
              {popoverCompletedLessons.length > 0 ? (
                <>
                  <p className="font-semibold mb-1.5 text-center border-b border-gray-700 pb-1">Bài đã hoàn thành:</p>
                  <ul className="list-none space-y-0.5 max-h-32 overflow-y-auto pr-1 text-left">
                    {popoverCompletedLessons.map((title, index) => (
                      <li key={index} className="truncate pl-2 before:content-['✓_'] before:mr-1 before:text-green-400">{title}</li>
                    ))}
                  </ul>
                </>
              ) : (
                <p className="text-center">Chưa có bài nào hoàn thành.</p>
              )}
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 
                           border-x-8 border-x-transparent 
                           border-t-8 border-t-gray-800"
                aria-hidden="true"
              />
            </div>
          )}
        </section>

        <section className="w-full max-w-md mx-auto"> 
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Thành Tích</h3>
          {processedAchievements.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {processedAchievements.map(ach => (
                <AchievementCard
                  key={ach.id}
                  name={ach.name}
                  Icon={ach.icon}
                  isEarned={ach.earned}
                />
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500 text-center py-4">Chưa có thành tích nào. Cố gắng lên!</p>
          )}
        </section>
        
        <div className="h-2"></div> {/* Small spacer at the bottom if needed */}
      </main>
      {/* BottomNavigation is now external, rendered in App.tsx */}
      {/* SettingsPopup is now opened from global Header in App.tsx */}
    </motion.div>
  );
};

export default ProfilePage;

import React, { useState, useEffect } from 'react';
import { Page, CategoryDetails } from '../../types'; // Import CategoryDetails
import BottomNavigation from '../learning/BottomNavigation';
import ProfileHeader from './ProfileHeader';
import StatisticCard from './StatisticCard';
import AchievementCard from './AchievementCard';
import { AvatarPlaceholderIcon, FlameIcon, TrophyIcon, BookOpenIcon, TargetIcon, AwardIcon, RefreshCwIcon } from '../icons/ProfileIcons';

interface ProfilePageProps {
  userName: string;
  selectedCategoryName: string;
  selectedClassName: string;
  userXP: number;
  userLevel: number;
  completedLessonsCount: number;
  totalLessonsCount: number;
  lessonsStatus: Record<string, 'unlocked' | 'completed'>; 
  onNavigate: (page: Page) => void;
  onChangeCourse: () => void;
  onBack: () => void;
  categoryDetails: CategoryDetails; // Added to pass logo color
  isExiting?: boolean; // Added for fade-out transition
}

const ProfilePage: React.FC<ProfilePageProps> = ({
  userName,
  selectedCategoryName,
  selectedClassName,
  userXP,
  userLevel,
  completedLessonsCount,
  totalLessonsCount,
  lessonsStatus,
  onNavigate,
  onChangeCourse,
  onBack,
  categoryDetails,
  isExiting = false,
}) => {
  const [pageVisible, setPageVisible] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => setPageVisible(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  const progressPercentage = totalLessonsCount > 0 ? (completedLessonsCount / totalLessonsCount) * 100 : 0;

  const achievements = [
    { id: '1', name: 'First Steps', icon: AwardIcon, earned: completedLessonsCount > 0 },
    { id: '2', name: 'Quick Learner', icon: AwardIcon, earned: userXP > 50 },
    { id: '3', name: 'Dedicated', icon: AwardIcon, earned: completedLessonsCount > 5 },
    { id: '4', name: 'Master', icon: AwardIcon, earned: userLevel > 1 },
  ];

  const earnedAchievements = achievements.filter(ach => ach.earned);

  return (
    <div 
      className={`flex flex-col h-screen bg-gray-50 transition-opacity duration-300 ease-in-out ${(isExiting || !pageVisible) ? 'opacity-0' : 'opacity-100'}`}
    >
      <ProfileHeader
        onLogoClick={onBack} // Changed from onBack to onLogoClick, implying back navigation
        logoColor={categoryDetails.colors.logo} // Pass logo color
        onSettings={() => alert('Settings clicked!')} 
      />
      <main className="flex-grow overflow-y-auto pt-16 pb-24 px-4 space-y-6"> 
        <section className="flex flex-col items-center text-center mt-4">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-3">
            <AvatarPlaceholderIcon className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-800">{userName}</h2>
          <p className="text-sm text-gray-600">{selectedCategoryName} - {selectedClassName}</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Thống Kê</h3>
          <div className="grid grid-cols-2 gap-4">
            <StatisticCard
              label="Day streak"
              value="1" 
              Icon={FlameIcon}
              iconBgColor="bg-orange-500"
              bgColor="bg-orange-50"
              borderColor="border-orange-200"
              textColor="text-orange-600"
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

        <section>
          <div className="flex justify-between items-center mb-1">
            <h3 className="text-base text-gray-600">Tiến độ khóa học</h3>
            <p className="text-sm text-gray-800 font-medium">{completedLessonsCount}/{totalLessonsCount} bài</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-green-500 h-2.5 rounded-full"
              style={{ width: `${progressPercentage.toFixed(1)}%` }}
              aria-valuenow={progressPercentage}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
          <p className="text-xs text-gray-500 text-center mt-1">
            {progressPercentage.toFixed(1)}% hoàn thành
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Thành Tích</h3>
          {earnedAchievements.length > 0 ? (
            <div className="grid grid-cols-2 gap-3">
              {earnedAchievements.map(ach => (
                <AchievementCard
                  key={ach.id}
                  name={ach.name}
                  Icon={ach.icon}
                  iconColor="text-purple-600"
                  bgColor="bg-purple-50"
                  borderColor="border-purple-200"
                  textColor="text-purple-700"
                />
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500 text-center py-4">Chưa có thành tích nào. Cố gắng lên!</p>
          )}
        </section>
        
        <div className="h-10"></div> 

      </main>

      <div className="px-4 pb-20 fixed bottom-0 left-0 right-0 bg-gray-50 z-10"> 
         <button
            type="button"
            onClick={onChangeCourse}
            className="w-full flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
            disabled={isExiting}
          >
            <RefreshCwIcon className="w-5 h-5 mr-2" />
            Đổi Ngành / Lớp
          </button>
      </div>

      <BottomNavigation activeTab="user" onNavigate={onNavigate} />
    </div>
  );
};

export default ProfilePage;

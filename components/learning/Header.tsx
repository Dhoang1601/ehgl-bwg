
import React from 'react';
import { CategoryDetails } from '../../types'; 
import { FlameIcon } from '../icons/ProfileIcons'; 
import { SettingsIcon } from '../icons/ProfileIcons'; // Import SettingsIcon

interface HeaderProps {
  categoryColors: CategoryDetails['colors'];
  userLevel: number;
  userXP: number;
  xpToNextLevel: number;
  userStreak: number; 
  isStreakActiveToday: boolean; 
  showSettingsIcon?: boolean; // Optional: to show settings icon (e.g., on profile page)
  onSettingsClick?: () => void; // Optional: handler for settings icon
  className?: string; // Added className prop
}

const Header: React.FC<HeaderProps> = ({ 
  categoryColors, 
  userLevel, 
  userXP, 
  xpToNextLevel, 
  userStreak, 
  isStreakActiveToday,
  showSettingsIcon,
  onSettingsClick,
  className // Destructure className
}) => {
  const progressPercentage = xpToNextLevel > 0 ? Math.min((userXP / xpToNextLevel) * 100, 100) : 0;
  const streakIconColor = isStreakActiveToday && userStreak > 0 ? 'text-orange-500' : 'text-gray-400';
  const streakTextColor = isStreakActiveToday && userStreak > 0 ? 'text-orange-500' : 'text-gray-500';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-sm px-3 py-2 h-[52px] flex items-center justify-between ${className || ''}`}>
      <h1 className={`text-xl font-bold ${categoryColors.logo}`}>
        GiaoLy
      </h1>
      <div className="flex items-center space-x-2 sm:space-x-3">
        {/* Streak Display */}
        <div className={`flex items-center space-x-1 ${streakTextColor} font-semibold`}>
          <FlameIcon className={`w-5 h-5 ${streakIconColor}`} />
          <span className="text-sm">{userStreak}</span>
        </div>

        <div className={`text-sm font-semibold ${categoryColors.logo}`}>Level {userLevel}</div>
        <div className="w-16 sm:w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
            aria-valuenow={progressPercentage}
            aria-valuemin={0}
            aria-valuemax={100}
            role="progressbar"
            aria-label={`User XP progress: ${progressPercentage.toFixed(0)}%`}
          ></div>
        </div>
        <div className={`text-base sm:text-lg font-semibold text-orange-500`}>{userXP} XP</div>
        
        {showSettingsIcon && onSettingsClick && (
          <button
            onClick={onSettingsClick}
            className="p-1.5 text-gray-600 hover:text-gray-800 rounded-full hover:bg-gray-100 transition-colors ml-1 sm:ml-2"
            aria-label="Cài đặt"
          >
            <SettingsIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;

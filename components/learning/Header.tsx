
import React from 'react';
import { CategoryDetails } from '../../types'; 

interface HeaderProps {
  categoryColors: CategoryDetails['colors'];
  userLevel: number;
  userXP: number;
  xpToNextLevel: number;
  onReset: () => void; 
}

const Header: React.FC<HeaderProps> = ({ categoryColors, userLevel, userXP, xpToNextLevel, onReset }) => {
  const progressPercentage = xpToNextLevel > 0 ? Math.min((userXP / xpToNextLevel) * 100, 100) : 0;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm px-3 py-2 h-[52px] flex items-center justify-between">
      <h1 className={`text-xl font-bold ${categoryColors.logo}`}>
        GiaoLy
      </h1>
      <div className="flex items-center space-x-2 sm:space-x-3">
        <div className={`text-base font-semibold ${categoryColors.logo}`}>Level {userLevel}</div>
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
        <div className={`text-lg font-semibold text-orange-500`}>{userXP} XP</div>
      </div>
    </header>
  );
};

export default Header;


import React from 'react';
import { SettingsIcon } from '../icons/ProfileIcons'; 

interface ProfileHeaderProps {
  onLogoClick: () => void; 
  onSettings: () => void;
  logoColor: string; 
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ onLogoClick, onSettings, logoColor }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-white shadow-sm px-4 h-16 flex items-center justify-between">
      <button
        onClick={onLogoClick}
        className={`p-2 ${logoColor} rounded-full hover:opacity-80 transition-opacity`}
        aria-label="Quay lại trang học tập" 
      >
        <h1 className="text-2xl font-bold">GiaoLy</h1>
      </button>
      
      <h2 className="text-xl font-bold text-gray-800 absolute left-1/2 -translate-x-1/2"> 
        Hồ Sơ
      </h2>
      
      <button
        onClick={onSettings}
        className="p-2 text-gray-600 hover:text-gray-800 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Cài đặt"
      >
        <SettingsIcon className="w-6 h-6" />
      </button>
    </header>
  );
};

export default ProfileHeader;
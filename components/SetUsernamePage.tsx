

import React, { useState, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { AvatarPlaceholderIcon, PencilIcon } from './icons/ProfileIcons'; 

interface SetUsernamePageProps {
  currentName: string;
  onConfirm: (name: string) => void;
  onBack: () => void;
  persistedAvatar: string | null;
  setPersistedAvatar: (avatar: string | null) => void;
  // isExiting prop is removed
}

const SetUsernamePage: React.FC<SetUsernamePageProps> = ({ 
  currentName,
  onConfirm, 
  onBack,
  persistedAvatar,
  setPersistedAvatar
}) => {
  const [name, setName] = useState(currentName === "Học viên GiaoLy" ? "" : currentName);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onConfirm(name.trim());
    }
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

  const pageVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <motion.div 
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col items-center justify-center min-h-screen bg-white p-4 text-center"
    >
      <motion.div layoutId="onboarding-back-button" className="absolute top-4 left-4">
        <button 
            onClick={onBack} 
            className="text-green-700 hover:text-green-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Quay lại trang chủ"
          >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      </motion.div>

      <motion.div layoutId="onboarding-logo">
        <header className="mb-4 sm:mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-green-700">
            GiaoLy
          </h1>
        </header>
      </motion.div>

      <main className="w-full max-w-md flex flex-col items-center">
        {/* Avatar Section Start */}
        <div className="relative w-28 h-28 mb-5 md:w-32 md:h-32">
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
                className="absolute bottom-0 right-0 bg-green-600 text-white p-1.5 md:p-2 rounded-full shadow-md border-2 border-white hover:bg-green-700 transition-colors"
                aria-label="Chỉnh sửa ảnh đại diện"
            >
                <PencilIcon className="w-3 h-3 md:w-4 md:h-4" />
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
                className="text-xs text-red-500 hover:text-red-700 underline mb-5"
                aria-label="Xóa avatar hiện tại"
            >
                Xóa Avatar
            </button>
        )}
        {/* Avatar Section End */}
        
        <h2 id="username-question" className="text-xl sm:text-2xl text-gray-700 mb-6 font-semibold">
          Em tên gì?
        </h2>

        <form onSubmit={handleSubmit} className="w-full bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-200">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nhập tên của em"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-center text-lg mb-6"
            aria-labelledby="username-question"
          />
          <button
            type="submit"
            disabled={!name.trim()}
            className="w-full font-semibold py-3 px-6 text-base rounded-lg shadow-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed
                       bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500
                       disabled:bg-gray-200 disabled:text-gray-400 disabled:shadow-none"
          >
            TIẾP TỤC
          </button>
        </form>
      </main>

      <motion.div layoutId="pagination-dots">
        <footer className="mt-8 sm:mt-10">
          <div className="flex justify-center space-x-2">
            <span className="w-2.5 h-2.5 bg-gray-300 rounded-full" aria-hidden="true"></span>
            <span className="w-2.5 h-2.5 bg-green-600 rounded-full" aria-hidden="true"></span>
            <span className="w-2.5 h-2.5 bg-gray-300 rounded-full" aria-hidden="true"></span>
            <span className="w-2.5 h-2.5 bg-gray-300 rounded-full" aria-hidden="true"></span>
          </div>
        </footer>
      </motion.div>
    </motion.div>
  );
};

export default SetUsernamePage;


import React from 'react';
import { motion, Variants } from 'framer-motion';
import HaloSmileIcon from './icons/HaloSmileIcon';
import { CATEGORY_STYLES } from '../types'; 

interface WelcomePageProps {
  onStartLearning: () => void; 
  previouslySelectedCategory: string | null;
  previouslySelectedClassName: string | null;
  onResumeLearning: () => void; 
  onStartOver: () => void; 
  // isExiting prop is removed as Framer Motion will handle exit animations
}

const WelcomePage: React.FC<WelcomePageProps> = ({ 
  onStartLearning, 
  previouslySelectedCategory,
  previouslySelectedClassName,
  onResumeLearning,
  onStartOver
}) => {
  const hasPreviousSelection = previouslySelectedCategory && previouslySelectedClassName;
  const categoryDisplayName = hasPreviousSelection && CATEGORY_STYLES[previouslySelectedCategory] 
    ? CATEGORY_STYLES[previouslySelectedCategory].namePrefix 
    : '';

  const isStepActive = !hasPreviousSelection; 

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
      className="flex flex-col items-center justify-center min-h-screen bg-white p-6 text-center"
    >
      <motion.div layoutId="onboarding-logo">
        <header className="mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700">
            GiaoLy
          </h1>
        </header>
      </motion.div>

      <main className="flex flex-col items-center space-y-6 md:space-y-8">
        <HaloSmileIcon className="w-36 h-36 md:w-48 md:h-48 text-gray-800 animate-pulse-icon" />

        {hasPreviousSelection ? (
          <>
            <p className="text-md md:text-lg text-gray-700 max-w-md">
              Chào mừng trở lại! Bạn muốn tiếp tục với lớp: <br />
              <strong className="text-green-700">{previouslySelectedClassName}</strong> ({categoryDisplayName})?
            </p>
            <button
              type="button"
              onClick={onResumeLearning}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-10 md:px-12 text-lg md:text-xl rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 animate-pulse-button"
              aria-label="Tiếp tục học"
            >
              TIẾP TỤC HỌC
            </button>
            <button
              type="button"
              onClick={onStartOver}
              className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-8 text-sm md:text-base rounded-lg shadow-sm hover:shadow-md transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              aria-label="Bắt đầu lại"
            >
              BẮT ĐẦU LẠI
            </button>
          </>
        ) : (
          <>
            <p className="text-lg md:text-xl text-gray-700 max-w-md">
              Học Giáo Lý vui vẻ và hiệu quả!
            </p>
            <button
              type="button"
              onClick={onStartLearning}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-10 md:px-12 text-lg md:text-xl rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 animate-pulse-button"
              aria-label="Bắt đầu học giáo lý"
            >
              BẮT ĐẦU HỌC
            </button>
          </>
        )}
      </main>

      <motion.div layoutId="pagination-dots">
        <footer className="mt-12 md:mt-16">
          <div className="flex justify-center space-x-2">
            <span className={`w-2.5 h-2.5 ${isStepActive ? 'bg-green-600' : 'bg-gray-300'} rounded-full`} aria-hidden="true"></span>
            <span className="w-2.5 h-2.5 bg-gray-300 rounded-full" aria-hidden="true"></span>
            <span className="w-2.5 h-2.5 bg-gray-300 rounded-full" aria-hidden="true"></span>
            <span className="w-2.5 h-2.5 bg-gray-300 rounded-full" aria-hidden="true"></span>
          </div>
          {hasPreviousSelection && (
              <p className="text-xs text-gray-500 mt-3">Hoặc chọn "Bắt đầu lại" để chọn Ngành/Lớp khác.</p>
          )}
        </footer>
      </motion.div>
    </motion.div>
  );
};

export default WelcomePage;


import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import ConfirmationPopup from './ConfirmationPopup'; 

interface SelectClassPageProps {
  userName: string; 
  selectedCategory: string;
  onClassConfirm: (className: string) => void;
  onBack?: () => void;
  // isFadingOut prop removed
}

const categoryInfoMap: Record<string, { namePrefix: string; styleKey: 'green' | 'blue' | 'yellow'; classes: string[] }> = {
  xungtoi: { namePrefix: 'Xưng Tội', styleKey: 'green', classes: ['Xưng Tội 1', 'Xưng Tội 2', 'Xưng Tội 3'] },
  themsuc: { namePrefix: 'Thêm Sức', styleKey: 'blue', classes: ['Thêm Sức 1', 'Thêm Sức 2', 'Thêm Sức 3'] },
  songdao: { namePrefix: 'Sống Đạo', styleKey: 'yellow', classes: ['Sống Đạo 1', 'Sống Đạo 2', 'Sống Đạo 3'] },
};

const cardStylesConfig: Record<'green' | 'blue' | 'yellow', { base: string; unselected: string; selected: string; focusVisible: string }> = {
  green: {
    base: "w-full p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 ease-in-out focus:outline-none shadow-md hover:shadow-lg text-center",
    unselected: "bg-white border-green-300 text-green-700 hover:border-green-500 hover:bg-green-50",
    selected: "bg-green-600 border-green-700 text-white ring-2 ring-offset-2 ring-green-600",
    focusVisible: "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500",
  },
  blue: {
    base: "w-full p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 ease-in-out focus:outline-none shadow-md hover:shadow-lg text-center",
    unselected: "bg-white border-blue-300 text-blue-700 hover:border-blue-500 hover:bg-blue-50",
    selected: "bg-blue-600 border-blue-700 text-white ring-2 ring-offset-2 ring-blue-600",
    focusVisible: "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",
  },
  yellow: {
    base: "w-full p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 ease-in-out focus:outline-none shadow-md hover:shadow-lg text-center",
    unselected: "bg-yellow-50 border-yellow-300 text-yellow-700 hover:border-yellow-500 hover:bg-yellow-100",
    selected: "bg-yellow-500 border-yellow-600 text-white ring-2 ring-offset-2 ring-yellow-500",
    focusVisible: "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-500",
  },
};

const SelectClassPage: React.FC<SelectClassPageProps> = ({ userName, selectedCategory, onClassConfirm, onBack }) => {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

  const currentCategoryInfo = categoryInfoMap[selectedCategory];

  if (!currentCategoryInfo) {
    console.error("Invalid category provided to SelectClassPage:", selectedCategory);
    if (onBack) onBack(); 
    return <p>Lỗi: Ngành không hợp lệ.</p>;
  }

  const classesToDisplay = currentCategoryInfo.classes;
  const currentStyleKey = currentCategoryInfo.styleKey;
  const currentCardStyles = cardStylesConfig[currentStyleKey];


  const handleAttemptConfirm = () => {
    if (selectedClass) {
      setShowConfirmationPopup(true);
    }
  };

  const handleFinalConfirm = () => {
    if (selectedClass) {
      setShowConfirmationPopup(false);
      onClassConfirm(selectedClass); 
    }
  };
  
  const handleClosePopup = () => {
    setShowConfirmationPopup(false);
  };

  const interactionDisabled = showConfirmationPopup;

  const pageVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <>
      <motion.div 
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-col items-center justify-center min-h-screen bg-white p-4 text-center"
      >
        {onBack && (
          <motion.div layoutId="onboarding-back-button" className="absolute top-4 left-4">
            <button 
                onClick={onBack} 
                className="text-green-700 hover:text-green-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Quay lại chọn ngành"
                disabled={interactionDisabled}
              >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          </motion.div>
         )}
        <motion.div layoutId="onboarding-logo">
          <header className="mb-4 sm:mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-green-700">
              GiaoLy
            </h1>
          </header>
        </motion.div>

        <main className="w-full max-w-md">
          <h2 id="class-question" className="text-lg sm:text-xl text-gray-700 mb-4 sm:mb-6">
            {userName === "Học viên GiaoLy" || !userName ? "Em" : userName} đang học lớp nào?
          </h2>

          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-200">
            <div role="radiogroup" aria-labelledby="class-question" className="space-y-4 mb-6">
              {classesToDisplay.map((className) => {
                const isSelected = selectedClass === className;
                return (
                  <motion.div
                    key={className}
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => !interactionDisabled && setSelectedClass(className)}
                    onKeyDown={(e) => {
                      if (!interactionDisabled && (e.key === 'Enter' || e.key === ' ')) {
                        e.preventDefault();
                        setSelectedClass(className);
                      }
                    }}
                    tabIndex={interactionDisabled ? -1 : 0}
                    whileTap={interactionDisabled ? {} : { scale: 0.97 }}
                    className={`
                      ${currentCardStyles.base}
                      ${isSelected ? currentCardStyles.selected : currentCardStyles.unselected}
                      ${!isSelected ? currentCardStyles.focusVisible : ''}
                      ${interactionDisabled ? 'opacity-50 cursor-not-allowed' : ''}
                    `}
                    aria-disabled={interactionDisabled}
                  >
                    <span className="text-lg font-bold">{className}</span>
                  </motion.div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={handleAttemptConfirm}
              disabled={!selectedClass || interactionDisabled}
              aria-disabled={!selectedClass || interactionDisabled}
              className="w-full font-semibold py-3 px-6 text-base rounded-lg shadow-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed
                         bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500
                         disabled:bg-gray-200 disabled:text-gray-400 disabled:shadow-none"
            >
              CHỌN LỚP
            </button>
          </div>
        </main>
        <motion.div layoutId="pagination-dots">
          <footer className="mt-6 sm:mt-8">
            <div className="flex justify-center space-x-2">
              <span className="w-2.5 h-2.5 bg-gray-300 rounded-full" aria-hidden="true"></span>
              <span className="w-2.5 h-2.5 bg-gray-300 rounded-full" aria-hidden="true"></span>
              <span className="w-2.5 h-2.5 bg-gray-300 rounded-full" aria-hidden="true"></span>
              <span className="w-2.5 h-2.5 bg-green-600 rounded-full" aria-hidden="true"></span>
            </div>
          </footer>
        </motion.div>
      </motion.div>
      {currentCategoryInfo && selectedClass && (
        <ConfirmationPopup
          isOpen={showConfirmationPopup}
          onClose={handleClosePopup}
          onConfirm={handleFinalConfirm}
          categoryName={currentCategoryInfo.namePrefix}
          className={selectedClass}
          categoryStyleKey={currentCategoryInfo.styleKey}
        />
      )}
    </>
  );
};

export default SelectClassPage;


import React, { useState, useEffect } from 'react';
import ConfirmationPopup from './ConfirmationPopup'; 

interface SelectClassPageProps {
  selectedCategory: string;
  onClassConfirm: (className: string) => void;
  onBack?: () => void;
  isFadingOut?: boolean; 
}

const categoryDetails: Record<string, { namePrefix: string; styleKey: 'green' | 'blue' | 'yellow'; classes: string[] }> = {
  xungtoi: { namePrefix: 'Xưng Tội', styleKey: 'green', classes: ['Xưng Tội 1', 'Xưng Tội 2', 'Xưng Tội 3'] },
  themsuc: { namePrefix: 'Thêm Sức', styleKey: 'blue', classes: ['Thêm Sức 1', 'Thêm Sức 2', 'Thêm Sức 3'] },
  songdao: { namePrefix: 'Sống Đạo', styleKey: 'yellow', classes: ['Sống Đạo 1', 'Sống Đạo 2', 'Sống Đạo 3'] },
};

const buttonStyles: Record<'green' | 'blue' | 'yellow', { normal: string; selected: string; focusRing: string }> = {
  green: {
    normal: "bg-green-50 border-green-500 text-green-700 hover:bg-green-100 hover:border-green-600",
    selected: "bg-green-100 border-green-600 text-green-800",
    focusRing: "focus:ring-green-500",
  },
  blue: {
    normal: "bg-blue-50 border-blue-500 text-blue-700 hover:bg-blue-100 hover:border-blue-600",
    selected: "bg-blue-100 border-blue-600 text-blue-800",
    focusRing: "focus:ring-blue-500",
  },
  yellow: {
    normal: "bg-yellow-50 border-yellow-500 text-yellow-700 hover:bg-yellow-100 hover:border-yellow-600",
    selected: "bg-yellow-100 border-yellow-600 text-yellow-800",
    focusRing: "focus:ring-yellow-500",
  },
};

const SelectClassPage: React.FC<SelectClassPageProps> = ({ selectedCategory, onClassConfirm, onBack, isFadingOut = false }) => {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false); 
  const [isExitingInternally, setIsExitingInternally] = useState(false); 
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

  useEffect(() => {
    const fadeInTimer = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(fadeInTimer);
  }, []);

  const currentCategoryInfo = categoryDetails[selectedCategory];

  if (!currentCategoryInfo) {
    console.error("Invalid category provided to SelectClassPage:", selectedCategory);
    if (onBack) onBack(); 
    return <p>Lỗi: Ngành không hợp lệ.</p>;
  }

  const classesToDisplay = currentCategoryInfo.classes;
  const currentStyleKey = currentCategoryInfo.styleKey;
  const currentButtonStyle = buttonStyles[currentStyleKey];

  const baseButtonClass = "w-full text-center font-semibold py-3 px-4 text-base rounded-lg border-2 transition-all duration-200 ease-in-out focus:outline-none focus:ring-offset-2 focus:ring-offset-white"; // Reduced py, text size
  const selectedRingClass = "ring-2 ring-offset-1";

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

  const handleBack = () => {
    if (onBack) {
      setIsExitingInternally(true);
      setTimeout(() => {
        onBack();
      }, 300); 
    }
  };
  
  const showPage = isVisible && !isExitingInternally && !isFadingOut;

  return (
    <>
      <div 
        className={`flex flex-col items-center justify-center min-h-screen bg-white p-4 text-center transition-opacity duration-300 ease-in-out ${showPage ? 'opacity-100' : 'opacity-0'}`} // Root padding p-4
      >
        {onBack && (
           <button 
              onClick={handleBack} 
              className="absolute top-4 left-4 text-green-700 hover:text-green-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Quay lại chọn ngành"
              disabled={isExitingInternally || isFadingOut || showConfirmationPopup}
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
         )}
        <header className="mb-4 sm:mb-6"> {/* Reduced margin */}
          <h1 className="text-3xl sm:text-4xl font-bold text-green-700"> {/* Reduced font size */}
            GiaoLy
          </h1>
        </header>

        <main className="w-full max-w-md">
          <h2 id="class-question" className="text-lg sm:text-xl text-gray-700 mb-4 sm:mb-6"> {/* Reduced font size & margin */}
            Em đang học lớp nào?
          </h2>

          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-200"> {/* Reduced padding */}
            <div role="radiogroup" aria-labelledby="class-question" className="space-y-3 mb-6"> {/* Reduced space-y and mb */}
              {classesToDisplay.map((className) => {
                const isSelected = selectedClass === className;
                return (
                  <button
                    key={className}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => setSelectedClass(className)}
                    disabled={isExitingInternally || isFadingOut || showConfirmationPopup}
                    className={`
                      ${baseButtonClass} 
                      ${isSelected ? currentButtonStyle.selected : currentButtonStyle.normal}
                      ${currentButtonStyle.focusRing}
                      ${isSelected ? selectedRingClass + ' ' + currentButtonStyle.focusRing.replace('focus:ring-','ring-') : ''}
                    `}
                  >
                    {className}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={handleAttemptConfirm}
              disabled={!selectedClass || isExitingInternally || isFadingOut || showConfirmationPopup}
              aria-disabled={!selectedClass || isExitingInternally || isFadingOut || showConfirmationPopup}
              className="w-full font-semibold py-3 px-6 text-base rounded-lg shadow-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed
                         bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500
                         disabled:bg-gray-200 disabled:text-gray-400 disabled:shadow-none" // Reduced py, text size
            >
              CHỌN LỚP
            </button>
          </div>
        </main>
         <footer className="mt-6 sm:mt-8"> {/* Reduced margin */}
          <div className="flex justify-center space-x-2">
            <span className="w-2.5 h-2.5 bg-gray-300 rounded-full" aria-hidden="true"></span>
            <span className="w-2.5 h-2.5 bg-gray-300 rounded-full" aria-hidden="true"></span>
            <span className="w-2.5 h-2.5 bg-green-600 rounded-full" aria-hidden="true"></span>
          </div>
        </footer>
      </div>
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

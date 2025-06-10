
import React, { useState, useEffect } from 'react';

interface SelectCategoryPageProps {
  onCategoryConfirm: (category: string) => void;
  onBack?: () => void; // Optional: for a back button
}

const categories = [
  { id: 'xungtoi', name: 'Xưng Tội', style: 'green' },
  { id: 'themsuc', name: 'Thêm Sức', style: 'blue' },
  { id: 'songdao', name: 'Sống Đạo', style: 'yellow' },
];

const SelectCategoryPage: React.FC<SelectCategoryPageProps> = ({ onCategoryConfirm, onBack }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [isExiting, setIsExiting] = useState(false); // For self-initiated exit (confirming or going back)
  const [pageVisible, setPageVisible] = useState(false); // For initial fade-in

  useEffect(() => {
    const timer = requestAnimationFrame(() => setPageVisible(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  const baseButtonClass = "w-full text-center font-semibold py-3 px-4 text-base rounded-lg border-2 transition-all duration-200 ease-in-out focus:outline-none focus:ring-offset-2 focus:ring-offset-white"; // Reduced py, text size
  const selectedRingClass = "ring-2 ring-offset-1";

  const buttonStyles: Record<string, { normal: string; selected: string; focusRing: string }> = {
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
  
  const handleConfirm = () => {
    if (selectedCategoryId) {
      setIsExiting(true);
      setTimeout(() => {
        onCategoryConfirm(selectedCategoryId);
      }, 300); 
    }
  };

  const handleBack = () => {
    if (onBack) {
      setIsExiting(true);
      setTimeout(() => {
        onBack();
      }, 300); 
    }
  };

  return (
    <div 
      className={`flex flex-col items-center justify-center min-h-screen bg-white p-4 text-center transition-opacity duration-300 ease-in-out ${isExiting ? 'opacity-0' : (pageVisible ? 'opacity-100' : 'opacity-0')}`} // Root padding p-4
    >
       {onBack && (
         <button 
            onClick={handleBack} 
            className="absolute top-4 left-4 text-green-700 hover:text-green-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Quay lại trang chủ"
            disabled={isExiting}
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
        <h2 id="category-question" className="text-lg sm:text-xl text-gray-700 mb-4 sm:mb-6"> {/* Reduced font size & margin */}
          Em đang học ngành nào?
        </h2>

        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-200"> {/* Reduced padding */}
          <div role="radiogroup" aria-labelledby="category-question" className="space-y-3 mb-6"> {/* Reduced space-y and mb */}
            {categories.map((category) => {
              const isSelected = selectedCategoryId === category.id;
              const style = buttonStyles[category.style];
              return (
                <button
                  key={category.id}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => setSelectedCategoryId(category.id)}
                  disabled={isExiting}
                  className={`
                    ${baseButtonClass} 
                    ${isSelected ? style.selected : style.normal}
                    ${style.focusRing}
                    ${isSelected ? selectedRingClass + ' ' + style.focusRing.replace('focus:ring-','ring-') : ''}
                  `}
                >
                  {category.name}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={handleConfirm}
            disabled={!selectedCategoryId || isExiting}
            aria-disabled={!selectedCategoryId || isExiting}
            className="w-full font-semibold py-3 px-6 text-base rounded-lg shadow-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed
                       bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500
                       disabled:bg-gray-200 disabled:text-gray-400 disabled:shadow-none" // Reduced py, text size
          >
            CHỌN NGÀNH
          </button>
        </div>
      </main>
       <footer className="mt-6 sm:mt-8"> {/* Reduced margin */}
        <div className="flex justify-center space-x-2">
          <span className="w-2.5 h-2.5 bg-gray-300 rounded-full" aria-hidden="true"></span>
          <span className="w-2.5 h-2.5 bg-green-600 rounded-full" aria-hidden="true"></span>
          <span className="w-2.5 h-2.5 bg-gray-300 rounded-full" aria-hidden="true"></span>
        </div>
      </footer>
    </div>
  );
};

export default SelectCategoryPage;

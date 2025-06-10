
import React, { useEffect, useState } from 'react';
import { CategoryDetails } from '../../types';
import HaloSmileIcon from '../icons/HaloSmileIcon';
import HeartIcon from '../icons/HeartIcon';
import { LightningBoltIcon } from '../icons/ProfileIcons'; // Re-import LightningBoltIcon

interface LessonCompleteScreenProps {
  xpReward: number;
  remainingLives: number;
  categoryDetails: CategoryDetails;
  onContinue: () => void;
  isLessonSuccessfullyCompleted: boolean;
  isExiting?: boolean;
}

const LessonCompleteScreen: React.FC<LessonCompleteScreenProps> = ({
  xpReward,
  remainingLives,
  categoryDetails,
  onContinue,
  isLessonSuccessfullyCompleted,
  isExiting = false,
}) => {
  const [pageVisible, setPageVisible] = useState(false);

  useEffect(() => {
    if (!isExiting) {
      const timer = requestAnimationFrame(() => setPageVisible(true));
      return () => cancelAnimationFrame(timer);
    } else {
      setPageVisible(false);
    }
  }, [isExiting]);

  const primaryButtonBgColor = categoryDetails.colors.progressBarFill;
  const primaryButtonFocusRing = categoryDetails.colors.logo.replace('text-','focus:ring-');
  const secondaryButtonBgColor = "bg-gray-200 hover:bg-gray-300";
  const secondaryButtonTextColor = "text-gray-700";
  const secondaryButtonFocusRing = "focus:ring-gray-400";

  const titleMessage = isLessonSuccessfullyCompleted ? "Hoàn thành bài học!" : "Cần cố gắng hơn nữa";

  return (
    <div 
      className={`flex flex-col items-center justify-center min-h-screen bg-white p-4 sm:p-6 text-center transition-opacity duration-300 ease-in-out ${pageVisible && !isExiting ? 'opacity-100' : 'opacity-0'}`}
      role="alertdialog"
      aria-labelledby="lesson-complete-title"
      aria-describedby="lesson-complete-description"
    >
      <main className="flex flex-col items-center justify-center flex-grow w-full max-w-md">
        <HaloSmileIcon className="w-28 h-28 sm:w-32 sm:h-32 text-gray-800 mb-4" />

        <h1 id="lesson-complete-title" className={`text-3xl sm:text-4xl font-bold mb-6 ${isLessonSuccessfullyCompleted ? 'text-green-600' : 'text-yellow-600'}`}>
          {titleMessage}
        </h1>

        <div id="lesson-complete-description" className="w-full flex flex-row justify-center items-stretch gap-3 sm:gap-4 mb-8">
          {/* Total XP Card */}
          <div className="bg-yellow-400 text-white p-3 sm:p-4 rounded-xl shadow-md flex flex-col items-center justify-center aspect-[4/3] sm:aspect-square w-1/2 max-w-[160px] sm:max-w-[180px]">
            <h2 className="text-xs sm:text-sm font-semibold uppercase opacity-90 mb-1">TỔNG XP</h2>
            <LightningBoltIcon className="w-8 h-8 sm:w-10 sm:h-10 mb-1 text-white" />
            <p className="text-2xl sm:text-3xl font-bold">{xpReward}</p>
          </div>

          {/* Hearts Card */}
          <div className="bg-red-500 text-white p-3 sm:p-4 rounded-xl shadow-md flex flex-col items-center justify-center aspect-[4/3] sm:aspect-square w-1/2 max-w-[160px] sm:max-w-[180px]">
            <h2 className="text-xs sm:text-sm font-semibold uppercase opacity-90 mb-1">SỐ TIM</h2>
            <HeartIcon className="w-8 h-8 sm:w-10 sm:h-10 mb-1 text-white" />
            <p className="text-2xl sm:text-3xl font-bold">{remainingLives < 0 ? 0 : remainingLives}</p>
          </div>
        </div>
      </main>
      
      <footer className="w-full max-w-xs sm:max-w-sm pb-4 space-y-3">
        <button
          type="button"
          onClick={onContinue}
          className={`w-full font-bold py-3.5 px-8 text-lg rounded-xl shadow-lg hover:opacity-90 transition-opacity duration-150
                      focus:outline-none focus:ring-2 focus:ring-offset-2 
                      ${isLessonSuccessfullyCompleted 
                        ? `${primaryButtonBgColor} text-white ${primaryButtonFocusRing}` 
                        : `${secondaryButtonBgColor} ${secondaryButtonTextColor} ${secondaryButtonFocusRing}`}`}
          aria-label={isLessonSuccessfullyCompleted ? "Tiếp tục" : "Về trang chủ"}
        >
          {isLessonSuccessfullyCompleted ? "TIẾP TỤC" : "VỀ TRANG CHỦ"}
        </button>
      </footer>
    </div>
  );
};

export default LessonCompleteScreen;

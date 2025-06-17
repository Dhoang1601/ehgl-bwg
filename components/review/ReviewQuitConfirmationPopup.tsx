
import React, { useEffect } from 'react';
import SadHaloSmileIcon from '../icons/SadHaloSmileIcon'; // Corrected import
import { CategoryDetails } from '../../types';

interface ReviewQuitConfirmationPopupProps {
  isOpen: boolean;
  onClose: () => void; // Continue Reviewing
  onConfirmQuit: () => void; // Go to Main Page
  currentStreak: number; // This will receive maxSessionStreak
  categoryDetails: CategoryDetails;
}

const ReviewQuitConfirmationPopup: React.FC<ReviewQuitConfirmationPopupProps> = ({
  isOpen,
  onClose,
  onConfirmQuit,
  currentStreak, // Renamed from sessionStreak to currentStreak to accept maxSessionStreak
  categoryDetails,
}) => {
  const primaryButtonBg = categoryDetails.colors.progressBarFill;
  const primaryButtonHoverBg = primaryButtonBg.replace('bg-', 'hover:bg-').replace('-600', '-700').replace('-500', '-600');
  const primaryButtonFocusRing = categoryDetails.colors.logo.replace('text-', 'focus-visible:ring-');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      const openDialogs = document.querySelectorAll('[role="dialog"][data-state="open"], .fixed.z-50[data-state="open"]');
      if (openDialogs.length === 0) {
        document.body.style.overflow = '';
      }
    }
    return () => {
      const openDialogs = document.querySelectorAll('[role="dialog"][data-state="open"], .fixed.z-50[data-state="open"]');
      if (openDialogs.length === 0) {
        document.body.style.overflow = '';
      }
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          data-state={isOpen ? 'open' : 'closed'}
          className="fixed inset-0 z-40 bg-black/50 
                     data-[state=open]:animate-fadeInOverlay 
                     data-[state=closed]:animate-fadeOutOverlay"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <div
        data-state={isOpen ? 'open' : 'closed'}
        className={`fixed bottom-0 left-0 right-0 w-full bg-white rounded-t-2xl shadow-2xl
                  p-6 sm:p-8 
                  transition-transform duration-300 ease-out
                  data-[state=open]:animate-slide-up data-[state=closed]:animate-slide-down
                  z-50 flex flex-col items-center text-center
                  max-h-[70vh] overflow-y-auto`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="review-quit-confirmation-title"
        onClick={(e) => e.stopPropagation()}
      >
        <SadHaloSmileIcon className="w-24 h-24 sm:w-28 sm:h-28 text-gray-700 mb-5" />

        <h2 id="review-quit-confirmation-title" className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
          Bạn chắc chắn muốn thoát?
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-8 max-w-xs">
          Nếu thoát bây giờ chuỗi trả lời đúng của bạn sẽ là <span className="font-bold text-orange-500">{currentStreak}</span>.
        </p>

        <div className="w-full space-y-3 max-w-sm">
          <button
            type="button"
            onClick={onClose}
            className={`w-full py-3.5 px-6 rounded-xl text-white font-bold text-base shadow-md
                        transition-opacity duration-150 hover:opacity-90
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                        ${primaryButtonBg} ${primaryButtonHoverBg} ${primaryButtonFocusRing}`}
          >
            Tiếp tục ôn tập
          </button>
          <button
            type="button"
            onClick={onConfirmQuit}
            className={`w-full py-3.5 px-6 rounded-xl text-white font-bold text-base shadow-md
                        bg-red-500 hover:bg-red-600 focus-visible:ring-red-500
                        transition-opacity duration-150 hover:opacity-90
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
          >
            Về Trang Chính
          </button>
        </div>
      </div>
    </>
  );
};

export default ReviewQuitConfirmationPopup;

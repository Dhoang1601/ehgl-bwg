
import React, { useEffect } from 'react';
import SadHaloSmileIcon from '../icons/SadHaloSmileIcon';
import { CategoryDetails } from '../../types';

interface QuitConfirmationPopupProps {
  isOpen: boolean;
  onClose: () => void; // Keep learning
  onConfirmQuit: () => void; // Go to main page
  categoryDetails: CategoryDetails;
}

const QuitConfirmationPopup: React.FC<QuitConfirmationPopupProps> = ({
  isOpen,
  onClose,
  onConfirmQuit,
  categoryDetails,
}) => {
  const primaryButtonBg = categoryDetails.colors.progressBarFill; // e.g., bg-green-600
  const primaryButtonHoverBg = primaryButtonBg.replace('bg-', 'hover:bg-').replace('-600', '-700').replace('-500', '-600'); // Approximate hover
  const primaryButtonFocusRing = categoryDetails.colors.logo.replace('text-','focus-visible:ring-');


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
      {/* Dimming Overlay */}
      {isOpen && (
        <div
          data-state={isOpen ? 'open' : 'closed'}
          className="fixed inset-0 z-40 bg-black/50 
                     data-[state=open]:animate-fadeInOverlay 
                     data-[state=closed]:animate-fadeOutOverlay"
          onClick={onClose} // Optionally close popup if overlay is clicked
        />
      )}

      {/* Popup Content */}
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
        aria-labelledby="quit-confirmation-title"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside popup from closing it via overlay click
      >
        <SadHaloSmileIcon className="w-24 h-24 sm:w-28 sm:h-28 text-gray-700 mb-5" />

        <h2 id="quit-confirmation-title" className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
          Đừng đi mà!
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-8 max-w-xs">
          Nếu bạn thoát bây giờ bạn sẽ phải học lại từ đầu.
        </p>

        <div className="w-full space-y-3 max-w-sm">
          <button
            type="button"
            onClick={onClose} // This will trigger isOpen to false, and thus slide-down animation
            className={`w-full py-3.5 px-6 rounded-xl text-white font-bold text-base shadow-md
                        transition-opacity duration-150 hover:opacity-90
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                        ${primaryButtonBg} ${primaryButtonHoverBg} ${primaryButtonFocusRing}`}
          >
            Tiếp tục học
          </button>
          <button
            type="button"
            onClick={onConfirmQuit} // This will also trigger isOpen to false
            className={`w-full py-3.5 px-6 rounded-xl text-white font-bold text-base shadow-md
                        bg-red-500 hover:bg-red-600 focus-visible:ring-red-500
                        transition-opacity duration-150 hover:opacity-90
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
          >
            Quay về trang chủ
          </button>
        </div>
      </div>
    </>
  );
};

export default QuitConfirmationPopup;
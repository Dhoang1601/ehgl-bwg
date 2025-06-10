
import React, { useEffect } from 'react';
import { Dialog, DialogPortal, DialogOverlay } from '../ui/dialog';

interface ResultPopupProps {
  isOpen: boolean;
  onClose: () => void; 
  type: 'correct' | 'incorrect'; 
  title: string; 
  message: string; 
  actionButtonText?: string; 
  onAction?: () => void;
  showOverlay?: boolean; // New prop, defaults to true
}

const ResultPopup: React.FC<ResultPopupProps> = ({
  isOpen,
  onClose,
  type,
  title: feedbackTitle, 
  message: explanationMessage, 
  actionButtonText = "TIẾP TỤC", 
  onAction,
  showOverlay = true, // Default to true if not provided
}) => {
  
  const resultStyles = type === 'correct' 
    ? {
        sheetBg: 'bg-green-50', // Lighter green for body
        titleText: 'text-green-700',
        messageText: 'text-green-600',
        buttonBg: 'bg-green-600 hover:bg-green-700 focus-visible:ring-green-500', // Vibrant green for button
        buttonText: 'text-white',
      } 
    : {
        sheetBg: 'bg-red-50',   // Lighter red for body
        titleText: 'text-red-700',
        messageText: 'text-red-600',
        buttonBg: 'bg-red-600 hover:bg-red-700 focus-visible:ring-red-500', // Vibrant red for button
        buttonText: 'text-white',
      };


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      // Only reset body overflow if no other dialogs/popups are open
      const openDialogs = document.querySelectorAll('[role="dialog"][data-state="open"], [role="dialog"][data-state="true"], .fixed.z-50[data-state="open"]');
      if (openDialogs.length === 0) {
        document.body.style.overflow = '';
      }
    }
    return () => {
      const openDialogs = document.querySelectorAll('[role="dialog"][data-state="open"], [role="dialog"][data-state="true"], .fixed.z-50[data-state="open"]');
      if (openDialogs.length === 0) {
        document.body.style.overflow = '';
      }
    };
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={(openState) => !openState && onClose()}>
      <DialogPortal>
        {showOverlay && <DialogOverlay className="bg-black/30 backdrop-blur-sm" onClick={onClose} />}
        <div 
          data-state={isOpen ? 'open' : 'closed'}
          className={`fixed bottom-0 left-0 right-0 w-full 
                      ${resultStyles.sheetBg} rounded-t-2xl
                      transition-transform duration-300 ease-out
                      data-[state=open]:translate-y-0 data-[state=closed]:translate-y-full
                      z-50 flex flex-col shadow-2xl max-h-[280px] sm:max-h-[260px]
                    `}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="result-popup-feedback-title"
        >
          <div className={`p-4 sm:p-5 flex-grow flex flex-col items-center text-center overflow-y-auto`}> 
            <h2 id="result-popup-feedback-title" className={`text-2xl font-bold ${resultStyles.titleText} mb-1 sm:mb-2`}>
              {feedbackTitle}
            </h2>
            {explanationMessage && (
              <p className={`${resultStyles.messageText} text-sm sm:text-base mb-3 sm:mb-4`}> 
                {explanationMessage}
              </p>
            )}
          </div>

          {onAction && actionButtonText && (
            <div className="p-3 sm:p-4 mt-auto"> 
              <button
                type="button"
                onClick={onAction}
                className={`w-full py-3 sm:py-3.5 px-6 rounded-xl font-semibold text-sm sm:text-base 
                            shadow-md transition-opacity duration-150
                            focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 
                            ${resultStyles.buttonBg} ${resultStyles.buttonText} hover:opacity-90`}
              >
                {actionButtonText}
              </button>
            </div>
          )}
        </div>
      </DialogPortal>
    </Dialog>
  );
};

export default ResultPopup;

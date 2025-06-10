
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from './ui/dialog'; 

interface ConfirmationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  categoryName: string;
  className: string; // This is the 'class' name (e.g., "Xưng Tội 1"), not HTML class
  categoryStyleKey: 'green' | 'blue' | 'yellow';
}

const popupStyles = {
  green: {
    iconBg: 'bg-green-500',
    infoBg: 'bg-green-50',
    infoBorder: 'border-green-200',
    categoryText: 'text-green-700',
    classText: 'text-green-600',
    confirmButtonBg: 'bg-green-500',
    confirmButtonHoverBg: 'hover:bg-green-600',
    confirmButtonFocusRing: 'focus:ring-green-500',
  },
  blue: {
    iconBg: 'bg-blue-500',
    infoBg: 'bg-blue-50',
    infoBorder: 'border-blue-200',
    categoryText: 'text-blue-700',
    classText: 'text-blue-600',
    confirmButtonBg: 'bg-blue-500',
    confirmButtonHoverBg: 'hover:bg-blue-600',
    confirmButtonFocusRing: 'focus:ring-blue-500',
  },
  yellow: {
    iconBg: 'bg-yellow-500',
    infoBg: 'bg-yellow-50',
    infoBorder: 'border-yellow-200',
    categoryText: 'text-yellow-700',
    classText: 'text-yellow-600',
    confirmButtonBg: 'bg-yellow-500',
    confirmButtonHoverBg: 'hover:bg-yellow-600',
    confirmButtonFocusRing: 'focus:ring-yellow-500',
  },
};

const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({
  isOpen,
  onClose,
  onConfirm,
  categoryName,
  className: selectedClass, // Renamed to avoid conflict with HTML 'class'
  categoryStyleKey,
}) => {
  const styles = popupStyles[categoryStyleKey];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent 
        className="p-0 sm:max-w-sm" 
        aria-labelledby="confirmation-popup-title"
        aria-describedby="confirmation-popup-description"
        preventCloseOnOverlayClick={true} // Prevent closing on overlay click
      >
        <DialogClose
          className="absolute left-4 top-4 p-1.5 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors"
          aria-label="Đóng popup"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </DialogClose>

        <DialogHeader className="pt-6 px-6 text-center items-center">
           <div className={`w-16 h-16 rounded-full ${styles.iconBg} flex items-center justify-center mx-auto mb-4`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <DialogTitle id="confirmation-popup-title" className="text-2xl font-bold text-gray-800 mb-2">
            Xác nhận lựa chọn
          </DialogTitle>
        </DialogHeader>
        
        <div id="confirmation-popup-description" className="px-6 pb-5 text-center">
            <DialogDescription className="text-gray-600 mb-3">Bạn đã chọn:</DialogDescription>
             <div className={`p-4 rounded-lg border ${styles.infoBg} ${styles.infoBorder}`}>
                <p className={`text-lg font-semibold ${styles.categoryText}`}>Ngành: {categoryName}</p>
                <p className={`text-base ${styles.classText}`}>Lớp: {selectedClass}</p>
            </div>
        </div>

        <DialogFooter className="flex gap-3 p-6 pt-0 bg-gray-50/50 rounded-b-2xl border-t border-gray-100">
          {/* "Chọn lại" button removed */}
          <button
            type="button"
            onClick={() => {
              onConfirm();
            }}
            className={`flex-1 py-3 px-4 text-white rounded-xl text-base font-medium ${styles.confirmButtonBg} ${styles.confirmButtonHoverBg} focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${styles.confirmButtonFocusRing}`}
          >
            Xác nhận
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationPopup;


import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogClose } from '../ui/dialog';
import { CategoryDetails } from '../../types';
import { ResetIcon } from '../icons/ProfileIcons'; // Or a more specific warning icon

interface ResetProgressConfirmationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  categoryDetails: CategoryDetails;
}

const ResetProgressConfirmationPopup: React.FC<ResetProgressConfirmationPopupProps> = ({
  isOpen,
  onClose,
  onConfirm,
  categoryDetails,
}) => {
  const confirmButtonBg = 'bg-red-600';
  const confirmButtonHoverBg = 'hover:bg-red-700';
  const confirmButtonFocusRing = 'focus:ring-red-500';

  return (
    <Dialog open={isOpen} onOpenChange={(openState) => !openState && onClose()}>
      <DialogContent 
        className="p-0 sm:max-w-xs" 
        aria-labelledby="reset-confirmation-title"
        aria-describedby="reset-confirmation-description"
        preventCloseOnOverlayClick={true}
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
           <div className={`w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-3`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
          </div>
          <DialogTitle id="reset-confirmation-title" className="text-xl font-bold text-gray-800 mb-1">
            Xác nhận Thiết lập lại
          </DialogTitle>
        </DialogHeader>
        
        <div id="reset-confirmation-description" className="px-6 pb-4 text-center">
            <DialogDescription className="text-gray-600 text-sm">
                Bạn có chắc chắn muốn thiết lập lại toàn bộ tiến độ học tập không? Hành động này sẽ xóa XP, level và các bài đã học. Không thể hoàn tác.
            </DialogDescription>
        </div>

        <DialogFooter className="flex flex-col sm:flex-row gap-2 p-4 bg-gray-50/50 rounded-b-lg border-t border-gray-100">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto flex-1 py-2.5 px-4 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1 transition-colors"
          >
            Hủy bỏ
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className={`w-full sm:w-auto flex-1 py-2.5 px-4 text-white rounded-md text-sm font-medium ${confirmButtonBg} ${confirmButtonHoverBg} focus:outline-none focus:ring-2 focus:ring-offset-1 transition-colors ${confirmButtonFocusRing}`}
          >
            Thiết lập lại
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ResetProgressConfirmationPopup;

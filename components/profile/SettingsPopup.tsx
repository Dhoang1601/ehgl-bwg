
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogClose,
} from '../ui/dialog';
import { CategoryDetails } from '../../types';
import { ArrowLeftIcon, AccountIcon, ExperienceIcon, InfoIcon, ResetIcon, RefreshCwIcon, SoundOnIcon, SoundOffIcon } from '../icons/ProfileIcons';
import { ChevronRightIcon } from '../icons/OtherIcons'; 
import { StarIcon, CheckIcon, LockIcon } from '../icons/LessonIcons'; // Corrected import path
import HeartIcon from '../icons/HeartIcon';
import { TrophyIcon as TrophyStatIcon, TargetIcon as TargetStatIcon } from '../icons/ProfileIcons'; // Renamed for clarity
import ResetProgressConfirmationPopup from './ResetProgressConfirmationPopup';

interface SettingsPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onResetProgress: () => void;
  onChangeCourse: () => void;
  areSoundEffectsEnabled: boolean;
  setAreSoundEffectsEnabled: (enabled: boolean) => void;
  appVersion: string;
  categoryDetails: CategoryDetails;
}

type SettingsView = 'main' | 'about' | 'guide' | 'confirmReset';

const SettingsPopup: React.FC<SettingsPopupProps> = ({
  isOpen,
  onClose,
  onResetProgress,
  onChangeCourse,
  areSoundEffectsEnabled,
  setAreSoundEffectsEnabled,
  appVersion,
  categoryDetails,
}) => {
  const [currentView, setCurrentView] = useState<SettingsView>('main');

  const handleResetConfirmed = () => {
    onResetProgress();
    setCurrentView('main'); // Go back to main settings
    onClose(); // Close the main settings popup
  };

  const renderMainView = () => (
    <>
      <DialogHeader className="pt-6 px-6 text-center items-center border-b pb-4">
        <DialogTitle id="settings-popup-title" className="text-xl font-bold text-gray-800">
          Cài đặt
        </DialogTitle>
        <DialogClose
          className="absolute right-4 top-4 p-1.5 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors"
          aria-label="Đóng cài đặt"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </DialogClose>
      </DialogHeader>
      
      <div className="px-4 py-3 space-y-2 max-h-[60vh] overflow-y-auto">
        {/* 1. Khóa học (Moved to top) */}
         <div className="py-2">
           <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 px-2">Khóa học</h3>
            <button
                onClick={() => { onChangeCourse(); onClose(); }}
                className="w-full flex items-center justify-between text-left px-3 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
            >
                <div className="flex items-center">
                <RefreshCwIcon className={`w-5 h-5 mr-3 ${categoryDetails.colors.logo}`} />
                <span className="text-sm text-gray-700 font-medium">Đổi Ngành / Lớp</span>
                </div>
                 <ChevronRightIcon className="w-4 h-4 text-gray-400" />
            </button>
        </div>
        
        {/* 2. Quản lý Tài khoản & Tiến độ */}
        <div className="py-2">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 px-2">Quản lý</h3>
          <button
            onClick={() => setCurrentView('confirmReset')}
            className="w-full flex items-center justify-between text-left px-3 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <div className="flex items-center">
              <ResetIcon className={`w-5 h-5 mr-3 ${categoryDetails.colors.logo}`} />
              <span className="text-sm text-gray-700 font-medium">Thiết lập lại Tiến độ</span>
            </div>
            <ChevronRightIcon className="w-4 h-4 text-gray-400" />
          </button>
        </div>

        {/* 3. Tùy chỉnh Trải nghiệm Ứng dụng */}
        <div className="py-2">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 px-2">Tùy chỉnh</h3>
          <div className="w-full flex items-center justify-between text-left px-3 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
            <div className="flex items-center">
              {areSoundEffectsEnabled ? <SoundOnIcon className={`w-5 h-5 mr-3 ${categoryDetails.colors.logo}`} /> : <SoundOffIcon className={`w-5 h-5 mr-3 text-gray-500`} />}
              <span className="text-sm text-gray-700 font-medium">Hiệu ứng Âm thanh</span>
            </div>
            <button
              onClick={() => setAreSoundEffectsEnabled(!areSoundEffectsEnabled)}
              className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 ${areSoundEffectsEnabled ? categoryDetails.colors.logo.replace('text-','focus:ring-') : 'focus:ring-gray-400'}`}
              role="switch"
              aria-checked={areSoundEffectsEnabled}
            >
              <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${areSoundEffectsEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
              <span className={`absolute left-0 w-full h-full rounded-full transition-colors ${areSoundEffectsEnabled ? categoryDetails.colors.progressBarFill : 'bg-gray-300'}`} />
            </button>
          </div>
           <div className="w-full flex items-center justify-between text-left px-3 py-3 bg-gray-50 rounded-lg mt-2 opacity-60">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-3 text-gray-400"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" /><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.75 7.25A.75.75 0 004 8v4a.75.75 0 00.75.75h10.5A.75.75 0 0016 12V8a.75.75 0 00-.75-.75H4.75z" clipRule="evenodd" /></svg>
              <span className="text-sm text-gray-500 font-medium">Nhắc nhở học tập <span className="text-xs">(Trong tương lai)</span></span>
            </div>
          </div>
        </div>

        {/* 4. Thông tin & Trợ giúp */}
        <div className="py-2">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 px-2">Thông tin</h3>
          <button
            onClick={() => setCurrentView('about')}
            className="w-full flex items-center justify-between text-left px-3 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <div className="flex items-center">
              <InfoIcon className={`w-5 h-5 mr-3 ${categoryDetails.colors.logo}`} />
              <span className="text-sm text-gray-700 font-medium">Về ứng dụng</span>
            </div>
            <ChevronRightIcon className="w-4 h-4 text-gray-400" />
          </button>
          <button
            onClick={() => setCurrentView('guide')}
            className="w-full flex items-center justify-between text-left px-3 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors mt-1.5"
          >
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 mr-3 ${categoryDetails.colors.logo}`}>
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-700 font-medium">Hướng dẫn</span>
            </div>
            <ChevronRightIcon className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>
    </>
  );

  const renderAboutView = () => (
    <>
      <DialogHeader className="pt-6 px-4 text-left items-center flex-row border-b pb-4">
        <button onClick={() => setCurrentView('main')} className="p-1.5 mr-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
          <ArrowLeftIcon className="w-5 h-5" />
        </button>
        <DialogTitle className="text-lg font-bold text-gray-800">Về ứng dụng</DialogTitle>
      </DialogHeader>
      <div className="px-6 py-4 space-y-3 text-sm text-gray-700 max-h-[60vh] overflow-y-auto">
        <p><strong>Phiên bản:</strong> {appVersion}</p>
        <p><strong>Mô tả:</strong> GiaoLy - Học Giáo Lý vui vẻ và hiệu quả.</p>
        <p><strong>Phát triển bởi:</strong> Hoàng đẹp trai</p>
        <p className="mt-4 text-xs text-gray-500">Ứng dụng được thiết kế để giúp bạn học hỏi và củng cố kiến thức Giáo Lý một cách sinh động và thú vị.</p>
      </div>
       <DialogFooter className="p-4 border-t">
        <button onClick={() => setCurrentView('main')} className={`w-full py-2 rounded-lg font-medium text-sm text-white ${categoryDetails.colors.progressBarFill}`}>
            Quay lại Cài đặt
        </button>
      </DialogFooter>
    </>
  );

  const renderGuideView = () => (
    <>
      <DialogHeader className="pt-6 px-4 text-left items-center flex-row border-b pb-4">
        <button onClick={() => setCurrentView('main')} className="p-1.5 mr-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
          <ArrowLeftIcon className="w-5 h-5" />
        </button>
        <DialogTitle className="text-lg font-bold text-gray-800">Hướng dẫn</DialogTitle>
      </DialogHeader>
      <div className="px-6 py-4 space-y-4 text-sm text-gray-700 max-h-[60vh] overflow-y-auto">
        <div>
          <h4 className="font-semibold text-gray-800 mb-1">Điểm Kinh Nghiệm (XP)</h4>
          <p>Mỗi bài học hoàn thành, câu trả lời đúng trong bài sẽ mang lại điểm kinh nghiệm (XP). Tích lũy XP để lên cấp.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-1">Lên Cấp (Level Up)</h4>
          <p>Cần (Level Hiện Tại + 1) * 100 XP để lên cấp tiếp theo. Ví dụ: từ Level 0 lên Level 1 cần 100 XP, từ Level 1 lên Level 2 cần 200 XP.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-1">Biểu Tượng (Icons)</h4>
          <ul className="list-none space-y-1 pl-2">
            <li className="flex items-center"><StarIcon className="w-4 h-4 mr-2 text-yellow-500" /> Bài học chưa hoàn thành, có thể học.</li>
            <li className="flex items-center"><CheckIcon className="w-4 h-4 mr-2 text-green-500" /> Bài học đã hoàn thành.</li>
            <li className="flex items-center"><LockIcon className="w-4 h-4 mr-2 text-gray-500" /> Bài học bị khóa, cần hoàn thành bài trước đó.</li>
            <li className="flex items-center"><HeartIcon className="w-4 h-4 mr-2 text-red-500" /> Số mạng còn lại trong bài học.</li>
            <li className="flex items-center"><TrophyStatIcon className="w-4 h-4 mr-2 text-yellow-600" /> Tổng điểm XP của bạn (trên Hồ sơ).</li>
            <li className="flex items-center"><TargetStatIcon className="w-4 h-4 mr-2 text-green-600" /> Cấp độ hiện tại của bạn (trên Hồ sơ).</li>
          </ul>
        </div>
      </div>
      <DialogFooter className="p-4 border-t">
        <button onClick={() => setCurrentView('main')} className={`w-full py-2 rounded-lg font-medium text-sm text-white ${categoryDetails.colors.progressBarFill}`}>
            Quay lại Cài đặt
        </button>
      </DialogFooter>
    </>
  );

  return (
    <Dialog open={isOpen} onOpenChange={(openState) => {
      if (!openState) {
        onClose();
        setTimeout(() => setCurrentView('main'), 150); // Reset view after close animation
      }
    }}>
      <DialogContent 
        className="p-0 sm:max-w-md w-[calc(100%-2rem)]" 
        aria-labelledby="settings-popup-title"
        preventCloseOnOverlayClick={currentView === 'confirmReset'} // Prevent closing if confirmation is shown
      >
        {currentView === 'main' && renderMainView()}
        {currentView === 'about' && renderAboutView()}
        {currentView === 'guide' && renderGuideView()}
      </DialogContent>
      {currentView === 'confirmReset' && (
        <ResetProgressConfirmationPopup
            isOpen={currentView === 'confirmReset'}
            onClose={() => setCurrentView('main')}
            onConfirm={handleResetConfirmed}
            categoryDetails={categoryDetails}
        />
      )}
    </Dialog>
  );
};

export default SettingsPopup;

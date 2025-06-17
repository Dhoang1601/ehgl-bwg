
import React from 'react';
import { CategoryDetails } from '../../types';
import { MenuIcon, ChevronUpIcon } from '../icons/OtherIcons'; 

interface ChapterBannerProps {
  categoryColors: CategoryDetails['colors'];
  chapterTitle: string;
  lessonTitle: string;
  onTextClick: () => void;
  onMenuIconClick: () => void; 
  isLessonSelectionModeActive: boolean; 
  isLessonInfoModeActive: boolean; 
  style?: React.CSSProperties; // Added style prop
}

const ChapterBanner: React.FC<ChapterBannerProps> = ({ 
    categoryColors, 
    chapterTitle, 
    lessonTitle,
    onTextClick,
    onMenuIconClick, 
    isLessonSelectionModeActive,
    isLessonInfoModeActive,
    style // Destructure style prop
}) => {
  const isAnyPanelActive = isLessonSelectionModeActive || isLessonInfoModeActive;

  return (
    <div 
        className="fixed left-0 right-0 z-30 pointer-events-none"
        style={style} // Apply dynamic style here
    > 
      <div 
        className={`
          mx-5 
          px-3 sm:px-4 
          ${categoryColors.progressBarFill} 
          text-white shadow-md 
          rounded-xl 
          flex items-center justify-between
          pointer-events-auto 
          transition-all duration-300 ease-in-out
          ${isAnyPanelActive ? 'py-[3px]' : 'py-1'} 
        `}
      >
        <button 
            onClick={onTextClick}
            className="flex-1 flex flex-col min-w-0 mr-2 text-left hover:bg-white/5 p-1 -m-1 rounded-md transition-colors"
            aria-label={`Thông tin chương: ${chapterTitle}, bài hiện tại: ${lessonTitle}. Nhấn để xem chi tiết bài học.`}
            aria-expanded={isLessonInfoModeActive}
        >
          <p 
            className={`
              text-xs font-medium text-white/80 uppercase tracking-wide whitespace-nowrap
              transition-all duration-300 ease-in-out overflow-hidden
              ${isAnyPanelActive ? 'max-h-0 opacity-0 mt-0 mb-0' : 'max-h-5 opacity-100 mt-0 mb-0.5'}
            `}
            aria-hidden={isAnyPanelActive}
          >
            {chapterTitle}
          </p>
          <h2 
            className={`
            font-bold text-white leading-snug
            transition-all duration-300 ease-in-out
            ${isAnyPanelActive 
              ? 'text-sm truncate' 
              : 'text-base mt-0.5 break-words' 
            } 
            `}
          > 
            {lessonTitle}
          </h2>
        </button>

        <div className="w-px h-6 bg-white/40 self-center mx-2" aria-hidden="true"></div>

        <button 
          onClick={onMenuIconClick} 
          className="p-1 text-white hover:bg-white/10 rounded-full transition-colors flex-shrink-0"
          aria-label={isLessonInfoModeActive ? "Đóng chi tiết bài học" : (isLessonSelectionModeActive ? "Đóng danh sách bài học" : "Mở danh sách bài học")}
          aria-expanded={isLessonSelectionModeActive || isLessonInfoModeActive}
        >
          {isLessonInfoModeActive || isLessonSelectionModeActive ? ( 
            <ChevronUpIcon className="w-6 h-6" /> 
          ) : (
            <MenuIcon className="w-6 h-6" /> 
          )}
        </button>
      </div>
    </div>
  );
};

export default ChapterBanner;

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Lesson } from '../../src/data/appStructureData';
import { CategoryDetails } from '../../types';

interface LessonPopupProps {
  lesson: Lesson;
  categoryColors: CategoryDetails['colors'];
  targetElement: HTMLElement;
  onStart: () => void;
  onReview: () => void;
  onClose: () => void;
  isVisible: boolean; // New prop for controlling opacity transition
}

const LessonPopup: React.FC<LessonPopupProps> = ({
  lesson,
  categoryColors,
  targetElement,
  onStart,
  onReview,
  onClose,
  isVisible
}) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isPopupAboveAnchor, setIsPopupAboveAnchor] = useState(false);

  useLayoutEffect(() => {
    if (targetElement && popupRef.current) {
      const targetRect = targetElement.getBoundingClientRect();
      const popupRect = popupRef.current.getBoundingClientRect();

      let topPos = targetRect.bottom + window.scrollY + 8; // Default: popup below anchor
      let leftPos = targetRect.left + window.scrollX + (targetRect.width / 2) - (popupRect.width / 2);
      let placedAbove = false;

      // Adjust left position to stay within viewport
      if (leftPos < 10) leftPos = 10;
      if (leftPos + popupRect.width > window.innerWidth - 10) {
        leftPos = window.innerWidth - popupRect.width - 10;
      }

      // Check if popup goes off-screen at the bottom, if so, move it above the anchor
      // Ensure popupRect.height is available and positive
      if (popupRect.height > 0 && (topPos + popupRect.height > window.innerHeight + window.scrollY - 10)) {
        topPos = targetRect.top + window.scrollY - popupRect.height - 8;
        placedAbove = true;
      }

      setPosition({ top: topPos, left: leftPos });
      setIsPopupAboveAnchor(placedAbove);
    }
  }, [targetElement, lesson, isVisible]); // Re-calculate if target, lesson or visibility changes

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isVisible) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose, isVisible]);

  const isCompleted = lesson.status === 'completed';
  const buttonText = isCompleted ? 'HỌC LẠI' : `BẮT ĐẦU +${lesson.xp} XP`;
  const buttonAction = isCompleted ? onReview : onStart;

  const popupBgColor = isCompleted ? 'bg-gray-500' : categoryColors.popupBg;
  // Upward arrow needs border-b color
  const upwardArrowBorderColor = isCompleted ? 'border-b-gray-500' : categoryColors.popupArrowBorder;
  // Downward arrow needs border-t color, matching the popup's background
  const downwardArrowBorderColor = isCompleted
    ? 'border-t-gray-500'
    : categoryColors.popupBg.replace('bg-', 'border-t-');

  const actionButtonTextColor = isCompleted ? 'text-gray-700' : categoryColors.popupActionText;

  return (
    <div
      ref={popupRef}
      style={{ top: `${position.top}px`, left: `${position.left}px` }}
      className={`fixed z-50 w-60 sm:w-64 rounded-xl shadow-2xl p-4 text-center text-white
                  ${popupBgColor}
                  transition-opacity duration-150 ease-in-out
                  ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      role="dialog"
      aria-labelledby="lesson-popup-title"
      aria-modal="true"
    >
      {isPopupAboveAnchor ? (
        <div
          className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0
                      border-l-[10px] border-l-transparent
                      border-r-[10px] border-r-transparent
                      border-t-[10px] ${downwardArrowBorderColor}`}
        />
      ) : (
        <div
          className={`absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0
                      border-l-[10px] border-l-transparent
                      border-r-[10px] border-r-transparent
                      border-b-[10px] ${upwardArrowBorderColor}`}
        />
      )}

      <h3 id="lesson-popup-title" className="text-base sm:text-lg font-bold mb-1">{lesson.title}</h3>
      <p className="text-xs sm:text-sm opacity-90 mb-3">
        {isCompleted ? 'Đã hoàn thành' : `Nhận ${lesson.xp} XP`}
      </p>

      <button
        onClick={buttonAction}
        className={`w-full bg-white ${actionButtonTextColor} font-bold text-sm sm:text-base py-2.5 sm:py-3 rounded-md shadow-sm hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 ${isCompleted ? 'focus:ring-gray-400' : categoryColors.popupActionText.replace('text-','focus:ring-') }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default LessonPopup;


import React, { forwardRef } from 'react';
import { Lesson } from '../../src/data/appStructureData';
import { CategoryDetails } from '../../types';
import { StarIcon, CheckIcon, LockIcon } from '../icons/LessonIcons';

interface LessonCircleProps {
  lesson: Lesson;
  categoryColors: CategoryDetails['colors'];
  onClick: (ref: React.RefObject<HTMLButtonElement>) => void;
  isFirstInUnit?: boolean; // Potentially for styling the connector line
  isLastInUnit?: boolean;  // Potentially for styling the connector line
}

const LessonCircle = forwardRef<HTMLButtonElement, LessonCircleProps>(
  ({ lesson, categoryColors, onClick, isFirstInUnit, isLastInUnit }, ref) => {
    let bgColor = 'bg-gray-200'; // Locked by default
    let iconColor = 'text-gray-400';
    let IconComponent = LockIcon; // Changed default to LockIcon for clarity
    let borderColor = 'border-gray-300';
    let shadow = 'shadow-md';

    if (lesson.status === 'unlocked') {
      bgColor = categoryColors.lessonCircleBg;
      iconColor = categoryColors.lessonCircleText;
      IconComponent = StarIcon;
      borderColor = categoryColors.lessonCircleBg.replace('bg-', 'border-'); // approx
      shadow = 'shadow-lg hover:shadow-xl';
    } else if (lesson.status === 'completed') {
      bgColor = 'bg-gray-400'; // Darker gray for completed
      iconColor = 'text-white';
      IconComponent = CheckIcon;
      borderColor = 'border-gray-500';
      shadow = 'shadow-md';
    } else { // locked
        IconComponent = LockIcon;
        iconColor = 'text-gray-500'; // Darker icon for locked
        bgColor = 'bg-gray-200';
    }

    const isDisabled = lesson.status === 'locked';

    return (
      <div className="relative flex justify-center items-center h-16"> {/* Container for circle and potential connector parts */}
        <button
          ref={ref}
          onClick={() => !isDisabled && onClick(ref as React.RefObject<HTMLButtonElement>)}
          disabled={isDisabled}
          aria-label={`Bài học: ${lesson.title}, trạng thái: ${lesson.status}`}
          className={`w-14 h-14 rounded-full flex items-center justify-center border-2 
                      ${bgColor} ${borderColor} ${shadow} 
                      focus:outline-none focus:ring-2 focus:ring-offset-2 
                      ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer transform hover:scale-105 transition-all duration-150'} 
                      ${lesson.status === 'unlocked' ? categoryColors.lessonCircleBg.replace('bg-','focus:ring-') : 'focus:ring-gray-400' } `}
        >
          <IconComponent className={`w-6 h-6 sm:w-7 sm:h-7 ${iconColor}`} />
        </button>
      </div>
    );
  }
);

export default LessonCircle;

import React, { forwardRef, useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion'; // Imported Variants
import { Lesson } from '../../src/data/appStructureData';
import { CategoryDetails } from '../../types';
import { StarIcon, CheckIcon, LockIcon } from '../icons/LessonIcons';

interface LessonCircleProps {
  lesson: Lesson;
  categoryColors: CategoryDetails['colors'];
  onClick: (ref: React.RefObject<HTMLButtonElement>) => void;
  isFirstInUnit?: boolean; 
  isLastInUnit?: boolean;  
}

const lessonVariants: Variants = { // Explicitly typed with Variants
  initial: { scale: 0.7, opacity: 0.6 }, // For initial mount if locked or for locked state
  unlocked: { 
    scale: 1, 
    opacity: 1, 
    transition: { duration: 0.4, type: "spring", stiffness: 300, damping: 15 } 
  },
  completed: { scale: 1, opacity: 1 }, // Similar to unlocked, but can differ if needed
  locked: { scale: 1, opacity: 0.6 }, // Adjusted locked to full scale but dimmed
};


const LessonCircle = forwardRef<HTMLButtonElement, LessonCircleProps>(
  ({ lesson, categoryColors, onClick, isFirstInUnit, isLastInUnit }, ref) => {
    let bgColor = 'bg-gray-200'; 
    let iconColor = 'text-gray-400';
    let IconComponent = LockIcon; 
    let borderColor = 'border-gray-300';
    let shadow = 'shadow-md';
    let currentVariant = 'locked';

    if (lesson.status === 'unlocked') {
      bgColor = categoryColors.lessonCircleBg;
      iconColor = categoryColors.lessonCircleText;
      IconComponent = StarIcon;
      borderColor = categoryColors.lessonCircleBg.replace('bg-', 'border-'); 
      shadow = 'shadow-lg hover:shadow-xl';
      currentVariant = 'unlocked';
    } else if (lesson.status === 'completed') {
      bgColor = 'bg-gray-400'; 
      iconColor = 'text-white';
      IconComponent = CheckIcon;
      borderColor = 'border-gray-500';
      shadow = 'shadow-md';
      currentVariant = 'completed';
    } else { // locked
        IconComponent = LockIcon;
        iconColor = 'text-gray-500'; 
        bgColor = 'bg-gray-200';
        currentVariant = 'locked';
    }

    const isDisabled = lesson.status === 'locked';

    // State to manage if the initial "appear" animation has played for this session/mount
    // This helps if the component re-renders but was already unlocked.
    const [hasAnimatedIn, setHasAnimatedIn] = useState(lesson.status !== 'locked');

    useEffect(() => {
        if (lesson.status !== 'locked' && !hasAnimatedIn) {
            setHasAnimatedIn(true);
        }
    }, [lesson.status, hasAnimatedIn]);

    return (
      <div className="relative flex justify-center items-center h-16">
        <motion.button
          ref={ref}
          onClick={() => !isDisabled && onClick(ref as React.RefObject<HTMLButtonElement>)}
          disabled={isDisabled}
          aria-label={`Bài học: ${lesson.title}, trạng thái: ${lesson.status}`}
          variants={lessonVariants}
          initial={hasAnimatedIn ? currentVariant : 'initial'} // Animate from 'initial' if not yet animated in
          animate={currentVariant}
          className={`w-14 h-14 rounded-full flex items-center justify-center border-2 
                      ${bgColor} ${borderColor} ${shadow} 
                      focus:outline-none focus:ring-2 focus:ring-offset-2 
                      ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer transform hover:scale-105 transition-all duration-150'} 
                      ${lesson.status === 'unlocked' ? categoryColors.lessonCircleBg.replace('bg-','focus:ring-') : 'focus:ring-gray-400' } `}
        >
          <IconComponent className={`w-6 h-6 sm:w-7 sm:h-7 ${iconColor}`} />
        </motion.button>
      </div>
    );
  }
);

export default LessonCircle;

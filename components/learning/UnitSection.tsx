
import React, { forwardRef } from 'react'; 
import { Unit as UnitType, Lesson as LessonType } from '../../src/data/appStructureData';
import { CategoryDetails } from '../../types'; 
import LessonCircle from './LessonCircle';
import { LessonRefMap } from './LearningPathContent';
import { ChevronDownIcon, ChevronRightIcon } from '../icons/OtherIcons'; // Import chevron icons

interface UnitSectionProps {
  unit: UnitType;
  categoryColors: CategoryDetails['colors'];
  onLessonClick: (lesson: LessonType, ref: React.RefObject<HTMLButtonElement>) => void;
  lessonRefs: React.MutableRefObject<LessonRefMap>;
  isFirstUnit: boolean;
  isLastUnit: boolean;
  scrollMarginTopValue: number; 
  isFullyCompleted: boolean; // New prop
  isExpanded: boolean; // New prop
  onToggleExpansion: () => void; // New prop
}

const UnitSection = forwardRef<HTMLElement, UnitSectionProps>(({ 
  unit, 
  categoryColors, 
  onLessonClick, 
  lessonRefs, 
  isFirstUnit, 
  isLastUnit,
  scrollMarginTopValue,
  isFullyCompleted,
  isExpanded,
  onToggleExpansion,
}, ref) => { 

  const TitleContent = () => (
    <>
      {unit.title}
      {isFullyCompleted && (
        isExpanded 
          ? <ChevronDownIcon className="w-4 h-4 ml-2 inline-block text-gray-500" /> 
          : <ChevronRightIcon className="w-4 h-4 ml-2 inline-block text-gray-500" />
      )}
    </>
  );

  return (
    <section 
      ref={ref} 
      className="my-6" 
      aria-labelledby={`unit-title-${unit.id}`}
      style={{ scrollMarginTop: `${scrollMarginTopValue}px` }} 
    >
      {isFullyCompleted ? (
        <button
          id={`unit-title-${unit.id}`}
          onClick={onToggleExpansion}
          aria-expanded={isExpanded}
          className="w-auto text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 bg-gray-100 px-3 py-1.5 rounded-lg relative left-1/2 -translate-x-1/2 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1 flex items-center"
        >
          <TitleContent />
        </button>
      ) : (
        <h3 
          id={`unit-title-${unit.id}`}
          className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8 bg-gray-50 inline-block px-3 py-1 rounded-md relative left-1/2 -translate-x-1/2"
        >
          <TitleContent />
        </h3>
      )}

      <div 
        className={`unit-lessons-container ${isFullyCompleted ? (isExpanded ? 'unit-lessons-expanded' : 'unit-lessons-collapsed') : 'unit-lessons-expanded'}`}
      >
        <div className={`space-y-4 ${isFullyCompleted && !isExpanded ? 'pt-0' : 'pt-2'}`}> {/* No padding-top if collapsed initially */}
          {unit.lessons.map((lesson, lessonIndex) => (
            <LessonCircle
              key={lesson.id}
              lesson={lesson}
              categoryColors={categoryColors}
              onClick={(lessonCircleRef) => onLessonClick(lesson, lessonCircleRef)}
              ref={lessonRefs.current[lesson.id]}
              isFirstInUnit={lessonIndex === 0 && isFirstUnit} 
              isLastInUnit={lessonIndex === unit.lessons.length -1 && isLastUnit} 
            />
          ))}
        </div>
      </div>
    </section>
  );
});
UnitSection.displayName = 'UnitSection';

export default UnitSection;
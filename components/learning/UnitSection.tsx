
import React, { forwardRef } from 'react'; 
import { Unit as UnitType, Lesson as LessonType } from '../../src/data/appStructureData';
import { CategoryDetails } from '../../types'; 
import LessonCircle from './LessonCircle';
import { LessonRefMap } from './LearningPathContent';

interface UnitSectionProps {
  unit: UnitType;
  categoryColors: CategoryDetails['colors'];
  onLessonClick: (lesson: LessonType, ref: React.RefObject<HTMLButtonElement>) => void;
  lessonRefs: React.MutableRefObject<LessonRefMap>;
  isFirstUnit: boolean;
  isLastUnit: boolean;
  scrollMarginTopValue: number; // New prop for scroll margin offset
}

const UnitSection = forwardRef<HTMLElement, UnitSectionProps>(({ 
  unit, 
  categoryColors, 
  onLessonClick, 
  lessonRefs, 
  isFirstUnit, 
  isLastUnit,
  scrollMarginTopValue // Destructure new prop
}, ref) => { 
  return (
    <section 
      ref={ref} 
      className="my-6" 
      aria-labelledby={`unit-title-${unit.id}`}
      style={{ scrollMarginTop: `${scrollMarginTopValue}px` }} // Apply scroll-margin-top
    >
      <h3 
        id={`unit-title-${unit.id}`}
        className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8 bg-gray-50 inline-block px-3 py-1 rounded-md relative left-1/2 -translate-x-1/2"
      >
        {unit.title}
      </h3>
      <div className="space-y-4">
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
    </section>
  );
});
UnitSection.displayName = 'UnitSection';

export default UnitSection;

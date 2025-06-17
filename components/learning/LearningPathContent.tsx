
import React, { createRef } from 'react';
import { Unit, Lesson } from '../../src/data/appStructureData'; // Import shared types
import { CategoryDetails } from '../../types';
import UnitSection from './UnitSection';

export type LessonRefMap = Record<string, React.RefObject<HTMLButtonElement>>;

interface LearningPathContentProps {
  units: Unit[];
  categoryColors: CategoryDetails['colors'];
  onLessonClick: (lesson: Lesson, ref: React.RefObject<HTMLButtonElement>) => void;
  lessonRefs: React.MutableRefObject<LessonRefMap>;
  unitSectionRefs: React.MutableRefObject<React.RefObject<HTMLElement>[]>;
  scrollMarginTopValue: number;
  expandedUnits: Record<string, boolean>;
  onToggleUnitExpansion: (unitId: string) => void;
}

const LearningPathContent: React.FC<LearningPathContentProps> = ({ 
  units, 
  categoryColors, 
  onLessonClick, 
  lessonRefs,
  unitSectionRefs,
  scrollMarginTopValue,
  expandedUnits,
  onToggleUnitExpansion,
}) => {
  
  units.forEach(unit => {
    unit.lessons.forEach(lesson => {
      if (!lessonRefs.current[lesson.id]) {
        lessonRefs.current[lesson.id] = createRef<HTMLButtonElement>();
      }
    });
  });

  if (unitSectionRefs.current.length !== units.length) {
    unitSectionRefs.current = units.map((_, i) => unitSectionRefs.current[i] || createRef<HTMLElement>());
  }

  return (
    <div className="px-2 sm:px-4 pb-8 relative">
      <div className="absolute top-0 bottom-0 left-1/2 w-[3px] bg-gray-300 transform -translate-x-1/2 rounded-full" aria-hidden="true"></div>
      
      <div className="relative z-10">
        {units.map((unit, unitIndex) => {
          const isFullyCompleted = unit.lessons.every(lesson => lesson.status === 'completed');
          return (
            <UnitSection
              key={unit.id}
              ref={unitSectionRefs.current[unitIndex]}
              unit={unit}
              categoryColors={categoryColors}
              onLessonClick={onLessonClick}
              lessonRefs={lessonRefs}
              isFirstUnit={unitIndex === 0}
              isLastUnit={unitIndex === units.length - 1}
              scrollMarginTopValue={scrollMarginTopValue}
              isFullyCompleted={isFullyCompleted}
              isExpanded={expandedUnits[unit.id] ?? true}
              onToggleExpansion={() => onToggleUnitExpansion(unit.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LearningPathContent;
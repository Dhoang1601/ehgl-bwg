
import React from 'react';
import { Unit } from '../../src/data/appStructureData';
import { CategoryDetails } from '../../types'; // Import CategoryDetails for colors

interface LessonSelectionListProps {
  units: Unit[];
  isActive: boolean;
  onUnitSelect: (unitIndex: number) => void;
  topOffset: number; // Pixels from the top of the viewport
  categoryColors: CategoryDetails['colors']; // Add categoryColors prop
}

const LessonSelectionList: React.FC<LessonSelectionListProps> = ({
  units,
  isActive,
  onUnitSelect,
  topOffset,
  categoryColors,
}) => {
  return (
    <div
      className={`
        fixed left-0 right-0 w-full px-5
        transition-all duration-300 ease-in-out
        overflow-y-auto bg-white 
        z-20 // Adjusted z-index to match LessonInfoPanel (below ChapterBanner, above LearningPathContent)
      `}
      style={{
        top: `${topOffset}px`,
        maxHeight: isActive ? `calc(100vh - ${topOffset}px - 4rem)` : '0px', 
        opacity: isActive ? 1 : 0,
        pointerEvents: isActive ? 'auto' : 'none',
        paddingBottom: isActive ? '20px' : '0px', 
      }}
      aria-hidden={!isActive}
      role="listbox"
      aria-label="Danh sách các phần học"
    >
      <div className="py-3 space-y-3"> 
        {units.map((unit, index) => (
          <button
            key={unit.id}
            onClick={() => onUnitSelect(index)}
            className={`
              block w-full text-left text-lg
              ${categoryColors.progressBarFill} text-white 
              font-bold py-[3px] px-4 rounded-xl shadow-md 
              hover:opacity-90 active:opacity-80 transition-opacity duration-150
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white 
            `}
            role="option"
            aria-selected={false} 
            aria-label={`Chuyển đến phần: ${unit.title}`}
          >
            {unit.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LessonSelectionList;

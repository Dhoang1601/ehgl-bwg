// components/learning/LessonInfoPanel.tsx
import React from 'react';
import { LessonInfoData } from '../../src/data/info/lessonInfoTypes';

interface LessonInfoPanelProps {
  unitInfoData: LessonInfoData | null;
  isActive: boolean;
  topOffset: number; // Pixels from the top of the viewport
  // categoryColors: CategoryDetails['colors']; // Potentially for future styling
}

const LessonInfoPanel: React.FC<LessonInfoPanelProps> = ({
  unitInfoData,
  isActive,
  topOffset,
  // categoryColors, // Not used for now as bg is white
}) => {
  return (
    <div
      className={`
        fixed left-0 right-0 w-full 
        transition-all duration-300 ease-in-out
        overflow-y-auto bg-white 
        z-20 // Below ChapterBanner (z-30) but above LearningPathContent's inner elements (z-10)
        px-4 sm:px-6 // Add horizontal padding
      `}
      style={{
        top: `${topOffset}px`,
        height: isActive ? `calc(100vh - ${topOffset}px - 4rem)` : '0px', // 4rem for bottom nav
        opacity: isActive ? 1 : 0,
        pointerEvents: isActive ? 'auto' : 'none',
        paddingBottom: isActive ? '1.5rem' : '0px', // Bottom padding when active
      }}
      aria-hidden={!isActive}
      role="region"
      aria-labelledby="lesson-info-panel-title"
    >
      {unitInfoData ? (
        <div className="py-5"> {/* Add vertical padding */}
          <h2 id="lesson-info-panel-title" className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-3">
            {unitInfoData.lessonName}
          </h2>
          
          <div className="mb-6 text-center">
            <p className="italic text-gray-700 text-base sm:text-lg mb-1 whitespace-pre-line">
              {unitInfoData.wordOfGod}
            </p>
            <p className="text-sm text-gray-600">
              {unitInfoData.wordOfGodCitation}
            </p>
          </div>

          <div className="space-y-4">
            {unitInfoData.questionsAndAnswers.map((item, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-1">
                  Hỏi: {item.question}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base ml-2 sm:ml-4 whitespace-pre-line">
                  <span className="font-medium text-gray-500">Thưa:</span> {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        isActive && ( // Only show "not available" if panel is supposed to be active but no data
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500 text-lg">Thông tin chi tiết bài học không có sẵn.</p>
          </div>
        )
      )}
    </div>
  );
};

export default LessonInfoPanel;

import React from 'react';
import { FillBlankPageData } from '../LessonDetailPage';
import { CategoryDetails } from '../../../types';

interface FillBlankTypeProps {
  pageData: FillBlankPageData;
  selectedOptionId: string | null;
  onOptionSelect: (optionId: string) => void;
  isAnswerChecked: boolean;
  isCorrect: boolean | null;
  categoryDetails: CategoryDetails;
}

const FillBlankType: React.FC<FillBlankTypeProps> = ({ 
    pageData, 
    selectedOptionId, 
    onOptionSelect,
    isAnswerChecked,
    isCorrect,
    categoryDetails
}) => {
  const { colors } = categoryDetails;

  return (
    <div className="p-4 flex flex-col items-center justify-center h-full space-y-6">
      <p className="text-lg text-gray-700 text-center">
        {pageData.questionTextBeforeBlank}
        <span className={`inline-block min-w-[6rem] max-w-xs text-center h-7 border-b-2 mx-1.5 align-middle px-2 rounded-t-sm ${
          selectedOptionId 
            ? `${colors.fillBlankSelectedWordBg} ${colors.fillBlankSelectedWordBorder.replace('border-b-2','')} ${colors.fillBlankSelectedWordText} font-semibold` 
            : 'border-gray-400'
        }`}>
          {selectedOptionId && pageData.options.find(opt => opt.id === selectedOptionId)?.text}
        </span>
        {pageData.questionTextAfterBlank}
      </p>
      <div className="grid grid-cols-2 gap-3 w-full max-w-md">
        {pageData.options.map((option) => {
          let buttonClass = "p-3 border rounded-lg text-sm transition-colors ";
          if (isAnswerChecked) {
            if (option.id === pageData.correctOptionId) {
              buttonClass += "bg-green-100 border-green-400 text-green-700";
            } else if (option.id === selectedOptionId && !isCorrect) {
              buttonClass += "bg-red-100 border-red-400 text-red-700";
            } else {
              buttonClass += "bg-gray-100 border-gray-300 text-gray-600";
            }
          } else { // Before answer is checked
             if (selectedOptionId === option.id) {
                buttonClass += `${colors.choiceSelectedBg} ${colors.choiceSelectedBorder} ${colors.choiceSelectedText}`;
             } else {
                buttonClass += `${colors.choiceUnselectedBg} hover:bg-gray-50 ${colors.choiceUnselectedBorder} ${colors.choiceUnselectedText}`;
             }
          }

          return (
            <button
              key={option.id}
              onClick={() => !isAnswerChecked && onOptionSelect(option.id)}
              disabled={isAnswerChecked}
              className={buttonClass}
            >
              {option.text}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FillBlankType;
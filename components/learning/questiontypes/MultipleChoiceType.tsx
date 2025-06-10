
import React from 'react';
import { MultipleChoicePageData } from '../LessonDetailPage';
import { CategoryDetails } from '../../../types';

interface MultipleChoiceTypeProps {
  pageData: MultipleChoicePageData;
  selectedOptionId: string | null;
  onOptionSelect: (optionId: string) => void;
  isAnswerChecked: boolean;
  isCorrect: boolean | null;
  categoryDetails: CategoryDetails;
}

const MultipleChoiceType: React.FC<MultipleChoiceTypeProps> = ({ 
    pageData, 
    selectedOptionId, 
    onOptionSelect,
    isAnswerChecked,
    isCorrect,
    categoryDetails
 }) => {
  const { colors } = categoryDetails;

  return (
    <div className="p-4 flex flex-col items-center justify-center h-full space-y-5">
      <p className="text-lg text-gray-700 text-center mb-2">{pageData.questionText}</p>
      <div className="w-full max-w-md space-y-3">
        {pageData.options.map((option) => {
          let buttonClass = "w-full p-3 border rounded-lg text-left text-sm transition-colors ";
          if (isAnswerChecked) {
            if (option.id === pageData.correctOptionId) {
              buttonClass += "bg-green-100 border-green-400 text-green-700"; // Correct answer shown
            } else if (option.id === selectedOptionId && !isCorrect) {
              buttonClass += "bg-red-100 border-red-400 text-red-700"; // Incorrect selected answer shown
            } else {
              buttonClass += "bg-gray-100 border-gray-300 text-gray-600 opacity-80"; // Other non-selected or non-relevant options
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

export default MultipleChoiceType;
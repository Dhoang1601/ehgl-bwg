
import React from 'react';
import { TrueFalsePageData } from '../LessonDetailPage';
import { CategoryDetails } from '../../../types';

interface TrueFalseTypeProps {
  pageData: TrueFalsePageData;
  selectedAnswer: boolean | null; // true for "Đúng", false for "Sai"
  onAnswerSelect: (answer: boolean) => void;
  isAnswerChecked: boolean;
  isCorrect: boolean | null;
  categoryDetails: CategoryDetails;
}

const TrueFalseType: React.FC<TrueFalseTypeProps> = ({ 
    pageData, 
    selectedAnswer, 
    onAnswerSelect,
    isAnswerChecked,
    isCorrect,
    categoryDetails 
}) => {
  const { colors } = categoryDetails;

  const getButtonClass = (isTrueButton: boolean) => {
    let base = "w-full py-3 px-6 border-2 rounded-lg text-base font-semibold transition-colors ";
    if (isAnswerChecked) {
        if (isTrueButton === pageData.correctAnswer) { // This button represents the correct answer
            base += "bg-green-100 border-green-500 text-green-700";
        } else if (selectedAnswer === isTrueButton && !isCorrect) { // This button was selected and is incorrect
            base += "bg-red-100 border-red-500 text-red-700";
        } else { // Other button, not selected or not the incorrect one
            base += "bg-gray-100 border-gray-300 text-gray-500 opacity-80";
        }
    } else { // Before answer is checked
        if (selectedAnswer === isTrueButton) { // This button is currently selected
            base += `${colors.choiceSelectedBg} ${colors.choiceSelectedBorder} ${colors.choiceSelectedText}`;
        } else { // This button is not selected
            if (selectedAnswer !== null) { // Another button is selected, so this one is de-emphasized
                base += `${colors.choiceUnselectedBg} ${colors.choiceUnselectedBorder} ${colors.choiceUnselectedText} opacity-70`;
            } else { // No button is selected yet - initial state
                base += (isTrueButton 
                    ? `bg-green-50 hover:bg-green-100 border-green-400 text-green-600` 
                    : `bg-red-50 hover:bg-red-100 border-red-400 text-red-600`);
            }
        }
    }
    return base;
  }

  return (
    <div className="p-4 flex flex-col items-center justify-center h-full space-y-6">
      <p className="text-lg text-gray-700 text-center mb-4">{pageData.questionText}</p>
      <div className="w-full max-w-xs space-y-3">
        <button
          onClick={() => !isAnswerChecked && onAnswerSelect(true)}
          disabled={isAnswerChecked}
          className={getButtonClass(true)}
          aria-pressed={selectedAnswer === true}
        >
          Đúng
        </button>
        <button
          onClick={() => !isAnswerChecked && onAnswerSelect(false)}
          disabled={isAnswerChecked}
          className={getButtonClass(false)}
          aria-pressed={selectedAnswer === false}
        >
          Sai
        </button>
      </div>
    </div>
  );
};

export default TrueFalseType;
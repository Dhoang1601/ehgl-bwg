
import React from 'react';
import { SortPageData, SortWordItem } from '../LessonDetailPage';
import { CategoryDetails } from '../../../types';

interface SortTypeProps {
  pageData: SortPageData;
  currentOrder: SortWordItem[]; 
  onWordMove: (wordId: string, action: 'select' | 'remove' | 'clear') => void 
  isAnswerChecked: boolean; 
  isCorrect: boolean | null;
  categoryDetails: CategoryDetails;
}

const SortType: React.FC<SortTypeProps> = ({ 
    pageData, 
    currentOrder, 
    onWordMove,
    isAnswerChecked, 
    isCorrect,
    categoryDetails 
}) => {
  const { colors } = categoryDetails;
  const selectedWordIds = currentOrder.map(w => w.id);

  return (
    <div className="p-4 flex flex-col items-center justify-center h-full space-y-4">
      <p className="text-lg text-gray-700 mb-2 text-center">{pageData.prompt || "Sắp xếp các từ sau:"}</p>
      
      <div className={`p-3 border-2 rounded-lg min-h-[4rem] w-full max-w-md text-center flex flex-wrap gap-1 justify-center items-center ${
         isAnswerChecked ? (isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50') : 'border-gray-300 bg-gray-50'
      }`}>
        {currentOrder.length > 0 
            ? currentOrder.map(word => (
                <span key={word.id} className={`px-2 py-1 ${colors.sortAreaWordBg} ${colors.sortAreaWordText} rounded text-sm shadow-sm`}>
                    {word.text}
                </span>
              )) 
            : <span className="text-gray-400">Chạm vào từ bên dưới để chọn</span>
        }
      </div>

      <div className="flex flex-wrap justify-center gap-2 w-full max-w-md">
        {pageData.words.map((word) => (
          <button
            key={word.id}
            onClick={() => !isAnswerChecked && onWordMove(word.id, 'select')}
            disabled={isAnswerChecked || selectedWordIds.includes(word.id)}
            className={`px-3 py-1.5 border rounded-md text-sm transition-colors 
                        ${selectedWordIds.includes(word.id) ? 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-50' 
                                                             : `${colors.choiceUnselectedBg} hover:bg-gray-50 ${colors.choiceUnselectedBorder} ${colors.choiceUnselectedText}`}
                        ${isAnswerChecked && !selectedWordIds.includes(word.id) ? 'opacity-60' : ''}
                      `}
          >
            {word.text}
          </button>
        ))}
      </div>
       { (currentOrder.length > 0) && !isAnswerChecked && ( 
        <button 
            onClick={() => onWordMove('', 'clear')} 
            className="mt-2 px-3 py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs rounded-md"
        >
            Xóa chọn
        </button>
      )}
    </div>
  );
};

export default SortType;
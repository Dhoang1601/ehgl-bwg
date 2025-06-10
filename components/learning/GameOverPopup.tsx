
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../ui/dialog';
import HeartIcon from '../icons/HeartIcon'; // Assuming you have a HeartIcon

interface GameOverPopupProps {
  isOpen: boolean;
  onRestart: () => void;
  onGoToMain: () => void;
  categoryStyleKey: 'green' | 'blue' | 'yellow';
}

const popupStyles = {
  green: {
    primaryButton: 'bg-green-600 hover:bg-green-700 focus:ring-green-500',
  },
  blue: {
    primaryButton: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
  },
  yellow: {
    primaryButton: 'bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-400',
  },
};

const GameOverPopup: React.FC<GameOverPopupProps> = ({ isOpen, onRestart, onGoToMain, categoryStyleKey }) => {
  const styles = popupStyles[categoryStyleKey];
  // Popup should not be closable by clicking outside or ESC, only by buttons.
  // The Dialog component might need adjustment or this needs to be a custom modal to enforce that.
  // For now, we rely on the user clicking one of the two buttons.

  return (
    <Dialog open={isOpen} onOpenChange={() => { /* Prevent closing by onOpenChange */ }}>
      <DialogContent className="p-0 sm:max-w-xs text-center" aria-labelledby="game-over-title">
        <DialogHeader className="pt-6 px-6 items-center">
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-3">
            <HeartIcon className="w-7 h-7 text-red-500" /> {/* Broken heart or sad face would be better */}
          </div>
          <DialogTitle id="game-over-title" className="text-xl font-bold text-gray-800">
            Hết mạng rồi!
          </DialogTitle>
        </DialogHeader>
        
        <DialogDescription className="px-6 pb-4 text-gray-600 text-sm">
          Bạn đã dùng hết số lượt chơi. Bạn muốn làm gì tiếp theo?
        </DialogDescription>

        <DialogFooter className="flex flex-col gap-2 p-4 bg-gray-50/50 border-t border-gray-100 rounded-b-lg">
          <button
            type="button"
            onClick={onRestart}
            className={`w-full py-2.5 px-4 text-white rounded-md text-sm font-medium ${styles.primaryButton} focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors`}
          >
            Học lại bài này
          </button>
          <button
            type="button"
            onClick={onGoToMain}
            className="w-full py-2.5 px-4 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors"
          >
            Quay về trang chính
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GameOverPopup;

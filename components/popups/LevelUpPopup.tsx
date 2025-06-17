
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogOverlay, DialogPortal } from '../ui/dialog'; // Using existing Dialog primitives
import HaloSmileIcon from '../icons/HaloSmileIcon';
import { CategoryDetails } from '../../types';

interface LevelUpPopupProps {
  isOpen: boolean;
  onClose: () => void;
  level: number;
  categoryDetails: CategoryDetails;
  areSoundEffectsEnabled: boolean; // Added prop
}

const LevelUpPopup: React.FC<LevelUpPopupProps> = ({ 
  isOpen, 
  onClose, 
  level, 
  categoryDetails,
  areSoundEffectsEnabled, // Prop received
}) => {
  const { colors } = categoryDetails;

  // Define a celebratory version of category colors
  const celebratoryColors = {
    primaryBg: colors.progressBarFill, // e.g., bg-green-500
    primaryText: 'text-white',
    secondaryText: colors.logo, // e.g., text-green-600
    accentBg: colors.lessonCircleBg.replace('bg-', 'bg-opacity-20 bg-'), // Lighter accent
    iconColor: colors.logo, // For HaloSmileIcon
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogPortal>
            <DialogOverlay />
            <DialogContent 
              className="dialog-content-centered-modal p-0 sm:max-w-xs overflow-hidden" // Use existing animation class
              preventCloseOnOverlayClick={false} // Allow closing on overlay click
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }}
                exit={{ opacity: 0, scale: 0.8, y: 20, transition: { duration: 0.2, ease: "easeIn" } }}
                className="flex flex-col items-center text-center p-6"
              >
                <HaloSmileIcon className={`w-24 h-24 mb-4 ${celebratoryColors.iconColor}`} />
                
                <h2 className={`text-3xl font-bold ${celebratoryColors.secondaryText} mb-2`}>
                  LÊN CẤP!
                </h2>
                <p className="text-gray-700 text-lg mb-1">
                  Chúc mừng bạn đã đạt
                </p>
                <p className={`text-5xl font-extrabold ${celebratoryColors.secondaryText} mb-6`}>
                  Level {level}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className={`w-full ${celebratoryColors.primaryBg} ${celebratoryColors.primaryText} font-semibold py-3 px-8 rounded-xl text-lg shadow-md hover:opacity-90 transition-opacity`}
                >
                  Tuyệt vời!
                </motion.button>
              </motion.div>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default LevelUpPopup;

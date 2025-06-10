
import React from 'react';

const LoadingOverlay: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80 backdrop-blur-sm transition-opacity duration-300 ease-in-out"
      role="dialog"
      aria-modal="true"
      aria-live="assertive" // To announce loading state to screen readers
    >
      <div className="w-12 h-12 border-4 border-green-600 border-solid border-t-transparent rounded-full animate-spin"></div>
      <span className="sr-only">Đang tải nội dung...</span>
    </div>
  );
};

export default LoadingOverlay;

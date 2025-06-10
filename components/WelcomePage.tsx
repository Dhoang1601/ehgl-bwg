
import React from 'react';
import HaloSmileIcon from './icons/HaloSmileIcon';

interface WelcomePageProps {
  onStartLearning: () => void;
  isExiting: boolean; // New prop for fade-out
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onStartLearning, isExiting }) => {
  return (
    <div 
      className={`flex flex-col items-center justify-center min-h-screen bg-white p-6 text-center transition-opacity duration-300 ease-in-out ${isExiting ? 'opacity-0' : 'opacity-100'}`}
    >
      <header className="mb-8 md:mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700">
          GiaoLy
        </h1>
      </header>

      <main className="flex flex-col items-center space-y-6 md:space-y-8">
        <HaloSmileIcon className="w-36 h-36 md:w-48 md:h-48 text-gray-800" />

        <p className="text-lg md:text-xl text-gray-700 max-w-md">
          Học Giáo Lý vui vẻ và hiệu quả!
        </p>

        <button
          type="button"
          onClick={onStartLearning}
          disabled={isExiting} // Disable button during exit transition
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-10 md:px-12 text-lg md:text-xl rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50"
          aria-label="Bắt đầu học giáo lý"
        >
          BẮT ĐẦU HỌC
        </button>
      </main>

      <footer className="mt-12 md:mt-16">
        <div className="flex justify-center space-x-2">
          <span className="w-2.5 h-2.5 bg-green-600 rounded-full" aria-hidden="true"></span>
          <span className="w-2.5 h-2.5 bg-gray-300 rounded-full" aria-hidden="true"></span>
          <span className="w-2.5 h-2.5 bg-gray-300 rounded-full" aria-hidden="true"></span>
        </div>
      </footer>
    </div>
  );
};

export default WelcomePage;

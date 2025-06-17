import React from 'react';
import { Prayer, CategoryDetails, CATEGORY_STYLES } from '../types';

interface PrayerCardProps {
  prayer: Prayer;
}

const PrayerCard: React.FC<PrayerCardProps> = ({ prayer }) => {
  const categoryDetails: CategoryDetails | undefined = CATEGORY_STYLES[prayer.categoryKey];
  const titleColor = categoryDetails ? categoryDetails.colors.logo : 'text-gray-800';
  const borderColor = categoryDetails ? categoryDetails.colors.progressBarFill.replace('bg-','border-') : 'border-gray-300';


  return (
    <div className={`bg-white p-4 sm:p-5 rounded-lg shadow-md border-l-4 ${borderColor} mb-4`}>
      <h3 className={`text-lg sm:text-xl font-semibold ${titleColor} mb-2`}>{prayer.title}</h3>
      <div className="text-sm sm:text-base text-gray-700 space-y-2">
        {prayer.content.map((paragraph, index) => (
          <p key={index} className="leading-relaxed whitespace-pre-line">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PrayerCard;

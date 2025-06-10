
import React from 'react';

interface AchievementCardProps {
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  iconColor: string; // e.g., text-purple-600
  bgColor: string; // e.g., bg-purple-50
  borderColor: string; // e.g., border-purple-200
  textColor: string; // e.g., text-purple-700
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  name,
  Icon,
  iconColor,
  bgColor,
  borderColor,
  textColor,
}) => {
  return (
    <div className={`p-3.5 rounded-xl border ${bgColor} ${borderColor} shadow-sm text-center`}>
      <Icon className={`w-8 h-8 ${iconColor} mx-auto mb-1.5`} />
      <p className={`text-sm font-medium ${textColor}`}>{name}</p>
    </div>
  );
};

export default AchievementCard;

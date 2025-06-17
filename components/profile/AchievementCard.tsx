
import React from 'react';

interface AchievementCardProps {
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  isEarned: boolean;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  name,
  Icon,
  isEarned,
}) => {
  const earnedStyles = {
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-300',
    iconColor: 'text-yellow-500',
    textColor: 'text-yellow-700',
    opacity: 'opacity-100',
    statusText: 'Đã đạt!',
    shadow: 'shadow-md hover:shadow-lg',
  };

  const unearnedStyles = {
    bgColor: 'bg-gray-100',
    borderColor: 'border-gray-200',
    iconColor: 'text-gray-400',
    textColor: 'text-gray-500',
    opacity: 'opacity-60',
    statusText: 'Chưa đạt',
    shadow: 'shadow-sm',
  };

  const styles = isEarned ? earnedStyles : unearnedStyles;

  return (
    <div 
      className={`p-3.5 rounded-xl border ${styles.bgColor} ${styles.borderColor} ${styles.shadow} ${styles.opacity} text-center transition-all duration-200 ease-in-out h-full flex flex-col justify-between`}
      aria-label={`${name}: ${styles.statusText}`}
    >
      <div>
        <Icon className={`w-10 h-10 ${styles.iconColor} mx-auto mb-1.5`} />
        <p className={`text-xs font-semibold ${styles.textColor} mb-0.5`}>{name}</p>
      </div>
      <p className={`text-[10px] ${isEarned ? 'text-yellow-600' : 'text-gray-400'} font-medium`}>{styles.statusText}</p>
    </div>
  );
};

export default AchievementCard;

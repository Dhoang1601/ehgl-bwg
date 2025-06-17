import React from 'react';

interface StatisticCardProps {
  label: string;
  value: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  iconBgColor: string; // e.g., bg-orange-500
  bgColor: string; // e.g., bg-orange-50
  borderColor: string; // e.g., border-orange-200
  textColor: string; // e.g., text-orange-600
}

const StatisticCard: React.FC<StatisticCardProps> = ({
  label,
  value,
  Icon,
  iconBgColor,
  bgColor,
  borderColor,
  textColor,
}) => {
  // If the label is "Day streak", use the card's main textColor for the icon.
  // Otherwise, use "text-white" for other icons on colored backgrounds.
  const iconColorClass = label === "Day streak" && textColor.startsWith("text-") ? textColor : "text-white";

  // Conditionally apply iconBgColor. If it's the "Day streak" card, don't apply a background to the icon wrapper.
  const iconWrapperBgClass = label === "Day streak" ? '' : iconBgColor;

  return (
    <div className={`p-3 rounded-xl border ${bgColor} ${borderColor} shadow-sm`}>
      <div className="flex items-center mb-1.5">
        <div className={`w-7 h-7 rounded-full ${iconWrapperBgClass} flex items-center justify-center mr-2.5`}>
          <Icon className={`w-4 h-4 ${iconColorClass}`} />
        </div>
        <p className={`text-2xl font-bold ${textColor}`}>{value}</p>
      </div>
      <p className="text-xs text-gray-500 ml-0.5">{label}</p>
    </div>
  );
};

export default StatisticCard;
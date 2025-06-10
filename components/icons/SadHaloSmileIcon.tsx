import React from 'react';

interface SadHaloSmileIconProps {
  className?: string;
}

const SadHaloSmileIcon: React.FC<SadHaloSmileIconProps> = ({ className = "w-24 h-24 text-gray-800" }) => {
  return (
    <svg
      viewBox="0 0 100 120" // Adjusted viewBox for halo height
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="sadHaloSmileIconTitle"
      role="img"
    >
      <title id="sadHaloSmileIconTitle">Biểu tượng mặt buồn với vòng hào quang</title>
      {/* Halo */}
      <ellipse
        cx="50"
        cy="25" // Positioned above the head
        rx="25"
        ry="10"
        className="fill-none stroke-yellow-400"
        strokeWidth="5"
      />
      {/* Head */}
      <circle
        cx="50"
        cy="70" // Positioned below the halo
        r="30"
        className="fill-yellow-400"
      />
      {/* Eyes (slightly droopy or neutral) */}
      <ellipse cx="40" cy="65" rx="4" ry="3.5" className="fill-current" />
      <ellipse cx="60" cy="65" rx="4" ry="3.5" className="fill-current" />
      
      {/* Sad Smile (Frown) */}
      <path
        d="M 35 85 Q 50 75 65 85" // Frown path
        className="stroke-current"
        strokeWidth="3"
        fill="none"
      />
    </svg>
  );
};

export default SadHaloSmileIcon;
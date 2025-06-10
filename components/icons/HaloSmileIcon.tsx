
import React from 'react';

interface HaloSmileIconProps {
  className?: string;
}

const HaloSmileIcon: React.FC<HaloSmileIconProps> = ({ className = "w-32 h-32 md:w-40 md:h-40 text-gray-800" }) => {
  return (
    <svg
      viewBox="0 0 100 120" // Adjusted viewBox for halo height
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="haloSmileIconTitle"
      role="img"
    >
      <title id="haloSmileIconTitle">Biểu tượng mặt cười thân thiện với vòng hào quang</title>
      {/* Halo */}
      <ellipse
        cx="50"
        cy="25" // Positioned above the head
        rx="25"
        ry="10"
        className="fill-none stroke-yellow-400" // Tailwind for halo color
        strokeWidth="5"
      />
      {/* Head */}
      <circle
        cx="50"
        cy="70" // Positioned below the halo
        r="30"
        className="fill-yellow-400" // Tailwind class for yellow
      />
      {/* Eyes */}
      <circle cx="40" cy="65" r="4" className="fill-current" /> {/* Use text-gray-800 from parent */}
      <circle cx="60" cy="65" r="4" className="fill-current" /> {/* Use text-gray-800 from parent */}
      {/* Smile */}
      <path
        d="M 35 80 Q 50 90 65 80" // Adjusted smile curve
        className="stroke-current" // Use text-gray-800 from parent
        strokeWidth="3"
        fill="none"
      />
    </svg>
  );
};

export default HaloSmileIcon;

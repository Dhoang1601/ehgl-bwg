
import React from 'react';

interface IconProps {
  className?: string;
}

export const HomeIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
  </svg>
);

export const ShieldIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.927 0l-7.5 4.125A.75.75 0 003 7.375v6.75c0 .621.312 1.201.829 1.549l7.5 4.125a.75.75 0 00.942 0l7.5-4.125a1.75 1.75 0 00.829-1.55V7.375a.75.75 0 00-.537-.714l-7.5-4.125zM12 15a.75.75 0 01-.75-.75V9a.75.75 0 011.5 0v5.25A.75.75 0 0112 15zm0 2.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
  </svg>
);

// Using a simple owl for Mascot
export const MascotIcon: React.FC<IconProps> = ({ className }) => (
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
  <path d="M12 17.5c2.481 0 4.5-2.019 4.5-4.5S14.481 8.5 12 8.5s-4.5 2.019-4.5 4.5 2.019 4.5 4.5 4.5zm0-7c1.378 0 2.5 1.122 2.5 2.5s-1.122 2.5-2.5 2.5-2.5-1.122-2.5-2.5 1.122-2.5 2.5-2.5z"/>
  <circle cx="9" cy="10.5" r="1"/>
  <circle cx="15" cy="10.5" r="1"/>
  <path d="M12 5c-1.785 0-3.384.621-4.634 1.647L6.293 5.574A.999.999 0 104.88 6.987l1.107.983C5.39 9.176 5 10.534 5 12h14c0-1.466-.39-2.824-.987-4.013l1.107-.983a.999.999 0 10-1.414-1.414L16.634 6.647C15.384 5.621 13.785 5 12 5z"/>
</svg>
);


export const BookmarkIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
  </svg>
);

export const UserIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
  </svg>
);

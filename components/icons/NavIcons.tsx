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

// Icon for Review Tab
export const ClipboardListIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10.5 3.75a2.25 2.25 0 00-2.25 2.25v10.5a2.25 2.25 0 002.25 2.25h3a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25h-3zM10.5 6H13.5V16.5H10.5V6z" clipRule="evenodd" />
    <path d="M9 3.75A3.75 3.75 0 005.25 7.5v6.75A3.75 3.75 0 009 18h6a3.75 3.75 0 003.75-3.75V7.5A3.75 3.75 0 0015 3.75H9zM5.25 16.09V7.5c0-1.15.692-2.163 1.701-2.535A3.71 3.71 0 016.25 4.5h.003c.094.004.19.007.284.007C6.64 4.514 7 4.62 7 4.75c0 .09-.03.17-.08.24a.75.75 0 01-.604.26A2.25 2.25 0 006 7.5v10.5c0 .966.784 1.75 1.75 1.75h8.5a2.25 2.25 0 002.25-2.25v-2.536A3.71 3.71 0 0117.75 19.5h-.003a3.75 3.75 0 01-3.75-3.75H9A3.75 3.75 0 015.25 12v4.09z" />
    <path d="M8.25 7.5h7.5V9h-7.5V7.5zm0 3h7.5v1.5h-7.5V10.5zm0 3h7.5v1.5h-7.5V13.5z" fill="#fff" />
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
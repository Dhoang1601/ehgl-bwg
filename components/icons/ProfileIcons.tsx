
import React from 'react';

interface IconProps {
  className?: string;
  strokeWidth?: number;
}

export const ArrowLeftIcon: React.FC<IconProps> = ({ className, strokeWidth = 1.5 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

export const SettingsIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-1.007 1.11-.962l5.002.381c.55.045 1.006.519 1.11.962C19.34 10.818 21 10.818 21 12a9 9 0 11-18 0c0-1.182 1.66-1.182 3.594-8.06zM12 9.75A2.25 2.25 0 0114.25 12c0 .249-.034.49-.097.722L12.75 15l-1.403-.935A2.25 2.25 0 0112 9.75z" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75A2.25 2.25 0 0114.25 12c0 .249-.034.49-.097.722L12.75 15l-1.403-.935A2.25 2.25 0 0112 9.75zM12 9.75a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5z" /> {/* Centered circle for gear middle */}
  </svg>
);

export const AvatarPlaceholderIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
);


export const FlameIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.927 0l-7.5 4.125A.75.75 0 003 7.375v6.75c0 .621.312 1.201.829 1.549l7.5 4.125a.75.75 0 00.942 0l7.5-4.125a.75.75 0 00.829-1.55V7.375a.75.75 0 00-.537-.714l-7.5-4.125zM12 12.75a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zM10.5 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clipRule="evenodd" />
    <path d="M12.16 4.97a25.398 25.398 0 00-4.195 9.63c-.157.64.294 1.284.96 1.284H15.07c.665 0 1.118-.645.96-1.284a25.398 25.398 0 00-4.195-9.63c-.239-.495-.92-.495-1.16 0z" />
  </svg>
);

export const TrophyIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M12.75 3.75A2.25 2.25 0 0010.5 6h3A2.25 2.25 0 0012.75 3.75zM10.5 6V5.25h3V6c0 .621.504 1.125 1.125 1.125h1.5c.621 0 1.125-.504 1.125-1.125V5.25h1.5V6A2.25 2.25 0 0116.5 9h-1.875a.375.375 0 00-.375.375V12H9.75v-2.625a.375.375 0 00-.375-.375H7.5A2.25 2.25 0 015.25 6V5.25H6.75V6c0 .621.504 1.125 1.125 1.125h1.5c.621 0 1.125-.504 1.125-1.125zM7.5 12v3.375c0 .621.504 1.125 1.125 1.125h.375a3 3 0 110 1.5H8.625A2.625 2.625 0 016 16.5V12h1.5zm9 0v3.375c0 .621-.504 1.125-1.125 1.125h-.375a3 3 0 100 1.5h.375A2.625 2.625 0 0018 16.5V12h-1.5z" clipRule="evenodd" />
     <path d="M2.25 12a.75.75 0 01.75-.75h18a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zM12 18.75a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" />
  </svg>
);

export const BookOpenIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987a2.5 2.5 0 012.416-1.983h.265a2.5 2.5 0 012.416 1.983l.329.987a.75.75 0 001.424-.474l-1.172-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zM6 14.25A1.5 1.5 0 017.5 12.75h5.25a.75.75 0 010 1.5H7.5A1.5 1.5 0 016 14.25zm0-3.75A1.5 1.5 0 017.5 9h9A1.5 1.5 0 0118 10.5v1.5a.75.75 0 01-1.5 0v-1.5H7.5a.75.75 0 01-.75-.75V6A1.5 1.5 0 018.25 4.5h7.5A1.5 1.5 0 0117.25 6v1.5a.75.75 0 01-1.5 0V6H8.25a.75.75 0 00-.75.75v3.75z" clipRule="evenodd" />
  </svg>
);

export const TargetIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h6a.75.75 0 000-1.5H12.75V6z" clipRule="evenodd" />
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
    <path d="M12 18.75a6.75 6.75 0 100-13.5 6.75 6.75 0 000 13.5zM12 21a9 9 0 100-18 9 9 0 000 18z"/>
  </svg>
);

export const AwardIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M12.75 3.75A2.25 2.25 0 0010.5 6h3A2.25 2.25 0 0012.75 3.75zM10.5 6V5.25h3V6c0 .621.504 1.125 1.125 1.125h1.5c.621 0 1.125-.504 1.125-1.125V5.25h1.5V6A2.25 2.25 0 0116.5 9H7.5A2.25 2.25 0 015.25 6V5.25H6.75V6c0 .621.504 1.125 1.125 1.125h1.5c.621 0 1.125-.504 1.125-1.125zM7.5 12v7.553a2.25 2.25 0 003.288 1.998l1.89-1.037a.75.75 0 01.644 0l1.89 1.037A2.25 2.25 0 0016.5 19.553V12H7.5z" clipRule="evenodd" />
    <path d="M3.75 9.75A.75.75 0 014.5 9h15a.75.75 0 010 1.5H4.5a.75.75 0 01-.75-.75z" />
  </svg>
);

export const RefreshCwIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>
);

// Icon for Total XP on LessonCompleteScreen
export const LightningBoltIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M3.498 10.46C3.162 9.77 3.612 9 4.381 9H10V3.604C10 2.942 10.798 2.575 11.312 3.008L20.181 10.46c.499.417.207 1.247-.475 1.247H14v5.396c0 .662-.798 1.029-1.312.596L3.819 11.707c-.5-.417-.207-1.247.475-1.247H3.498z" />
  </svg>
);

// Icon for Correct Answers on LessonCompleteScreen
export const TargetCheckIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 110-18 9 9 0 010 18z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 110-6 3 3 0 010 6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15L15.75 10.5" />
  </svg>
);

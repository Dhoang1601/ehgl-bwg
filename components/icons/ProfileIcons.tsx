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

// Updated SettingsIcon with the new SVG
export const SettingsIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M18.763 13.7944L20.029 16.0222C19.8786 16.3163 19.7105 16.6051 19.5244 16.8873C19.3383 17.1695 19.1391 17.4378 18.9281 17.6919L16.4377 17.4142C15.7715 17.9608 15.0027 18.3869 14.1645 18.6592L13.0002 20.945C12.6719 20.9813 12.3382 21 12.0002 21C11.6622 21 11.3285 20.9813 11.0002 20.945L9.83293 18.6582C8.99428 18.3854 8.22514 17.9585 7.5589 17.4111L5.05407 17.6915C4.84303 17.4374 4.64381 17.1691 4.45774 16.8869C4.27168 16.6047 4.10356 16.3159 3.95312 16.0218L5.22637 13.7814C5.07803 13.2142 5.00021 12.6139 5.00021 12.0002C5.00021 11.3749 5.08219 10.7688 5.23599 10.192L3.95351 7.936C4.10394 7.64191 4.27206 7.3531 4.45812 7.07091C4.64419 6.78873 4.84341 6.52043 5.05445 6.2663L7.60942 6.55327C8.26776 6.02075 9.01625 5.60683 9.84 5.33984M9.83614 5.33996L11 3.05493C11.3283 3.01863 11.662 3 12 3C12.338 3 12.6716 3.01863 13 3.05493L14.1638 5.33996C14.9882 5.60716 15.7389 6.01764 16.3976 6.55077L18.9275 6.26661C19.1385 6.52074 19.3377 6.78904 19.5238 7.07123C19.7098 7.35341 19.878 7.64223 20.0284 7.93632L18.7592 10.1697M18.7594 10.1732C18.9164 10.7556 19.0002 11.3681 19.0002 12.0002C19.0002 12.6215 18.9193 13.2239 18.7673 13.7974M15.0002 12.0002C15.0002 13.657 13.6571 15.0002 12.0002 15.0002C10.3433 15.0002 9.0002 13.657 9.0002 12.0002C9.0002 10.3433 10.3433 9.00015 12.0002 9.00015C13.6571 9.00015 15.0002 10.3433 15.0002 12.0002Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


export const AvatarPlaceholderIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
);


export const FlameIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path 
      d="M5.926 20.574a7.26 7.26 0 0 0 3.039 1.511c.107.035.179-.105.107-.175-2.395-2.285-1.079-4.758-.107-5.873.693-.796 1.68-2.107 1.608-3.865 0-.176.18-.317.322-.211 1.359.703 2.288 2.25 2.538 3.515.394-.386.537-.984.537-1.511 0-.176.214-.317.393-.176 1.287 1.16 3.503 5.097-.072 8.19-.071.071 0 .212.072.177a8.761 8.761 0 0 0 3.003-1.442c5.827-4.5 2.037-12.48-.43-15.116-.321-.317-.893-.106-.893.351-.036.95-.322 2.004-1.072 2.707-.572-2.39-2.478-5.105-5.195-6.441-.357-.176-.786.105-.75.492.07 3.27-2.063 5.352-3.922 8.059-1.645 2.425-2.717 6.89.822 9.808z" 
      fill="currentColor" 
    />
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

export const PencilIcon: React.FC<IconProps> = ({ className, strokeWidth = 1.5 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </svg>
);

// Settings Popup Icons
export const AccountIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.095a1.23 1.23 0 00.41-1.412A9.969 9.969 0 0010 12c-2.31 0-4.438.784-6.131 2.095z" />
    <path fillRule="evenodd" d="M10.494 1.055a.75.75 0 00-1.002-.01L6.84 3.346a.75.75 0 00-.264.368c-.313.772-.486 1.604-.51 2.454-.023.85.115 1.685.388 2.469a.75.75 0 00.418.533l3.018 1.509a.75.75 0 00.716 0l3.018-1.509a.75.75 0 00.418-.533c.273-.784.41-1.618.388-2.469-.024-.85-.197-1.682-.51-2.454a.75.75 0 00-.264-.368l-2.651-2.311zM8.443 4.05a1.015 1.015 0 00-.217.024L5.858 5.887c.01.04.02.08.03.12.22.928.643 1.788 1.234 2.517.699.862 1.596 1.401 2.595 1.57.999.169 1.992-.036 2.899-.578.906-.541 1.629-1.356 2.072-2.328.044-.097.076-.197.096-.3l-2.37-2.084a1.015 1.015 0 00-.217-.024c-.562.05-.982.522-1.007 1.084a.996.996 0 01-1.003.918c-.566-.052-1.01-.504-1.035-1.07a.996.996 0 00-1.007-.918c-.565.052-1.01.504-1.035 1.07a.996.996 0 01-1.003.918c-.565-.052-.986-.524-1.01-1.087z" clipRule="evenodd" />
  </svg>
);

export const ExperienceIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
  </svg>
);

export const InfoIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
  </svg>
);

export const ResetIcon: React.FC<IconProps> = ({ className = "w-5 h-5", strokeWidth = 1.5 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>
);

export const SoundOnIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path d="M7.25 3.106A.75.75 0 018 2.5h1.25a.75.75 0 01.75.75v.118c.63.13 1.213.332 1.747.593a.75.75 0 01.329 1.016l-.668.991a.75.75 0 01-.941.273c-.442-.175-.825-.293-1.158-.344V10c0 .414.336.75.75.75h.25c.414 0 .75.336.75.75v.25c0 .414-.336.75-.75.75h-.25a.75.75 0 01-.75-.75V7.358c-.332-.051-.715-.169-1.158-.344a.75.75 0 01-.941-.273l-.668-.991a.75.75 0 01.329-1.016A5.26 5.26 0 018 3.224v-.118H7.25z" />
    <path fillRule="evenodd" d="M3 10a7 7 0 1114 0 7 7 0 01-14 0zm6.25-5.363a.75.75 0 01.5.025 5.25 5.25 0 014.383 4.355.75.75 0 01-.475.811l-.67.268A.75.75 0 0112 9.975V10a2.25 2.25 0 00-2.25-2.25.75.75 0 01-.75-.75V5.387c0-.29.135-.557.363-.724zm-.025 9.338a.75.75 0 00-.5-.025 5.25 5.25 0 00-4.383-4.355.75.75 0 00.475-.811l.67-.268A.75.75 0 008 10.025V10a2.25 2.25 0 012.25 2.25.75.75 0 00.75.75v1.263c0 .29-.135.557-.363.724z" clipRule="evenodd" />
  </svg>
);

export const SoundOffIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10 3a7 7 0 100 14 7 7 0 000-14zM2 10a8 8 0 1116 0 8 8 0 01-16 0z" clipRule="evenodd" />
    <path d="M7.25 3.106A.75.75 0 018 2.5h1.25a.75.75 0 01.75.75v.118c.63.13 1.213.332 1.747.593a.75.75 0 01.329 1.016l-.668.991a.75.75 0 01-.941.273c-.442-.175-.825-.293-1.158-.344V10c0 .414.336.75.75.75h.25c.414 0 .75.336.75.75v.25c0 .414-.336.75-.75.75h-.25a.75.75 0 01-.75-.75V7.358c-.332-.051-.715-.169-1.158-.344a.75.75 0 01-.941-.273l-.668-.991a.75.75 0 01.329-1.016A5.26 5.26 0 018 3.224v-.118H7.25z" />
    <path d="M13.06 7.47a.75.75 0 011.06 0l1.25 1.25a.75.75 0 11-1.06 1.06L13.06 8.53a.75.75 0 010-1.06zM13.06 12.53a.75.75 0 010-1.06l1.25-1.25a.75.75 0 011.06 1.06L14.12 12.53a.75.75 0 01-1.06 0z" />
  </svg>
);

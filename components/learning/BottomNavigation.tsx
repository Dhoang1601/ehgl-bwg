import React from 'react';
import { HomeIcon, ShieldIcon, ClipboardListIcon, BookmarkIcon, UserIcon } from '../icons/NavIcons'; // Added ClipboardListIcon, removed MascotIcon
import { Page } from '../../types'; // Import Page type

interface BottomNavigationProps {
  activeTab: 'home' | 'shield' | 'review' | 'bookmark' | 'user'; // Added 'review'
  onNavigate: (page: Page) => void;
}

type NavItemName = 'home' | 'shield' | 'review' | 'bookmark' | 'user'; // Added 'review'

interface NavItem {
  name: NavItemName;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  page: Page | null; // Page to navigate to, null for placeholders
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ activeTab, onNavigate }) => {
  const navItems: NavItem[] = [
    { name: 'review', Icon: ClipboardListIcon, label: 'Ôn tập', page: 'review' }, // Updated: Review tab
    { name: 'shield', Icon: ShieldIcon, label: 'Kinh', page: 'prayers' },
    { name: 'home', Icon: HomeIcon, label: 'Trang chủ', page: 'learning' },
    { name: 'user', Icon: UserIcon, label: 'Cá nhân', page: 'profile' },
    { name: 'bookmark', Icon: BookmarkIcon, label: 'Ô khóa', page: null }, // Kept second placeholder
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-gray-200 shadow-top-md h-16">
      <div className="flex justify-around items-center h-full max-w-md mx-auto px-2">
        {navItems.map(item => {
          const isActive = activeTab === item.name;
          return (
            <button
              key={item.name}
              aria-label={item.label}
              onClick={() => item.page && onNavigate(item.page)}
              disabled={!item.page} // Disable if no page to navigate to
              className={`flex flex-col items-center justify-center p-1.5 rounded-md w-16 transition-colors duration-150
                          ${isActive ? 'text-orange-500' : 'text-gray-500 hover:text-orange-400'}
                          ${!item.page ? 'cursor-not-allowed opacity-50' : ''}`}
            >
              <item.Icon className={`w-6 h-6 sm:w-7 sm:h-7 mb-0.5 ${isActive && (item.name !== 'home' && item.name !== 'review') ? 'fill-current' : (isActive && (item.name === 'home' || item.name === 'review') ? 'fill-current' : '')}`} />
              <span className={`text-[10px] sm:text-xs font-medium ${isActive ? 'text-orange-500' : 'text-gray-600'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
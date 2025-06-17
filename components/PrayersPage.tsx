

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Header and BottomNavigation are now rendered in App.tsx
import PrayerCard from './PrayerCard';
import { Prayer, Page, CategoryDetails, PrayerCategoryKey, CATEGORY_STYLES } from '../types';
import { allPrayers, prayersByCategory } from '../src/data/prayers';
import { ChevronDownIcon } from './icons/OtherIcons';
import { FlameIcon } from './icons/ProfileIcons'; 
import { isSameDay } from '../src/utils/dateUtils';


interface PrayersPageProps {
  selectedCategory: PrayerCategoryKey;
  categoryDetails: CategoryDetails;
  onNavigate: (page: Page) => void; // Kept for potential internal navigation, but BottomNav is external
  userXP: number; // Still needed for logic if any, though Header is external
  userLevel: number; // Still needed for logic
  userStreak: number; // Still needed for logic
  lastStreakUpdate: string | null; // Still needed for logic
  // isExiting prop removed
}

const SearchIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);

const PrayersPage: React.FC<PrayersPageProps> = ({
  selectedCategory,
  categoryDetails,
  onNavigate, // Prop kept
  userXP, // Prop kept
  userLevel, // Prop kept
  userStreak, // Prop kept
  lastStreakUpdate, // Prop kept
}) => {
  const [expandedOtherCategories, setExpandedOtherCategories] = useState<Record<string, boolean>>({});
  const [searchTerm, setSearchTerm] = useState('');

  const currentCategoryPrayers = useMemo(() => {
    return prayersByCategory[selectedCategory] || [];
  }, [selectedCategory]);

  const otherCategories = useMemo(() => {
    return (Object.keys(prayersByCategory) as PrayerCategoryKey[]).filter(
      (key) => key !== selectedCategory
    );
  }, [selectedCategory]);

  const toggleOtherCategory = (categoryKey: string) => {
    setExpandedOtherCategories(prev => ({ ...prev, [categoryKey]: !prev[categoryKey] }));
  };

  const getCategoryDisplayName = (categoryKey: PrayerCategoryKey): string => {
    return CATEGORY_STYLES[categoryKey]?.namePrefix || categoryKey;
  };
  
  // Filtered prayers based on search term
  const filteredCurrentCategoryPrayers = useMemo(() => {
    if (!searchTerm.trim()) {
      return currentCategoryPrayers;
    }
    const lowerSearchTerm = searchTerm.toLowerCase();
    return currentCategoryPrayers.filter(prayer =>
      prayer.title.toLowerCase().includes(lowerSearchTerm) ||
      prayer.content.some(paragraph => paragraph.toLowerCase().includes(lowerSearchTerm))
    );
  }, [currentCategoryPrayers, searchTerm]);

  const filteredOtherPrayersGlobal = useMemo(() => {
    if (!searchTerm.trim()) {
      return allPrayers.filter(p => p.categoryKey !== selectedCategory);
    }
    const lowerSearchTerm = searchTerm.toLowerCase();
    return allPrayers.filter(prayer =>
      prayer.categoryKey !== selectedCategory &&
      (prayer.title.toLowerCase().includes(lowerSearchTerm) ||
      prayer.content.some(paragraph => paragraph.toLowerCase().includes(lowerSearchTerm)))
    );
  }, [allPrayers, selectedCategory, searchTerm]);

  const noResultsForCurrentCategory = searchTerm.trim() && filteredCurrentCategoryPrayers.length === 0;
  
  const hasResultsInOtherCategories = searchTerm.trim() && otherCategories.some(otherCategoryKey => {
    const otherCatPrayers = filteredOtherPrayersGlobal.filter(p => p.categoryKey === otherCategoryKey);
    return otherCatPrayers.length > 0;
  });
  const noResultsOverall = searchTerm.trim() && !noResultsForCurrentCategory && !hasResultsInOtherCategories && filteredCurrentCategoryPrayers.length === 0 && filteredOtherPrayersGlobal.length === 0;

  const pageMotionProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
  };
  
  return (
    <motion.div 
      {...pageMotionProps}
      className="flex flex-col h-full bg-gray-50"
      style={{ paddingTop: '52px', paddingBottom: '64px' }} // Offset for external MainHeader and MainBottomNavigation
    >
      {/* MainHeader is now rendered in App.tsx */}
      <main className="flex-grow overflow-y-auto px-3 sm:px-4 pb-4"> {/* pb-4 for internal spacing from bottom of scroll area */}
        {/* Search Bar */}
        <div className="sticky top-0 z-10 bg-gray-50 py-3 mb-2 px-0.5 -mx-0.5">
          <div className="relative">
            <input
              type="search"
              placeholder="Tìm kinh..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-500"
              aria-label="Tìm kiếm kinh nguyện"
            />
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Prayer Content */}
        <div className="max-w-2xl mx-auto">
          <section className="pb-4"> 
            <h2 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${categoryDetails.colors.logo}`}>
              Kinh Ngành {getCategoryDisplayName(selectedCategory)}
            </h2>
            {filteredCurrentCategoryPrayers.length > 0 ? (
              filteredCurrentCategoryPrayers.map(prayer => <PrayerCard key={prayer.id} prayer={prayer} />)
            ) : noResultsForCurrentCategory ? (
              <p className="text-gray-600 text-sm">Không tìm thấy kinh nào trong ngành này khớp với từ khóa.</p>
            ) : (
              !searchTerm.trim() && <p className="text-gray-600">Chưa có kinh nguyện cho ngành này.</p> 
            )}
          </section>

          {otherCategories.length > 0 && (
            <section className="py-4 mt-2 border-t border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3 sm:mb-4">
                Kinh Ngành Khác
              </h2>
              <div className="space-y-3">
                {otherCategories.map(otherCategoryKey => {
                  const otherCatDetails = CATEGORY_STYLES[otherCategoryKey];
                  const otherCatPrayers = filteredOtherPrayersGlobal.filter(p => p.categoryKey === otherCategoryKey);
                  const isExpanded = expandedOtherCategories[otherCategoryKey] || false;
                  
                  if (searchTerm.trim() && otherCatPrayers.length === 0) {
                    return null; 
                  }

                  return (
                    <div key={otherCategoryKey} className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <button
                        onClick={() => toggleOtherCategory(otherCategoryKey)}
                        className={`w-full flex items-center justify-between p-3 sm:p-4 text-left ${otherCatDetails ? otherCatDetails.colors.progressBarFill.replace('bg-','bg-opacity-80 bg-') : 'bg-gray-200'} hover:opacity-90 transition-opacity`}
                        aria-expanded={isExpanded}
                        aria-controls={`other-prayers-${otherCategoryKey}`}
                      >
                        <span className={`text-md sm:text-lg font-semibold ${otherCatDetails ? 'text-white' : 'text-gray-700'}`}>
                          Ngành {getCategoryDisplayName(otherCategoryKey)} ({otherCatPrayers.length > 0 ? otherCatPrayers.length : prayersByCategory[otherCategoryKey]?.length || 0} kinh)
                        </span>
                        <ChevronDownIcon className={`w-5 h-5 sm:w-6 sm:h-6 transform transition-transform duration-200 ${otherCatDetails ? 'text-white' : 'text-gray-700'} ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            id={`other-prayers-${otherCategoryKey}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } }}
                            exit={{ height: 0, opacity: 0, transition: { duration: 0.2, ease: "easeInOut" } }}
                            className="overflow-hidden"
                          >
                            <div className="p-3 sm:p-4 border-t border-gray-200">
                              {otherCatPrayers.length > 0 ? (
                                otherCatPrayers.map(prayer => <PrayerCard key={prayer.id} prayer={prayer} />)
                              ) : (
                                !searchTerm.trim() && <p className="text-gray-500 text-sm">Chưa có kinh cho ngành này.</p>
                              )}
                              {searchTerm.trim() && otherCatPrayers.length === 0 && <p className="text-gray-500 text-sm">Không có kinh nào khớp tìm kiếm trong ngành này.</p>}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </section>
          )}
          {noResultsOverall && (
             <p className="text-gray-600 text-center py-4">Không tìm thấy kinh nguyện nào khớp với từ khóa của bạn.</p>
          )}
        </div>
        <div className="h-2"></div> {/* Spacer */}
      </main>
      
      {/* BottomNavigation is now external, rendered in App.tsx */}
    </motion.div>
  );
};

export default PrayersPage;
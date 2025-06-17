export interface CategoryDetails {
  namePrefix: string;
  styleKey: 'green' | 'blue' | 'yellow';
  classes: string[];
  colors: {
    logo: string;
    // bannerBg: string; // Replaced by gradient
    bannerGradientFrom: string;
    bannerGradientTo: string;
    lessonCircleBg: string;
    lessonCircleText: string;
    popupBg: string;
    popupArrowBorder: string;
    popupActionText: string;
    progressBarFill: string;

    // For Multiple Choice & True/False (selected state before check)
    choiceSelectedBg: string; 
    choiceSelectedBorder: string; 
    choiceSelectedText: string; 
    choiceUnselectedBg: string; 
    choiceUnselectedBorder: string; 
    choiceUnselectedText: string;

    // For Fill-in-the-Blank (selected word in blank space & option buttons before check)
    fillBlankSelectedWordBg: string; 
    fillBlankSelectedWordBorder: string; 
    fillBlankSelectedWordText: string;

    // For Sort Words (word in sorted area before check)
    sortAreaWordBg: string; 
    sortAreaWordText: string;
  };
}

export const CATEGORY_STYLES: Record<string, CategoryDetails> = {
  xungtoi: {
    namePrefix: 'Xưng Tội', styleKey: 'green', classes: ['Xưng Tội 1', 'Xưng Tội 2', 'Xưng Tội 3'],
    colors: {
      logo: 'text-green-600', 
      bannerGradientFrom: 'from-green-700', // Darker shade for top of gradient
      bannerGradientTo: 'to-green-500',     // Lighter, vibrant shade for bottom
      lessonCircleBg: 'bg-green-500', lessonCircleText: 'text-white',
      popupBg: 'bg-green-500', popupArrowBorder: 'border-b-green-500', popupActionText: 'text-green-600',
      progressBarFill: 'bg-green-500',
      
      choiceSelectedBg: 'bg-green-50',
      choiceSelectedBorder: 'border-green-500',
      choiceSelectedText: 'text-green-700',
      choiceUnselectedBg: 'bg-white',
      choiceUnselectedBorder: 'border-gray-300',
      choiceUnselectedText: 'text-gray-700',

      fillBlankSelectedWordBg: 'bg-green-100',
      fillBlankSelectedWordBorder: 'border-green-400',
      fillBlankSelectedWordText: 'text-green-800',

      sortAreaWordBg: 'bg-green-500',
      sortAreaWordText: 'text-white',
    }
  },
  themsuc: {
    namePrefix: 'Thêm Sức', styleKey: 'blue', classes: ['Thêm Sức 1', 'Thêm Sức 2', 'Thêm Sức 3'],
    colors: {
      logo: 'text-blue-600', 
      bannerGradientFrom: 'from-blue-700',
      bannerGradientTo: 'to-blue-500',
      lessonCircleBg: 'bg-blue-500', lessonCircleText: 'text-white',
      popupBg: 'bg-blue-500', popupArrowBorder: 'border-b-blue-500', popupActionText: 'text-blue-600',
      progressBarFill: 'bg-blue-500',

      choiceSelectedBg: 'bg-blue-50',
      choiceSelectedBorder: 'border-blue-500',
      choiceSelectedText: 'text-blue-700',
      choiceUnselectedBg: 'bg-white',
      choiceUnselectedBorder: 'border-gray-300',
      choiceUnselectedText: 'text-gray-700',

      fillBlankSelectedWordBg: 'bg-blue-100',
      fillBlankSelectedWordBorder: 'border-blue-400',
      fillBlankSelectedWordText: 'text-blue-800',

      sortAreaWordBg: 'bg-blue-500',
      sortAreaWordText: 'text-white',
    }
  },
  songdao: {
    namePrefix: 'Sống Đạo', styleKey: 'yellow', classes: ['Sống Đạo 1', 'Sống Đạo 2', 'Sống Đạo 3'],
    colors: {
      logo: 'text-yellow-500', 
      bannerGradientFrom: 'from-yellow-600', // Using yellow-600 for a slightly darker orange-yellow
      bannerGradientTo: 'to-yellow-400',     // Base yellow-500, lighter yellow-400
      lessonCircleBg: 'bg-yellow-400', lessonCircleText: 'text-white',
      popupBg: 'bg-yellow-400', popupArrowBorder: 'border-b-yellow-400', popupActionText: 'text-yellow-600',
      progressBarFill: 'bg-yellow-400',

      choiceSelectedBg: 'bg-yellow-50',
      choiceSelectedBorder: 'border-yellow-500',
      choiceSelectedText: 'text-yellow-700',
      choiceUnselectedBg: 'bg-white',
      choiceUnselectedBorder: 'border-gray-300',
      choiceUnselectedText: 'text-gray-700',

      fillBlankSelectedWordBg: 'bg-yellow-100',
      fillBlankSelectedWordBorder: 'border-yellow-400',
      fillBlankSelectedWordText: 'text-yellow-800',

      sortAreaWordBg: 'bg-yellow-400',
      sortAreaWordText: 'text-white',
    }
  },
};

export type Page = 'welcome' | 'setUsername' | 'selectCategory' | 'selectClass' | 'learning' | 'profile' | 'lessonDetail' | 'prayers' | 'review';

// Prayer related types
export type PrayerCategoryKey = 'xungtoi' | 'themsuc' | 'songdao';

export interface Prayer {
  id: string;
  categoryKey: PrayerCategoryKey;
  title: string;
  content: string[]; // Array of paragraphs
}
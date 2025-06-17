// src/data/appStructureData.ts
import { xungtoiLearningPath } from './categories/xungtoiLearningPathData';
import { themsucLearningPath } from './categories/themsucLearningPathData';
import { songdaoLearningPath } from './categories/songdaoLearningPathData';

// --- START: Interfaces for the Learning Path Structure ---
export interface Lesson {
  id: string; // e.g., "xungtoi-baimodau-l1"
  title: string; // e.g., "Bài mở đầu: Làm quen với Xưng tội"
  status: 'locked' | 'unlocked' | 'completed'; // Default to 'locked' in static, overridden dynamically
  xp: number;
  barrelKey: string; // NEW: Key to match export name from barrel file e.g. "baimodau_1"
  lessonPartIndex?: number; // NEW: Index if barrelKey points to an array of lessons
}

export interface Unit {
  id: string; // e.g., "xungtoi-baimodau" (unique within a class's path)
  title: string; // e.g., "UNIT 1: XƯNG TỘI 1 CĂN BẢN"
  lessons: Lesson[];
}

// This is the structure for each specific class's learning path data.
export interface LearningPathData {
  categoryName: string; // e.g., "Xưng Tội"
  currentChapterTitle: string; // Hardcoded for the ChapterBanner, e.g., "CHƯƠNG 1: XƯNG TỘI CĂN BẢN"
  currentChapterLessonName: string; // Hardcoded for the ChapterBanner, e.g., "Bài mở đầu: Làm quen với Xưng tội"
  units: Unit[];
  totalLessons: number;
}
// --- END: Interfaces ---

// --- START: Static Learning Path Data ---
export const APP_LEARNING_PATH_DATA: Record<string, Record<string, LearningPathData>> = {
  "xungtoi": xungtoiLearningPath,
  "themsuc": themsucLearningPath,
  "songdao": songdaoLearningPath,
};
// --- END: Static Learning Path Data ---
// Placeholder barrelKeys (e.g., "bai28_1", "bai1_1" for themsuc/songdao) have been added.
// These assume that when actual lesson files are created, they will be named and exported
// from their respective barrel files (e.g., data/lessons/xung-toi/index.ts) with these keys.
// If a lesson file (e.g. data/lessons/xung-toi/bai28_1.ts) is missing or not exported
// from data/lessons/xung-toi/index.ts with the key 'bai28_1', it will log a warning
// in LessonDetailPage and the lesson won't load.
// src/data/lessonLoader.ts
import { LessonContentData, LessonPage } from '../../components/learning/LessonDetailPage'; // Adjusted path
import { APP_LEARNING_PATH_DATA, Lesson as AppLessonConfig } from './appStructureData';

// Import lesson modules using barrel files
import * as XungToiLessons from '../../data/lessons/xung-toi'; // Adjusted path
import * as ThemSucLessons from '../../data/lessons/them-suc'; // Adjusted path
import * as SongDaoLessons from '../../data/lessons/song-dao'; // Adjusted path

// Map category keys (from APP_LEARNING_PATH_DATA) to their barrel modules
const categoryBarrelModules: Record<string, any> = {
  xungtoi: XungToiLessons,
  themsuc: ThemSucLessons,
  songdao: SongDaoLessons,
};

// Dynamically generate lessonModules from APP_LEARNING_PATH_DATA
export const generatedLessonModules: Record<string, LessonContentData> = {};

for (const categoryKey in APP_LEARNING_PATH_DATA) {
  const categoryData = APP_LEARNING_PATH_DATA[categoryKey];
  const barrelModule = categoryBarrelModules[categoryKey];

  if (!barrelModule) {
    console.warn(`LessonLoader: No barrel module found for category: ${categoryKey}. Lessons in this category might not load.`);
    continue;
  }

  for (const className in categoryData) {
    const classData = categoryData[className];
    classData.units.forEach(unit => {
      unit.lessons.forEach((lesson: AppLessonConfig) => {
        if (lesson.barrelKey && barrelModule[lesson.barrelKey]) {
          const moduleExport = barrelModule[lesson.barrelKey];
          if (lesson.lessonPartIndex !== undefined && Array.isArray(moduleExport)) {
            if (moduleExport[lesson.lessonPartIndex]) {
              generatedLessonModules[lesson.id] = moduleExport[lesson.lessonPartIndex] as LessonContentData;
            } else {
              console.warn(`LessonLoader: Lesson part index ${lesson.lessonPartIndex} out of bounds for barrelKey: "${lesson.barrelKey}" in category "${categoryKey}" which is an array of length ${moduleExport.length}.`);
            }
          } else if (lesson.lessonPartIndex === undefined && !Array.isArray(moduleExport)) {
            generatedLessonModules[lesson.id] = moduleExport as LessonContentData;
          } else if (lesson.lessonPartIndex !== undefined && !Array.isArray(moduleExport)) {
             console.warn(`LessonLoader: lessonPartIndex ${lesson.lessonPartIndex} is defined for barrelKey: "${lesson.barrelKey}", but the module export is NOT an array. Check appStructureData and lesson file export.`);
          } else if (lesson.lessonPartIndex === undefined && Array.isArray(moduleExport)) {
             console.warn(`LessonLoader: lessonPartIndex is NOT defined for barrelKey: "${lesson.barrelKey}", but the module export IS an array. This usually means it's a consolidated lesson file and lessonPartIndex is required in appStructureData.`);
          }
        } else {
          console.warn(`LessonLoader: Lesson module not found for id: ${lesson.id} using barrelKey: "${lesson.barrelKey}" in category "${categoryKey}". Check appStructureData.ts and barrel exports in data/lessons/${categoryKey}/index.ts.`);
        }
      });
    });
  }
}

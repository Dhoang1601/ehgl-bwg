// hooks/useLessonData.ts
import { useState, useEffect } from 'react';
import { LessonContentData, LessonPage } from '../components/learning/LessonDetailPage'; // Adjusted path
import { generatedLessonModules } from '../src/data/lessonLoader'; // Adjusted path

export const interactiveQuestionTypes: LessonPage['type'][] = ['fill-blank', 'sort', 'multiple-choice', 'true-false'];

interface UseLessonDataReturn {
  lessonData: LessonContentData | null;
  isLoading: boolean;
  error: string | null;
  totalInteractiveQuestions: number;
}

export const useLessonData = (lessonId: string): UseLessonDataReturn => {
  const [lessonData, setLessonData] = useState<LessonContentData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [totalInteractiveQuestions, setTotalInteractiveQuestions] = useState<number>(0);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    setLessonData(null); // Reset lesson data on lessonId change
    setTotalInteractiveQuestions(0); // Reset count

    const data = generatedLessonModules[lessonId];

    if (data) {
      setLessonData(data);
      const interactiveCount = data.pages.filter(p => interactiveQuestionTypes.includes(p.type)).length;
      setTotalInteractiveQuestions(interactiveCount);
    } else {
      const errorMessage = `Nội dung bài học không được tìm thấy cho ID: ${lessonId}. Vui lòng đảm bảo tệp bài học tồn tại, được export đúng cách từ barrel file, và có barrelKey chính xác trong appStructureData.ts.`;
      console.error(`useLessonData: Lesson content not found for ID: ${lessonId}. Check 'generatedLessonModules' mapping, barrel exports, and appStructureData.ts barrelKey.`);
      setError(errorMessage);
    }
    setIsLoading(false);
  }, [lessonId]);

  return { lessonData, isLoading, error, totalInteractiveQuestions };
};

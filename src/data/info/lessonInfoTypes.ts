// src/data/info/lessonInfoTypes.ts
export interface QuestionAnswerPair {
  question: string;
  answer: string;
}

export interface LessonInfoData {
  lessonName: string; // This will typically be the Unit Title for the info panel
  wordOfGod: string;
  wordOfGodCitation: string;
  questionsAndAnswers: QuestionAnswerPair[];
}

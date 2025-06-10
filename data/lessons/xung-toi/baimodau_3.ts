// /data/lessons/xung-toi/baimodau_3.ts
import { LessonContentData, LessonPage } from '../../../components/learning/LessonDetailPage';

const lessonContent: LessonContentData = {
  title: "Em Học Giáo Lý",
  xp: 20,
  nextLessonId: "xungtoi-unit1-l4",
  pages: [
    // Page 1 (Reading - Q2 & A2 context): (Maintain as is)
    {
      type: 'reading',
      passage: "Hỏi: Em biết như thế làm chi ?\nThưa: Em biết như thế để mến Chúa, yêu người, cho ngày sau được hưởng phúc đời đời.",
      durationSeconds: 7
    },
    // Page 2 (Fill-in-the-Blank - Focus on "mến Chúa"):
    {
      type: 'fill-blank',
      questionTextBeforeBlank: "Em biết như thế để ",
      questionTextAfterBlank: ", yêu người, cho ngày sau được hưởng phúc đời đời.",
      options: [
        {id: 'xt_bm3_q2_opt1', text: 'mến Chúa'},
        {id: 'xt_bm3_q2_opt2', text: 'hiểu biết'},
        {id: 'xt_bm3_q2_opt3', text: 'vâng lời'},
        {id: 'xt_bm3_q2_opt4', text: 'phục vụ'}
      ],
      correctOptionId: 'xt_bm3_q2_opt1',
      hint: "Em biết như thế để mến Chúa, yêu người, cho ngày sau được hưởng phúc đời đời."
    },
    // Page 3 (Sort - Focus on "yêu người"):
    {
      type: 'sort',
      prompt: "Sắp xếp các từ để hoàn thành cụm từ: '...Chúa, ...người'.",
      words: [
        {id: 'xt_bm3_q3_w1', text: 'yêu'},
        {id: 'xt_bm3_q3_w2', text: 'mến'}
      ],
      correctOrderIds: ['xt_bm3_q3_w2', 'xt_bm3_q3_w1'],
      hint: "Câu này mà không làm được á???."
    },
    // Page 4 (True/False - Focus on "mến Chúa" and "yêu người" as key actions):
    {
      type: 'true-false',
      questionText: "Việc biết giáo lý giúp em mến Chúa và yêu người.",
      correctAnswer: true,
      hint: "Qúa dễ luôn mà không trả lời được, gà."
    },
    // Page 5 (Multiple Choice - Focus on the full phrase "mến Chúa, yêu người"):
    {
      type: 'multiple-choice',
      questionText: "Để được phúc đời đời, em phải...",
      options: [
        {id: 'xt_bm3_q5_opt1', text: 'có kiến thức.'},
        {id: 'xt_bm3_q5_opt2', text: 'mến Chúa, yêu người.'},
        {id: 'xt_bm3_q5_opt3', text: 'đẹp trai.'},
        {id: 'xt_bm3_q5_opt4', text: 'biết Thiên Chúa.'}
      ],
      correctOptionId: 'xt_bm3_q5_opt2',
      hint: "Đẹp trai."
    }
    // Page 6 was removed.
  ],
};

export default lessonContent;
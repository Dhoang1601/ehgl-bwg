// /data/lessons/xung-toi/baimodau_4.ts
import { LessonContentData, LessonPage } from '../../../components/learning/LessonDetailPage';

const lessonContent: LessonContentData = {
  title: "Em Học Giáo Lý",
  xp: 15,
  nextLessonId: "xungtoi-unit1-l5",
  pages: [
    // Page 1 (Reading - Full source text for review):
    {
      type: 'reading',
      passage: "Hỏi: Em biết như thế làm chi ?\nThưa: Em biết như thế để mến Chúa, yêu người, cho ngày sau được hưởng phúc đời đời.",
      durationSeconds: 15
    },
    // Page 2 (Fill-in-the-Blank - From Lc 11,28):
    {
      type: 'fill-blank',
      questionTextBeforeBlank: "Lời Chúa dạy: 'Phúc cho kẻ nghe Lời Thiên Chúa và đem ra...",
      questionTextAfterBlank: "'.",
      options: [
        {id: 'xt_bm4_q2_opt1', text: 'suy gẫm'},
        {id: 'xt_bm4_q2_opt2', text: 'ghi nhớ'},
        {id: 'xt_bm4_q2_opt3', text: 'thực hành'},
        {id: 'xt_bm4_q2_opt4', text: 'chia sẻ'}
      ],
      correctOptionId: 'xt_bm4_q2_opt3',
      hint: "Hãy nhớ lại lời chúa từ các bài học trước, hong nhớ hơi kém."
    },
    // Page 3 (Sort - Core concepts from both Q&A answers):
    {
      type: 'sort',
      prompt: "Em biết như thế để...",
      words: [ // Words should be maintained in their current (presumably shuffled) order
        {id: 'xt_bm4_q3_w1', text: 'mến'},
        {id: 'xt_bm4_q3_w2', text: 'cho ngày'},
        {id: 'xt_bm4_q3_w3', text: 'đời đời'},
        {id: 'xt_bm4_q3_w4', text: 'hưởng phúc'},
        {id: 'xt_bm4_q3_w5', text: 'sau được'},
        {id: 'xt_bm4_q3_w6', text: 'Chúa,'},
        {id: 'xt_bm4_q3_w7', text: 'người,'},
        {id: 'xt_bm4_q3_w8', text: 'yêu,'}
      ],
      correctOrderIds: ['xt_bm4_q3_w1', 'xt_bm4_q3_w6', 'xt_bm4_q3_w8', 'xt_bm4_q3_w7', 'xt_bm4_q3_w2', 'xt_bm4_q3_w5', 'xt_bm4_q3_w4', 'xt_bm4_q3_w3'],
      hint: "Em biết như thế để mến Chúa, yêu người, cho ngày sau được hưởng phúc đời đời."
    },
    // Page 4 (Multiple Choice - Direct recall of Q1 answer):
    {
      type: 'multiple-choice',
      questionText: "Học giáo lý để biết Thiên Chúa là Cha và mọi người là ...?",
      options: [
        {id: 'xt_bm4_q4_opt1', text: 'bạn bè.'},
        {id: 'xt_bm4_q4_opt2', text: 'anh em.'},
        {id: 'xt_bm4_q4_opt3', text: 'anh chị em.'},
        {id: 'xt_bm4_q4_opt4', text: 'người thân.'}
      ],
      correctOptionId: 'xt_bm4_q4_opt3',
      hint: "Học giáo lý để biết Thiên Chúa là Cha và mọi người là anh chị em."
    },
    // Page 5 (True/False - Direct recall of Q2 answer):
    {
      type: 'true-false',
      questionText: "Biết giáo lý để mến Chúa, yêu người, cho ngày sau được giàu sang phú quý.",
      correctAnswer: false,
      hint: "Đọc kĩ câu xem đúng chưa?"
    }
    // Page 6 was removed.
  ],
};

export default lessonContent;
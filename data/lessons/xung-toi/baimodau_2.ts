// /data/lessons/xung-toi/baimodau_2.ts
import { LessonContentData, LessonPage } from '../../../components/learning/LessonDetailPage';

const lessonContent: LessonContentData = {
  title: "Em Học Giáo Lý",
  xp: 15,
  nextLessonId: "xungtoi-unit1-l3",
  pages: [
    // Page 1 (Reading - Q1 & A1 context):
    {
      type: 'reading',
      passage: "Hỏi: Em học giáo lý để làm gì ?\nThưa: Em học giáo lý để biết Thiên Chúa là Cha và mọi người là anh chị em.",
      durationSeconds: 7
    },
    // Page 2 (Fill-in-the-Blank - Key phrase from Q1&A1):
    {
      type: 'fill-blank',
      questionTextBeforeBlank: "Em học giáo lý để biết Thiên Chúa là ",
      questionTextAfterBlank: " và mọi người là anh chị em.",
      options: [
        {id: 'xt_bm2_q2_opt1', text: 'Vua'},
        {id: 'xt_bm2_q2_opt2', text: 'Thầy'},
        {id: 'xt_bm2_q2_opt3', text: 'Cha'},
        {id: 'xt_bm2_q2_opt4', text: 'Bạn'}
      ],
      correctOptionId: 'xt_bm2_q2_opt3',
      hint: "Em học giáo lý để biết Thiên Chúa là Cha và mọi người là anh chị em."
    },
    // Page 3 (Sort - Reorder new sentence):
    {
      type: 'sort',
      prompt: "Ghép các từ sau thành câu có nghĩa.",
      words: [
        {id: 'xt_bm2_q3_w5', text: 'và'},
        {id: 'xt_bm2_q3_w1', text: 'Thiên'},
        {id: 'xt_bm2_q3_w9', text: 'anh'},
        {id: 'xt_bm2_q3_w3', text: 'là'},
        {id: 'xt_bm2_q3_w7', text: 'người'},
        {id: 'xt_bm2_q3_w2', text: 'Chúa'},
        {id: 'xt_bm2_q3_w11', text: 'em'},
        {id: 'xt_bm2_q3_w6', text: 'mọi'},
        {id: 'xt_bm2_q3_w4', text: 'cha'},
        {id: 'xt_bm2_q3_w10', text: 'chị'},
        {id: 'xt_bm2_q3_w8', text: 'là'}
      ],
      correctOrderIds: [
        ['xt_bm2_q3_w1', 'xt_bm2_q3_w2', 'xt_bm2_q3_w3', 'xt_bm2_q3_w4', 'xt_bm2_q3_w5', 'xt_bm2_q3_w6', 'xt_bm2_q3_w7', 'xt_bm2_q3_w8', 'xt_bm2_q3_w9', 'xt_bm2_q3_w10', 'xt_bm2_q3_w11'],
        ['xt_bm2_q3_w1', 'xt_bm2_q3_w2', 'xt_bm2_q3_w8', 'xt_bm2_q3_w4', 'xt_bm2_q3_w5', 'xt_bm2_q3_w6', 'xt_bm2_q3_w7', 'xt_bm2_q3_w3', 'xt_bm2_q3_w9', 'xt_bm2_q3_w10', 'xt_bm2_q3_w11']
      ],
      hint: "'Thiên Chúa là cha và mọi người là anh chị em"
    },
    // Page 4 (Multiple Choice - Exact wording Q1&A1):
    {
      type: 'multiple-choice',
      questionText: "Hoàn thành câu trả lời: 'Em học giáo lý để biết Thiên Chúa là Cha và mọi người là ...'",
      options: [
        {id: 'xt_bm2_q4_opt1', text: 'thân bằng'},
        {id: 'xt_bm2_q4_opt2', text: 'bạn bè'},
        {id: 'xt_bm2_q4_opt3', text: 'anh chị em'},
        {id: 'xt_bm2_q4_opt4', text: 'đồng loại'}
      ],
      correctOptionId: 'xt_bm2_q4_opt3',
      hint: "Hãy nhớ chính xác cụm từ cuối cùng."
    },
    // Page 5 (True/False - Exact text recall from Q1&A1):
    {
      type: 'true-false',
      questionText: "'Em học giáo lý để biết Thiên Chúa là Cha và mọi người là bạn bè'.",
      correctAnswer: false,
      hint: "Kiểm tra lại từ cuối cùng trong câu trả lời."
    }
    // Page 6 was removed.
  ],
};

export default lessonContent;
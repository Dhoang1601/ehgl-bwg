// /data/lessons/xung-toi/baimodau_5.ts
import { LessonContentData, LessonPage } from '../../../components/learning/LessonDetailPage';

const lessonContent: LessonContentData = {
  title: "Em Học Giáo Lý",
  xp: 20,
  nextLessonId: "xungtoi-unit2-l1",
  pages: [
    // Page 1 (Reading - Lời Chúa):
    {
      type: 'reading',
      passage: "“Phúc cho kẻ nghe Lời Thiên Chúa và đem ra thực hành” (Lc 11,28)",
      durationSeconds: 15
    },
    // Page 2 (Sort - Full Lời Chúa Quote as Phrases):
    {
      type: 'sort',
      prompt: "Sắp xếp các cụm từ sau đây để hoàn thành Lời Chúa:",
      words: [
        {id: 'xt_bm5_p2_phrase1', text: '“Phúc cho'},
        {id: 'xt_bm5_p2_phrase2', text: 'kẻ nghe'},
        {id: 'xt_bm5_p2_phrase3', text: 'Lời Thiên Chúa'},
        {id: 'xt_bm5_p2_phrase4', text: 'và đem ra'},
        {id: 'xt_bm5_p2_phrase5', text: 'thực hành”'},
        {id: 'xt_bm5_p2_phrase6', text: '(Lc 11,28)'}
      ].sort(() => Math.random() - 0.5), // Shuffle phrases
      correctOrderIds: ['xt_bm5_p2_phrase1', 'xt_bm5_p2_phrase2', 'xt_bm5_p2_phrase3', 'xt_bm5_p2_phrase4', 'xt_bm5_p2_phrase5', 'xt_bm5_p2_phrase6'],
      hint: "Lời Chúa mà không nhớ thì chịu rồi!"
    },
    // Page 3 (Reading - Q1 & A1 context):
    {
      type: 'reading',
      passage: "Hỏi: Em học giáo lý để làm gì ?\nThưa: Em học giáo lý để biết Thiên Chúa là Cha và mọi người là anh chị em.",
      durationSeconds: 7
    },
    // Page 4 (Fill-in-the-Blank - Full Q1&A1 Answer):
    {
      type: 'fill-blank',
      questionTextBeforeBlank: "Hoàn thành câu trả lời: 'Em học giáo lý để biết Thiên Chúa là Cha và mọi người là ",
      questionTextAfterBlank: "'.",
      options: [
        {id: 'xt_bm5_p4_opt1', text: 'anh chị em'},
        {id: 'xt_bm5_p4_opt2', text: 'bạn bè'},
        {id: 'xt_bm5_p4_opt3', text: 'người thân'},
        {id: 'xt_bm5_p4_opt4', text: 'đồng loại'}
      ].sort(() => Math.random() - 0.5), // Shuffle options
      correctOptionId: 'xt_bm5_p4_opt1', 
      hint: "Gợi ý: Nhớ chính xác cụm từ cuối cùng trong câu trả lời."
    },
    // Page 5 (Reading - Q2 & A2 context):
    {
      type: 'reading',
      passage: "Hỏi: Em biết như thế làm chi ?\nThưa: Em biết như thế để mến Chúa, yêu người, cho ngày sau được hưởng phúc đời đời.",
      durationSeconds: 7
    },
    // Page 6 (Sort - Full Q2&A2 Answer as Phrases):
    {
      type: 'sort',
      prompt: "Hỏi: Em biết như thế làm chi ?\nThưa:...",
      words: [
        {id: 'xt_bm5_p6_phrase1', text: 'Em biết như thế'},
        {id: 'xt_bm5_p6_phrase2', text: 'để mến Chúa,'},
        {id: 'xt_bm5_p6_phrase3', text: 'yêu người,'},
        {id: 'xt_bm5_p6_phrase4', text: 'cho ngày sau'},
        {id: 'xt_bm5_p6_phrase5', text: 'được hưởng'},
        {id: 'xt_bm5_p6_phrase6', text: 'phúc đời đời.'}
      ].sort(() => Math.random() - 0.5), // Shuffle phrases
      correctOrderIds: [
        'xt_bm5_p6_phrase1', 'xt_bm5_p6_phrase2', 'xt_bm5_p6_phrase3', 
        'xt_bm5_p6_phrase4', 'xt_bm5_p6_phrase5', 'xt_bm5_p6_phrase6'
      ],
      hint: "Em biết như thế để mến Chúa, yêu người, cho ngày sau được hưởng phúc đời đời."
    }
  ],
};

export default lessonContent;
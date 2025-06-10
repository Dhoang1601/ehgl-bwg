
import { LessonContentData, LessonPage } from '../../../components/learning/LessonDetailPage';

const lessonContent: LessonContentData = {
  title: "Em Học Giáo Lý", // Title for this specific lesson circle
  xp: 25,
  nextLessonId: "xungtoi-unit1-l2", // ID for the next lesson circle (baimodau_2.ts)
  pages: [
    // Page 1 (Reading - Lời Chúa):
    {
      type: 'reading',
      passage: "“Phúc cho kẻ nghe Lời Thiên Chúa và đem ra thực hành” (Lc11,28)",
      durationSeconds: 15
    },
    // Page 2 (Multiple-choice - Lời Chúa):
    {
      type: 'multiple-choice',
      questionText: "Lời chúa sau:'Phúc cho kẻ nghe Lời Thiên Chúa và đem ra thực hành' có trích dẫn là:",
      options: [
        {id: 'lc_opt1', text: 'Lc 11,28'},
        {id: 'lc_opt2', text: 'Mt 5,3'},
        {id: 'lc_opt3', text: 'Ga 3,16'},
        {id: 'lc_opt4', text: 'Cv 2,38'}
      ],
      correctOptionId: 'lc_opt1',
      hint: "Trích dẫn này nói về việc lắng nghe và thực hành Lời Chúa, được ghi trong Tin Mừng Luca."
    },
    // Page 3 (Reading - Context for Question 1):
    {
      type: 'reading',
      passage: "Hỏi: Em học giáo lý để làm gì ? Thưa: Em học giáo lý để biết Thiên Chúa là Cha và mọi người là anh chị em.",
      durationSeconds: 5
    },
    // Page 4 (Question - Based on Reading Page 3 - Fill-blank):
    {
      type: 'fill-blank',
      questionTextBeforeBlank: "Em học giáo lý để biết Thiên Chúa là ",
      questionTextAfterBlank: " và mọi người là anh chị em.",
      options: [
        {id: 'q1_opt_1', text: 'Chúa tể'},
        {id: 'q1_opt_2', text: 'Vua'},
        {id: 'q1_opt_3', text: 'Cha'},
        {id: 'q1_opt_4', text: 'Bạn'}
      ],
      correctOptionId: 'q1_opt_3',
      hint: "Em học giáo lý để biết Thiên Chúa là Cha và mọi người là anh chị em."
    },
    // Page 5 (Reading - Context for Question 2):
    {
      type: 'reading',
      passage: "Hỏi: Em biết như thế làm chi ? Thưa: Em biết như thế để mến Chúa, yêu người, cho ngày sau được hưởng phúc đời đời.",
      durationSeconds: 5
    },
    // Page 6 (Question - Based on Reading Page 5 - Sort):
    {
      type: 'sort',
      prompt: "Sắp xếp các từ để hoàn thành mục đích của việc nhận biết giáo lý:",
      words: [
        {id: 'q2_w1', text: 'mến'},
        {id: 'q2_w2', text: 'Chúa'},
        {id: 'q2_w3', text: 'yêu'},
        {id: 'q2_w4', text: 'người'}
      ],
      correctOrderIds: ['q2_w1', 'q2_w2', 'q2_w3', 'q2_w4'],
      hint: "Em biết như thế để mến Chúa, yêu người, cho ngày sau được hưởng phúc đời đời."
    }
  ],
};

export default lessonContent;

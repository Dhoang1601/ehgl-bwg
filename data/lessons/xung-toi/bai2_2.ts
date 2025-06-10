import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const lessonContent: LessonContentData = {
  title: "Thiên Chúa Tạo Dựng Con Người",
  xp: 20,
  nextLessonId: "xungtoi-unit3-l3",
  pages: [
    {
      type: 'reading',
      passage: "Hỏi: Thiên Chúa tạo dựng con người làm sao?\nThưa: Thiên Chúa tạo dựng con người theo hình ảnh Chúa, có khả năng nhận biết và yêu mến Người.",
      durationSeconds: 10
    },
    {
      type: 'fill-blank',
      questionTextBeforeBlank: "Thiên Chúa tạo dựng con người theo hình ảnh Chúa, có khả năng nhận biết và ",
      questionTextAfterBlank: " Người.",
      options: [
        { id: 'b2_2_opt1', text: 'tôn thờ' },
        { id: 'b2_2_opt2', text: 'vâng lời' },
        { id: 'b2_2_opt3', text: 'yêu mến' },
        { id: 'b2_2_opt4', text: 'ca tụng' }
      ],
      correctOptionId: 'b2_2_opt3',
      hint: "Con người có khả năng nhận biết và yêu mến Thiên Chúa."
    },
    {
      type: 'multiple-choice',
      questionText: "Con người được tạo dựng theo hình ảnh Thiên Chúa nghĩa là gì?",
      options: [
        { id: 'b2_2_q3_opt1', text: 'Có quyền lực như Thiên Chúa' },
        { id: 'b2_2_q3_opt2', text: 'Không bao giờ chết' },
        { id: 'b2_2_q3_opt3', text: 'Có khả năng nhận biết và yêu mến Thiên Chúa' },
        { id: 'b2_2_q3_opt4', text: 'Giống ngoại hình Thiên Chúa' }
      ],
      correctOptionId: 'b2_2_q3_opt3',
      hint: "Câu trả lời nằm trong phần định nghĩa hình ảnh Thiên Chúa."
    },
    {
      type: 'true-false',
      questionText: "Con người được tạo dựng theo hình ảnh Thiên Chúa, nên có thể nhận biết và yêu mến Người.",
      correctAnswer: true,
      hint: "Xem lại phần trả lời ở đầu bài."
    }
  ]
};

export default lessonContent;

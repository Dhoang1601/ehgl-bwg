import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const lessonContent: LessonContentData = {
  title: "Lương Tâm",
  xp: 20,
  nextLessonId: "xungtoi2-unit15-l2",
  pages: [
    {
      type: 'reading',
      passage: "\"Dân ngoại là những người không có luật Mô-sê; nhưng mỗi khi họ theo lẽ tự nhiên mà làm những gì Luật dạy, thì họ là Luật cho chính mình\" (Rm 2,14)",
      durationSeconds: 12
    },
    {
      type: 'multiple-choice',
      questionText: "Câu Rm 2,14 nói đến điều gì?",
      options: [
        { id: 'b16_1_mc1', text: 'Luật tự nhiên có trong lòng mỗi người' },
        { id: 'b16_1_mc2', text: 'Luật Mô-sê dành riêng cho người Do Thái' },
        { id: 'b16_1_mc3', text: 'Không cần luật pháp' },
        { id: 'b16_1_mc4', text: 'Mọi người phải giữ cùng một luật' }
      ],
      correctOptionId: 'b16_1_mc1',
      hint: "Nội dung nhấn mạnh luật tự nhiên trong tâm hồn."
    },
    {
      type: 'fill-blank',
      questionTextBeforeBlank: "Dân ngoại không có ",
      questionTextAfterBlank: ", nhưng họ vẫn có thể làm theo điều thiện.",
      options: [
        { id: 'b16_1_fb1', text: 'Luật Mô-sê' },
        { id: 'b16_1_fb2', text: 'Kinh Thánh' },
        { id: 'b16_1_fb3', text: 'Thiên Chúa' },
        { id: 'b16_1_fb4', text: 'Tôn giáo' }
      ],
      correctOptionId: 'b16_1_fb1',
      hint: "Trích dẫn trực tiếp từ Rm 2,14."
    },
    {
      type: 'true-false',
      questionText: "Dân ngoại là những người không có luật Mô-sê nhưng vẫn có thể sống theo điều thiện nhờ lương tâm.",
      correctAnswer: true,
      hint: "Rm 2,14 chính là minh chứng."
    },
    {
      type: 'sort',
      prompt: "Sắp xếp ý nghĩa của câu Rm 2,14:",
      words: [
        { id: 'b16_1_s1', text: 'Không có Luật Mô-sê' },
        { id: 'b16_1_s2', text: 'Làm theo lẽ tự nhiên' },
        { id: 'b16_1_s3', text: 'Trở thành luật cho chính mình' }
      ].sort(() => Math.random() - 0.5),
      correctOrderIds: ['b16_1_s1', 'b16_1_s2', 'b16_1_s3'],
      hint: "Theo logic của Rm 2,14."
    }
  ]
};

export default lessonContent;
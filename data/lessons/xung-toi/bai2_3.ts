import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const lessonContent: LessonContentData = {
  title: "Thiên Chúa Tạo Dựng Con Người",
  xp: 20,
  nextLessonId: "xungtoi-unit3-l4",
  pages: [
    {
      type: 'reading',
      passage: "Hỏi: Vì sao con người cao cả hơn mọi loài trên trái đất?\nThưa: Vì con người vừa là vật chất, vừa là tinh thần, nghĩa là có xác và hồn kết hợp thành một con người duy nhất.",
      durationSeconds: 10
    },
    {
      type: 'multiple-choice',
      questionText: "Vì sao con người cao cả hơn mọi loài?",
      options: [
        { id: 'b2_3_opt1', text: 'Vì con người biết nói' },
        { id: 'b2_3_opt2', text: 'Vì con người có sức mạnh' },
        { id: 'b2_3_opt3', text: 'Vì con người có xác và hồn' },
        { id: 'b2_3_opt4', text: 'Vì con người sống lâu hơn' }
      ],
      correctOptionId: 'b2_3_opt3',
      hint: "Kết hợp xác và hồn tạo nên phẩm giá đặc biệt của con người."
    },
    {
      type: 'fill-blank',
      questionTextBeforeBlank: "Con người gồm có xác và ",
      questionTextAfterBlank: ", tạo thành một con người duy nhất.",
      options: [
        { id: 'b2_3_q3_opt1', text: 'xương' },
        { id: 'b2_3_q3_opt2', text: 'linh hồn' },
        { id: 'b2_3_q3_opt3', text: 'thịt' },
        { id: 'b2_3_q3_opt4', text: 'tư tưởng' }
      ],
      correctOptionId: 'b2_3_q3_opt2',
      hint: "Đừng quên phần thiêng liêng của con người."
    },
    {
      type: 'true-false',
      questionText: "Con người chỉ là vật chất như các loài động vật khác.",
      correctAnswer: false,
      hint: "Con người còn có phần tinh thần là linh hồn."
    }
  ]
};

export default lessonContent;

import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const lessonContent: LessonContentData = {
  title: "Thiên Chúa Sáng Tạo Trời Đất Muôn Vật",
  xp: 15,
  nextLessonId: "xungtoi-unit2-l5",
  pages: [
    {
      type: 'reading',
      passage: "Hỏi: Thụ tạo vô hình là loài nào?\nThưa: Là các thụ tạo thiêng liêng không có thể xác, gọi là thiên thần. Các ngài được tạo dựng để phụng sự Thiên Chúa và giúp đỡ loài người.",
      durationSeconds: 10
    },
    {
      type: 'fill-blank',
      questionTextBeforeBlank: "Thụ tạo vô hình được gọi là ",
      questionTextAfterBlank: ".",
      options: [
        { id: 'b1_4_opt1', text: 'thiên thần' },
        { id: 'b1_4_opt2', text: 'linh hồn' },
        { id: 'b1_4_opt3', text: 'sứ giả' },
        { id: 'b1_4_opt4', text: 'ánh sáng' }
      ],
      correctOptionId: 'b1_4_opt1',
      hint: "Thiên thần là các thụ tạo thiêng liêng không có thể xác."
    },
    {
      type: 'multiple-choice',
      questionText: "Thiên thần được tạo dựng để làm gì?",
      options: [
        { id: 'b1_4_q3_opt1', text: 'canh giữ vũ trụ' },
        { id: 'b1_4_q3_opt2', text: 'giải thích Kinh Thánh' },
        { id: 'b1_4_q3_opt3', text: 'phụng sự Thiên Chúa và giúp đỡ loài người' },
        { id: 'b1_4_q3_opt4', text: 'làm phép lạ' }
      ],
      correctOptionId: 'b1_4_q3_opt3',
      hint: "Câu trả lời nằm trong phần đọc."
    }
  ]
};

export default lessonContent;

import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const lessonContent: LessonContentData = {
  title: "Thiên Chúa Tạo Dựng Con Người",
  xp: 20,
  nextLessonId: "xungtoi-unit3-l5",
  pages: [
    {
      type: 'reading',
      passage: "Hỏi: Được Thiên Chúa ban cho sự sống và phẩm giá cao quí như vậy, ta phải làm gì?\nThưa: Ta phải biết cám ơn và yêu mến Thiên Chúa, đồng thời cố gắng làm cho cuộc sống của ta và mọi người ngày càng thêm tươi đẹp, và đầy yêu thương.",
      durationSeconds: 12
    },
    {
      type: 'fill-blank',
      questionTextBeforeBlank: "Ta phải biết cám ơn và ",
      questionTextAfterBlank: " Thiên Chúa vì sự sống và phẩm giá cao quí.",
      options: [
        { id: 'b2_4_opt1', text: 'yêu mến' },
        { id: 'b2_4_opt2', text: 'cầu xin' },
        { id: 'b2_4_opt3', text: 'ngợi khen' },
        { id: 'b2_4_opt4', text: 'vâng phục' }
      ],
      correctOptionId: 'b2_4_opt1',
      hint: "Gắn với lòng biết ơn."
    },
    {
      type: 'multiple-choice',
      questionText: "Ngoài việc cám ơn và yêu mến Thiên Chúa, ta còn phải làm gì?",
      options: [
        { id: 'b2_4_q3_opt1', text: 'Làm cho cuộc sống ngày càng thêm tươi đẹp và yêu thương' },
        { id: 'b2_4_q3_opt2', text: 'Sống khép kín' },
        { id: 'b2_4_q3_opt3', text: 'Tự cao' },
        { id: 'b2_4_q3_opt4', text: 'Làm theo ý riêng' }
      ],
      correctOptionId: 'b2_4_q3_opt1',
      hint: "Phải hướng đến sự tốt đẹp chung."
    },
    {
      type: 'true-false',
      questionText: "Cảm ơn Thiên Chúa thôi là đủ, không cần làm gì khác cho người khác.",
      correctAnswer: false,
      hint: "Phải hành động tích cực với cuộc sống và người xung quanh."
    }
  ]
};

export default lessonContent;

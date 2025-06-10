import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const lessonContent: LessonContentData = {
  title: "Lương Tâm",
  xp: 20,
  nextLessonId: "xungtoi2-unit15-l5",
  pages: [
    {
      type: 'reading',
      passage: "Hỏi: Ta phải làm gì để đào tạo lương tâm mình?\nThưa: Ta phải xa lánh tội lỗi, cầu nguyện, học hỏi Lời Chúa, nghe giáo huấn của Hội Thánh, vâng lời người dạy dỗ và bàn hỏi với người khôn ngoan.",
      durationSeconds: 14
    },
    {
      type: 'multiple-choice',
      questionText: "Đâu KHÔNG phải là cách đào tạo lương tâm?",
      options: [
        { id: 'b16_4_mc1', text: 'Xa lánh tội lỗi' },
        { id: 'b16_4_mc2', text: 'Học hỏi Lời Chúa' },
        { id: 'b16_4_mc3', text: 'Làm theo ý mình' },
        { id: 'b16_4_mc4', text: 'Nghe lời người dạy dỗ' }
      ],
      correctOptionId: 'b16_4_mc3',
      hint: "Cần biết phân biệt điều đúng trong danh sách."
    },
    {
      type: 'true-false',
      questionText: "Việc đào tạo lương tâm chỉ cần cầu nguyện là đủ.",
      correctAnswer: false,
      hint: "Còn cần học Lời Chúa, vâng lời, bàn hỏi..."
    },
    {
      type: 'fill-blank',
      questionTextBeforeBlank: "Để đào tạo lương tâm, ta phải ",
      questionTextAfterBlank: " tội lỗi và học hỏi Lời Chúa.",
      options: [
        { id: 'b16_4_fb1', text: 'xa lánh' },
        { id: 'b16_4_fb2', text: 'cầu nguyện' },
        { id: 'b16_4_fb3', text: 'chống lại' }
      ],
      correctOptionId: 'b16_4_fb1',
      hint: "Gắn với phần đầu của câu trả lời GLCG.306."
    },
    {
      type: 'sort',
      prompt: "Sắp xếp các hành động đào tạo lương tâm:",
      words: [
        { id: 'b16_4_s1', text: 'Cầu nguyện' },
        { id: 'b16_4_s2', text: 'Nghe lời Hội Thánh' },
        { id: 'b16_4_s3', text: 'Bàn hỏi với người khôn ngoan' },
        { id: 'b16_4_s4', text: 'Xa lánh tội lỗi' }
      ].sort(() => Math.random() - 0.5),
      correctOrderIds: ['b16_4_s4', 'b16_4_s1', 'b16_4_s2', 'b16_4_s3'],
      hint: "Từ tránh tội đến hành động cụ thể."
    }
  ]
};

export default lessonContent;
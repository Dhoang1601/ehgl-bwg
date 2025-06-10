import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const lessonContent: LessonContentData = {
  title: "Lương Tâm",
  xp: 20,
  nextLessonId: "xungtoi2-unit15-l4",
  pages: [
    {
      type: 'reading',
      passage: "Hỏi: Ta phải nghe theo tiếng lương tâm thế nào?\nThưa: Ta buộc phải luôn lắng nghe và làm theo tiếng lương tâm.",
      durationSeconds: 10
    },
    {
      type: 'multiple-choice',
      questionText: "Theo GLCG.304, ta phải làm gì với tiếng lương tâm?",
      options: [
        { id: 'b16_3_mc1', text: 'Chỉ nghe nếu hợp ý mình' },
        { id: 'b16_3_mc2', text: 'Luôn lắng nghe và làm theo' },
        { id: 'b16_3_mc3', text: 'Hỏi ý kiến người khác' },
        { id: 'b16_3_mc4', text: 'Chờ khi cần thiết mới nghe' }
      ],
      correctOptionId: 'b16_3_mc2',
      hint: "Phải luôn luôn lắng nghe và hành động theo lương tâm."
    },
    {
      type: 'true-false',
      questionText: "Ta chỉ cần nghe tiếng lương tâm khi gặp khó khăn.",
      correctAnswer: false,
      hint: "GLCG 304 nói 'luôn lắng nghe'."
    },
    {
      type: 'fill-blank',
      questionTextBeforeBlank: "Ta buộc phải luôn ",
      questionTextAfterBlank: " và làm theo tiếng lương tâm.",
      options: [
        { id: 'b16_3_fb1', text: 'lắng nghe' },
        { id: 'b16_3_fb2', text: 'cầu nguyện' },
        { id: 'b16_3_fb3', text: 'xin ơn' }
      ],
      correctOptionId: 'b16_3_fb1',
      hint: "Đây là bước đầu tiên trong hành động theo lương tâm."
    },
    {
      type: 'sort',
      prompt: "Sắp xếp ý nghĩa thực hành của lắng nghe lương tâm:",
      words: [
        { id: 'b16_3_s1', text: 'Luôn lắng nghe' },
        { id: 'b16_3_s2', text: 'Phân định đúng sai' },
        { id: 'b16_3_s3', text: 'Làm theo điều tốt' }
      ].sort(() => Math.random() - 0.5),
      correctOrderIds: ['b16_3_s1', 'b16_3_s2', 'b16_3_s3'],
      hint: "Thứ tự thực hành theo lương tâm."
    }
  ]
};

export default lessonContent;
import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const lessonContent: LessonContentData = {
  title: "Lương Tâm",
  xp: 20,
  nextLessonId: "xungtoi2-unit15-l3",
  pages: [
    {
      type: 'reading',
      passage: "Hỏi: Lương tâm là gì?\nThưa: Lương tâm là luật tự nhiên mà Thiên Chúa đã đặt sẵn nơi đáy lòng mỗi người để soi dẫn họ làm lành lánh dữ.",
      durationSeconds: 10
    },
    {
      type: 'multiple-choice',
      questionText: "Lương tâm là gì theo GLCG.303?",
      options: [
        { id: 'b16_2_mc1', text: 'Luật của xã hội' },
        { id: 'b16_2_mc2', text: 'Tiếng nói của bản thân' },
        { id: 'b16_2_mc3', text: 'Luật tự nhiên Thiên Chúa đặt trong lòng người' },
        { id: 'b16_2_mc4', text: 'Thói quen đạo đức' }
      ],
      correctOptionId: 'b16_2_mc3',
      hint: "Trích nguyên từ giáo lý."
    },
    {
      type: 'fill-blank',
      questionTextBeforeBlank: "Lương tâm soi dẫn ta ",
      questionTextAfterBlank: " và lánh dữ.",
      options: [
        { id: 'b16_2_fb1', text: 'làm lành' },
        { id: 'b16_2_fb2', text: 'cầu nguyện' },
        { id: 'b16_2_fb3', text: 'suy nghĩ' }
      ],
      correctOptionId: 'b16_2_fb1',
      hint: "Đây là mục tiêu cốt lõi của lương tâm."
    },
    {
      type: 'true-false',
      questionText: "Lương tâm là tiếng nói của Thiên Chúa nơi lòng con người.",
      correctAnswer: true,
      hint: "Khái niệm này xuất phát từ truyền thống giáo lý."
    },
    {
      type: 'sort',
      prompt: "Sắp xếp các yếu tố mô tả lương tâm theo GLCG.303:",
      words: [
        { id: 'b16_2_s1', text: 'Luật tự nhiên' },
        { id: 'b16_2_s2', text: 'Đặt trong đáy lòng' },
        { id: 'b16_2_s3', text: 'Soi dẫn con người' },
        { id: 'b16_2_s4', text: 'Làm lành lánh dữ' }
      ].sort(() => Math.random() - 0.5),
      correctOrderIds: ['b16_2_s1', 'b16_2_s2', 'b16_2_s3', 'b16_2_s4'],
      hint: "Thứ tự mô tả từ khái niệm đến hành động."
    }
  ]
};

export default lessonContent;
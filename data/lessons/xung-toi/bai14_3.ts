import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const lessonContent: LessonContentData = {
  title: "Con Người Là Hình Ảnh Thiên Chúa",
  xp: 35,
  nextLessonId: "xungtoi2-unit14-l4",
  pages: [
    {
      type: 'reading',
      passage: "Hỏi: Con người có giữ được nguyên vẹn hình ảnh Thiên Chúa nơi mình không?\nThưa: Không, tội lỗi đã làm tổn thương hình ảnh ấy nơi con người, khiến họ dễ hướng về điều xấu và dễ bị sai lầm.",
      durationSeconds: 12
    },
    {
      type: 'multiple-choice',
      questionText: "Điều gì đã làm tổn thương hình ảnh Thiên Chúa nơi con người?",
      options: [
        { id: 'b14_3_opt1', text: 'Thiên nhiên' },
        { id: 'b14_3_opt2', text: 'Tội lỗi' },
        { id: 'b14_3_opt3', text: 'Thời gian' },
        { id: 'b14_3_opt4', text: 'Thân xác' }
      ],
      correctOptionId: 'b14_3_opt2',
      hint: "Tội lỗi là nguyên nhân chính."
    },
    {
      type: 'fill-blank',
      questionTextBeforeBlank: "Tội lỗi làm tổn thương hình ảnh Thiên Chúa nơi con người, khiến họ dễ ",
      questionTextAfterBlank: " và dễ bị sai lầm.",
      options: [
        { id: 'b14_3_fb1', text: 'hướng về điều xấu' },
        { id: 'b14_3_fb2', text: 'trở nên ích kỷ' },
        { id: 'b14_3_fb3', text: 'ghen ghét' },
        { id: 'b14_3_fb4', text: 'xa cách Thiên Chúa' }
      ],
      correctOptionId: 'b14_3_fb1',
      hint: "Trích nguyên văn trong phần trả lời giáo lý."
    },
    {
      type: 'true-false',
      questionText: "Con người giữ nguyên vẹn hình ảnh Thiên Chúa từ khi sinh ra đến chết mà không bị tổn thương gì.",
      correctAnswer: false,
      hint: "Tội lỗi luôn ảnh hưởng đến con người."
    },
    {
      type: 'sort',
      prompt: "Sắp xếp các hậu quả do tội lỗi gây ra theo trình tự mô tả:",
      words: [
        { id: 'b14_3_s1', text: 'Tổn thương hình ảnh Thiên Chúa' },
        { id: 'b14_3_s2', text: 'Dễ hướng về điều xấu' },
        { id: 'b14_3_s3', text: 'Dễ bị sai lầm' }
      ].sort(() => Math.random() - 0.5),
      correctOrderIds: ['b14_3_s1', 'b14_3_s2', 'b14_3_s3'],
      hint: "Bám sát GLCG.288."
    },
    {
      type: 'multiple-choice',
      questionText: "Khi hình ảnh Thiên Chúa bị tổn thương, con người có khuynh hướng gì?",
      options: [
        { id: 'b14_3_q5o1', text: 'Làm điều thiện' },
        { id: 'b14_3_q5o2', text: 'Chạy đến với Giáo Hội' },
        { id: 'b14_3_q5o3', text: 'Hướng về điều xấu' },
        { id: 'b14_3_q5o4', text: 'Bỏ cuộc sống trần gian' }
      ],
      correctOptionId: 'b14_3_q5o3',
      hint: "Câu trả lời mang tính nội tại tâm lý."
    },
    {
      type: 'fill-blank',
      questionTextBeforeBlank: "Tội lỗi không chỉ là hành động sai, mà còn khiến hình ảnh Thiên Chúa trong ta ",
      questionTextAfterBlank: ".",
      options: [
        { id: 'b14_3_q6o1', text: 'bị tổn thương' },
        { id: 'b14_3_q6o2', text: 'biến mất' },
        { id: 'b14_3_q6o3', text: 'trở nên hoàn hảo' },
        { id: 'b14_3_q6o4', text: 'được củng cố' }
      ],
      correctOptionId: 'b14_3_q6o1',
      hint: "Giáo lý nhấn mạnh yếu tố tổn thương."
    }
  ]
};

export default lessonContent;

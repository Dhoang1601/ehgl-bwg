import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const lessonContent: LessonContentData = {
  title: "Thiên Chúa Sáng Tạo Trời Đất Muôn Vật",
  xp: 20,
  nextLessonId: "xungtoi-unit3-l1",
  pages: [
    {
      type: 'sort',
      prompt: "Sắp xếp các cụm từ sau để hoàn thành lời Kinh Tin Kính về Thiên Chúa tạo dựng:",
      words: [
        { id: 'b1_5_phrase1', text: 'Thiên Chúa là Đấng' },
        { id: 'b1_5_phrase2', text: 'tạo thành trời và đất' },
        { id: 'b1_5_phrase3', text: 'muôn vật hữu hình' },
        { id: 'b1_5_phrase4', text: 'và vô hình' }
      ].sort(() => Math.random() - 0.5),
      correctOrderIds: [
        'b1_5_phrase1', 'b1_5_phrase2', 'b1_5_phrase3', 'b1_5_phrase4'
      ],
      hint: "Câu này trích từ Kinh Tin Kính."
    },
    {
      type: 'true-false',
      questionText: "Thiên Chúa tạo dựng muôn vật từ hư không bằng Lời quyền năng của Người.",
      correctAnswer: true,
      hint: "Câu này có trong phần học trước."
    },
    {
      type: 'multiple-choice',
      questionText: "Thế giới hữu hình bao gồm những gì?",
      options: [
        { id: 'b1_5_q3_opt1', text: 'Chỉ có động vật' },
        { id: 'b1_5_q3_opt2', text: 'Mọi loài thụ tạo mà ta thấy được' },
        { id: 'b1_5_q3_opt3', text: 'Chỉ có con người' },
        { id: 'b1_5_q3_opt4', text: 'Các vì sao và hành tinh' }
      ],
      correctOptionId: 'b1_5_q3_opt2',
      hint: "Bao gồm tất cả những gì hữu hình mà ta thấy được."
    }
  ]
};

export default lessonContent;

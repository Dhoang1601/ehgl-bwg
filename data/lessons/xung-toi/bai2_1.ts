import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const lessonContent: LessonContentData = {
  title: "Thiên Chúa Tạo Dựng Con Người",
  xp: 25,
  nextLessonId: "xungtoi-unit3-l2",
  pages: [
    {
      type: 'reading',
      passage: "“Thiên Chúa phán : Ta hãy dựng nên loài người giống hình ảnh của Ta và để cho họ làm chủ trên mặt đất” (St 1,26)",
      durationSeconds: 15
    },
    {
      type: 'multiple-choice',
      questionText: "Lời Chúa \"Ta hãy dựng nên loài người giống hình ảnh của Ta\" trích từ đâu?",
      options: [
        { id: 'b2_1_opt1', text: 'St 1,26' },
        { id: 'b2_1_opt2', text: 'St 2,7' },
        { id: 'b2_1_opt3', text: 'Ga 1,1' },
        { id: 'b2_1_opt4', text: 'Tv 8,5' }
      ],
      correctOptionId: 'b2_1_opt1',
      hint: "Lời này được trích trong sách Sáng Thế, chương đầu tiên."
    },
    {
      type: 'sort',
      prompt: "Sắp xếp các cụm từ để hoàn thành câu Lời Chúa (St 1,26):",
      words: [
        { id: 'b2_1_phrase1', text: 'Thiên Chúa phán:' },
        { id: 'b2_1_phrase2', text: 'Ta hãy dựng nên loài người' },
        { id: 'b2_1_phrase3', text: 'giống hình ảnh của Ta' },
        { id: 'b2_1_phrase4', text: 'và để cho họ làm chủ trên mặt đất' }
      ].sort(() => Math.random() - 0.5),
      correctOrderIds: [
        'b2_1_phrase1', 'b2_1_phrase2', 'b2_1_phrase3', 'b2_1_phrase4'
      ],
      hint: "Sáng Thế 1,26."
    }
  ]
};

export default lessonContent;

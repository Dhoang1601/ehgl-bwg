import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const lessonContent: LessonContentData = {
  title: "Thiên Chúa Tạo Dựng Con Người",
  xp: 20,
  nextLessonId: "xungtoi-unit4-l1",
  pages: [
    {
      type: 'sort',
      prompt: "Sắp xếp các cụm từ để hoàn chỉnh ý nghĩa: con người được tạo dựng...",
      words: [
        { id: 'b2_5_phrase1', text: 'Con người được tạo dựng' },
        { id: 'b2_5_phrase2', text: 'theo hình ảnh Thiên Chúa' },
        { id: 'b2_5_phrase3', text: 'có khả năng nhận biết' },
        { id: 'b2_5_phrase4', text: 'và yêu mến Người' }
      ].sort(() => Math.random() - 0.5),
      correctOrderIds: [
        'b2_5_phrase1', 'b2_5_phrase2', 'b2_5_phrase3', 'b2_5_phrase4'
      ],
      hint: "Từ phần trả lời của câu hỏi GLCG.48."
    },
    {
      type: 'true-false',
      questionText: "Con người chỉ là vật chất và không có phần linh hồn.",
      correctAnswer: false,
      hint: "Con người là sự kết hợp giữa xác và hồn."
    },
    {
      type: 'multiple-choice',
      questionText: "Ta phải làm gì khi được ban sự sống và phẩm giá cao quí?",
      options: [
        { id: 'b2_5_q3_opt1', text: 'Yêu thương Thiên Chúa và sống tốt với mọi người' },
        { id: 'b2_5_q3_opt2', text: 'Làm việc chăm chỉ để làm giàu' },
        { id: 'b2_5_q3_opt3', text: 'Sống ích kỷ hơn' },
        { id: 'b2_5_q3_opt4', text: 'Tự hào và khoe khoang' }
      ],
      correctOptionId: 'b2_5_q3_opt1',
      hint: "Gắn với tình yêu Thiên Chúa và tha nhân."
    },
    {
      type: 'fill-blank',
      questionTextBeforeBlank: "Con người vừa là vật chất vừa là",
      questionTextAfterBlank: ", tạo thành một con người duy nhất.",
      options: [
        { id: 'b2_5_q4_opt1', text: 'tinh thần' },
        { id: 'b2_5_q4_opt2', text: 'xác thịt' },
        { id: 'b2_5_q4_opt3', text: 'tư tưởng' },
        { id: 'b2_5_q4_opt4', text: 'linh mục' }
      ],
      correctOptionId: 'b2_5_q4_opt1',
      hint: "Từ khóa GLCG.49"
    }
  ]
};

export default lessonContent;

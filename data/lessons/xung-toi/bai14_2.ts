import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const lessonContent: LessonContentData = {
  title: "Con Người Là Hình Ảnh Thiên Chúa",
  xp: 30,
  nextLessonId: "xungtoi2-unit14-l3",
  pages: [
    {
      type: 'reading',
      passage: "Hỏi: Tại sao con người là hình ảnh Thiên Chúa?\nThưa: Vì Thiên Chúa đã tạo dựng con người giống hình ảnh Người, ban cho có linh hồn thiêng liêng, có trí tuệ và ý chí tự do. Cho nên ngay từ trong lòng mẹ, con người đã hướng về sự thiện đích thực và hạnh phúc muôn đời.",
      durationSeconds: 14
    },
    {
      type: 'multiple-choice',
      questionText: "Tại sao con người là hình ảnh Thiên Chúa?",
      options: [
        { id: 'b14_2_opt1', text: 'Vì con người có sức mạnh' },
        { id: 'b14_2_opt2', text: 'Vì con người có linh hồn, trí tuệ và ý chí tự do' },
        { id: 'b14_2_opt3', text: 'Vì con người có hình dáng giống Thiên Chúa' },
        { id: 'b14_2_opt4', text: 'Vì con người sinh ra ở trời' }
      ],
      correctOptionId: 'b14_2_opt2',
      hint: "Câu trả lời nằm trong định nghĩa của GLCG.287."
    },
    {
      type: 'fill-blank',
      questionTextBeforeBlank: "Ngay từ trong lòng mẹ, con người đã hướng về ",
      questionTextAfterBlank: " và hạnh phúc muôn đời.",
      options: [
        { id: 'b14_2_fb1', text: 'sự thiện đích thực' },
        { id: 'b14_2_fb2', text: 'niềm vui cuộc sống' },
        { id: 'b14_2_fb3', text: 'sự bình an' },
        { id: 'b14_2_fb4', text: 'vẻ đẹp thiên nhiên' }
      ],
      correctOptionId: 'b14_2_fb1',
      hint: "Chính xác theo cụm từ của giáo lý."
    },
    {
      type: 'true-false',
      questionText: "Con người là hình ảnh Thiên Chúa vì được tạo ra từ bụi đất và sinh khí của Người.",
      correctAnswer: false,
      hint: "Câu trả lời đúng phải nhấn mạnh linh hồn thiêng liêng, trí tuệ và ý chí tự do."
    },
    {
      type: 'sort',
      prompt: "Sắp xếp các yếu tố thể hiện hình ảnh Thiên Chúa nơi con người:",
      words: [
        { id: 'b14_2_s1', text: 'Linh hồn thiêng liêng' },
        { id: 'b14_2_s2', text: 'Trí tuệ' },
        { id: 'b14_2_s3', text: 'Ý chí tự do' },
        { id: 'b14_2_s4', text: 'Hướng về sự thiện' }
      ].sort(() => Math.random() - 0.5),
      correctOrderIds: ['b14_2_s1', 'b14_2_s2', 'b14_2_s3', 'b14_2_s4'],
      hint: "Dựa theo thứ tự mô tả trong giáo lý."
    }
  ]
};

export default lessonContent;

import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const lessonContent: LessonContentData = {
  title: "Con Người Là Hình Ảnh Thiên Chúa",
  xp: 30,
  nextLessonId: "xungtoi2-unit14-l2",
  pages: [
    {
      type: 'reading',
      passage: "\"Anh em phải để Thánh Thần đổi mới tâm trí anh em, và phải mặc lấy con người mới, là con người đã được sáng tạo theo hình ảnh Thiên Chúa để thật sự sống công chính và thánh thiện\" (Ep 4,23)",
      durationSeconds: 18
    },
    {
      type: 'multiple-choice',
      questionText: "Theo thư Ê-phê-sô, con người mới phải sống thế nào?",
      options: [
        { id: 'b14_1_opt1', text: 'Sống vui vẻ và tự do' },
        { id: 'b14_1_opt2', text: 'Sống công chính và thánh thiện' },
        { id: 'b14_1_opt3', text: 'Sống giàu có và thành công' },
        { id: 'b14_1_opt4', text: 'Sống theo luật Do Thái' }
      ],
      correctOptionId: 'b14_1_opt2',
      hint: "Câu trả lời có trong đoạn Thánh Thư (Ep 4,23)."
    },
    {
      type: 'fill-blank',
      questionTextBeforeBlank: "Anh em phải để Thánh Thần đổi mới ",
      questionTextAfterBlank: " anh em, và phải mặc lấy con người mới.",
      options: [
        { id: 'b14_1_fb1', text: 'tâm trí' },
        { id: 'b14_1_fb2', text: 'thân xác' },
        { id: 'b14_1_fb3', text: 'công việc' },
        { id: 'b14_1_fb4', text: 'cuộc đời' }
      ],
      correctOptionId: 'b14_1_fb1',
      hint: "Trọng tâm nằm ở phần nội tâm – tâm trí."
    },
    {
      type: 'sort',
      prompt: "Sắp xếp các cụm từ để hoàn chỉnh câu Thánh Kinh Ep 4,23:",
      words: [
        { id: 'b14_1_s1', text: 'Anh em phải để Thánh Thần' },
        { id: 'b14_1_s2', text: 'đổi mới tâm trí anh em,' },
        { id: 'b14_1_s3', text: 'và phải mặc lấy con người mới,' },
        { id: 'b14_1_s4', text: 'được sáng tạo theo hình ảnh Thiên Chúa' },
        { id: 'b14_1_s5', text: 'để thật sự sống công chính và thánh thiện.' }
      ].sort(() => Math.random() - 0.5),
      correctOrderIds: ['b14_1_s1', 'b14_1_s2', 'b14_1_s3', 'b14_1_s4', 'b14_1_s5'],
      hint: "Ep 4,23 là câu then chốt của bài."
    }
  ]
};

export default lessonContent;

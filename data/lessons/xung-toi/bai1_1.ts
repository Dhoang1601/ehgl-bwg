import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const lessonContent: LessonContentData = {
  title: "Thiên Chúa Sáng Tạo Trời Đất Muôn Vật",
  xp: 25,
  nextLessonId: "xungtoi-unit2-l2",
  pages: [
    {
      type: 'reading',
      passage: "“Từ ban đầu Thiên Chúa sáng tạo trời và đất” (St 1,1)",
      durationSeconds: 15
    },
    {
      type: 'multiple-choice',
      questionText: "Câu Lời Chúa \"Từ ban đầu Thiên Chúa sáng tạo trời và đất\" được trích từ sách nào?",
      options: [
        { id: 'b1_1_opt1', text: 'St 1,1' },
        { id: 'b1_1_opt2', text: 'Ga 1,1' },
        { id: 'b1_1_opt3', text: 'Tv 8,4' },
        { id: 'b1_1_opt4', text: 'Mt 1,1' }
      ],
      correctOptionId: 'b1_1_opt1',
      hint: "Sách Sáng Thế, chương đầu tiên, câu đầu tiên."
    },
    {
      type: 'reading',
      passage: "Hỏi: Trong Kinh Tin Kính, ta tuyên xưng điều gì về Thiên Chúa sáng tạo?\nThưa: Ta tuyên xưng Thiên Chúa là Đấng tạo thành trời và đất, muôn vật hữu hình và vô hình.",
      durationSeconds: 10
    },
    {
      type: 'fill-blank',
      questionTextBeforeBlank: "Trong Kinh Tin Kính, ta tuyên xưng Thiên Chúa là Đấng tạo thành ",
      questionTextAfterBlank: ", muôn vật hữu hình và vô hình.",
      options: [
        { id: 'b1_1_q4_opt1', text: 'vạn vật' },
        { id: 'b1_1_q4_opt2', text: 'trời và đất' },
        { id: 'b1_1_q4_opt3', text: 'mọi sự' },
        { id: 'b1_1_q4_opt4', text: 'vũ trụ' }
      ],
      correctOptionId: 'b1_1_q4_opt2',
      hint: "Cụm từ này nằm trong Kinh Tin Kính mà ta đọc mỗi Chúa Nhật."
    }
  ]
};

export default lessonContent;

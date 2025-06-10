import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const lessonContent: LessonContentData = {
  title: "Thiên Chúa Sáng Tạo Trời Đất Muôn Vật",
  xp: 20,
  nextLessonId: "xungtoi-unit2-l4",
  pages: [
    {
      type: 'reading',
      passage: "Hỏi: Thế giới hữu hình là gì?\nThưa: Là mọi loài thụ tạo mà ta thấy được, trong đó con người là chóp đỉnh. Tất cả những gì Thiên Chúa đã sáng tạo đều tốt đẹp và có liên hệ mật thiết với nhau (St 1,31).",
      durationSeconds: 10
    },
    {
      type: 'multiple-choice',
      questionText: "Ai là chóp đỉnh trong thế giới hữu hình?",
      options: [
        { id: 'b1_3_opt1', text: 'Động vật' },
        { id: 'b1_3_opt2', text: 'Cây cối' },
        { id: 'b1_3_opt3', text: 'Thiên thần' },
        { id: 'b1_3_opt4', text: 'Con người' }
      ],
      correctOptionId: 'b1_3_opt4',
      hint: "Trong các thụ tạo hữu hình, con người là cao quý nhất."
    },
    {
      type: 'true-false',
      questionText: "Mọi loài thụ tạo đều có liên hệ mật thiết với nhau.",
      correctAnswer: true,
      hint: "Sách Sáng Thế nói rằng Thiên Chúa thấy mọi sự Người làm ra đều rất tốt đẹp."
    }
  ]
};

export default lessonContent;

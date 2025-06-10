import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const lessonContent: LessonContentData = {
  title: "Thiên Chúa Sáng Tạo Trời Đất Muôn Vật",
  xp: 20,
  nextLessonId: "xungtoi-unit2-l3",
  pages: [
    {
      type: 'reading',
      passage: "Hỏi: Thiên Chúa đã sáng tạo muôn vật cách nào?\nThưa: Thiên Chúa đã dùng Lời quyền năng của Người mà sáng tạo mọi sự từ hư không. Chỉ một mình Thiên Chúa mới làm được như vậy.",
      durationSeconds: 10
    },
    {
      type: 'multiple-choice',
      questionText: "Thiên Chúa đã sáng tạo muôn vật cách nào?",
      options: [
        { id: 'b1_2_opt1', text: 'Dùng đất và nước' },
        { id: 'b1_2_opt2', text: 'Từ ánh sáng' },
        { id: 'b1_2_opt3', text: 'Dùng Lời quyền năng của Người' },
        { id: 'b1_2_opt4', text: 'Bằng phép thuật' }
      ],
      correctOptionId: 'b1_2_opt3',
      hint: "Câu trả lời nằm trong phần đọc."
    },
    {
      type: 'fill-blank',
      questionTextBeforeBlank: "Chỉ một mình ",
      questionTextAfterBlank: " mới có thể sáng tạo mọi sự từ hư không.",
      options: [
        { id: 'b1_2_q3_opt1', text: 'loài người' },
        { id: 'b1_2_q3_opt2', text: 'vũ trụ' },
        { id: 'b1_2_q3_opt3', text: 'Thiên Chúa' },
        { id: 'b1_2_q3_opt4', text: 'thiên thần' }
      ],
      correctOptionId: 'b1_2_q3_opt3',
      hint: "Chỉ có Thiên Chúa làm được điều này."
    }
  ]
};

export default lessonContent;

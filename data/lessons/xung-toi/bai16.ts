// data/lessons/xung-toi/bai16.ts
import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const bai16Lessons: LessonContentData[] = [
  // Corresponds to original bai16_1.ts
  {
    title: "Nhân Đức",
    xp: 25,
    nextLessonId: "xungtoi2-unit16-l2",
    pages: [
      { type: 'reading', passage: "\"Thưa anh em, những gì là chân thật, cao quí, những gì là chính trực tinh tuyền, những gì là đáng mến và đem lại danh thơm tiếng tốt, những gì là đức hạnh, đáng khen, thì xin anh em hãy để ý\" (Pl 4,8)", durationSeconds: 15 },
      { type: 'multiple-choice', questionText: "Pl 4,8 khuyên ta chú ý đến điều gì?", options: [ { id: 'b16_1_mc1', text: 'Những gì là đức hạnh và đáng khen' }, { id: 'b16_1_mc2', text: 'Các thói quen tự nhiên' }, { id: 'b16_1_mc3', text: 'Các luật lễ nghi' }, { id: 'b16_1_mc4', text: 'Những gì mới lạ và nổi bật' } ], correctOptionId: 'b16_1_mc1', hint: 'Những gì là đức hạnh, đáng khen.' },
      { type: 'fill-blank', questionTextBeforeBlank: 'Hãy để ý đến những gì là ', questionTextAfterBlank: ', cao quý, chính trực, tinh tuyền... (Pl 4,8)', options: [ { id: 'b16_1_fb1', text: 'chân thật' }, { id: 'b16_1_fb2', text: 'khôn ngoan' }, { id: 'b16_1_fb3', text: 'khiêm nhường' } ], correctOptionId: 'b16_1_fb1', hint: 'Những gì là chân thật.' },
      { type: 'true-false', questionText: 'Thánh Phao-lô dạy ta hướng về những điều đẹp lòng người đời hơn là Thiên Chúa.', correctAnswer: false, hint: 'Ngài dạy ta hướng đến đức hạnh, điều tốt lành.' },
      { type: 'sort', prompt: 'Sắp xếp các yếu tố được đề cập trong Pl 4,8:', words: [ { id: 'b16_1_s1', text: 'Chân thật' }, { id: 'b16_1_s2', text: 'Cao quý' }, { id: 'b16_1_s3', text: 'Chính trực' }, { id: 'b16_1_s4', text: 'Tinh tuyền' }, { id: 'b16_1_s5', text: 'Đức hạnh' }, { id: 'b16_1_s6', text: 'Đáng khen' } ].sort(() => Math.random() - 0.5), correctOrderIds: ['b16_1_s1', 'b16_1_s2', 'b16_1_s3', 'b16_1_s4', 'b16_1_s5', 'b16_1_s6'], hint: 'Theo thứ tự xuất hiện trong Pl 4,8.' }
    ]
  },
  // Corresponds to original bai16_2.ts (Assumed content, as it was not provided. Using bai15_2 as template, to be replaced with actual bai16_2 content)
  {
    title: "Nhân Đức", // Placeholder title, adjust if original bai16_2 has a different one
    xp: 20,
    nextLessonId: "xungtoi2-unit16-l3",
    pages: [ // Placeholder pages based on bai15_2 logic - REPLACE WITH ACTUAL BAI16_2 CONTENT
      { type: 'reading', passage: "Hỏi: Nhân đức là gì?\nThưa: Nhân đức là một xu hướng tốt, bền vững và thường xuyên để làm điều thiện.", durationSeconds: 10 },
      { type: 'multiple-choice', questionText: "Nhân đức là gì?", options: [ { id: 'b16_2_mc1', text: 'Thói quen xấu' }, { id: 'b16_2_mc2', text: 'Xu hướng tốt, bền vững để làm điều thiện' }, { id: 'b16_2_mc3', text: 'Chỉ là suy nghĩ tốt' } ], correctOptionId: 'b16_2_mc2', hint: "Nhân đức là một xu hướng tốt và bền vững." },
      { type: 'fill-blank', questionTextBeforeBlank: 'Nhân đức là một xu hướng tốt, bền vững và ', questionTextAfterBlank: ' để làm điều thiện.', options: [ { id: 'b16_2_fb1', text: 'thường xuyên' }, { id: 'b16_2_fb2', text: 'thỉnh thoảng' } ], correctOptionId: 'b16_2_fb1', hint: "Yếu tố thường xuyên rất quan trọng." }
    ]
  },
  // Corresponds to original bai16_3.ts (Assumed content)
  {
    title: "Nhân Đức",
    xp: 20,
    nextLessonId: "xungtoi2-unit16-l4",
    pages: [
      { type: 'reading', passage: "Hỏi: Có mấy loại nhân đức?\nThưa: Có hai loại: nhân đức nhân bản và nhân đức đối thần.", durationSeconds: 8 },
      { type: 'true-false', questionText: "Chỉ có một loại nhân đức duy nhất là nhân đức nhân bản.", correctAnswer: false, hint: "Có hai loại: nhân bản và đối thần." },
      { type: 'multiple-choice', questionText: "Kể tên hai loại nhân đức chính:", options: [ {id: 'b16_3_opt1', text: 'Nhân đức cá nhân và xã hội'}, {id: 'b16_3_opt2', text: 'Nhân đức nhân bản và đối thần'}], correctOptionId: 'b16_3_opt2', hint: "Nhân bản và Đối thần."}
    ]
  },
  // Corresponds to original bai16_4.ts (Assumed content)
  {
    title: "Nhân Đức",
    xp: 20,
    nextLessonId: "xungtoi2-unit16-l5",
    pages: [
      { type: 'reading', passage: "Hỏi: Các nhân đức nhân bản chính là gì?\nThưa: Là khôn ngoan, công bằng, can đảm và tiết độ.", durationSeconds: 10 },
      { type: 'sort', prompt: "Sắp xếp các nhân đức nhân bản chính:", words: [ { id: 'b16_4_s1', text: 'Khôn ngoan' }, { id: 'b16_4_s2', text: 'Công bằng' }, { id: 'b16_4_s3', text: 'Can đảm' }, { id: 'b16_4_s4', text: 'Tiết độ' } ].sort(() => Math.random() - 0.5), correctOrderIds: ['b16_4_s1', 'b16_4_s2', 'b16_4_s3', 'b16_4_s4'], hint: "Bốn nhân đức trụ." }
    ]
  },
  // Corresponds to original bai16_5.ts (Assumed content)
  {
    title: "Nhân Đức",
    xp: 25,
    nextLessonId: undefined, // Last lesson in Xưng Tội 2
    pages: [
      { type: 'reading', passage: "Hỏi: Các nhân đức đối thần là gì?\nThưa: Là ba nhân đức Tin, Cậy, Mến, giúp ta sống trực tiếp với Thiên Chúa.", durationSeconds: 10 },
      { type: 'fill-blank', questionTextBeforeBlank: 'Ba nhân đức đối thần là Tin, Cậy, và ', questionTextAfterBlank: '.', options: [ { id: 'b16_5_fb1', text: 'Mến' }, { id: 'b16_5_fb2', text: 'Khiêm Nhường' } ], correctOptionId: 'b16_5_fb1', hint: "Nhân đức quan trọng nhất." },
      { type: 'true-false', questionText: 'Nhân đức đối thần giúp ta sống tốt với người khác hơn là với Thiên Chúa.', correctAnswer: false, hint: 'Giúp ta sống trực tiếp với Thiên Chúa.' }
    ]
  }
];

export default bai16Lessons;
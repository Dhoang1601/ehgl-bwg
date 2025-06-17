// data/lessons/xung-toi/bai2.ts
import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const bai2Lessons: LessonContentData[] = [
  // Corresponds to original bai2_1.ts
  {
    title: "Thiên Chúa Tạo Dựng Con Người",
    xp: 25,
    nextLessonId: "xungtoi-unit2-l2",
    pages: [
      { type: 'reading', passage: "“Thiên Chúa phán : Ta hãy dựng nên loài người giống hình ảnh của Ta và để cho họ làm chủ trên mặt đất” (St 1,26)", durationSeconds: 15 },
      { type: 'multiple-choice', questionText: "Lời Chúa \"Ta hãy dựng nên loài người giống hình ảnh của Ta\" trích từ đâu?", options: [ { id: 'b2_1_opt1', text: 'St 1,26' }, { id: 'b2_1_opt2', text: 'St 2,7' }, { id: 'b2_1_opt3', text: 'Ga 1,1' }, { id: 'b2_1_opt4', text: 'Tv 8,5' } ], correctOptionId: 'b2_1_opt1', hint: "Lời này được trích trong sách Sáng Thế, chương đầu tiên." },
      { type: 'sort', prompt: "Sắp xếp các cụm từ để hoàn thành câu Lời Chúa (St 1,26):", words: [ { id: 'b2_1_phrase1', text: 'Thiên Chúa phán:' }, { id: 'b2_1_phrase2', text: 'Ta hãy dựng nên loài người' }, { id: 'b2_1_phrase3', text: 'giống hình ảnh của Ta' }, { id: 'b2_1_phrase4', text: 'và để cho họ làm chủ trên mặt đất' } ].sort(() => Math.random() - 0.5), correctOrderIds: [ 'b2_1_phrase1', 'b2_1_phrase2', 'b2_1_phrase3', 'b2_1_phrase4' ], hint: "Sáng Thế 1,26." }
    ]
  },
  // Corresponds to original bai2_2.ts
  {
    title: "Thiên Chúa Tạo Dựng Con Người",
    xp: 20,
    nextLessonId: "xungtoi-unit2-l3",
    pages: [
      { type: 'reading', passage: "Hỏi: Thiên Chúa tạo dựng con người làm sao?\nThưa: Thiên Chúa tạo dựng con người theo hình ảnh Chúa, có khả năng nhận biết và yêu mến Người.", durationSeconds: 10 },
      { type: 'fill-blank', questionTextBeforeBlank: "Thiên Chúa tạo dựng con người theo hình ảnh Chúa, có khả năng nhận biết và ", questionTextAfterBlank: " Người.", options: [ { id: 'b2_2_opt1', text: 'tôn thờ' }, { id: 'b2_2_opt2', text: 'vâng lời' }, { id: 'b2_2_opt3', text: 'yêu mến' }, { id: 'b2_2_opt4', text: 'ca tụng' } ], correctOptionId: 'b2_2_opt3', hint: "Con người có khả năng nhận biết và yêu mến Thiên Chúa." },
      { type: 'multiple-choice', questionText: "Con người được tạo dựng theo hình ảnh Thiên Chúa nghĩa là gì?", options: [ { id: 'b2_2_q3_opt1', text: 'Có quyền lực như Thiên Chúa' }, { id: 'b2_2_q3_opt2', text: 'Không bao giờ chết' }, { id: 'b2_2_q3_opt3', text: 'Có khả năng nhận biết và yêu mến Thiên Chúa' }, { id: 'b2_2_q3_opt4', text: 'Giống ngoại hình Thiên Chúa' } ], correctOptionId: 'b2_2_q3_opt3', hint: "Câu trả lời nằm trong phần định nghĩa hình ảnh Thiên Chúa." },
      { type: 'true-false', questionText: "Con người được tạo dựng theo hình ảnh Thiên Chúa, nên có thể nhận biết và yêu mến Người.", correctAnswer: true, hint: "Xem lại phần trả lời ở đầu bài." }
    ]
  },
  // Corresponds to original bai2_3.ts
  {
    title: "Thiên Chúa Tạo Dựng Con Người",
    xp: 20,
    nextLessonId: "xungtoi-unit2-l4",
    pages: [
      { type: 'reading', passage: "Hỏi: Vì sao con người cao cả hơn mọi loài trên trái đất?\nThưa: Vì con người vừa là vật chất, vừa là tinh thần, nghĩa là có xác và hồn kết hợp thành một con người duy nhất.", durationSeconds: 10 },
      { type: 'multiple-choice', questionText: "Vì sao con người cao cả hơn mọi loài?", options: [ { id: 'b2_3_opt1', text: 'Vì con người biết nói' }, { id: 'b2_3_opt2', text: 'Vì con người có sức mạnh' }, { id: 'b2_3_opt3', text: 'Vì con người có xác và hồn' }, { id: 'b2_3_opt4', text: 'Vì con người sống lâu hơn' } ], correctOptionId: 'b2_3_opt3', hint: "Kết hợp xác và hồn tạo nên phẩm giá đặc biệt của con người." },
      { type: 'fill-blank', questionTextBeforeBlank: "Con người gồm có xác và ", questionTextAfterBlank: ", tạo thành một con người duy nhất.", options: [ { id: 'b2_3_q3_opt1', text: 'xương' }, { id: 'b2_3_q3_opt2', text: 'linh hồn' }, { id: 'b2_3_q3_opt3', text: 'thịt' }, { id: 'b2_3_q3_opt4', text: 'tư tưởng' } ], correctOptionId: 'b2_3_q3_opt2', hint: "Đừng quên phần thiêng liêng của con người." },
      { type: 'true-false', questionText: "Con người chỉ là vật chất như các loài động vật khác.", correctAnswer: false, hint: "Con người còn có phần tinh thần là linh hồn." }
    ]
  },
  // Corresponds to original bai2_4.ts
  {
    title: "Thiên Chúa Tạo Dựng Con Người",
    xp: 20,
    nextLessonId: "xungtoi-unit2-l5",
    pages: [
      { type: 'reading', passage: "Hỏi: Được Thiên Chúa ban cho sự sống và phẩm giá cao quí như vậy, ta phải làm gì?\nThưa: Ta phải biết cám ơn và yêu mến Thiên Chúa, đồng thời cố gắng làm cho cuộc sống của ta và mọi người ngày càng thêm tươi đẹp, và đầy yêu thương.", durationSeconds: 12 },
      { type: 'fill-blank', questionTextBeforeBlank: "Ta phải biết cám ơn và ", questionTextAfterBlank: " Thiên Chúa vì sự sống và phẩm giá cao quí.", options: [ { id: 'b2_4_opt1', text: 'yêu mến' }, { id: 'b2_4_opt2', text: 'cầu xin' }, { id: 'b2_4_opt3', text: 'ngợi khen' }, { id: 'b2_4_opt4', text: 'vâng phục' } ], correctOptionId: 'b2_4_opt1', hint: "Gắn với lòng biết ơn." },
      { type: 'multiple-choice', questionText: "Ngoài việc cám ơn và yêu mến Thiên Chúa, ta còn phải làm gì?", options: [ { id: 'b2_4_q3_opt1', text: 'Làm cho cuộc sống ngày càng thêm tươi đẹp và yêu thương' }, { id: 'b2_4_q3_opt2', text: 'Sống khép kín' }, { id: 'b2_4_q3_opt3', text: 'Tự cao' }, { id: 'b2_4_q3_opt4', text: 'Làm theo ý riêng' } ], correctOptionId: 'b2_4_q3_opt1', hint: "Phải hướng đến sự tốt đẹp chung." },
      { type: 'true-false', questionText: "Cảm ơn Thiên Chúa thôi là đủ, không cần làm gì khác cho người khác.", correctAnswer: false, hint: "Phải hành động tích cực với cuộc sống và người xung quanh." }
    ]
  },
  // Corresponds to original bai2_5.ts
  {
    title: "Thiên Chúa Tạo Dựng Con Người",
    xp: 20,
    nextLessonId: "xungtoi-unit4-l1", // This was the original nextLessonId, implies "xungtoi-unit3" is skipped or unit IDs are non-sequential. Keeping as is based on original.
    pages: [
      { type: 'sort', prompt: "Sắp xếp các cụm từ để hoàn chỉnh ý nghĩa: con người được tạo dựng...", words: [ { id: 'b2_5_phrase1', text: 'Con người được tạo dựng' }, { id: 'b2_5_phrase2', text: 'theo hình ảnh Thiên Chúa' }, { id: 'b2_5_phrase3', text: 'có khả năng nhận biết' }, { id: 'b2_5_phrase4', text: 'và yêu mến Người' } ].sort(() => Math.random() - 0.5), correctOrderIds: [ 'b2_5_phrase1', 'b2_5_phrase2', 'b2_5_phrase3', 'b2_5_phrase4' ], hint: "Từ phần trả lời của câu hỏi GLCG.48." },
      { type: 'true-false', questionText: "Con người chỉ là vật chất và không có phần linh hồn.", correctAnswer: false, hint: "Con người là sự kết hợp giữa xác và hồn." },
      { type: 'multiple-choice', questionText: "Ta phải làm gì khi được ban sự sống và phẩm giá cao quí?", options: [ { id: 'b2_5_q3_opt1', text: 'Yêu thương Thiên Chúa và sống tốt với mọi người' }, { id: 'b2_5_q3_opt2', text: 'Làm việc chăm chỉ để làm giàu' }, { id: 'b2_5_q3_opt3', text: 'Sống ích kỷ hơn' }, { id: 'b2_5_q3_opt4', text: 'Tự hào và khoe khoang' } ], correctOptionId: 'b2_5_q3_opt1', hint: "Gắn với tình yêu Thiên Chúa và tha nhân." },
      { type: 'fill-blank', questionTextBeforeBlank: "Con người vừa là vật chất vừa là", questionTextAfterBlank: ", tạo thành một con người duy nhất.", options: [ { id: 'b2_5_q4_opt1', text: 'tinh thần' }, { id: 'b2_5_q4_opt2', text: 'xác thịt' }, { id: 'b2_5_q4_opt3', text: 'tư tưởng' }, { id: 'b2_5_q4_opt4', text: 'linh mục' } ], correctOptionId: 'b2_5_q4_opt1', hint: "Từ khóa GLCG.49" }
    ]
  }
];

export default bai2Lessons;
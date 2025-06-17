// data/lessons/xung-toi/bai1.ts
import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const bai1Lessons: LessonContentData[] = [
  // Corresponds to original bai1_1.ts
  {
    title: "Thiên Chúa Sáng Tạo Trời Đất Muôn Vật",
    xp: 25,
    nextLessonId: "xungtoi-unit1-l2",
    pages: [
      { type: 'reading', passage: "“Từ ban đầu Thiên Chúa sáng tạo trời và đất” (St 1,1)", durationSeconds: 15 },
      { type: 'multiple-choice', questionText: "Câu Lời Chúa \"Từ ban đầu Thiên Chúa sáng tạo trời và đất\" được trích từ sách nào?", options: [ { id: 'b1_1_opt1', text: 'St 1,1' }, { id: 'b1_1_opt2', text: 'Ga 1,1' }, { id: 'b1_1_opt3', text: 'Tv 8,4' }, { id: 'b1_1_opt4', text: 'Mt 1,1' } ], correctOptionId: 'b1_1_opt1', hint: "Sách Sáng Thế, chương đầu tiên, câu đầu tiên." },
      { type: 'reading', passage: "Hỏi: Trong Kinh Tin Kính, ta tuyên xưng điều gì về Thiên Chúa sáng tạo?\nThưa: Ta tuyên xưng Thiên Chúa là Đấng tạo thành trời và đất, muôn vật hữu hình và vô hình.", durationSeconds: 10 },
      { type: 'fill-blank', questionTextBeforeBlank: "Trong Kinh Tin Kính, ta tuyên xưng Thiên Chúa là Đấng tạo thành ", questionTextAfterBlank: ", muôn vật hữu hình và vô hình.", options: [ { id: 'b1_1_q4_opt1', text: 'vạn vật' }, { id: 'b1_1_q4_opt2', text: 'trời và đất' }, { id: 'b1_1_q4_opt3', text: 'mọi sự' }, { id: 'b1_1_q4_opt4', text: 'vũ trụ' } ], correctOptionId: 'b1_1_q4_opt2', hint: "Cụm từ này nằm trong Kinh Tin Kính mà ta đọc mỗi Chúa Nhật." }
    ]
  },
  // Corresponds to original bai1_2.ts
  {
    title: "Thiên Chúa Sáng Tạo Trời Đất Muôn Vật",
    xp: 20,
    nextLessonId: "xungtoi-unit1-l3",
    pages: [
      { type: 'reading', passage: "Hỏi: Thiên Chúa đã sáng tạo muôn vật cách nào?\nThưa: Thiên Chúa đã dùng Lời quyền năng của Người mà sáng tạo mọi sự từ hư không. Chỉ một mình Thiên Chúa mới làm được như vậy.", durationSeconds: 10 },
      { type: 'multiple-choice', questionText: "Thiên Chúa đã sáng tạo muôn vật cách nào?", options: [ { id: 'b1_2_opt1', text: 'Dùng đất và nước' }, { id: 'b1_2_opt2', text: 'Từ ánh sáng' }, { id: 'b1_2_opt3', text: 'Dùng Lời quyền năng của Người' }, { id: 'b1_2_opt4', text: 'Bằng phép thuật' } ], correctOptionId: 'b1_2_opt3', hint: "Câu trả lời nằm trong phần đọc." },
      { type: 'fill-blank', questionTextBeforeBlank: "Chỉ một mình ", questionTextAfterBlank: " mới có thể sáng tạo mọi sự từ hư không.", options: [ { id: 'b1_2_q3_opt1', text: 'loài người' }, { id: 'b1_2_q3_opt2', text: 'vũ trụ' }, { id: 'b1_2_q3_opt3', text: 'Thiên Chúa' }, { id: 'b1_2_q3_opt4', text: 'thiên thần' } ], correctOptionId: 'b1_2_q3_opt3', hint: "Chỉ có Thiên Chúa làm được điều này." }
    ]
  },
  // Corresponds to original bai1_3.ts
  {
    title: "Thiên Chúa Sáng Tạo Trời Đất Muôn Vật",
    xp: 20,
    nextLessonId: "xungtoi-unit1-l4",
    pages: [
      { type: 'reading', passage: "Hỏi: Thế giới hữu hình là gì?\nThưa: Là mọi loài thụ tạo mà ta thấy được, trong đó con người là chóp đỉnh. Tất cả những gì Thiên Chúa đã sáng tạo đều tốt đẹp và có liên hệ mật thiết với nhau (St 1,31).", durationSeconds: 10 },
      { type: 'multiple-choice', questionText: "Ai là chóp đỉnh trong thế giới hữu hình?", options: [ { id: 'b1_3_opt1', text: 'Động vật' }, { id: 'b1_3_opt2', text: 'Cây cối' }, { id: 'b1_3_opt3', text: 'Thiên thần' }, { id: 'b1_3_opt4', text: 'Con người' } ], correctOptionId: 'b1_3_opt4', hint: "Trong các thụ tạo hữu hình, con người là cao quý nhất." },
      { type: 'true-false', questionText: "Mọi loài thụ tạo đều có liên hệ mật thiết với nhau.", correctAnswer: true, hint: "Sách Sáng Thế nói rằng Thiên Chúa thấy mọi sự Người làm ra đều rất tốt đẹp." }
    ]
  },
  // Corresponds to original bai1_4.ts
  {
    title: "Thiên Chúa Sáng Tạo Trời Đất Muôn Vật",
    xp: 15,
    nextLessonId: "xungtoi-unit1-l5",
    pages: [
      { type: 'reading', passage: "Hỏi: Thụ tạo vô hình là loài nào?\nThưa: Là các thụ tạo thiêng liêng không có thể xác, gọi là thiên thần. Các ngài được tạo dựng để phụng sự Thiên Chúa và giúp đỡ loài người.", durationSeconds: 10 },
      { type: 'fill-blank', questionTextBeforeBlank: "Thụ tạo vô hình được gọi là ", questionTextAfterBlank: ".", options: [ { id: 'b1_4_opt1', text: 'thiên thần' }, { id: 'b1_4_opt2', text: 'linh hồn' }, { id: 'b1_4_opt3', text: 'sứ giả' }, { id: 'b1_4_opt4', text: 'ánh sáng' } ], correctOptionId: 'b1_4_opt1', hint: "Thiên thần là các thụ tạo thiêng liêng không có thể xác." },
      { type: 'multiple-choice', questionText: "Thiên thần được tạo dựng để làm gì?", options: [ { id: 'b1_4_q3_opt1', text: 'canh giữ vũ trụ' }, { id: 'b1_4_q3_opt2', text: 'giải thích Kinh Thánh' }, { id: 'b1_4_q3_opt3', text: 'phụng sự Thiên Chúa và giúp đỡ loài người' }, { id: 'b1_4_q3_opt4', text: 'làm phép lạ' } ], correctOptionId: 'b1_4_q3_opt3', hint: "Câu trả lời nằm trong phần đọc." }
    ]
  },
  // Corresponds to original bai1_5.ts
  {
    title: "Thiên Chúa Sáng Tạo Trời Đất Muôn Vật",
    xp: 20,
    nextLessonId: "xungtoi-unit2-l1",
    pages: [
      { type: 'sort', prompt: "Sắp xếp các cụm từ sau để hoàn thành lời Kinh Tin Kính về Thiên Chúa tạo dựng:", words: [ { id: 'b1_5_phrase1', text: 'Thiên Chúa là Đấng' }, { id: 'b1_5_phrase2', text: 'tạo thành trời và đất' }, { id: 'b1_5_phrase3', text: 'muôn vật hữu hình' }, { id: 'b1_5_phrase4', text: 'và vô hình' } ].sort(() => Math.random() - 0.5), correctOrderIds: [ 'b1_5_phrase1', 'b1_5_phrase2', 'b1_5_phrase3', 'b1_5_phrase4' ], hint: "Câu này trích từ Kinh Tin Kính." },
      { type: 'true-false', questionText: "Thiên Chúa tạo dựng muôn vật từ hư không bằng Lời quyền năng của Người.", correctAnswer: true, hint: "Câu này có trong phần học trước." },
      { type: 'multiple-choice', questionText: "Thế giới hữu hình bao gồm những gì?", options: [ { id: 'b1_5_q3_opt1', text: 'Chỉ có động vật' }, { id: 'b1_5_q3_opt2', text: 'Mọi loài thụ tạo mà ta thấy được' }, { id: 'b1_5_q3_opt3', text: 'Chỉ có con người' }, { id: 'b1_5_q3_opt4', text: 'Các vì sao và hành tinh' } ], correctOptionId: 'b1_5_q3_opt2', hint: "Bao gồm tất cả những gì hữu hình mà ta thấy được." }
    ]
  }
];

export default bai1Lessons;
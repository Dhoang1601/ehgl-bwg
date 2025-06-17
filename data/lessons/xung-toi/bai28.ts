// data/lessons/xung-toi/bai28.ts
import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const bai28Lessons: LessonContentData[] = [
  // Corresponds to original bai28_1.ts
  {
    title: "Bí Tích Rửa Tội",
    xp: 25,
    nextLessonId: "xungtoi3-unit28-l2",
    pages: [
      { type: 'reading', passage: "\"Không ai có thể vào Nước Thiên Chúa nếu không sinh ra bởi nước và Thánh Thần\" (Ga 3, 5)", durationSeconds: 10 },
      { type: 'multiple-choice', questionText: "Theo Ga 3,5, điều kiện để vào Nước Thiên Chúa là gì?", options: [ { id: 'b28_1_mc1', text: 'Phải sinh ra bởi nước và Thánh Thần' }, { id: 'b28_1_mc2', text: 'Phải giữ đủ 10 điều răn' }, { id: 'b28_1_mc3', text: 'Phải làm việc bác ái' }, { id: 'b28_1_mc4', text: 'Phải dâng của lễ hằng ngày' } ], correctOptionId: 'b28_1_mc1', hint: 'Không ai có thể vào Nước Thiên Chúa nếu không sinh ra bởi nước và Thánh Thần.' },
      { type: 'fill-blank', questionTextBeforeBlank: 'Không ai có thể vào Nước Thiên Chúa nếu không sinh ra bởi ', questionTextAfterBlank: ' và Thánh Thần. (Ga 3,5)', options: [ { id: 'b28_1_fb1', text: 'nước' }, { id: 'b28_1_fb2', text: 'đức tin' }, { id: 'b28_1_fb3', text: 'ánh sáng' } ], correctOptionId: 'b28_1_fb1', hint: 'Sinh ra bởi nước và Thánh Thần.' },
      { type: 'true-false', questionText: 'Theo Ga 3,5, có thể vào Nước Thiên Chúa mà không cần Rửa tội.', correctAnswer: false, hint: 'Không ai có thể vào Nước Thiên Chúa nếu không sinh ra bởi nước và Thánh Thần.' },
      { type: 'sort', prompt: 'Sắp xếp trình tự nội dung theo Ga 3,5:', words: [ { id: 'b28_1_s1', text: 'Sinh ra bởi nước' }, { id: 'b28_1_s2', text: 'Sinh ra bởi Thánh Thần' }, { id: 'b28_1_s3', text: 'Vào Nước Thiên Chúa' } ].sort(() => Math.random() - 0.5), correctOrderIds: ['b28_1_s1', 'b28_1_s2', 'b28_1_s3'], hint: 'Theo Ga 3,5: sinh ra bởi nước và Thánh Thần để vào Nước Thiên Chúa.' }
    ]
  },
  // Corresponds to original bai28_2.ts
  {
    title: "Bí Tích Rửa Tội",
    xp: 25,
    nextLessonId: "xungtoi3-unit28-l3",
    pages: [
      { type: 'reading', passage: "Hỏi: Bí tích Rửa tội là gì?\nThưa: Là Bí tích Chúa Giê-su đã lập để tái sinh ta trong đời sống mới bởi nước và Chúa Thánh Thần.", durationSeconds: 10 },
      { type: 'multiple-choice', questionText: "Bí tích Rửa tội là gì theo GLCG.204?", options: [ { id: 'b28_2_mc1', text: 'Là Bí tích Chúa Giê-su đã lập để tái sinh ta trong đời sống mới bởi nước và Chúa Thánh Thần' }, { id: 'b28_2_mc2', text: 'Là nghi thức gia nhập Hội Thánh' }, { id: 'b28_2_mc3', text: 'Là lễ nghi rửa sạch thân xác' }, { id: 'b28_2_mc4', text: 'Là lời tuyên xưng đức tin công khai' } ], correctOptionId: 'b28_2_mc1', hint: 'Là Bí tích Chúa Giê-su đã lập để tái sinh ta trong đời sống mới bởi nước và Chúa Thánh Thần.' },
      { type: 'fill-blank', questionTextBeforeBlank: 'Bí tích Rửa tội tái sinh ta trong đời sống mới bởi ', questionTextAfterBlank: ' và Chúa Thánh Thần.', options: [ { id: 'b28_2_fb1', text: 'nước' }, { id: 'b28_2_fb2', text: 'lửa' }, { id: 'b28_2_fb3', text: 'ánh sáng' } ], correctOptionId: 'b28_2_fb1', hint: 'Đời sống mới bởi nước và Chúa Thánh Thần.' },
      { type: 'true-false', questionText: 'Bí tích Rửa tội chỉ là biểu tượng tinh thần, không thực sự mang lại đời sống mới.', correctAnswer: false, hint: 'Rửa tội là Bí tích tái sinh ta trong đời sống mới bởi nước và Chúa Thánh Thần.' },
      { type: 'sort', prompt: 'Sắp xếp các yếu tố mô tả Bí tích Rửa tội theo GLCG.204:', words: [ { id: 'b28_2_s1', text: 'Chúa Giê-su thiết lập' }, { id: 'b28_2_s2', text: 'Tái sinh con người' }, { id: 'b28_2_s3', text: 'Đời sống mới' }, { id: 'b28_2_s4', text: 'Bởi nước và Thánh Thần' } ].sort(() => Math.random() - 0.5), correctOrderIds: ['b28_2_s1', 'b28_2_s2', 'b28_2_s3', 'b28_2_s4'], hint: 'Bí tích do Chúa Giê-su lập để tái sinh ta trong đời sống mới bởi nước và Thánh Thần.' }
    ]
  },
  // Corresponds to original bai28_3.ts
  {
    title: "Bí Tích Rửa Tội",
    xp: 25,
    nextLessonId: "xungtoi3-unit28-l4",
    pages: [
      { type: 'reading', passage: "Hỏi: Bí tích Rửa tội ban cho ta những ơn nào?\nThưa: Bí tích Rửa tội ban cho ta những ơn này: rửa sạch tội nguyên tổ và các tội ta phạm, tha mọi hình phạt do tội gây ra; làm con cái Thiên Chúa, chi thể Chúa Ki-tô, đền thờ Chúa Thánh Thần; sát nhập vào Hội Thánh và tham dự chức tư tế Chúa Ki-tô; ghi vào linh hồn ta dấu ấn thiêng liêng không thể xoá được.", durationSeconds: 16 },
      { type: 'multiple-choice', questionText: "Một trong các ơn của Bí tích Rửa tội là gì?", options: [ { id: 'b28_3_mc1', text: 'Rửa sạch tội nguyên tổ và các tội ta phạm' }, { id: 'b28_3_mc2', text: 'Được miễn xưng tội suốt đời' }, { id: 'b28_3_mc3', text: 'Trở thành thiên thần' }, { id: 'b28_3_mc4', text: 'Không cần đi lễ nữa' } ], correctOptionId: 'b28_3_mc1', hint: 'Rửa sạch tội nguyên tổ và các tội ta phạm, tha mọi hình phạt do tội gây ra.' },
      { type: 'fill-blank', questionTextBeforeBlank: 'Bí tích Rửa tội làm cho ta trở nên con cái Thiên Chúa, chi thể Chúa Ki-tô và ', questionTextAfterBlank: '.', options: [ { id: 'b28_3_fb1', text: 'đền thờ Chúa Thánh Thần' }, { id: 'b28_3_fb2', text: 'tông đồ' }, { id: 'b28_3_fb3', text: 'người công chính' } ], correctOptionId: 'b28_3_fb1', hint: 'Làm cho ta trở nên đền thờ Chúa Thánh Thần.' },
      { type: 'true-false', questionText: 'Bí tích Rửa tội ghi vào linh hồn ta dấu ấn thiêng liêng không thể xoá được.', correctAnswer: true, hint: 'Ghi vào linh hồn dấu ấn thiêng liêng không thể xoá được.' },
      { type: 'sort', prompt: 'Sắp xếp các ơn của Bí tích Rửa tội theo GLCG.205:', words: [ { id: 'b28_3_s1', text: 'Rửa sạch tội nguyên tổ' }, { id: 'b28_3_s2', text: 'Trở nên con cái Thiên Chúa' }, { id: 'b28_3_s3', text: 'Sát nhập vào Hội thánh' }, { id: 'b28_3_s4', text: 'Ghi dấu ấn thiêng liêng' } ].sort(() => Math.random() - 0.5), correctOrderIds: ['b28_3_s1', 'b28_3_s2', 'b28_3_s3', 'b28_3_s4'], hint: 'Các ơn gồm: rửa sạch tội, làm con cái Thiên Chúa, sát nhập Hội thánh, ghi dấu ấn.' }
    ]
  },
  // Corresponds to original bai28_4.ts
  {
    title: "Bí Tích Rửa Tội",
    xp: 25,
    nextLessonId: "xungtoi3-unit28-l5",
    pages: [
      { type: 'reading', passage: "Hỏi: Bí tích Rửa tội có cần thiết không?\nThưa: Bí tích Rửa tội rất cần thiết, vì Chúa Giê-su đã nói: \"Không ai có thể vào Nước Thiên Chúa, nếu không sinh ra bởi nước và Thánh Thần\" (Ga 3,5).", durationSeconds: 10 },
      { type: 'multiple-choice', questionText: "Vì sao Bí tích Rửa tội rất cần thiết theo GLCG.206?", options: [ { id: 'b28_4_mc1', text: 'Vì Chúa Giê-su dạy rằng không ai vào Nước Thiên Chúa nếu không sinh ra bởi nước và Thánh Thần' }, { id: 'b28_4_mc2', text: 'Vì là tập tục của Hội Thánh' }, { id: 'b28_4_mc3', text: 'Vì để trở thành người tốt' }, { id: 'b28_4_mc4', text: 'Vì rửa sạch thân xác' } ], correctOptionId: 'b28_4_mc1', hint: 'Chúa Giê-su đã nói: Không ai có thể vào Nước Thiên Chúa nếu không sinh ra bởi nước và Thánh Thần.' },
      { type: 'fill-blank', questionTextBeforeBlank: 'Không ai có thể vào Nước Thiên Chúa, nếu không sinh ra bởi ', questionTextAfterBlank: ' và Thánh Thần. (Ga 3,5)', options: [ { id: 'b28_4_fb1', text: 'nước' }, { id: 'b28_4_fb2', text: 'lửa' }, { id: 'b28_4_fb3', text: 'gió' } ], correctOptionId: 'b28_4_fb1', hint: 'Sinh ra bởi nước và Thánh Thần.' },
      { type: 'true-false', questionText: 'Bí tích Rửa tội không thật sự cần thiết vì có thể thay thế bằng đức tin.', correctAnswer: false, hint: 'Bí tích Rửa tội rất cần thiết vì chính Chúa Giê-su đã dạy như vậy.' },
      { type: 'sort', prompt: 'Sắp xếp đúng lý do cần thiết của Bí tích Rửa tội theo GLCG.206:', words: [ { id: 'b28_4_s1', text: 'Không ai có thể vào' }, { id: 'b28_4_s2', text: 'Nước Thiên Chúa' }, { id: 'b28_4_s3', text: 'Nếu không sinh ra bởi nước và Thánh Thần' } ], correctOrderIds: ['b28_4_s1', 'b28_4_s2', 'b28_4_s3'], hint: 'Theo lời Chúa Giê-su trong Ga 3,5.' }
    ]
  },
  // Corresponds to original bai28_5.ts
  {
    title: "Bí Tích Rửa Tội",
    xp: 25,
    nextLessonId: "xungtoi3-unit29-l1",
    pages: [
      { type: 'reading', passage: "Hỏi: Những ai được lãnh nhận Bí tích Rửa tội?\nThưa: Tất cả những người chưa được rửa tội đều có thể lãnh nhận Bí tích Rửa tội vì đây là ân huệ Thiên Chúa ban cho con người.", durationSeconds: 10 },
      { type: 'multiple-choice', questionText: "Ai có thể lãnh nhận Bí tích Rửa tội theo GLCG.211?", options: [ { id: 'b28_5_mc1', text: 'Tất cả những người chưa được rửa tội' }, { id: 'b28_5_mc2', text: 'Chỉ người Công giáo' }, { id: 'b28_5_mc3', text: 'Người đủ 18 tuổi' }, { id: 'b28_5_mc4', text: 'Người sống đạo đức' } ], correctOptionId: 'b28_5_mc1', hint: 'Tất cả những người chưa được rửa tội đều có thể lãnh nhận Bí tích Rửa tội.' },
      { type: 'fill-blank', questionTextBeforeBlank: 'Bí tích Rửa tội là ân huệ ', questionTextAfterBlank: ' ban cho con người.', options: [ { id: 'b28_5_fb1', text: 'Thiên Chúa' }, { id: 'b28_5_fb2', text: 'Hội Thánh' }, { id: 'b28_5_fb3', text: 'Chúa Giê-su' } ], correctOptionId: 'b28_5_fb1', hint: 'Bí tích Rửa tội là ân huệ Thiên Chúa ban cho con người.' },
      { type: 'true-false', questionText: 'Người đã được rửa tội rồi vẫn có thể rửa tội lại.', correctAnswer: false, hint: 'Bí tích Rửa tội chỉ được lãnh nhận một lần và không thể lặp lại.' },
      { type: 'sort', prompt: 'Sắp xếp ý nghĩa giáo lý về người được lãnh Bí tích Rửa tội theo GLCG.211:', words: [ { id: 'b28_5_s1', text: 'Tất cả những người chưa được rửa tội' }, { id: 'b28_5_s2', text: 'Đều có thể lãnh nhận' }, { id: 'b28_5_s3', text: 'Vì đây là ân huệ Thiên Chúa ban cho con người' } ], correctOrderIds: ['b28_5_s1', 'b28_5_s2', 'b28_5_s3'], hint: 'Giáo lý dạy rõ điều này trong GLCG.211.' }
    ]
  }
];

export default bai28Lessons;
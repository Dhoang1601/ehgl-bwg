// data/lessons/xung-toi/bai15.ts
import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const bai15Lessons: LessonContentData[] = [
  // Corresponds to original bai15_1.ts
  {
    title: "Lương Tâm",
    xp: 20,
    nextLessonId: "xungtoi2-unit15-l2",
    pages: [
      { type: 'reading', passage: "\"Dân ngoại là những người không có luật Mô-sê; nhưng mỗi khi họ theo lẽ tự nhiên mà làm những gì Luật dạy, thì họ là Luật cho chính mình\" (Rm 2,14)", durationSeconds: 12 },
      { type: 'multiple-choice', questionText: "Câu Rm 2,14 nói đến điều gì?", options: [ { id: 'b16_1_mc1', text: 'Luật tự nhiên có trong lòng mỗi người' }, { id: 'b16_1_mc2', text: 'Luật Mô-sê dành riêng cho người Do Thái' }, { id: 'b16_1_mc3', text: 'Không cần luật pháp' }, { id: 'b16_1_mc4', text: 'Mọi người phải giữ cùng một luật' } ], correctOptionId: 'b16_1_mc1', hint: "Nội dung nhấn mạnh luật tự nhiên trong tâm hồn." },
      { type: 'fill-blank', questionTextBeforeBlank: "Dân ngoại không có ", questionTextAfterBlank: ", nhưng họ vẫn có thể làm theo điều thiện.", options: [ { id: 'b16_1_fb1', text: 'Luật Mô-sê' }, { id: 'b16_1_fb2', text: 'Kinh Thánh' }, { id: 'b16_1_fb3', text: 'Thiên Chúa' }, { id: 'b16_1_fb4', text: 'Tôn giáo' } ], correctOptionId: 'b16_1_fb1', hint: "Trích dẫn trực tiếp từ Rm 2,14." },
      { type: 'true-false', questionText: "Dân ngoại là những người không có luật Mô-sê nhưng vẫn có thể sống theo điều thiện nhờ lương tâm.", correctAnswer: true, hint: "Rm 2,14 chính là minh chứng." },
      { type: 'sort', prompt: "Sắp xếp ý nghĩa của câu Rm 2,14:", words: [ { id: 'b16_1_s1', text: 'Không có Luật Mô-sê' }, { id: 'b16_1_s2', text: 'Làm theo lẽ tự nhiên' }, { id: 'b16_1_s3', text: 'Trở thành luật cho chính mình' } ].sort(() => Math.random() - 0.5), correctOrderIds: ['b16_1_s1', 'b16_1_s2', 'b16_1_s3'], hint: "Theo logic của Rm 2,14." }
    ]
  },
  // Corresponds to original bai15_2.ts
  {
    title: "Lương Tâm",
    xp: 20,
    nextLessonId: "xungtoi2-unit15-l3",
    pages: [
      { type: 'reading', passage: "Hỏi: Lương tâm là gì?\nThưa: Lương tâm là luật tự nhiên mà Thiên Chúa đã đặt sẵn nơi đáy lòng mỗi người để soi dẫn họ làm lành lánh dữ.", durationSeconds: 10 },
      { type: 'multiple-choice', questionText: "Lương tâm là gì theo GLCG.303?", options: [ { id: 'b16_2_mc1', text: 'Luật của xã hội' }, { id: 'b16_2_mc2', text: 'Tiếng nói của bản thân' }, { id: 'b16_2_mc3', text: 'Luật tự nhiên Thiên Chúa đặt trong lòng người' }, { id: 'b16_2_mc4', text: 'Thói quen đạo đức' } ], correctOptionId: 'b16_2_mc3', hint: "Trích nguyên từ giáo lý." },
      { type: 'fill-blank', questionTextBeforeBlank: "Lương tâm soi dẫn ta ", questionTextAfterBlank: " và lánh dữ.", options: [ { id: 'b16_2_fb1', text: 'làm lành' }, { id: 'b16_2_fb2', text: 'cầu nguyện' }, { id: 'b16_2_fb3', text: 'suy nghĩ' } ], correctOptionId: 'b16_2_fb1', hint: "Đây là mục tiêu cốt lõi của lương tâm." },
      { type: 'true-false', questionText: "Lương tâm là tiếng nói của Thiên Chúa nơi lòng con người.", correctAnswer: true, hint: "Khái niệm này xuất phát từ truyền thống giáo lý." },
      { type: 'sort', prompt: "Sắp xếp các yếu tố mô tả lương tâm theo GLCG.303:", words: [ { id: 'b16_2_s1', text: 'Luật tự nhiên' }, { id: 'b16_2_s2', text: 'Đặt trong đáy lòng' }, { id: 'b16_2_s3', text: 'Soi dẫn con người' }, { id: 'b16_2_s4', text: 'Làm lành lánh dữ' } ].sort(() => Math.random() - 0.5), correctOrderIds: ['b16_2_s1', 'b16_2_s2', 'b16_2_s3', 'b16_2_s4'], hint: "Thứ tự mô tả từ khái niệm đến hành động." }
    ]
  },
  // Corresponds to original bai15_3.ts
  {
    title: "Lương Tâm",
    xp: 20,
    nextLessonId: "xungtoi2-unit15-l4",
    pages: [
      { type: 'reading', passage: "Hỏi: Ta phải nghe theo tiếng lương tâm thế nào?\nThưa: Ta buộc phải luôn lắng nghe và làm theo tiếng lương tâm.", durationSeconds: 10 },
      { type: 'multiple-choice', questionText: "Theo GLCG.304, ta phải làm gì với tiếng lương tâm?", options: [ { id: 'b16_3_mc1', text: 'Chỉ nghe nếu hợp ý mình' }, { id: 'b16_3_mc2', text: 'Luôn lắng nghe và làm theo' }, { id: 'b16_3_mc3', text: 'Hỏi ý kiến người khác' }, { id: 'b16_3_mc4', text: 'Chờ khi cần thiết mới nghe' } ], correctOptionId: 'b16_3_mc2', hint: "Phải luôn luôn lắng nghe và hành động theo lương tâm." },
      { type: 'true-false', questionText: "Ta chỉ cần nghe tiếng lương tâm khi gặp khó khăn.", correctAnswer: false, hint: "GLCG 304 nói 'luôn lắng nghe'." },
      { type: 'fill-blank', questionTextBeforeBlank: "Ta buộc phải luôn ", questionTextAfterBlank: " và làm theo tiếng lương tâm.", options: [ { id: 'b16_3_fb1', text: 'lắng nghe' }, { id: 'b16_3_fb2', text: 'cầu nguyện' }, { id: 'b16_3_fb3', text: 'xin ơn' } ], correctOptionId: 'b16_3_fb1', hint: "Đây là bước đầu tiên trong hành động theo lương tâm." },
      { type: 'sort', prompt: "Sắp xếp ý nghĩa thực hành của lắng nghe lương tâm:", words: [ { id: 'b16_3_s1', text: 'Luôn lắng nghe' }, { id: 'b16_3_s2', text: 'Phân định đúng sai' }, { id: 'b16_3_s3', text: 'Làm theo điều tốt' } ].sort(() => Math.random() - 0.5), correctOrderIds: ['b16_3_s1', 'b16_3_s2', 'b16_3_s3'], hint: "Thứ tự thực hành theo lương tâm." }
    ]
  },
  // Corresponds to original bai15_4.ts
  {
    title: "Lương Tâm",
    xp: 20,
    nextLessonId: "xungtoi2-unit15-l5",
    pages: [
      { type: 'reading', passage: "Hỏi: Ta phải làm gì để đào tạo lương tâm mình?\nThưa: Ta phải xa lánh tội lỗi, cầu nguyện, học hỏi Lời Chúa, nghe giáo huấn của Hội Thánh, vâng lời người dạy dỗ và bàn hỏi với người khôn ngoan.", durationSeconds: 14 },
      { type: 'multiple-choice', questionText: "Đâu KHÔNG phải là cách đào tạo lương tâm?", options: [ { id: 'b16_4_mc1', text: 'Xa lánh tội lỗi' }, { id: 'b16_4_mc2', text: 'Học hỏi Lời Chúa' }, { id: 'b16_4_mc3', text: 'Làm theo ý mình' }, { id: 'b16_4_mc4', text: 'Nghe lời người dạy dỗ' } ], correctOptionId: 'b16_4_mc3', hint: "Cần biết phân biệt điều đúng trong danh sách." },
      { type: 'true-false', questionText: "Việc đào tạo lương tâm chỉ cần cầu nguyện là đủ.", correctAnswer: false, hint: "Còn cần học Lời Chúa, vâng lời, bàn hỏi..." },
      { type: 'fill-blank', questionTextBeforeBlank: "Để đào tạo lương tâm, ta phải ", questionTextAfterBlank: " tội lỗi và học hỏi Lời Chúa.", options: [ { id: 'b16_4_fb1', text: 'xa lánh' }, { id: 'b16_4_fb2', text: 'cầu nguyện' }, { id: 'b16_4_fb3', text: 'chống lại' } ], correctOptionId: 'b16_4_fb1', hint: "Gắn với phần đầu của câu trả lời GLCG.306." },
      { type: 'sort', prompt: "Sắp xếp các hành động đào tạo lương tâm:", words: [ { id: 'b16_4_s1', text: 'Cầu nguyện' }, { id: 'b16_4_s2', text: 'Nghe lời Hội Thánh' }, { id: 'b16_4_s3', text: 'Bàn hỏi với người khôn ngoan' }, { id: 'b16_4_s4', text: 'Xa lánh tội lỗi' } ].sort(() => Math.random() - 0.5), correctOrderIds: ['b16_4_s4', 'b16_4_s1', 'b16_4_s2', 'b16_4_s3'], hint: "Từ tránh tội đến hành động cụ thể." }
    ]
  },
  // Corresponds to original bai15_5.ts
  {
    title: "Lương Tâm",
    xp: 25,
    nextLessonId: "xungtoi2-unit16-l1",
    pages: [
      { type: 'reading', passage: 'Ôn tập tổng quát: Lương tâm – Rm 2,14 và GLCG 303–306.', durationSeconds: 10 },
      { type: 'multiple-choice', questionText: 'Theo Rm 2,14, dân ngoại có thể sống tốt nhờ điều gì?', options: [ { id: 'mc1', text: 'Lương tâm hay luật tự nhiên trong lòng' }, { id: 'mc2', text: 'Giáo huấn của các ngôn sứ' } ], correctOptionId: 'mc1', hint: 'Luật tự nhiên là trung tâm đoạn này.' },
      { type: 'true-false', questionText: 'Lương tâm giúp ta phân biệt điều lành điều dữ.', correctAnswer: true, hint: 'Đây là vai trò chính của lương tâm.' },
      { type: 'fill-blank', questionTextBeforeBlank: 'Lương tâm là luật tự nhiên mà Thiên Chúa đã đặt sẵn nơi ', questionTextAfterBlank: '.', options: [ { id: 'fb1', text: 'đáy lòng mỗi người' }, { id: 'fb2', text: 'trái tim con người' } ], correctOptionId: 'fb1', hint: 'Trích GLCG 303.' },
      { type: 'sort', prompt: 'Sắp xếp quá trình đào tạo lương tâm theo GLCG 306:', words: [ { id: 's1', text: 'Xa lánh tội lỗi' }, { id: 's2', text: 'Cầu nguyện' }, { id: 's3', text: 'Nghe lời Hội Thánh' }, { id: 's4', text: 'Bàn hỏi với người khôn ngoan' } ].sort(() => Math.random() - 0.5), correctOrderIds: ['s1', 's2', 's3', 's4'], hint: 'Từ nền tảng đến nâng cao.' },
      { type: 'multiple-choice', questionText: 'Ta có cần luôn làm theo lương tâm không?', options: [ { id: 'mc3', text: 'Có, phải luôn làm theo' }, { id: 'mc4', text: 'Không, chỉ khi cần thiết' } ], correctOptionId: 'mc3', hint: 'GLCG 304.' },
      { type: 'true-false', questionText: 'Lương tâm là tiếng nói của xã hội.', correctAnswer: false, hint: 'Là tiếng nói của Thiên Chúa trong lòng người.' },
      { type: 'fill-blank', questionTextBeforeBlank: 'Để đào tạo lương tâm, ta cần học hỏi ', questionTextAfterBlank: '.', options: [ { id: 'fb3', text: 'Lời Chúa' }, { id: 'fb4', text: 'luật xã hội' } ], correctOptionId: 'fb3', hint: 'GLCG 306.' },
      { type: 'multiple-choice', questionText: 'Một trong các cách đào tạo lương tâm là gì?', options: [ { id: 'mc5', text: 'Bàn hỏi với người đạo đức khôn ngoan' }, { id: 'mc6', text: 'Đọc báo mỗi ngày' } ], correctOptionId: 'mc5', hint: 'Trích trực tiếp giáo lý.' }
    ]
  }
];

export default bai15Lessons;
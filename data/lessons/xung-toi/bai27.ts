// data/lessons/xung-toi/bai27.ts
import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const bai27Lessons: LessonContentData[] = [
  // Corresponds to original bai27_1.ts
  {
    title: "Phụng Vụ",
    xp: 25,
    nextLessonId: "xungtoi3-unit27-l2",
    pages: [
      { type: 'reading', passage: "\"Thiên Chúa đã ban cho tôi làm người phục vụ Đức Giê-su Ki-tô giữa các dân ngoại, lo việc tế tự là rao giảng Tin Mừng của Thiên Chúa, để các dân ngoại được Thánh Thần thánh hóa mà trở nên một lễ phẩm đẹp lòng Thiên Chúa\" (Rm 15,16)", durationSeconds: 15 },
      { type: 'multiple-choice', questionText: "Theo Rm 15,16, việc tế tự của Thánh Phao-lô là gì?", options: [ { id: 'b27_1_mc1', text: 'Rao giảng Tin Mừng của Thiên Chúa' }, { id: 'b27_1_mc2', text: 'Dâng hương trong đền thờ' }, { id: 'b27_1_mc3', text: 'Cử hành Thánh lễ mỗi ngày' }, { id: 'b27_1_mc4', text: 'Làm việc bác ái với dân ngoại' } ], correctOptionId: 'b27_1_mc1', hint: 'Việc tế tự là rao giảng Tin Mừng của Thiên Chúa.' },
      { type: 'fill-blank', questionTextBeforeBlank: 'Các dân ngoại được Thánh Thần thánh hóa để trở nên ', questionTextAfterBlank: ' đẹp lòng Thiên Chúa. (Rm 15,16)', options: [ { id: 'b27_1_fb1', text: 'một lễ phẩm' }, { id: 'b27_1_fb2', text: 'người công chính' }, { id: 'b27_1_fb3', text: 'đầy tớ' } ], correctOptionId: 'b27_1_fb1', hint: 'Trở nên một lễ phẩm đẹp lòng Thiên Chúa.' },
      { type: 'true-false', questionText: 'Theo Rm 15,16, việc rao giảng Tin Mừng là một hành động tế tự.', correctAnswer: true, hint: 'Việc tế tự là rao giảng Tin Mừng.' },
      { type: 'sort', prompt: 'Sắp xếp các cụm ý theo trình tự trong Rm 15,16:', words: [ { id: 'b27_1_s1', text: 'Phục vụ Đức Giê-su Ki-tô' }, { id: 'b27_1_s2', text: 'Rao giảng Tin Mừng' }, { id: 'b27_1_s3', text: 'Dân ngoại được thánh hóa' }, { id: 'b27_1_s4', text: 'Trở nên lễ phẩm đẹp lòng Thiên Chúa' } ].sort(() => Math.random() - 0.5), correctOrderIds: ['b27_1_s1', 'b27_1_s2', 'b27_1_s3', 'b27_1_s4'], hint: 'Theo Rm 15,16.' }
    ]
  },
  // Corresponds to original bai27_2.ts
  {
    title: "Phụng Vụ",
    xp: 25,
    nextLessonId: "xungtoi3-unit27-l3",
    pages: [
      { type: 'reading', passage: "Hỏi: Phụng vụ là gì?\nThưa: Phụng vụ là việc tôn thờ chính thức của toàn thể Hội Thánh để tôn vinh Thiên Chúa Ba Ngôi và thánh hóa con người.", durationSeconds: 10 },
      { type: 'multiple-choice', questionText: "Phụng vụ là gì theo GLCG.184?", options: [ { id: 'b27_2_mc1', text: 'Việc tôn thờ chính thức của Hội Thánh để tôn vinh Thiên Chúa Ba Ngôi và thánh hóa con người' }, { id: 'b27_2_mc2', text: 'Hành động cầu nguyện cá nhân trong nhà thờ' }, { id: 'b27_2_mc3', text: 'Các sinh hoạt cộng đoàn' }, { id: 'b27_2_mc4', text: 'Việc thực hành đạo đức riêng lẻ' } ], correctOptionId: 'b27_2_mc1', hint: 'Phụng vụ là việc tôn thờ chính thức của toàn thể Hội Thánh để tôn vinh Thiên Chúa Ba Ngôi và thánh hóa con người.' },
      { type: 'fill-blank', questionTextBeforeBlank: 'Phụng vụ là việc tôn thờ chính thức của ', questionTextAfterBlank: ' để tôn vinh Thiên Chúa Ba Ngôi.', options: [ { id: 'b27_2_fb1', text: 'Hội Thánh' }, { id: 'b27_2_fb2', text: 'các linh mục' }, { id: 'b27_2_fb3', text: 'mọi cá nhân' } ], correctOptionId: 'b27_2_fb1', hint: 'Phụng vụ là việc tôn thờ chính thức của toàn thể Hội Thánh.' },
      { type: 'true-false', questionText: 'Phụng vụ chỉ dành cho các linh mục cử hành riêng.', correctAnswer: false, hint: 'Phụng vụ là của toàn thể Hội Thánh, không chỉ riêng linh mục.' },
      { type: 'sort', prompt: 'Sắp xếp các mục tiêu của phụng vụ theo GLCG.184:', words: [ { id: 'b27_2_s1', text: 'Tôn vinh Thiên Chúa Ba Ngôi' }, { id: 'b27_2_s2', text: 'Thánh hóa con người' } ], correctOrderIds: ['b27_2_s1', 'b27_2_s2'], hint: 'Phụng vụ nhằm tôn vinh Thiên Chúa Ba Ngôi và thánh hóa con người.' }
    ]
  },
  // Corresponds to original bai27_3.ts
  {
    title: "Phụng Vụ",
    xp: 25,
    nextLessonId: "xungtoi3-unit27-l4",
    pages: [
      { type: 'reading', passage: "Hỏi: Những việc nào là việc Phụng vụ?\nThưa: Là Thánh lễ, các Bí tích và Các Giờ kinh Phụng vụ.", durationSeconds: 8 },
      { type: 'multiple-choice', questionText: "Những việc nào là việc phụng vụ theo GLCG.201?", options: [ { id: 'b27_3_mc1', text: 'Thánh lễ, các Bí tích và các Giờ kinh Phụng vụ' }, { id: 'b27_3_mc2', text: 'Cầu nguyện riêng và đọc Kinh Thánh' }, { id: 'b27_3_mc3', text: 'Tĩnh tâm và bác ái' }, { id: 'b27_3_mc4', text: 'Viếng nhà thờ và lần hạt' } ], correctOptionId: 'b27_3_mc1', hint: 'Là Thánh lễ, các Bí tích và các Giờ kinh Phụng vụ.' },
      { type: 'fill-blank', questionTextBeforeBlank: 'Phụng vụ gồm có Thánh lễ, các Bí tích và ', questionTextAfterBlank: '.', options: [ { id: 'b27_3_fb1', text: 'Các Giờ kinh Phụng vụ' }, { id: 'b27_3_fb2', text: 'Cầu nguyện chung' }, { id: 'b27_3_fb3', text: 'Lễ hội Kitô giáo' } ], correctOptionId: 'b27_3_fb1', hint: 'Các Giờ kinh Phụng vụ.' },
      { type: 'true-false', questionText: 'Các Giờ kinh Phụng vụ không thuộc về Phụng vụ chính thức.', correctAnswer: false, hint: 'Các Giờ kinh Phụng vụ là một phần của Phụng vụ chính thức.' },
      { type: 'sort', prompt: 'Sắp xếp các việc phụng vụ từ GLCG.201:', words: [ { id: 'b27_3_s1', text: 'Thánh lễ' }, { id: 'b27_3_s2', text: 'Bí tích' }, { id: 'b27_3_s3', text: 'Giờ kinh Phụng vụ' } ], correctOrderIds: ['b27_3_s1', 'b27_3_s2', 'b27_3_s3'], hint: 'Danh sách theo thứ tự được nêu trong giáo lý.' }
    ]
  },
  // Corresponds to original bai27_4.ts
  {
    title: "Phụng Vụ",
    xp: 25,
    nextLessonId: "xungtoi3-unit27-l5",
    pages: [
      { type: 'reading', passage: "Hỏi: Có mấy Bí tích?\nThưa: Có bảy Bí tích: Rửa tội, Thêm sức, Thánh Thể, Hòa giải, Xức dầu bệnh nhân, Truyền chức thánh, Hôn phối.", durationSeconds: 10 },
      { type: 'multiple-choice', questionText: "Có mấy Bí tích theo GLCG.190?", options: [ { id: 'b27_4_mc1', text: 'Bảy' }, { id: 'b27_4_mc2', text: 'Năm' }, { id: 'b27_4_mc3', text: 'Ba' }, { id: 'b27_4_mc4', text: 'Chín' } ], correctOptionId: 'b27_4_mc1', hint: 'Có bảy Bí tích: Rửa tội, Thêm sức, Thánh Thể, Hòa giải, Xức dầu bệnh nhân, Truyền chức thánh, Hôn phối.' },
      { type: 'fill-blank', questionTextBeforeBlank: 'Bí tích thứ ba là Bí tích ', questionTextAfterBlank: '.', options: [ { id: 'b27_4_fb1', text: 'Thánh Thể' }, { id: 'b27_4_fb2', text: 'Rửa tội' }, { id: 'b27_4_fb3', text: 'Xức dầu' } ], correctOptionId: 'b27_4_fb1', hint: 'Thứ ba là Bí tích Thánh Thể.' },
      { type: 'true-false', questionText: 'Có tám Bí tích trong Hội Thánh Công Giáo.', correctAnswer: false, hint: 'Chỉ có bảy Bí tích.' },
      { type: 'sort', prompt: 'Sắp xếp thứ tự các Bí tích theo GLCG.190:', words: [ { id: 'b27_4_s1', text: 'Rửa tội' }, { id: 'b27_4_s2', text: 'Thêm sức' }, { id: 'b27_4_s3', text: 'Thánh Thể' }, { id: 'b27_4_s4', text: 'Hòa giải' }, { id: 'b27_4_s5', text: 'Xức dầu bệnh nhân' }, { id: 'b27_4_s6', text: 'Truyền chức thánh' }, { id: 'b27_4_s7', text: 'Hôn phối' } ].sort(() => Math.random() - 0.5), correctOrderIds: ['b27_4_s1', 'b27_4_s2', 'b27_4_s3', 'b27_4_s4', 'b27_4_s5', 'b27_4_s6', 'b27_4_s7'], hint: 'Danh sách gồm bảy Bí tích theo thứ tự giáo lý.' }
    ]
  },
  // Corresponds to original bai27_5.ts
  {
    title: "Phụng Vụ",
    xp: 25,
    nextLessonId: "xungtoi3-unit28-l1",
    pages: [
      { type: 'reading', passage: "Hỏi: Ta phải tham dự Phụng vụ thế nào?\nThưa: Ta phải tham dự Phụng vụ cách ý thức, linh động, hữu hiệu và đầy đủ (x.PV.11).", durationSeconds: 10 },
      { type: 'multiple-choice', questionText: "Ta phải tham dự Phụng vụ thế nào theo GLCG.203?", options: [ { id: 'b27_5_mc1', text: 'Cách ý thức, linh động, hữu hiệu và đầy đủ' }, { id: 'b27_5_mc2', text: 'Tùy nghi miễn là có mặt' }, { id: 'b27_5_mc3', text: 'Càng yên lặng càng tốt' }, { id: 'b27_5_mc4', text: 'Chỉ cần tham dự một phần' } ], correctOptionId: 'b27_5_mc1', hint: 'Ta phải tham dự Phụng vụ cách ý thức, linh động, hữu hiệu và đầy đủ.' },
      { type: 'fill-blank', questionTextBeforeBlank: 'Ta phải tham dự Phụng vụ cách ', questionTextAfterBlank: ', linh động, hữu hiệu và đầy đủ.', options: [ { id: 'b27_5_fb1', text: 'ý thức' }, { id: 'b27_5_fb2', text: 'trang nghiêm' }, { id: 'b27_5_fb3', text: 'tự do' } ], correctOptionId: 'b27_5_fb1', hint: 'Cách ý thức, linh động, hữu hiệu và đầy đủ.' },
      { type: 'true-false', questionText: 'Tham dự phụng vụ cách đầy đủ bao gồm cả việc chuẩn bị tâm hồn và hiệp thông.', correctAnswer: true, hint: 'Cách tham dự đầy đủ bao gồm chuẩn bị và hiệp thông.' },
      { type: 'sort', prompt: 'Sắp xếp các yếu tố tham dự phụng vụ theo GLCG.203:', words: [ { id: 'b27_5_s1', text: 'Ý thức' }, { id: 'b27_5_s2', text: 'Linh động' }, { id: 'b27_5_s3', text: 'Hữu hiệu' }, { id: 'b27_5_s4', text: 'Đầy đủ' } ].sort(() => Math.random() - 0.5), correctOrderIds: ['b27_5_s1', 'b27_5_s2', 'b27_5_s3', 'b27_5_s4'], hint: 'Thứ tự: ý thức, linh động, hữu hiệu, đầy đủ.' }
    ]
  }
];

export default bai27Lessons;
// data/lessons/xung-toi/bai14.ts
import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const bai14Lessons: LessonContentData[] = [
  // Corresponds to original bai14_1.ts
  {
    title: "Con Người Là Hình Ảnh Thiên Chúa",
    xp: 30,
    nextLessonId: "xungtoi2-unit14-l2",
    pages: [
      { type: 'reading', passage: "\"Anh em phải để Thánh Thần đổi mới tâm trí anh em, và phải mặc lấy con người mới, là con người đã được sáng tạo theo hình ảnh Thiên Chúa để thật sự sống công chính và thánh thiện\" (Ep 4,23)", durationSeconds: 18 },
      { type: 'multiple-choice', questionText: "Theo thư Ê-phê-sô, con người mới phải sống thế nào?", options: [ { id: 'b14_1_opt1', text: 'Sống vui vẻ và tự do' }, { id: 'b14_1_opt2', text: 'Sống công chính và thánh thiện' }, { id: 'b14_1_opt3', text: 'Sống giàu có và thành công' }, { id: 'b14_1_opt4', text: 'Sống theo luật Do Thái' } ], correctOptionId: 'b14_1_opt2', hint: "Câu trả lời có trong đoạn Thánh Thư (Ep 4,23)." },
      { type: 'fill-blank', questionTextBeforeBlank: "Anh em phải để Thánh Thần đổi mới ", questionTextAfterBlank: " anh em, và phải mặc lấy con người mới.", options: [ { id: 'b14_1_fb1', text: 'tâm trí' }, { id: 'b14_1_fb2', text: 'thân xác' }, { id: 'b14_1_fb3', text: 'công việc' }, { id: 'b14_1_fb4', text: 'cuộc đời' } ], correctOptionId: 'b14_1_fb1', hint: "Trọng tâm nằm ở phần nội tâm – tâm trí." },
      { type: 'sort', prompt: "Sắp xếp các cụm từ để hoàn chỉnh câu Thánh Kinh Ep 4,23:", words: [ { id: 'b14_1_s1', text: 'Anh em phải để Thánh Thần' }, { id: 'b14_1_s2', text: 'đổi mới tâm trí anh em,' }, { id: 'b14_1_s3', text: 'và phải mặc lấy con người mới,' }, { id: 'b14_1_s4', text: 'được sáng tạo theo hình ảnh Thiên Chúa' }, { id: 'b14_1_s5', text: 'để thật sự sống công chính và thánh thiện.' } ].sort(() => Math.random() - 0.5), correctOrderIds: ['b14_1_s1', 'b14_1_s2', 'b14_1_s3', 'b14_1_s4', 'b14_1_s5'], hint: "Ep 4,23 là câu then chốt của bài." }
    ]
  },
  // Corresponds to original bai14_2.ts
  {
    title: "Con Người Là Hình Ảnh Thiên Chúa",
    xp: 30,
    nextLessonId: "xungtoi2-unit14-l3",
    pages: [
      { type: 'reading', passage: "Hỏi: Tại sao con người là hình ảnh Thiên Chúa?\nThưa: Vì Thiên Chúa đã tạo dựng con người giống hình ảnh Người, ban cho có linh hồn thiêng liêng, có trí tuệ và ý chí tự do. Cho nên ngay từ trong lòng mẹ, con người đã hướng về sự thiện đích thực và hạnh phúc muôn đời.", durationSeconds: 14 },
      { type: 'multiple-choice', questionText: "Tại sao con người là hình ảnh Thiên Chúa?", options: [ { id: 'b14_2_opt1', text: 'Vì con người có sức mạnh' }, { id: 'b14_2_opt2', text: 'Vì con người có linh hồn, trí tuệ và ý chí tự do' }, { id: 'b14_2_opt3', text: 'Vì con người có hình dáng giống Thiên Chúa' }, { id: 'b14_2_opt4', text: 'Vì con người sinh ra ở trời' } ], correctOptionId: 'b14_2_opt2', hint: "Câu trả lời nằm trong định nghĩa của GLCG.287." },
      { type: 'fill-blank', questionTextBeforeBlank: "Ngay từ trong lòng mẹ, con người đã hướng về ", questionTextAfterBlank: " và hạnh phúc muôn đời.", options: [ { id: 'b14_2_fb1', text: 'sự thiện đích thực' }, { id: 'b14_2_fb2', text: 'niềm vui cuộc sống' }, { id: 'b14_2_fb3', text: 'sự bình an' }, { id: 'b14_2_fb4', text: 'vẻ đẹp thiên nhiên' } ], correctOptionId: 'b14_2_fb1', hint: "Chính xác theo cụm từ của giáo lý." },
      { type: 'true-false', questionText: "Con người là hình ảnh Thiên Chúa vì được tạo ra từ bụi đất và sinh khí của Người.", correctAnswer: false, hint: "Câu trả lời đúng phải nhấn mạnh linh hồn thiêng liêng, trí tuệ và ý chí tự do." },
      { type: 'sort', prompt: "Sắp xếp các yếu tố thể hiện hình ảnh Thiên Chúa nơi con người:", words: [ { id: 'b14_2_s1', text: 'Linh hồn thiêng liêng' }, { id: 'b14_2_s2', text: 'Trí tuệ' }, { id: 'b14_2_s3', text: 'Ý chí tự do' }, { id: 'b14_2_s4', text: 'Hướng về sự thiện' } ].sort(() => Math.random() - 0.5), correctOrderIds: ['b14_2_s1', 'b14_2_s2', 'b14_2_s3', 'b14_2_s4'], hint: "Dựa theo thứ tự mô tả trong giáo lý." }
    ]
  },
  // Corresponds to original bai14_3.ts
  {
    title: "Con Người Là Hình Ảnh Thiên Chúa",
    xp: 35,
    nextLessonId: "xungtoi2-unit14-l4",
    pages: [
      { type: 'reading', passage: "Hỏi: Con người có giữ được nguyên vẹn hình ảnh Thiên Chúa nơi mình không?\nThưa: Không, tội lỗi đã làm tổn thương hình ảnh ấy nơi con người, khiến họ dễ hướng về điều xấu và dễ bị sai lầm.", durationSeconds: 12 },
      { type: 'multiple-choice', questionText: "Điều gì đã làm tổn thương hình ảnh Thiên Chúa nơi con người?", options: [ { id: 'b14_3_opt1', text: 'Thiên nhiên' }, { id: 'b14_3_opt2', text: 'Tội lỗi' }, { id: 'b14_3_opt3', text: 'Thời gian' }, { id: 'b14_3_opt4', text: 'Thân xác' } ], correctOptionId: 'b14_3_opt2', hint: "Tội lỗi là nguyên nhân chính." },
      { type: 'fill-blank', questionTextBeforeBlank: "Tội lỗi làm tổn thương hình ảnh Thiên Chúa nơi con người, khiến họ dễ ", questionTextAfterBlank: " và dễ bị sai lầm.", options: [ { id: 'b14_3_fb1', text: 'hướng về điều xấu' }, { id: 'b14_3_fb2', text: 'trở nên ích kỷ' }, { id: 'b14_3_fb3', text: 'ghen ghét' }, { id: 'b14_3_fb4', text: 'xa cách Thiên Chúa' } ], correctOptionId: 'b14_3_fb1', hint: "Trích nguyên văn trong phần trả lời giáo lý." },
      { type: 'true-false', questionText: "Con người giữ nguyên vẹn hình ảnh Thiên Chúa từ khi sinh ra đến chết mà không bị tổn thương gì.", correctAnswer: false, hint: "Tội lỗi luôn ảnh hưởng đến con người." },
      { type: 'sort', prompt: "Sắp xếp các hậu quả do tội lỗi gây ra theo trình tự mô tả:", words: [ { id: 'b14_3_s1', text: 'Tổn thương hình ảnh Thiên Chúa' }, { id: 'b14_3_s2', text: 'Dễ hướng về điều xấu' }, { id: 'b14_3_s3', text: 'Dễ bị sai lầm' } ].sort(() => Math.random() - 0.5), correctOrderIds: ['b14_3_s1', 'b14_3_s2', 'b14_3_s3'], hint: "Bám sát GLCG.288." },
      { type: 'multiple-choice', questionText: "Khi hình ảnh Thiên Chúa bị tổn thương, con người có khuynh hướng gì?", options: [ { id: 'b14_3_q5o1', text: 'Làm điều thiện' }, { id: 'b14_3_q5o2', text: 'Chạy đến với Giáo Hội' }, { id: 'b14_3_q5o3', text: 'Hướng về điều xấu' }, { id: 'b14_3_q5o4', text: 'Bỏ cuộc sống trần gian' } ], correctOptionId: 'b14_3_q5o3', hint: "Câu trả lời mang tính nội tại tâm lý." },
      { type: 'fill-blank', questionTextBeforeBlank: "Tội lỗi không chỉ là hành động sai, mà còn khiến hình ảnh Thiên Chúa trong ta ", questionTextAfterBlank: ".", options: [ { id: 'b14_3_q6o1', text: 'bị tổn thương' }, { id: 'b14_3_q6o2', text: 'biến mất' }, { id: 'b14_3_q6o3', text: 'trở nên hoàn hảo' }, { id: 'b14_3_q6o4', text: 'được củng cố' } ], correctOptionId: 'b14_3_q6o1', hint: "Giáo lý nhấn mạnh yếu tố tổn thương." }
    ]
  },
  // Corresponds to original bai14_4.ts
  {
    title: "Con Người Là Hình Ảnh Thiên Chúa",
    xp: 35,
    nextLessonId: "xungtoi2-unit14-l5",
    pages: [
      { type: 'reading', passage: "Hỏi: Sống như môn đệ Chúa Ki-tô là thế nào?\nThưa: Là thực hiện tinh thần bài giảng trên núi được gồm tóm trong các mối phúc thật.", durationSeconds: 10 },
      { type: 'multiple-choice', questionText: "Sống như môn đệ Chúa Ki-tô là gì?", options: [ { id: 'b14_4_opt1', text: 'Tham gia các hoạt động xã hội' }, { id: 'b14_4_opt2', text: 'Giữ chay tịnh thường xuyên' }, { id: 'b14_4_opt3', text: 'Sống theo các mối phúc thật' }, { id: 'b14_4_opt4', text: 'Tránh xa mọi người' } ], correctOptionId: 'b14_4_opt3', hint: "Tâm điểm là bài giảng trên núi." },
      { type: 'reading', passage: "Hỏi: Có những mối phúc thật nào?\nThưa: Chúa Ki-tô đã công bố 8 mối phúc thật này:", durationSeconds: 12 },
      { type: 'sort', prompt: "Sắp xếp đúng thứ tự 3 mối phúc đầu tiên:", words: [ { id: 'b14_4_s1', text: 'Ai có lòng khó khăn...' }, { id: 'b14_4_s2', text: 'Ai hiền lành...' }, { id: 'b14_4_s3', text: 'Ai khóc lóc...' } ].sort(() => Math.random() - 0.5), correctOrderIds: ['b14_4_s1', 'b14_4_s2', 'b14_4_s3'], hint: "Dựa vào thứ tự mối phúc thật trong giáo lý." },
      { type: 'multiple-choice', questionText: "Ai giữ lòng sạch sẽ sẽ được điều gì?", options: [ { id: 'b14_4_q5o1', text: 'Được thấy mặt Thiên Chúa' }, { id: 'b14_4_q5o2', text: 'Được làm vua' }, { id: 'b14_4_q5o3', text: 'Được giàu sang' }, { id: 'b14_4_q5o4', text: 'Được tha mọi tội' } ], correctOptionId: 'b14_4_q5o1', hint: "Đây là phần thưởng dành cho ai giữ lòng sạch sẽ." },
      { type: 'fill-blank', questionTextBeforeBlank: "Ai làm cho người hòa thuận, ấy là phúc thật, vì sẽ được gọi là ", questionTextAfterBlank: ".", options: [ { id: 'b14_4_fb1', text: 'con Đức Chúa Trời' }, { id: 'b14_4_fb2', text: 'người tốt' }, { id: 'b14_4_fb3', text: 'thiên thần' }, { id: 'b14_4_fb4', text: 'người thánh thiện' } ], correctOptionId: 'b14_4_fb1', hint: "Trích đúng lời Chúa." },
      { type: 'true-false', questionText: "Ai chịu khốn nạn vì đạo ngay sẽ được gọi là người thánh thiện.", correctAnswer: false, hint: "Phần thưởng dành cho họ là Nước Đức Chúa Trời." }
    ]
  },
  // Corresponds to original bai14_5.ts
  {
    title: "Con Người Là Hình Ảnh Thiên Chúa",
    xp: 50,
    nextLessonId: "xungtoi2-unit15-l1",
    pages: [
      { type: 'reading', passage: 'Ôn tập tổng quát: Con người là hình ảnh Thiên Chúa – theo Ep 4,23 và GLCG 287–291.', durationSeconds: 10 },
      { type: 'multiple-choice', questionText: 'Ep 4,23 dạy ta điều gì?', options: [ { id: 'mc1', text: 'Phải đổi mới tâm trí và sống công chính, thánh thiện' }, { id: 'mc2', text: 'Phải giữ luật Môsê' }, { id: 'mc3', text: 'Sống theo thời đại' }, { id: 'mc4', text: 'Không cần thay đổi' } ], correctOptionId: 'mc1', hint: 'Ep 4,23 nhấn mạnh tâm trí và đời sống mới.' },
      { type: 'true-false', questionText: 'Con người là hình ảnh Thiên Chúa vì có linh hồn, trí tuệ và ý chí tự do.', correctAnswer: true, hint: 'GLCG 287 xác định rõ điều này.' },
      { type: 'fill-blank', questionTextBeforeBlank: 'Tội lỗi làm tổn thương hình ảnh Thiên Chúa và khiến con người dễ ', questionTextAfterBlank: '.', options: [ { id: 'fb1', text: 'hướng về điều xấu' }, { id: 'fb2', text: 'bị Thiên Chúa từ bỏ' }, { id: 'fb3', text: 'trở nên mạnh mẽ' } ], correctOptionId: 'fb1', hint: 'Theo GLCG 288.' },
      { type: 'sort', prompt: 'Sắp xếp các mối phúc thật sau theo thứ tự:', words: [ { id: 's1', text: 'Lòng khó khăn' }, { id: 's2', text: 'Hiền lành' }, { id: 's3', text: 'Khóc lóc' }, { id: 's4', text: 'Khao khát nhân đức' } ].sort(() => Math.random() - 0.5), correctOrderIds: ['s1', 's2', 's3', 's4'], hint: 'Theo đúng trình tự của giáo lý.' },
      { type: 'multiple-choice', questionText: 'Ai giữ lòng sạch sẽ sẽ được gì?', options: [ { id: 'mc5', text: 'Được thấy mặt Thiên Chúa' }, { id: 'mc6', text: 'Được bình an' } ], correctOptionId: 'mc5', hint: 'Mối phúc thứ sáu.' },
      { type: 'fill-blank', questionTextBeforeBlank: 'Ai làm cho người hòa thuận sẽ được gọi là ', questionTextAfterBlank: '.', options: [ { id: 'fb2_1', text: 'con Đức Chúa Trời' }, { id: 'fb2_2', text: 'thánh nhân' } ], correctOptionId: 'fb2_1', hint: 'Một trong tám mối phúc.' },
      { type: 'true-false', questionText: 'Tội lỗi không ảnh hưởng đến hình ảnh Thiên Chúa nơi con người.', correctAnswer: false, hint: 'GLCG 288 khẳng định điều ngược lại.' },
      { type: 'multiple-choice', questionText: 'Hình ảnh Thiên Chúa bị tổn thương có thể được phục hồi bằng cách nào?', options: [ { id: 'mc7', text: 'Sống theo các mối phúc thật và làm môn đệ Chúa Ki-tô' }, { id: 'mc8', text: 'Cầu nguyện mà không hành động' }, { id: 'mc9', text: 'Tự cố gắng bằng sức riêng' } ], correctOptionId: 'mc7', hint: 'Gắn với GLCG 290.' },
      { type: 'sort', prompt: 'Sắp xếp đúng thứ tự 4 mối phúc thật cuối:', words: [ { id: 's5', text: 'Thương xót người' }, { id: 's6', text: 'Giữ lòng sạch sẽ' }, { id: 's7', text: 'Làm cho người hòa thuận' }, { id: 's8', text: 'Chịu khốn nạn vì đạo ngay' } ].sort(() => Math.random() - 0.5), correctOrderIds: ['s5', 's6', 's7', 's8'], hint: 'Tiếp theo 4 mối phúc đầu.' },
      { type: 'multiple-choice', questionText: 'Sống như môn đệ Chúa Ki-tô là sống thế nào?', options: [ { id: 'mc10', text: 'Theo tinh thần các mối phúc thật' }, { id: 'mc11', text: 'Chỉ đi nhà thờ' } ], correctOptionId: 'mc10', hint: 'GLCG 290.' },
      { type: 'fill-blank', questionTextBeforeBlank: 'Chúa Ki-tô đã công bố ', questionTextAfterBlank: ' mối phúc thật.', options: [ { id: 'fb3_1', text: '8' }, { id: 'fb3_2', text: '10' } ], correctOptionId: 'fb3_1', hint: 'Theo giáo lý.' },
      { type: 'true-false', questionText: 'Người có lòng khó khăn sẽ được Nước Thiên Chúa.', correctAnswer: true, hint: 'Mối phúc đầu tiên.' },
      { type: 'multiple-choice', questionText: 'Tại sao con người hướng về sự thiện ngay từ lòng mẹ?', options: [ { id: 'mc12', text: 'Vì được Thiên Chúa tạo dựng theo hình ảnh của Người' }, { id: 'mc13', text: 'Vì học được từ cha mẹ' } ], correctOptionId: 'mc12', hint: 'GLCG 287.' },
      { type: 'sort', prompt: 'Sắp xếp các yếu tố của hình ảnh Thiên Chúa trong con người:', words: [ { id: 's9', text: 'Linh hồn thiêng liêng' }, { id: 's10', text: 'Trí tuệ' }, { id: 's11', text: 'Ý chí tự do' }, { id: 's12', text: 'Hướng về sự thiện' } ].sort(() => Math.random() - 0.5), correctOrderIds: ['s9', 's10', 's11', 's12'], hint: 'GLCG 287.' }
    ]
  }
];

export default bai14Lessons;
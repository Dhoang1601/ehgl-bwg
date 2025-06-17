// v16/data/lessons/them-suc/bai32.ts
import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const bai32Lessons: LessonContentData[] = [
  // Phần 1: Giới thiệu và định nghĩa Bí tích Xức Dầu
  {
    title: "BÍ TÍCH XỨC DẦU BỆNH NHÂN",
    xp: 20,
    nextLessonId: "themsuc-bai32-l2", // ID giả định
    pages: [
      { type: 'reading', passage: "“Ai trong anh em đau yếu ư ? Người ấy hãy mời các kỳ mục của Hội thánh đến ; họ sẽ cầu nguyện cho người ấy, sau khi xức dầu nhân danh Chúa” (Gc 5, 14)", durationSeconds: 18 },
      { 
        type: 'multiple-choice', 
        questionText: "Theo thư Thánh Gia-cô-bê, khi đau yếu, ta nên mời ai đến cầu nguyện và xức dầu?", 
        options: [
          {id: 'ts_b32_p1_opt1', text: 'Các kỳ mục của Hội thánh'}, 
          {id: 'ts_b32_p1_opt2', text: 'Gia đình và người thân'}, 
          {id: 'ts_b32_p1_opt3', text: 'Những người đạo đức trong xứ'},
        ], 
        correctOptionId: 'ts_b32_p1_opt1', 
        hint: "Thư Gia-cô-bê chỉ rõ người có trách nhiệm cử hành Bí tích này." 
      },
      { type: 'reading', passage: "Hỏi: Bí tích xức dầu bệnh nhân là gì ?\nT. Là bí tích Chúa Giê-su đã lập để ban ơn nâng đỡ bệnh nhân và người già yếu, về phần hồn và phần xác.", durationSeconds: 15 },
      { 
        type: 'true-false', 
        questionText: "Bí tích Xức dầu chỉ ban ơn cho phần hồn, không liên quan đến phần xác.", 
        correctAnswer: false,
        hint: "Định nghĩa nói rõ là nâng đỡ cả 'phần hồn và phần xác'."
      },
    ],
  },

  // Phần 2: Các ơn của Bí tích (Phần A)
  {
    title: "BÍ TÍCH XỨC DẦU BỆNH NHÂN",
    xp: 25,
    nextLessonId: "themsuc-bai32-l3",
    pages: [
      { type: 'reading', passage: "Hỏi: Bí tích xức dầu bệnh nhân ban những ơn nào ?\nThưa: ...\n- Một là kết hợp bệnh nhân với cuộc khổ nạn của Chúa Ki-tô để sinh ích cho chính mình và cho Hội thánh,\n- Hai là ban niềm an ủi và lòng can đảm để biết chịu đựng những đau đớn của bệnh tật hoặc tuổi già theo tinh thần Ki-tô giáo,\n- Ba là tha thứ các tội lỗi nếu chưa xưng được,", durationSeconds: 20 },
      { 
        type: 'multiple-choice', 
        questionText: "Một trong các ơn của Bí tích Xức dầu là gì?", 
        options: [
          {id: 'ts_b32_p2_opt1', text: 'Kết hợp bệnh nhân với cuộc khổ nạn của Chúa Kitô'}, 
          {id: 'ts_b32_p2_opt2', text: 'Xóa bỏ mọi đau đớn thể xác'}, 
          {id: 'ts_b32_p2_opt3', text: 'Bảo đảm được lên thiên đàng ngay lập tức'},
        ], 
        correctOptionId: 'ts_b32_p2_opt1',
        hint: "Ơn này liên kết đau khổ của ta với hy tế của Chúa."
      },
      { 
        type: 'fill-blank', 
        questionTextBeforeBlank: "Bí tích này ban niềm an ủi và lòng ", 
        questionTextAfterBlank: " để biết chịu đựng những đau đớn...",
        options: [
          {id: 'ts_b32_p2_fb1', text: 'can đảm'},
          {id: 'ts_b32_p2_fb2', text: 'vui mừng'},
          {id: 'ts_b32_p2_fb3', text: 'bình an'}
        ],
        correctOptionId: 'ts_b32_p2_fb1',
        hint: "Đây là sức mạnh tinh thần để đối diện với thử thách."
      },
      { 
        type: 'true-false', 
        questionText: "Ơn của Bí tích Xức Dầu chỉ sinh ích cho chính bệnh nhân, không cho Hội Thánh.",
        correctAnswer: false,
        hint: "Bài học nói rõ là 'sinh ích cho chính mình và cho Hội thánh'."
      },
    ],
  },

  // Phần 3: Các ơn của Bí tích (Phần B)
  {
    title: "BÍ TÍCH XỨC DẦU BỆNH NHÂN",
    xp: 25,
    nextLessonId: "themsuc-bai32-l4",
    pages: [
      { type: 'reading', passage: "Hỏi: Bí tích xức dầu bệnh nhân ban những ơn nào ?\nThưa: ...\n- Bốn là phục hồi sức khỏe phần xác nếu điều này giúp ích cho ơn cứu độ thiêng liêng,\n- Năm là chuẩn bị cho “cuộc vượt qua” sang cõi sống đời đời.", durationSeconds: 15 },
      { 
        type: 'multiple-choice', 
        questionText: "Bí tích Xức dầu có thể phục hồi sức khỏe phần xác không?", 
        options: [
          {id: 'ts_b32_p3_opt1', text: 'Không bao giờ'}, 
          {id: 'ts_b32_p3_opt2', text: 'Luôn luôn'}, 
          {id: 'ts_b32_p3_opt3', text: 'Có, nếu điều đó giúp ích cho ơn cứu độ thiêng liêng'}
        ], 
        correctOptionId: 'ts_b32_p3_opt3',
        hint: "Việc chữa lành thể xác không phải là mục đích chính, nhưng có thể xảy ra với một điều kiện."
      },
      { 
        type: 'fill-blank', 
        questionTextBeforeBlank: "Bí tích này chuẩn bị cho 'cuộc vượt qua' sang cõi ", 
        questionTextAfterBlank: ".",
        options: [
          {id: 'ts_b32_p3_fb1', text: 'sống đời đời'},
          {id: 'ts_b32_p3_fb2', text: 'bình an'},
          {id: 'ts_b32_p3_fb3', text: 'thanh luyện'}
        ],
        correctOptionId: 'ts_b32_p3_fb1',
        hint: "Đây là sự chuẩn bị cho hành trình cuối cùng về với Chúa."
      }
    ],
  },

  // Phần 4: Khi nào lãnh nhận & Của Ăn Đàng
  {
    title: "BÍ TÍCH XỨC DẦU BỆNH NHÂN",
    xp: 20,
    nextLessonId: "themsuc-bai32-l5",
    pages: [
      { type: 'reading', passage: "Hỏi: Khi nào cần lãnh nhận Bí tích Xức dầu ?\nT. Khi người tín hữu lâm cảnh nguy tử vì bệnh nặng hay tuổi già thì nên mời linh mục tới ban Bí tích Xức Dầu cho họ.", durationSeconds: 15 },
      {
        type: 'multiple-choice',
        questionText: "Khi nào một người tín hữu nên lãnh nhận Bí tích Xức dầu?",
        options: [
          {id: 'ts_b32_p4_opt1', 'text': 'Khi bị cảm cúm thông thường'},
          {id: 'ts_b32_p4_opt2', text: 'Khi lâm cảnh nguy tử vì bệnh nặng hay tuổi già'},
          {id: 'ts_b32_p4_opt3', text: 'Trước mỗi chuyến đi xa'}
        ],
        correctOptionId: 'ts_b32_p4_opt2',
        hint: "Bí tích này dành cho những tình trạng sức khỏe nghiêm trọng."
      },
      { type: 'reading', passage: "Hỏi: Của ăn đàng là gì ?\nT. Là Thánh Thể Chúa Giê-su được ban cho những người sắp lìa đời, giúp họ vững mạnh tiến về đời sau.", durationSeconds: 12 },
      { 
        type: 'fill-blank', 
        questionTextBeforeBlank: "'Của ăn đàng' chính là ", 
        questionTextAfterBlank: " được ban cho người sắp lìa đời.",
        options: [
          {id: 'ts_b32_p4_fb1', text: 'Thánh Thể Chúa Giê-su'},
          {id: 'ts_b32_p4_fb2', text: 'Dầu thánh'},
          {id: 'ts_b32_p4_fb3', text: 'Lời khuyên của linh mục'}
        ],
        correctOptionId: 'ts_b32_p4_fb1',
        hint: "Đây là lương thực thiêng liêng cho chặng đường cuối cùng."
      }
    ]
  },

  // Phần 5: Ôn tập tổng hợp
  {
    title: "BÍ TÍCH XỨC DẦU BỆNH NHÂN",
    xp: 30,
    nextLessonId: "themsuc-unitX-lY", // ID giả định
    pages: [
      { 
        type: 'multiple-choice', 
        questionText: "Mục đích chính của Bí tích Xức dầu bệnh nhân là gì?", 
        options: [
          {id: 'ts_b32_p5_opt1', text: 'Ban ơn nâng đỡ bệnh nhân và người già yếu'}, 
          {id: 'ts_b32_p5_opt2', text: 'Chữa lành mọi bệnh tật'}, 
          {id: 'ts_b32_p5_opt3', text: 'Thay thế cho Bí tích Hòa giải'}
        ], 
        correctOptionId: 'ts_b32_p5_opt1'
      },
      { 
        type: 'fill-blank', 
        questionTextBeforeBlank: "Một trong các ơn của Bí tích là tha thứ các tội lỗi nếu bệnh nhân chưa ", 
        questionTextAfterBlank: " được.",
        options: [
          {id: 'ts_b32_p5_fb1', text: 'xưng'}, 
          {id: 'ts_b32_p5_fb2', text: 'nhớ'}, 
          {id: 'ts_b32_p5_fb3', text: 'ăn năn'}
        ],
        correctOptionId: 'ts_b32_p5_fb1'
      },
      { 
        type: 'true-false', 
        questionText: "Bí tích Xức dầu chỉ nên được ban khi người bệnh đã bất tỉnh.",
        correctAnswer: false,
        hint: "Nên ban khi người bệnh còn tỉnh táo để họ có thể nhận lãnh các ơn một cách ý thức."
      },
      { 
        type: 'multiple-choice', 
        questionText: "'Của ăn đàng' giúp người sắp lìa đời điều gì?", 
        options: [
          {id: 'ts_b32_p5_opt2', text: 'Giúp họ khỏe lại'}, 
          {id: 'ts_b32_p5_opt3', text: 'Giúp họ vững mạnh tiến về đời sau'}, 
          {id: 'ts_b32_p5_opt4', text: 'Tha cho họ mọi hình phạt'}
        ], 
        correctOptionId: 'ts_b32_p5_opt3'
      }
    ],
  },
];

export default bai32Lessons;
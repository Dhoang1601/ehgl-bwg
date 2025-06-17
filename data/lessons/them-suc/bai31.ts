// v16/data/lessons/them-suc/bai31.ts
import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const bai31Lessons: LessonContentData[] = [
  // Phần 1: Bí tích là gì?
  {
    title: "BÍ TÍCH",
    xp: 20,
    nextLessonId: "themsuc-bai31-l2", // ID giả định
    pages: [
      { type: 'reading', passage: "“Hôm ấy là ngày bế mạc tuần lễ Lều, và là ngày long trọng nhất. Đức Giê-su đứng trong Đền thờ và lớn tiếng nói rằng : Ai khát, hãy đến với tôi, ai tin vào tôi, hãy đến mà uống” (Ga 7,37-38)", durationSeconds: 18 },
      { type: 'reading', passage: "Hỏi: Bí tích là gì ?\nThưa: Bí tích là những dấu chỉ hữu hiệu của ân sủng do Chúa Giê-su thiết lập và được trao lại cho Hội Thánh để ban sự sống thần linh cho chúng ta.", durationSeconds: 15 },
      { 
        type: 'multiple-choice', 
        questionText: "Ai đã thiết lập các Bí tích?", 
        options: [
          {id: 'ts_b31_p1_opt1', text: 'Chúa Giê-su'}, 
          {id: 'ts_b31_p1_opt2', text: 'Hội Thánh'}, 
          {id: 'ts_b31_p1_opt3', text: 'Các Tông đồ'},
        ], 
        correctOptionId: 'ts_b31_p1_opt1', 
        hint: "Các Bí tích bắt nguồn từ chính Đấng sáng lập đạo." 
      },
      { 
        type: 'fill-blank', 
        questionTextBeforeBlank: "Bí tích là những dấu chỉ hữu hiệu của ân sủng để ban ", 
        questionTextAfterBlank: " cho chúng ta.",
        options: [
            {id: 'ts_b31_p1_fb_opt1', text: 'sự sống thần linh'}, 
            {id: 'ts_b31_p1_fb_opt2', text: 'sự khôn ngoan'}, 
            {id: 'ts_b31_p1_fb_opt3', text: 'sự giàu có'}
        ],
        correctOptionId: 'ts_b31_p1_fb_opt1', 
        hint: "Đây là mục đích sâu xa nhất của các Bí tích."
      }
    ],
  },

  // Phần 2: Học về Bảy Bí Tích
  {
    title: "BÍ TÍCH",
    xp: 25,
    nextLessonId: "themsuc-bai31-l3",
    pages: [
      { type: 'reading', passage: "Hỏi: Có mấy Bí tích ?\nThưa: Có bảy Bí tích :\n- Một là Bí tích Rửa tội,\n- Hai là Bí tích Thêm sức,\n- Ba là Bí tích Thánh thể,\n- Bốn là Bí tích Hòa giải,\n- Năm là Bí tích Xức dầu bệnh nhân,\n- Sáu là Bí tích Truyền chức thánh,\n- Bảy là Bí tích Hôn phối.", durationSeconds: 25 },
      { 
        type: 'multiple-choice', 
        questionText: "Hội Thánh có tất cả bao nhiêu Bí tích?", 
        options: [
          {id: 'ts_b31_p2_opt1', text: '3'}, 
          {id: 'ts_b31_p2_opt2', text: '5'}, 
          {id: 'ts_b31_p2_opt3', text: '7'},
          {id: 'ts_b31_p2_opt4', text: '10'}
        ], 
        correctOptionId: 'ts_b31_p2_opt3'
      },
      { 
        type: 'sort', 
        prompt: "Sắp xếp 3 bí tích khai tâm Kitô giáo:", 
        words: [
          {id: 'ts_b31_p2_w1', text: 'Rửa tội'}, 
          {id: 'ts_b31_p2_w2', text: 'Thêm sức'}, 
          {id: 'ts_b31_p2_w3', text: 'Thánh thể'}
        ], 
        correctOrderIds: ['ts_b31_p2_w1', 'ts_b31_p2_w2', 'ts_b31_p2_w3'], 
        hint: "Đây là 3 bí tích nền tảng để trở thành Kitô hữu."
      },
       { 
        type: 'multiple-choice', 
        questionText: "Bí tích nào sau đây thuộc nhóm Bí tích chữa lành?", 
        options: [
          {id: 'ts_b31_p2_opt5', text: 'Rửa tội'}, 
          {id: 'ts_b31_p2_opt6', text: 'Hòa giải'}, 
          {id: 'ts_b31_p2_opt7', text: 'Hôn phối'}
        ], 
        correctOptionId: 'ts_b31_p2_opt6',
        hint: "Nhóm này có 2 Bí tích giúp phục hồi đời sống ân sủng."
      }
    ],
  },

  // Phần 3: Ôn tập Bảy Bí tích & Dấu ấn thiêng liêng
  {
    title: "BÍ TÍCH",
    xp: 25,
    nextLessonId: "themsuc-bai31-l4",
    pages: [
      { type: 'reading', passage: "Hỏi: Những Bí tích nào đuợc lãnh nhận một lần mà thôi ?\nThưa: Có ba Bí tích này, một là Bí tích Rửa tội, hai là Bí tích Thêm sức, ba là Bí tích Truyền chức thánh ; vì ba Bí tích ấy in vào linh hồn dấu ấn thiêng liêng không thể xóa được.", durationSeconds: 18 },
      { 
        type: 'multiple-choice', 
        questionText: "Có bao nhiêu Bí tích chỉ được lãnh nhận một lần duy nhất?", 
        options: [
          {id: 'ts_b31_p3_opt1', text: '1'}, 
          {id: 'ts_b31_p3_opt2', text: '3'}, 
          {id: 'ts_b31_p3_opt3', text: '5'},
          {id: 'ts_b31_p3_opt4', text: '7'}
        ], 
        correctOptionId: 'ts_b31_p3_opt2'
      },
      { 
        type: 'multiple-choice', 
        questionText: "Bí tích nào sau đây có thể được lãnh nhận nhiều lần?", 
        options: [
          {id: 'ts_b31_p3_opt5', text: 'Rửa tội'}, 
          {id: 'ts_b31_p3_opt6', text: 'Thêm sức'}, 
          {id: 'ts_b31_p3_opt7', text: 'Thánh Thể'},
          {id: 'ts_b31_p3_opt8', text: 'Truyền chức thánh'}
        ], 
        correctOptionId: 'ts_b31_p3_opt7'
      },
      { 
        type: 'fill-blank', 
        questionTextBeforeBlank: "Ba Bí tích Rửa tội, Thêm sức, Truyền chức thánh in vào linh hồn ", 
        questionTextAfterBlank: " không thể xóa được.",
        options: [
          {id: 'ts_b31_p3_fb_opt1', text: 'dấu ấn thiêng liêng'}, 
          {id: 'ts_b31_p3_fb_opt2', text: 'một ký ức đẹp'}, 
          {id: 'ts_b31_p3_fb_opt3', text: 'ân sủng dồi dào'}
        ],
        correctOptionId: 'ts_b31_p3_fb_opt1', 
        hint: "Điều này giải thích tại sao chúng không thể được lặp lại."
      }
    ],
  },

  // Phần 4: Điều kiện và sự cần thiết của Bí tích
  {
    title: "BÍ TÍCH",
    xp: 20,
    nextLessonId: "themsuc-bai31-l5",
    pages: [
        { type: 'reading', passage: "Hỏi: Cần có những điều kiện nào để lãnh nhận các Bí tích ?\nT. Cần có những điều kiện này :\n- Một là phải đón nhận và học hiểu Lời Chúa.\n- Hai là phải có đức tin và thật lòng ước muốn.", durationSeconds: 15 },
        { type: 'reading', passage: "Hỏi: Các Bí tích có cần thiết để được cứu độ không ?\nT. Đối với các tín hữu, các Bí tích cần thiết để được ơn cứu độ, vì chính Chúa Ki-tô hành động nơi các Bí tích, và Chúa Thánh Thần làm cho những người lãnh nhận nên giống Con Thiên Chúa.", durationSeconds: 18 },
        { 
            type: 'multiple-choice', 
            questionText: "Đâu là hai điều kiện cần có để lãnh nhận các Bí tích?", 
            options: [
              {id: 'ts_b31_p4_opt1', text: 'Đón nhận Lời Chúa và có đức tin'}, 
              {id: 'ts_b31_p4_opt2', text: 'Giàu có và khỏe mạnh'}, 
              {id: 'ts_b31_p4_opt3', text: 'Thông minh và có địa vị'}
            ], 
            correctOptionId: 'ts_b31_p4_opt1', 
            hint: "Các điều kiện này không phụ thuộc vào vật chất hay khả năng của con người."
        },
        { 
            type: 'true-false', 
            questionText: "Đối với các tín hữu, các Bí tích không thực sự cần thiết cho ơn cứu độ.", 
            correctAnswer: false, 
            hint: "Bài học khẳng định các bí tích cần thiết vì chính Chúa Kitô hành động qua chúng."
        }
    ]
  },

  // Phần 5: Ôn tập tổng hợp
  {
    title: "BÍ TÍCH",
    xp: 30,
    nextLessonId: "themsuc-unitX-lY", // ID giả định
    pages: [
      { 
        type: 'multiple-choice', 
        questionText: "Bí tích là những dấu chỉ hữu hiệu của...", 
        options: [
          {id: 'ts_b31_p5_opt1', text: 'ân sủng'}, 
          {id: 'ts_b31_p5_opt2', text: 'sức mạnh con người'}, 
          {id: 'ts_b31_p5_opt3', text: 'quyền lực Hội Thánh'}
        ], 
        correctOptionId: 'ts_b31_p5_opt1'
      },
      { 
        type: 'fill-blank', 
        questionTextBeforeBlank: "Có tất cả ", 
        questionTextAfterBlank: " Bí tích.",
        options: [
          {id: 'ts_b31_p5_fb_opt1', text: 'bảy'}, 
          {id: 'ts_b31_p5_fb_opt2', text: 'ba'}, 
          {id: 'ts_b31_p5_fb_opt3', text: 'năm'}
        ],
        correctOptionId: 'ts_b31_p5_fb_opt1'
      },
      { 
        type: 'multiple-choice', 
        questionText: "Bí tích nào sau đây chỉ được lãnh nhận một lần?", 
        options: [
          {id: 'ts_b31_p5_opt2', text: 'Hòa giải'}, 
          {id: 'ts_b31_p5_opt3', text: 'Thêm sức'}, 
          {id: 'ts_b31_p5_opt4', text: 'Thánh Thể'}
        ], 
        correctOptionId: 'ts_b31_p5_opt3'
      },
      { 
        type: 'true-false', 
        questionText: "Ai hành động chính trong các Bí tích là Chúa Thánh Thần.",
        correctAnswer: false,
        hint: "Bài học nói rằng 'chính Chúa Ki-tô hành động nơi các Bí tích'."
      }
    ],
  },
];

export default bai31Lessons;
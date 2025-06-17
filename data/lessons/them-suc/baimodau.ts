// v16/data/lessons/them-suc/baimodau.ts
import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const baimodauLessons: LessonContentData[] = [
  // Phần 1: Gương Chúa Giêsu và sự lớn khôn
  {
    title: "EM LỚN KHÔN",
    xp: 20,
    nextLessonId: "themsuc-baimodau-l2", // ID giả định
    pages: [
      { type: 'reading', passage: "“Còn Chúa Giê-su, càng thêm tuổi, càng thêm khôn ngoan và ơn phúc trước mặt Thiên Chúa và trước mặt mọi người” (Lc 2, 52)", durationSeconds: 15 },
      { 
        type: 'multiple-choice', 
        questionText: "Theo Lc 2, 52, Chúa Giê-su đã lớn lên về những mặt nào?", 
        options: [
          {id: 'ts_bm_p1_opt1', text: 'Tuổi tác, sự khôn ngoan và ơn phúc'}, 
          {id: 'ts_bm_p1_opt2', text: 'Tuổi tác, sức khỏe và tiền bạc'}, 
          {id: 'ts_bm_p1_opt3', text: 'Chỉ có tuổi tác'}
        ], 
        correctOptionId: 'ts_bm_p1_opt1', 
        hint: "Sự lớn lên của Chúa Giê-su là một sự phát triển toàn diện." 
      },
      { type: 'reading', passage: "Hỏi: Tuổi đời đã có ảnh hưởng nào đối với ta ?\nT. Tuổi đời đã làm cho ta nên lớn khôn về thể xác và tinh thần.", durationSeconds: 12 },
      { 
        type: 'true-false', 
        questionText: "Sự lớn khôn của con người chỉ giới hạn ở phương diện thể xác.",
        correctAnswer: false,
        hint: "Bài học nói rõ về sự lớn khôn ở cả 'thể xác và tinh thần'."
      },
    ],
  },

  // Phần 2: Sự lớn lên trong Đức tin
  {
    title: "EM LỚN KHÔN",
    xp: 25,
    nextLessonId: "themsuc-baimodau-l3",
    pages: [
      { type: 'reading', passage: "Hỏi: Để ngày càng lớn lên trong Đức tin, ta cần phải làm gì ?\nT. Ta cần không ngừng đào sâu Giáo lý, siêng năng cầu nguyện và góp phần truyền bá đức tin.", durationSeconds: 15 },
      { 
        type: 'sort', 
        prompt: "Sắp xếp 3 việc cần làm để lớn lên trong Đức tin:", 
        words: [
          {id: 'ts_bm_p2_w1', text: 'Đào sâu Giáo lý'}, 
          {id: 'ts_bm_p2_w2', text: 'Siêng năng cầu nguyện'}, 
          {id: 'ts_bm_p2_w3', text: 'Truyền bá đức tin'}
        ], 
        correctOrderIds: ['ts_bm_p2_w1', 'ts_bm_p2_w2', 'ts_bm_p2_w3'], 
        hint: "Đây là ba nền tảng cho đời sống đức tin vững mạnh."
      },
      { 
        type: 'multiple-choice', 
        questionText: "Việc nào sau đây giúp ta lớn lên trong Đức tin?", 
        options: [
          {id: 'ts_bm_p2_opt1', text: 'Chỉ đi lễ'}, 
          {id: 'ts_bm_p2_opt2', text: 'Đào sâu Giáo lý'}, 
          {id: 'ts_bm_p2_opt3', text: 'Làm theo ý riêng'}
        ], 
        correctOptionId: 'ts_bm_p2_opt2',
        hint: "Hiểu biết về những điều mình tin là bước đầu tiên."
      },
       { 
        type: 'fill-blank', 
        questionTextBeforeBlank: "Ta cần siêng năng ", 
        questionTextAfterBlank: " và góp phần truyền bá đức tin.",
        options: [
            {id: 'ts_bm_p2_fb1', text: 'cầu nguyện'}, 
            {id: 'ts_bm_p2_fb2', text: 'làm việc'}, 
            {id: 'ts_bm_p2_fb3', text: 'học tập'}
        ],
        correctOptionId: 'ts_bm_p2_fb1', 
        hint: "Đây là cách để duy trì mối tương quan với Thiên Chúa."
      },
    ],
  },

  // Phần 3: Củng cố về sự lớn khôn
  {
    title: "EM LỚN KHÔN",
    xp: 20,
    nextLessonId: "themsuc-baimodau-l4",
    pages: [
      { 
        type: 'true-false', 
        questionText: "Chúa Giê-su là mẫu gương cho chúng ta về sự lớn lên toàn diện.", 
        correctAnswer: true,
        hint: "Ngài lớn lên về tuổi tác, khôn ngoan và ơn phúc."
      },
      { 
        type: 'multiple-choice', 
        questionText: "Sự lớn khôn về tinh thần bao gồm điều gì?", 
        options: [
          {id: 'ts_bm_p3_opt1', text: 'Sự hiểu biết và đời sống nội tâm'}, 
          {id: 'ts_bm_p3_opt2', text: 'Sức mạnh cơ bắp'}, 
          {id: 'ts_bm_p3_opt3', text: 'Chiều cao và cân nặng'}
        ], 
        correctOptionId: 'ts_bm_p3_opt1',
        hint: "Đây là sự phát triển ở bên trong con người."
      },
       { 
        type: 'fill-blank', 
        questionTextBeforeBlank: "Chúng ta được mời gọi lớn lên về thể xác, tinh thần và cả ", 
        questionTextAfterBlank: ".",
        options: [
            {id: 'ts_bm_p3_fb1', text: 'Đức tin'},
            {id: 'ts_bm_p3_fb2', text: 'địa vị'},
            {id: 'ts_bm_p3_fb3', text: 'kiến thức xã hội'}
        ],
        correctOptionId: 'ts_bm_p3_fb1',
        hint: 'Đây là khía cạnh thiêng liêng trong sự phát triển của người Kitô hữu.'
      }
    ],
  },

  // Phần 4: Củng cố về việc lớn lên trong Đức Tin
  {
    title: "EM LỚN KHÔN",
    xp: 20,
    nextLessonId: "themsuc-baimodau-l5",
    pages: [
        { 
            type: 'multiple-choice', 
            questionText: "Hành động nào thể hiện việc 'truyền bá đức tin'?", 
            options: [
              {id: 'ts_bm_p4_opt1', text: 'Sống tốt để làm gương cho bạn bè'}, 
              {id: 'ts_bm_p4_opt2', text: 'Giữ đức tin cho riêng mình'}, 
              {id: 'ts_bm_p4_opt3', text: 'Chỉ nói về đức tin trong nhà thờ'}
            ], 
            correctOptionId: 'ts_bm_p4_opt1', 
            hint: "Chứng tá đời sống là cách truyền bá đức tin hiệu quả."
        },
        { 
            type: 'true-false', 
            questionText: "Chỉ cần siêng năng cầu nguyện là đủ để lớn lên trong đức tin.", 
            correctAnswer: false, 
            hint: "Bài học nêu ra 3 việc cần làm: đào sâu giáo lý, cầu nguyện và truyền bá đức tin."
        },
        {
            type: 'sort',
            prompt: 'Sắp xếp các yếu tố của sự lớn lên toàn diện:',
            words: [
                {id: 'ts_bm_p4_w1', text: 'Lớn khôn về thể xác'},
                {id: 'ts_bm_p4_w2', text: 'Lớn khôn về tinh thần'},
                {id: 'ts_bm_p4_w3', text: 'Lớn lên trong Đức tin'}
            ],
            correctOrderIds: ['ts_bm_p4_w1', 'ts_bm_p4_w2', 'ts_bm_p4_w3']
        }
    ]
  },

  // Phần 5: Ôn tập tổng hợp
  {
    title: "EM LỚN KHÔN",
    xp: 25,
    nextLessonId: "themsuc-unit1-l1", // Trỏ đến bài học đầu tiên của Unit 1
    pages: [
      { 
        type: 'multiple-choice', 
        questionText: "Sự lớn khôn của con người bao gồm những khía cạnh nào?", 
        options: [
          {id: 'ts_bm_p5_opt1', text: 'Thể xác và tinh thần'}, 
          {id: 'ts_bm_p5_opt2', text: 'Chỉ có thể xác'}, 
          {id: 'ts_bm_p5_opt3', text: 'Chỉ có tinh thần'}
        ], 
        correctOptionId: 'ts_bm_p5_opt1'
      },
      { 
        type: 'fill-blank', 
        questionTextBeforeBlank: "Để lớn lên trong Đức tin, ta cần không ngừng đào sâu ", 
        questionTextAfterBlank: ".",
        options: [
          {id: 'ts_bm_p5_fb1', text: 'Giáo lý'}, 
          {id: 'ts_bm_p5_fb2', text: 'lịch sử'}, 
          {id: 'ts_bm_p5_fb3', text: 'khoa học'}
        ],
        correctOptionId: 'ts_bm_p5_fb1'
      },
      { 
        type: 'true-false', 
        questionText: "Theo gương Chúa Giê-su, chúng ta được mời gọi lớn lên và đẹp lòng Thiên Chúa và mọi người.",
        correctAnswer: true
      },
      { 
        type: 'multiple-choice', 
        questionText: "Việc nào sau đây KHÔNG được nhắc đến như một cách để lớn lên trong Đức Tin?", 
        options: [
          {id: 'ts_bm_p5_opt2', text: 'Siêng năng cầu nguyện'}, 
          {id: 'ts_bm_p5_opt3', text: 'Làm nhiều việc từ thiện'}, 
          {id: 'ts_bm_p5_opt4', text: 'Góp phần truyền bá đức tin'}
        ], 
        correctOptionId: 'ts_bm_p5_opt3',
        hint: "Mặc dù làm việc từ thiện là tốt, nhưng bài học tập trung vào 3 điểm chính khác."
      }
    ],
  },
];

export default baimodauLessons;
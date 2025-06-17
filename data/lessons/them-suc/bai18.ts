// v16/data/lessons/them-suc/bai18.ts
import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const bai18Lessons: LessonContentData[] = [
  // Phần 1: Định nghĩa và Phân loại Nhân đức
  {
    title: "NHÂN ĐỨC",
    xp: 25,
    nextLessonId: "themsuc-bai18-l2", // ID giả định
    pages: [
      { type: 'reading', passage: "“Ai cho mình đạo đức mà không kiềm chế miệng lưỡi, là tự dối lòng mình, vì đó chỉ là thứ đạo đức hão” (Gc 1,26)", durationSeconds: 15 },
      { 
        type: 'multiple-choice', 
        questionText: "Theo Thánh Gia-cô-bê, đạo đức thật sự cần đi đôi với việc gì?", 
        options: [
          {id: 'ts_b18_p1_opt1', text: 'Làm nhiều việc từ thiện'}, 
          {id: 'ts_b18_p1_opt2', text: 'Kiềm chế miệng lưỡi'}, 
          {id: 'ts_b18_p1_opt3', text: 'Siêng năng đọc kinh'},
        ], 
        correctOptionId: 'ts_b18_p1_opt2', 
        hint: "Thánh Gia-cô-bê nhấn mạnh đến sự kiểm soát bản thân trong lời ăn tiếng nói." 
      },
      { type: 'reading', passage: "Hỏi: Nhân đức là gì ?\nT. Nhân đức là thói quen tốt và bền vững giúp ta làm sự thiện cách dễ dàng hơn.", durationSeconds: 12 },
       { 
        type: 'fill-blank', 
        questionTextBeforeBlank: "Nhân đức là ", 
        questionTextAfterBlank: " tốt và bền vững giúp ta làm sự thiện cách dễ dàng hơn.",
        options: [
            {id: 'ts_b18_p1_fb1', text: 'thói quen'}, 
            {id: 'ts_b18_p1_fb2', text: 'suy nghĩ'}, 
            {id: 'ts_b18_p1_fb3', text: 'hành động'}
        ],
        correctOptionId: 'ts_b18_p1_fb1', 
        hint: "Nhân đức được hình thành qua sự lặp đi lặp lại của các hành vi tốt."
      },
      { type: 'reading', passage: "Hỏi: Có mấy thứ nhân đức ?\nT. Có hai thứ : - Một là các nhân đức nhân bản giúp ta hoàn thiện chính mình và sống tốt với mọi người. - Hai là các nhân đức đối thần, trực tiếp qui về Thiên Chúa, giúp ta có khả năng hành động như con cái Thiên Chúa và đáng hưởng sự sống đời đời.", durationSeconds: 20 },
      { 
        type: 'multiple-choice', 
        questionText: "Nhân đức nào giúp ta hoàn thiện chính mình và sống tốt với mọi người?", 
        options: [
          {id: 'ts_b18_p1_opt2', text: 'Nhân đức nhân bản'}, 
          {id: 'ts_b18_p1_opt3', text: 'Nhân đức đối thần'}
        ], 
        correctOptionId: 'ts_b18_p1_opt2', 
        hint: "Tên gọi của loại nhân đức này đã nói lên mục đích của nó." 
      },
    ],
  },

  // Phần 2: Các nhân đức nhân bản
  {
    title: "NHÂN ĐỨC",
    xp: 20,
    nextLessonId: "themsuc-bai18-l3",
    pages: [
      { type: 'reading', passage: "Hỏi: Có mấy nhân đức nhân bản ?\nT. Có nhiều nhân đức nhân bản, trong đó bốn nhân đức chính là : khôn ngoan, công bằng, dũng cảm và tiết độ.", durationSeconds: 15 },
      { 
        type: 'sort', 
        prompt: "Sắp xếp bốn nhân đức nhân bản chính:", 
        words: [
          {id: 'ts_b18_p2_w1', text: 'Khôn ngoan'}, 
          {id: 'ts_b18_p2_w2', text: 'Công bằng'}, 
          {id: 'ts_b18_p2_w3', text: 'Dũng cảm'},
          {id: 'ts_b18_p2_w4', text: 'Tiết độ'}
        ], 
        correctOrderIds: ['ts_b18_p2_w1', 'ts_b18_p2_w2', 'ts_b18_p2_w3', 'ts_b18_p2_w4'], 
        hint: "Đây là bốn nhân đức trụ cột của đời sống luân lý."
      },
      { 
        type: 'multiple-choice', 
        questionText: "Nhân đức nào sau đây KHÔNG phải là một trong bốn nhân đức nhân bản chính?", 
        options: [
          {id: 'ts_b18_p2_opt1', text: 'Khôn ngoan'}, 
          {id: 'ts_b18_p2_opt2', text: 'Khiêm nhường'}, 
          {id: 'ts_b18_p2_opt3', text: 'Công bằng'},
          {id: 'ts_b18_p2_opt4', text: 'Dũng cảm'}
        ], 
        correctOptionId: 'ts_b18_p2_opt2',
        hint: "Khiêm nhường là một nhân đức quan trọng, nhưng không thuộc bốn nhân đức trụ."
      },
    ],
  },

  // Phần 3: Các nhân đức đối thần (Tin, Cậy)
  {
    title: "NHÂN ĐỨC",
    xp: 25,
    nextLessonId: "themsuc-bai18-l4",
    pages: [
      { type: 'reading', passage: "Hỏi: Có mấy nhân đức đối thần ?\nT. Có ba nhân đức đối thần là Đức Tin, Đức Cậy và Đức Mến.", durationSeconds: 10 },
      {
        type: 'multiple-choice',
        questionText: 'Ba nhân đức đối thần là gì?',
        options: [
            {id: 'ts_b18_p3_opt1', text: 'Tin, Cậy, Mến'},
            {id: 'ts_b18_p3_opt2', text: 'Khôn ngoan, Công bằng, Dũng cảm'},
            {id: 'ts_b18_p3_opt3', text: 'Khó nghèo, Vâng lời, Khiết tịnh'}
        ],
        correctOptionId: 'ts_b18_p3_opt1',
        hint: 'Đây là ba nhân đức nền tảng hướng trực tiếp về Thiên Chúa.'
      },
      { type: 'reading', passage: "Hỏi: Đức Tin là gì ?\nT. Đức Tin là ơn Thiên Chúa ban, giúp ta trao phó trọn bản thân và đời mình cho Thiên Chúa, cùng đón nhận tất cả những gì Thiên Chúa đã mặc khải mà Hội thánh truyền lại cho ta.", durationSeconds: 18 },
      {
        type: 'fill-blank',
        questionTextBeforeBlank: "Đức Tin giúp ta ",
        questionTextAfterBlank: " trọn bản thân và đời mình cho Thiên Chúa.",
        options: [
            {id: 'ts_b18_p3_fb1', text: 'trao phó'},
            {id: 'ts_b18_p3_fb2', text: 'suy nghĩ'},
            {id: 'ts_b18_p3_fb3', text: 'học hỏi'}
        ],
        correctOptionId: 'ts_b18_p3_fb1'
      },
      { type: 'reading', passage: "Hỏi: Đức Cậy là gì ?\nT. Đức Cậy là ơn Thiên Chúa ban giúp ta dựa vào sức mạnh Chúa Thánh Thần mà vững lòng mong đợi hạnh phúc Nước Trời Chúa Giê-su đã hứa ban.", durationSeconds: 15 },
       {
        type: 'true-false',
        questionText: 'Nhờ Đức Cậy, ta mong đợi hạnh phúc Nước Trời bằng sức riêng của mình.',
        correctAnswer: false,
        hint: "Định nghĩa nói rõ ta phải 'dựa vào sức mạnh Chúa Thánh Thần'."
      }
    ],
  },

  // Phần 4: Đức Mến
  {
    title: "NHÂN ĐỨC",
    xp: 20,
    nextLessonId: "themsuc-bai18-l5",
    pages: [
        { type: 'reading', passage: "Hỏi: Đức Mến là gì ?\nT. Đức Mến là ơn Thiên Chúa ban, giúp ta kính mến Thiên Chúa trên hết mọi sự và lại vì Chúa mà yêu thương mọi người như chính bản thân.", durationSeconds: 15 },
        { 
            type: 'multiple-choice', 
            questionText: "Đức Mến bao gồm hai đối tượng nào?", 
            options: [
              {id: 'ts_b18_p4_opt1', text: 'Thiên Chúa và mọi người'}, 
              {id: 'ts_b18_p4_opt2', text: 'Bản thân và gia đình'}, 
              {id: 'ts_b18_p4_opt3', text: 'Hội Thánh và xã hội'}
            ], 
            correctOptionId: 'ts_b18_p4_opt1', 
            hint: "Đây là hai giới răn quan trọng nhất."
        },
        { 
            type: 'fill-blank', 
            questionTextBeforeBlank: "Ta yêu thương mọi người ", 
            questionTextAfterBlank: " như chính bản thân.",
            options: [
                {id: 'ts_b18_p4_fb1', text: 'vì Chúa'},
                {id: 'ts_b18_p4_fb2', text: 'vì họ tốt'},
                {id: 'ts_b18_p4_fb3', text: 'vì bổn phận'}
            ],
            correctOptionId: 'ts_b18_p4_fb1',
            hint: 'Tình yêu đối với tha nhân bắt nguồn từ tình yêu dành cho Thiên Chúa.'
        }
    ]
  },

  // Phần 5: Ôn tập tổng hợp
  {
    title: "NHÂN ĐỨC",
    xp: 30,
    nextLessonId: "themsuc-unitX-lY", // ID giả định
    pages: [
      { 
        type: 'multiple-choice', 
        questionText: "Nhân đức nào giúp ta trực tiếp qui về Thiên Chúa?", 
        options: [
          {id: 'ts_b18_p5_opt1', text: 'Nhân đức đối thần'}, 
          {id: 'ts_b18_p5_opt2', text: 'Nhân đức nhân bản'}, 
        ], 
        correctOptionId: 'ts_b18_p5_opt1'
      },
      { 
        type: 'true-false', 
        questionText: "'Tiết độ' là một trong ba nhân đức đối thần.",
        correctAnswer: false,
        hint: "Hãy nhớ lại 4 nhân đức nhân bản và 3 nhân đức đối thần."
      },
      { 
        type: 'sort',
        prompt: "Sắp xếp các nhân đức đối thần:",
        words: [
            {id: 'ts_b18_p5_w1', text: 'Đức Tin'},
            {id: 'ts_b18_p5_w2', text: 'Đức Cậy'},
            {id: 'ts_b18_p5_w3', text: 'Đức Mến'}
        ],
        correctOrderIds: ['ts_b18_p5_w1', 'ts_b18_p5_w2', 'ts_b18_p5_w3']
      },
      { 
        type: 'multiple-choice', 
        questionText: "Nhân đức nào giúp ta trao phó trọn vẹn đời mình cho Thiên Chúa?", 
        options: [
          {id: 'ts_b18_p5_opt2', text: 'Đức Tin'}, 
          {id: 'ts_b18_p5_opt3', text: 'Đức Cậy'}, 
          {id: 'ts_b18_p5_opt4', text: 'Đức Mến'}
        ], 
        correctOptionId: 'ts_b18_p5_opt2'
      }
    ],
  },
];

export default bai18Lessons;
// v16/data/lessons/them-suc/bai19.ts
import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const bai19Lessons: LessonContentData[] = [
  // Phần 1: Tội là gì?
  {
    title: "TỘI LỖI",
    xp: 20,
    nextLessonId: "themsuc-bai19-l2", // ID giả định
    pages: [
      { type: 'reading', passage: "“Khốn cho các người, hỡi các kinh sư và người Pha-ri-sêu giả hình ! các người rửa sạch bên ngoài chén đĩa, nhưng bên trong thì đầy những chuyện trộm cắp và vô độ” (Mt 23,25)", durationSeconds: 18 },
      { 
        type: 'multiple-choice', 
        questionText: "Trong đoạn Tin Mừng, Chúa Giê-su lên án người Pha-ri-sêu về tội gì?", 
        options: [
          {id: 'ts_b19_p1_opt1', text: 'Lười biếng'}, 
          {id: 'ts_b19_p1_opt2', text: 'Giả hình'}, 
          {id: 'ts_b19_p1_opt3', text: 'Kiêu ngạo'},
        ], 
        correctOptionId: 'ts_b19_p1_opt2', 
        hint: "Chúa Giê-su nhấn mạnh sự khác biệt giữa vẻ bên ngoài và nội tâm bên trong của họ." 
      },
      { type: 'reading', passage: "Hỏi: Tội là gì ?\nT. Tội là lời nói, việc làm hoặc ước muốn nghịch với Luật Chúa. Tội xúc phạm đến Thiên Chúa, gây tổn thương cho bản thân và cho tình liên đới với tha nhân.", durationSeconds: 15 },
      { 
        type: 'sort', 
        prompt: "Tội lỗi gây tổn thương cho những ai?",
        words: [
            {id: 'ts_b19_p1_w1', text: 'Thiên Chúa'}, 
            {id: 'ts_b19_p1_w2', text: 'Bản thân'}, 
            {id: 'ts_b19_p1_w3', text: 'Tha nhân'}
        ],
        correctOrderIds: ['ts_b19_p1_w1', 'ts_b19_p1_w2', 'ts_b19_p1_w3'],
        hint: "Tội lỗi ảnh hưởng đến cả ba mối tương quan quan trọng nhất."
      },
    ],
  },

  // Phần 2: Tội trọng và hậu quả
  {
    title: "TỘI LỖI",
    xp: 25,
    nextLessonId: "themsuc-bai19-l3",
    pages: [
      { type: 'reading', passage: "Hỏi: Thế nào là tội trọng ?\nT. Tội trọng là cố tình phạm luật Thiên Chúa trong những điều quan trọng mà ta kịp suy biết.", durationSeconds: 12 },
      { 
        type: 'true-false', 
        questionText: "Phạm một điều quan trọng nhưng không cố tình thì vẫn là tội trọng.",
        correctAnswer: false,
        hint: "Định nghĩa nhấn mạnh yếu tố 'cố tình' và 'kịp suy biết'."
      },
      { type: 'reading', passage: "Hỏi: Tội trọng làm hại ta thế nào ?\nT. Tội trọng phá hủy sự sống và phẩm giá cao qúy của con người ; đồng thời cắt đứt tình nghĩa với Thiên Chúa, và nếu không hối cải, thì sẽ phải xa cách Người đời đời.", durationSeconds: 18 },
      { 
        type: 'multiple-choice', 
        questionText: "Hậu quả nghiêm trọng nhất của tội trọng là gì?", 
        options: [
          {id: 'ts_b19_p2_opt1', text: 'Bị người khác chê cười'}, 
          {id: 'ts_b19_p2_opt2', text: 'Cắt đứt tình nghĩa với Thiên Chúa'}, 
          {id: 'ts_b19_p2_opt3', text: 'Cảm thấy buồn bã'}
        ], 
        correctOptionId: 'ts_b19_p2_opt2',
        hint: "Đây là hậu quả ảnh hưởng đến mối liên kết thiêng liêng của chúng ta."
      },
      { type: 'reading', passage: "Hỏi: Khi lỡ phạm tội trọng thì phải làm gì ?\nT. Phải thực lòng thống hối và lo liệu đi xưng tội ngay, đồng thời dùng mọi phương thế để không tái phạm nữa.", durationSeconds: 15 },
      { 
        type: 'fill-blank', 
        questionTextBeforeBlank: "Khi lỡ phạm tội trọng, ta phải thực lòng thống hối và lo liệu đi ", 
        questionTextAfterBlank: " ngay.",
        options: [
            {id: 'ts_b19_p2_fb1', text: 'xưng tội'},
            {id: 'ts_b19_p2_fb2', text: 'cầu nguyện'},
            {id: 'ts_b19_p2_fb3', text: 'làm việc tốt'}
        ],
        correctOptionId: 'ts_b19_p2_fb1',
        hint: "Đây là phương thế Chúa ban để giao hòa với Người sau khi phạm tội trọng."
      }
    ],
  },

  // Phần 3: Tội nhẹ và hậu quả
  {
    title: "TỘI LỖI",
    xp: 20,
    nextLessonId: "themsuc-bai19-l4",
    pages: [
      { type: 'reading', passage: "Hỏi: Thế nào là tội nhẹ ?\nT. Tội nhẹ là khi lỗi phạm một điều luật nhẹ hoặc một điều luật nặng nhưng chưa kịp suy biết đầy đủ hoặc chưa hoàn toàn ưng theo.", durationSeconds: 15 },
      {
        type: 'multiple-choice',
        questionText: 'Phạm một điều luật nặng nhưng không hoàn toàn ưng theo được coi là tội gì?',
        options: [
            {id: 'ts_b19_p3_opt1', text: 'Tội trọng'},
            {id: 'ts_b19_p3_opt2', text: 'Tội nhẹ'},
            {id: 'ts_b19_p3_opt3', text: 'Không phải là tội'}
        ],
        correctOptionId: 'ts_b19_p3_opt2',
        hint: "Sự ưng thuận hoàn toàn là một điều kiện để cấu thành tội trọng."
      },
      { type: 'reading', passage: "Hỏi: Tội nhẹ làm hại ta thế nào ?\nT. Tội nhẹ khiến ta giảm bớt lòng mến Chúa, dễ hướng chiều về điều xấu và dễ phạm tội trọng hơn.", durationSeconds: 12 },
      { 
        type: 'true-false', 
        questionText: "Tội nhẹ không nguy hiểm vì nó không ảnh hưởng đến lòng mến Chúa.",
        correctAnswer: false,
        hint: "Bài học nói rõ rằng tội nhẹ 'khiến ta giảm bớt lòng mến Chúa'."
      },
    ],
  },

  // Phần 4: Bảy mối tội đầu
  {
    title: "TỘI LỖI",
    xp: 25,
    nextLessonId: "themsuc-bai19-l5",
    pages: [
        { type: 'reading', passage: "Hỏi: Các tội ta phạm thường do những nết xấu nào ?\nT. Thường do bảy nết xấu này, quen gọi là bảy mối tội đầu : Một là kiêu ngạo, Hai là hà tiện, Ba là dâm ô, Bốn là hờn giận, Năm là mê ăn uống, Sáu là ghen ghét, Bảy là lười biếng.", durationSeconds: 20 },
        { 
            type: 'multiple-choice', 
            questionText: "Đâu là mối tội đứng đầu trong bảy mối tội đầu?", 
            options: [
              {id: 'ts_b19_p4_opt1', text: 'Kiêu ngạo'}, 
              {id: 'ts_b19_p4_opt2', text: 'Hà tiện'}, 
              {id: 'ts_b19_p4_opt3', text: 'Lười biếng'}
            ], 
            correctOptionId: 'ts_b19_p4_opt1', 
            hint: "Đây được coi là nguồn gốc của nhiều tội lỗi khác."
        },
        { 
            type: 'sort', 
            prompt: "Sắp xếp lại 3 trong số bảy mối tội đầu:",
            words: [
                {id: 'ts_b19_p4_w1', text: 'Dâm ô'},
                {id: 'ts_b19_p4_w2', text: 'Ghen ghét'},
                {id: 'ts_b19_p4_w3', text: 'Hờn giận'}
            ],
            correctOrderIds: ['ts_b19_p4_w1', 'ts_b19_p4_w2', 'ts_b19_p4_w3'],
        },
        {
            type: 'multiple-choice',
            questionText: 'Nết xấu nào sau đây KHÔNG thuộc bảy mối tội đầu?',
            options: [
                {id: 'ts_b19_p4_opt2', text: 'Mê ăn uống'},
                {id: 'ts_b19_p4_opt3', text: 'Nói dối'},
                {id: 'ts_b19_p4_opt4', text: 'Lười biếng'}
            ],
            correctOptionId: 'ts_b19_p4_opt3',
            hint: "Nói dối là một tội, nhưng không được liệt kê trong bảy mối tội đầu."
        }
    ]
  },

  // Phần 5: Ôn tập tổng hợp
  {
    title: "TỘI LỖI",
    xp: 30,
    nextLessonId: "themsuc-unitX-lY", // ID giả định
    pages: [
      { 
        type: 'multiple-choice', 
        questionText: "Đâu là sự khác biệt chính giữa tội trọng và tội nhẹ?", 
        options: [
          {id: 'ts_b19_p5_opt1', text: 'Mức độ cố tình và sự quan trọng của điều luật'}, 
          {id: 'ts_b19_p5_opt2', text: 'Tội trọng thì có người biết, tội nhẹ thì không ai biết'}, 
          {id: 'ts_b19_p5_opt3', text: 'Tội trọng làm ta buồn hơn tội nhẹ'}
        ], 
        correctOptionId: 'ts_b19_p5_opt1'
      },
      { 
        type: 'true-false', 
        questionText: "Tội nhẹ làm ta dễ phạm tội trọng hơn.",
        correctAnswer: true,
        hint: "Đây là một trong những tác hại nguy hiểm của tội nhẹ."
      },
      { 
        type: 'fill-blank', 
        questionTextBeforeBlank: "Các tội ta phạm thường do bảy nết xấu quen gọi là bảy mối ", 
        questionTextAfterBlank: " đầu.",
        options: [
          {id: 'ts_b19_p5_fb1', text: 'tội'}, 
          {id: 'ts_b19_p5_fb2', text: 'lỗi'}, 
          {id: 'ts_b19_p5_fb3', text: 'gốc'}
        ],
        correctOptionId: 'ts_b19_p5_fb1'
      },
      { 
        type: 'multiple-choice', 
        questionText: "Khi đã phạm tội trọng, giải pháp Hội Thánh đưa ra là gì?", 
        options: [
          {id: 'ts_b19_p5_opt2', text: 'Tự mình cầu nguyện xin tha thứ'}, 
          {id: 'ts_b19_p5_opt3', text: 'Đi xưng tội'}, 
          {id: 'ts_b19_p5_opt4', text: 'Làm nhiều việc thiện để bù lại'}
        ], 
        correctOptionId: 'ts_b19_p5_opt3'
      }
    ],
  },
];

export default bai19Lessons;
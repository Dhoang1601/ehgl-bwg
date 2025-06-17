// v16/data/lessons/them-suc/bai2.ts
import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const bai2Lessons: LessonContentData[] = [
  // Phần 1: Thiên Chúa sáng tạo con người theo hình ảnh Người
  {
    title: "THIÊN CHÚA TẠO DỰNG CON NGƯỜI",
    xp: 20,
    nextLessonId: "themsuc-unit2-l2", // ID giả định
    pages: [
      { type: 'reading', passage: "“Thiên Chúa sáng tạo con người theo hình ảnh mình” (St 1,27)", durationSeconds: 12 },
      { type: 'reading', passage: "Hỏi: Thiên Chúa tạo dựng con người làm sao ?\nThưa: Thiên Chúa tạo dựng con người theo hình ảnh Chúa, có khả năng nhận biết và yêu mến Người.", durationSeconds: 15 },
      { 
        type: 'multiple-choice', 
        questionText: "Theo bài học, 'hình ảnh Chúa' nơi con người có nghĩa là gì?", 
        options: [
          {id: 'ts_b2_p1_opt1', text: 'Có khả năng nhận biết và yêu mến Người'}, 
          {id: 'ts_b2_p1_opt2', text: 'Có ngoại hình giống Người'}, 
          {id: 'ts_b2_p1_opt3', text: 'Có quyền năng như Người'}
        ], 
        correctOptionId: 'ts_b2_p1_opt1', 
        hint: "Hình ảnh Thiên Chúa được thể hiện qua các khả năng tinh thần và thiêng liêng." 
      },
      { 
        type: 'fill-blank', 
        questionTextBeforeBlank: "Thiên Chúa sáng tạo con người theo ", 
        questionTextAfterBlank: " mình.",
        options: [
            {id: 'ts_b2_p1_fb_opt1', text: 'hình ảnh'}, 
            {id: 'ts_b2_p1_fb_opt2', text: 'suy nghĩ'}, 
            {id: 'ts_b2_p1_fb_opt3', text: 'lời nói'}
        ],
        correctOptionId: 'ts_b2_p1_fb_opt1', 
        hint: "Trích từ sách Sáng Thế 1,27."
      }
    ],
  },

  // Phần 2: Các đặc ân Thiên Chúa ban
  {
    title: "THIÊN CHÚA TẠO DỰNG CON NGƯỜI",
    xp: 20,
    nextLessonId: "themsuc-unit2-l3",
    pages: [
      { type: 'reading', passage: "Hỏi: Khi tạo dựng, Thiên Chúa đã ban cho con người những đặc ân nào ?\nThưa: Thiên Chúa đã ban cho tổ tông loài người được sống trong ơn nghĩa với Thiên Chúa, không phải đau khổ và không phải chết. Nhưng hạnh phúc ấy đã mất khi Tổ tông phạm tội.", durationSeconds: 18 },
      { 
        type: 'multiple-choice', 
        questionText: "Đâu là đặc ân Thiên Chúa đã ban cho tổ tông loài người lúc ban đầu?", 
        options: [
          {id: 'ts_b2_p2_opt1', text: 'Không phải đau khổ và không phải chết'}, 
          {id: 'ts_b2_p2_opt2', text: 'Biết trước tương lai'}, 
          {id: 'ts_b2_p2_opt3', text: 'Có thể bay lượn'},
          {id: 'ts_b2_p2_opt4', text: 'Không cần ăn uống'}
        ], 
        correctOptionId: 'ts_b2_p2_opt1', 
        hint: "Đây là tình trạng sống hòa hợp trọn vẹn với Thiên Chúa." 
      },
      { 
        type: 'true-false', 
        questionText: "Hạnh phúc và các đặc ân ban đầu của loài người bị đánh mất là do thiên tai.", 
        correctAnswer: false, 
        hint: "Nguyên nhân đến từ một hành động tự do của Tổ tông."
      }
    ],
  },

  // Phần 3: Bổn phận đáp trả của con người
  {
    title: "THIÊN CHÚA TẠO DỰNG CON NGƯỜI",
    xp: 20,
    nextLessonId: "themsuc-unit2-l4",
    pages: [
      { type: 'reading', passage: "Hỏi: Được Thiên Chúa ban cho sự sống và phẩm giá cao quí như vậy, ta phải làm gì ?\nThưa: Ta phải biết cám ơn và yêu mến Thiên Chúa, đồng thời cố gắng làm cho cuộc sống của ta và mọi người ngày càng thêm tươi đẹp, và đầy yêu thương.", durationSeconds: 18 },
      { 
        type: 'sort', 
        prompt: "Sắp xếp lại bổn phận của chúng ta:", 
        words: [
          {id: 'ts_b2_p3_w1', text: 'cám ơn và yêu mến Thiên Chúa'}, 
          {id: 'ts_b2_p3_w2', text: 'làm cho cuộc sống'}, 
          {id: 'ts_b2_p3_w3', text: 'tươi đẹp và yêu thương'}
        ], 
        correctOrderIds: ['ts_b2_p3_w1', 'ts_b2_p3_w2', 'ts_b2_p3_w3'], 
        hint: "Bổn phận của ta có hai chiều kích: với Chúa và với thế giới." 
      },
      { 
        type: 'multiple-choice', 
        questionText: "Ngoài việc cám ơn và yêu mến Thiên Chúa, ta còn có trách nhiệm gì?", 
        options: [
          {id: 'ts_b2_p3_opt1', text: 'Cố gắng làm cuộc sống của mình và mọi người tốt đẹp hơn'}, 
          {id: 'ts_b2_p3_opt2', text: 'Chỉ lo cho bản thân mình'}, 
          {id: 'ts_b2_p3_opt3', text: 'Không cần làm gì cả'}
        ], 
        correctOptionId: 'ts_b2_p3_opt1', 
        hint: "Tình yêu với Chúa được thể hiện qua hành động với tha nhân và thế giới."
      }
    ],
  },

  // Phần 4: Củng cố kiến thức
  {
    title: "THIÊN CHÚA TẠO DỰNG CON NGƯỜI",
    xp: 20,
    nextLessonId: "themsuc-unit2-l5",
    pages: [
      {
        type: 'true-false',
        questionText: "Con người được ban đặc ân sống trong ơn nghĩa với Chúa, nghĩa là sống trong tình bạn thân thiết với Người.",
        correctAnswer: true,
        hint: "Sống trong ơn nghĩa là một trạng thái kết hợp mật thiết với Thiên Chúa."
      },
      { 
        type: 'multiple-choice', 
        questionText: "Hành động nào thể hiện lòng biết ơn và yêu mến Thiên Chúa một cách thiết thực?", 
        options: [
          {id: 'ts_b2_p4_opt1', text: 'Bảo vệ môi trường sống'}, 
          {id: 'ts_b2_p4_opt2', text: 'Chỉ đi lễ Chúa Nhật'}, 
          {id: 'ts_b2_p4_opt3', text: 'Chỉ cầu nguyện cho bản thân'}
        ], 
        correctOptionId: 'ts_b2_p4_opt1', 
        hint: "Bảo vệ công trình sáng tạo của Chúa cũng là một cách yêu mến Người."
      },
      { 
        type: 'fill-blank', 
        questionTextBeforeBlank: "Vì được ban cho sự sống và ", 
        questionTextAfterBlank: " cao quý, ta phải biết cám ơn Thiên Chúa.",
        options: [
            {id: 'ts_b2_p4_fb_opt1', text: 'phẩm giá'}, 
            {id: 'ts_b2_p4_fb_opt2', text: 'vật chất'}, 
            {id: 'ts_b2_p4_fb_opt3', text: 'sức khỏe'}
        ],
        correctOptionId: 'ts_b2_p4_fb_opt1', 
        hint: "Đây là giá trị nội tại không thể mất của mỗi con người."
      }
    ]
  },

  // Phần 5: Ôn tập tổng hợp
  {
    title: "THIÊN CHÚA TẠO DỰNG CON NGƯỜI",
    xp: 30,
    nextLessonId: "themsuc-unit3-l1", // ID giả định cho bài học đầu của Unit 3
    pages: [
      { 
        type: 'multiple-choice', 
        questionText: "Thiên Chúa tạo dựng con người có khả năng gì?", 
        options: [
          {id: 'ts_b2_p5_opt1', text: 'Nhận biết và yêu mến Người'}, 
          {id: 'ts_b2_p5_opt2', text: 'Tự tạo ra hạnh phúc'}, 
          {id: 'ts_b2_p5_opt3', text: 'Sống bất tử trên trần gian'}
        ], 
        correctOptionId: 'ts_b2_p5_opt1', 
        hint: "Đây là ý nghĩa của việc được tạo dựng 'theo hình ảnh Chúa'."
      },
      { 
        type: 'true-false', 
        questionText: "Đặc ân ban đầu của loài người là được sống mãi mà không cần Thiên Chúa.",
        correctAnswer: false,
        hint: "Hạnh phúc ban đầu là được sống *trong ơn nghĩa với* Thiên Chúa."
      },
      { 
        type: 'fill-blank', 
        questionTextBeforeBlank: "Ta phải cố gắng làm cho cuộc sống của ta và mọi người ngày càng thêm tươi đẹp, và đầy ", 
        questionTextAfterBlank: ".",
        options: [
          {id: 'ts_b2_p5_fb_opt1', text: 'yêu thương'}, 
          {id: 'ts_b2_p5_fb_opt2', text: 'tiền bạc'}, 
          {id: 'ts_b2_p5_fb_opt3', text: 'thử thách'}
        ], 
        correctOptionId: 'ts_b2_p5_fb_opt1', 
        hint: "Đây là hoa trái của tình yêu đối với Chúa và tha nhân."
      },
      { 
        type: 'multiple-choice', 
        questionText: "Điều gì đã làm con người mất đi hạnh phúc thuở ban đầu?", 
        options: [
          {id: 'ts_b2_p5_opt2', text: 'Tội lỗi của Tổ tông'}, 
          {id: 'ts_b2_p5_opt3', text: 'Sự thay đổi của vũ trụ'}, 
          {id: 'ts_b2_p5_opt4', text: 'Thiên Chúa thay đổi ý định'}
        ], 
        correctOptionId: 'ts_b2_p5_opt2', 
        hint: "Sự đổ vỡ này đến từ hành vi của con người."
      }
    ],
  },
];

export default bai2Lessons;
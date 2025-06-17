// v16/data/lessons/them-suc/bai1.ts
import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const bai1Lessons: LessonContentData[] = [
  // Phần 1: Lời Chúa
  {
    title: "THIÊN CHÚA SÁNG TẠO VÀ QUAN PHÒNG",
    xp: 20,
    nextLessonId: "themsuc-unit1-l2", // ID giả định, cần điều chỉnh trong appStructureData.ts
    pages: [
      { type: 'reading', passage: "“Hãy xem chim trời : chúng không gieo, không gặt, không thu tích vào kho; thế mà Cha anh em trên trời vẫn nuôi chúng. Anh em lại chẳng quí giá hơn chúng sao ?” (Mt 6,26)", durationSeconds: 18 },
      { 
        type: 'multiple-choice', 
        questionText: "Lời Chúa về sự quan phòng của Người được trích từ Tin Mừng nào?", 
        options: [
          {id: 'ts_b1_p1_opt1', text: 'Mát-thêu (Mt 6,26)'}, 
          {id: 'ts_b1_p1_opt2', text: 'Mác-cô (Mc 6,26)'}, 
          {id: 'ts_b1_p1_opt3', text: 'Lu-ca (Lc 6,26)'}, 
          {id: 'ts_b1_p1_opt4', text: 'Gio-an (Ga 6,26)'}
        ], 
        correctOptionId: 'ts_b1_p1_opt1', 
        hint: "Đây là một phần trong Bài Giảng Trên Núi nổi tiếng của Chúa Giê-su." 
      },
      { 
        type: 'fill-blank', 
        questionTextBeforeBlank: "“...thế mà ", 
        questionTextAfterBlank: " anh em trên trời vẫn nuôi chúng.”",
        options: [
          {id: 'ts_b1_p1_fb_opt1', text: 'Cha'}, 
          {id: 'ts_b1_p1_fb_opt2', text: 'Chúa'}, 
          {id: 'ts_b1_p1_fb_opt3', text: 'Thần Khí'}
        ], 
        correctOptionId: 'ts_b1_p1_fb_opt1', 
        hint: "Chúa Giê-su nhấn mạnh mối tương quan thân tình giữa chúng ta và Thiên Chúa."
      }
    ],
  },

  // Phần 2: Câu hỏi 03
  {
    title: "THIÊN CHÚA SÁNG TẠO VÀ QUAN PHÒNG",
    xp: 15,
    nextLessonId: "themsuc-unit1-l3",
    pages: [
      { type: 'reading', passage: "Hỏi: Trong Kinh Tin Kính, ta tuyên xưng điều gì về Thiên Chúa sáng tạo?\nThưa: Ta tuyên xưng Thiên Chúa là Đấng tạo thành trời và đất, muôn vật hữu hình và vô hình.", durationSeconds: 15 },
      { 
        type: 'sort', 
        prompt: "Sắp xếp lại lời tuyên xưng trong Kinh Tin Kính:", 
        words: [
          {id: 'ts_b1_p2_w1', text: 'Thiên Chúa là Đấng'}, 
          {id: 'ts_b1_p2_w2', text: 'tạo thành trời và đất,'}, 
          {id: 'ts_b1_p2_w3', text: 'muôn vật hữu hình'}, 
          {id: 'ts_b1_p2_w4', text: 'và vô hình.'}
        ].sort(() => Math.random() - 0.5), 
        correctOrderIds: ['ts_b1_p2_w1', 'ts_b1_p2_w2', 'ts_b1_p2_w3', 'ts_b1_p2_w4'], 
        hint: "Đây là lời tuyên xưng quen thuộc về công trình sáng tạo của Thiên Chúa." 
      },
      { 
        type: 'true-false', 
        questionText: "Trong Kinh Tin Kính, ta chỉ tuyên xưng Thiên Chúa tạo thành những vật hữu hình.", 
        correctAnswer: false, 
        hint: "Hãy nhớ lại, lời kinh còn nhắc đến cả các thụ tạo mà mắt thường không thấy được." 
      }
    ],
  },

  // Phần 3: Câu hỏi 04
  {
    title: "THIÊN CHÚA SÁNG TẠO VÀ QUAN PHÒNG",
    xp: 15,
    nextLessonId: "themsuc-unit1-l4",
    pages: [
      { type: 'reading', passage: "Hỏi: Vì sao Thiên Chúa sáng tạo trời đất muôn vật ?\nThưa: Thiên Chúa sáng tạo trời đất muôn vật để biểu lộ và thông ban vinh quang của Người.", durationSeconds: 12 },
      { 
        type: 'multiple-choice', 
        questionText: "Thiên Chúa sáng tạo muôn vật với mục đích chính là gì?", 
        options: [
          {id: 'ts_b1_p3_opt1', text: 'Để biểu lộ và thông ban vinh quang của Người'}, 
          {id: 'ts_b1_p3_opt2', text: 'Để cho con người cai quản'}, 
          {id: 'ts_b1_p3_opt3', text: 'Vì Người cảm thấy cô đơn'}, 
          {id: 'ts_b1_p3_opt4', text: 'Để thử thách loài người'}
        ], 
        correctOptionId: 'ts_b1_p3_opt1', 
        hint: "Mục đích của việc sáng tạo xuất phát từ chính bản tính yêu thương và tốt lành của Thiên Chúa." 
      }
    ],
  },

  // Phần 4: Câu hỏi 05
  {
    title: "THIÊN CHÚA SÁNG TẠO VÀ QUAN PHÒNG",
    xp: 20,
    nextLessonId: "themsuc-unit1-l5",
    pages: [
      { type: 'reading', passage: "Hỏi: Thiên Chúa có chăm sóc những loài Chúa đã sáng tạo không ?\nThưa: Thiên Chúa vẫn tiếp tục chăm sóc và hướng dẫn mọi loài thụ tạo, để vũ trụ tiến dần đến mức hoàn hảo như Chúa muốn. Đó là sự quan phòng.", durationSeconds: 15 },
      { 
        type: 'fill-blank', 
        questionTextBeforeBlank: "Việc Thiên Chúa chăm sóc và hướng dẫn mọi loài thụ tạo được gọi là sự ", 
        questionTextAfterBlank: ".",
        options: [
          {id: 'ts_b1_p4_opt1', text: 'quan phòng'}, 
          {id: 'ts_b1_p4_opt2', text: 'sáng tạo'}, 
          {id: 'ts_b1_p4_opt3', text: 'cứu chuộc'}
        ], 
        correctOptionId: 'ts_b1_p4_opt1', 
        hint: "Đây là một thuật ngữ thần học quan trọng mô tả sự chăm sóc không ngừng của Thiên Chúa." 
      },
      { 
        type: 'true-false', 
        questionText: "Thiên Chúa tạo dựng xong rồi để vũ trụ tự phát triển mà không can thiệp vào nữa.", 
        correctAnswer: false, 
        hint: "Bài học định nghĩa sự quan phòng là việc Thiên Chúa *vẫn tiếp tục* chăm sóc." 
      }
    ],
  },

  // Phần 5: Câu hỏi 06
  {
    title: "THIÊN CHÚA SÁNG TẠO VÀ QUAN PHÒNG",
    xp: 25,
    nextLessonId: "themsuc-unit2-l1", // ID giả định cho bài học đầu tiên của Unit 2
    pages: [
      { type: 'reading', passage: "Hỏi: Ta phải có thái độ nào đối với Đấng Sáng Tạo?\nThưa: Ta phải luôn sống tâm tình con thảo, yêu mến, tôn thờ, phó thác vào Người và cùng với mọi người bảo vệ, phát triển thế giới ngày càng tốt đẹp hơn.", durationSeconds: 18 },
      { 
        type: 'multiple-choice', 
        questionText: "Đâu là thái độ KHÔNG được nhắc đến trong bài học mà ta cần có với Đấng Sáng Tạo?", 
        options: [
          {id: 'ts_b1_p5_opt1', text: 'Yêu mến và tôn thờ'}, 
          {id: 'ts_b1_p5_opt2', text: 'Sợ hãi và xa cách'}, 
          {id: 'ts_b1_p5_opt3', 'text': 'Phó thác vào Người'},
          {id: 'ts_b1_p5_opt4', text: 'Sống tâm tình con thảo'}
        ], 
        correctOptionId: 'ts_b1_p5_opt2', 
        hint: "Mối quan hệ với Thiên Chúa được xây dựng trên tình yêu, không phải sự sợ hãi."
      },
      { 
        type: 'sort', 
        prompt: "Ngoài tâm tình với Chúa, ta còn có trách nhiệm gì với thế giới?", 
        words: [
          {id: 'ts_b1_p5_w1', text: 'bảo vệ và'}, 
          {id: 'ts_b1_p5_w2', text: 'phát triển thế giới'}, 
          {id: 'ts_b1_p5_w3', text: 'ngày càng tốt đẹp hơn'}
        ], 
        correctOrderIds: ['ts_b1_p5_w1', 'ts_b1_p5_w2', 'ts_b1_p5_w3'], 
        hint: "Đây là trách nhiệm của chúng ta đối với công trình sáng tạo của Chúa."
      }
    ],
  },
];

export default bai1Lessons;
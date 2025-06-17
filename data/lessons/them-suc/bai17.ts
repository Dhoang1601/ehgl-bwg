// v16/data/lessons/them-suc/bai17.ts
import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const bai17Lessons: LessonContentData[] = [
  // Phần 1: Tự do là gì?
  {
    title: "TỰ DO CỦA CON NGƯỜI",
    xp: 25,
    nextLessonId: "themsuc-bai17-l2", // ID giả định
    pages: [
      { type: 'reading', passage: "“Chúa là Thần Khí, và ở đâu có Thần Khí của Chúa, thì ở đó có tự do” (2 Cr 3,17)", durationSeconds: 15 },
      { 
        type: 'fill-blank', 
        questionTextBeforeBlank: "Ở đâu có Thần Khí của Chúa, thì ở đó có ", 
        questionTextAfterBlank: ".",
        options: [
            {id: 'ts_b17_p1_fb1', text: 'tự do'}, 
            {id: 'ts_b17_p1_fb2', text: 'bình an'}, 
            {id: 'ts_b17_p1_fb3', text: 'sự thật'}
        ],
        correctOptionId: 'ts_b17_p1_fb1', 
        hint: "Thần Khí Chúa giải thoát chúng ta khỏi mọi ràng buộc."
      },
      { type: 'reading', passage: "Hỏi: Tự do là gì ?\nT. Tự do là khả năng chọn lựa, nhờ đó mà con người có thể cân nhắc, quyết định và chịu trách nhiệm về các hành vi của mình.", durationSeconds: 15 },
      { 
        type: 'multiple-choice', 
        questionText: "Theo định nghĩa, tự do trước hết là khả năng gì?", 
        options: [
          {id: 'ts_b17_p1_opt1', text: 'Làm điều mình thích'}, 
          {id: 'ts_b17_p1_opt2', text: 'Chịu trách nhiệm'}, 
          {id: 'ts_b17_p1_opt3', text: 'Chọn lựa'},
          {id: 'ts_b17_p1_opt4', text: 'Cân nhắc'}
        ], 
        correctOptionId: 'ts_b17_p1_opt3', 
        hint: "Đây là cốt lõi của sự tự do." 
      },
       { 
        type: 'true-false', 
        questionText: "Tự do có nghĩa là con người không phải chịu trách nhiệm về hành vi của mình.",
        correctAnswer: false,
        hint: "Định nghĩa nói rõ tự do gắn liền với việc chịu trách nhiệm."
      },
    ],
  },

  // Phần 2: Tự do đích thực
  {
    title: "TỰ DO CỦA CON NGƯỜI",
    xp: 20,
    nextLessonId: "themsuc-bai17-l3",
    pages: [
      { type: 'reading', passage: "Hỏi: Khi nào con người được tự do đích thực ?\nT. Là khi con người biết dùng tự do để phục vụ điều thiện. Tự do ấy đạt tới mức hoàn hảo khi qui hướng về Chúa là Sự Thiện Tuyệt Đối.", durationSeconds: 18 },
      { 
        type: 'multiple-choice', 
        questionText: "Con người được tự do đích thực khi nào?", 
        options: [
          {id: 'ts_b17_p2_opt1', text: 'Khi làm mọi điều mình muốn'}, 
          {id: 'ts_b17_p2_opt2', text: 'Khi không ai kiểm soát'}, 
          {id: 'ts_b17_p2_opt3', text: 'Khi biết dùng tự do để phục vụ điều thiện'}
        ], 
        correctOptionId: 'ts_b17_p2_opt3',
        hint: "Tự do thật sự không phải là vô kỷ luật, mà là hướng về sự tốt lành."
      },
      { 
        type: 'fill-blank', 
        questionTextBeforeBlank: "Tự do đạt tới mức hoàn hảo khi qui hướng về ", 
        questionTextAfterBlank: " là Sự Thiện Tuyệt Đối.",
        options: [
          {id: 'ts_b17_p2_fb1', text: 'Chúa'},
          {id: 'ts_b17_p2_fb2', text: 'bản thân'},
          {id: 'ts_b17_p2_fb3', text: 'xã hội'}
        ],
        correctOptionId: 'ts_b17_p2_fb1',
        hint: "Đích đến cuối cùng của tự do là chính nguồn cội của mọi sự thiện."
      }
    ],
  },

  // Phần 3: Tầm quan trọng và trách nhiệm của Tự do
  {
    title: "TỰ DO CỦA CON NGƯỜI",
    xp: 20,
    nextLessonId: "themsuc-bai17-l4",
    pages: [
      { type: 'reading', passage: "Hỏi: Tự do quan trọng thế nào ?\nT. Tự do đem lại giá trị luân lý cho các hành vi của con người. Mỗi người phải chịu trách nhiệm về những gì mình làm một cách cố ý, tức là có ý thức và tự do.", durationSeconds: 18 },
      { 
        type: 'fill-blank', 
        questionTextBeforeBlank: "Tự do đem lại ", 
        questionTextAfterBlank: " cho các hành vi của con người.",
        options: [
          {id: 'ts_b17_p3_fb1', text: 'giá trị luân lý'},
          {id: 'ts_b17_p3_fb2', text: 'sự giàu có'},
          {id: 'ts_b17_p3_fb3', text: 'niềm vui tức thời'}
        ],
        correctOptionId: 'ts_b17_p3_fb1',
        hint: "Nếu không có tự do, hành vi của con người không thể được xem là tốt hay xấu."
      },
      { 
        type: 'multiple-choice', 
        questionText: "Một người phải chịu trách nhiệm về hành vi của mình khi hành động đó được thực hiện một cách...", 
        options: [
          {id: 'ts_b17_p3_opt1', text: 'vô tình'}, 
          {id: 'ts_b17_p3_opt2', text: 'bị ép buộc'}, 
          {id: 'ts_b17_p3_opt3', text: 'cố ý (có ý thức và tự do)'},
        ], 
        correctOptionId: 'ts_b17_p3_opt3',
        hint: "Trách nhiệm chỉ phát sinh khi có sự tham gia của ý chí."
      },
    ],
  },

  // Phần 4: Lạm dụng Tự do
  {
    title: "TỰ DO CỦA CON NGƯỜI",
    xp: 20,
    nextLessonId: "themsuc-bai17-l5",
    pages: [
        { type: 'reading', passage: "Hỏi: Con người có thể lạm dụng tự do của mình để làm điều xấu không ?\nT. Con người có thể lạm dụng tự do để chối bỏ tình yêu Thiên Chúa và khi đó trở thành nô lệ tội lỗi.", durationSeconds: 15 },
        { 
            type: 'multiple-choice', 
            questionText: "Khi lạm dụng tự do để làm điều xấu, con người trở thành nô lệ cho điều gì?", 
            options: [
              {id: 'ts_b17_p4_opt1', text: 'Tội lỗi'}, 
              {id: 'ts_b17_p4_opt2', text: 'Sự giàu sang'}, 
              {id: 'ts_b17_p4_opt3', text: 'Người khác'}
            ], 
            correctOptionId: 'ts_b17_p4_opt1', 
            hint: "Việc chọn lựa điều xấu sẽ trói buộc chúng ta, thay vì giải thoát."
        },
        { 
            type: 'true-false', 
            questionText: "Lạm dụng tự do để làm điều xấu là một cách thể hiện sự tự do đích thực.", 
            correctAnswer: false, 
            hint: "Làm điều xấu thực chất là đánh mất tự do và trở thành nô lệ cho tội lỗi."
        }
    ]
  },

  // Phần 5: Ôn tập tổng hợp
  {
    title: "TỰ DO CỦA CON NGƯỜI",
    xp: 30,
    nextLessonId: "themsuc-unitX-lY", // ID giả định
    pages: [
      { 
        type: 'multiple-choice', 
        questionText: "Tự do là khả năng giúp con người có thể làm gì?", 
        options: [
          {id: 'ts_b17_p5_opt1', text: 'Cân nhắc, quyết định và chịu trách nhiệm'}, 
          {id: 'ts_b17_p5_opt2', text: 'Làm mọi thứ không giới hạn'}, 
          {id: 'ts_b17_p5_opt3', text: 'Trốn tránh trách nhiệm'}
        ], 
        correctOptionId: 'ts_b17_p5_opt1'
      },
      { 
        type: 'true-false', 
        questionText: "Con người đạt tới tự do hoàn hảo khi qui hướng về Chúa.",
        correctAnswer: true,
      },
      { 
        type: 'fill-blank', 
        questionTextBeforeBlank: "Lạm dụng tự do để chối bỏ tình yêu Thiên Chúa sẽ khiến con người trở thành ", 
        questionTextAfterBlank: " tội lỗi.",
        options: [
          {id: 'ts_b17_p5_fb1', text: 'nô lệ'}, 
          {id: 'ts_b17_p5_fb2', text: 'bạn hữu'}, 
          {id: 'ts_b17_p5_fb3', text: 'chủ nhân'}
        ],
        correctOptionId: 'ts_b17_p5_fb1'
      },
      { 
        type: 'multiple-choice', 
        questionText: "Tại sao tự do lại quan trọng đối với hành vi của con người?", 
        options: [
          {id: 'ts_b17_p5_opt2', text: 'Vì nó mang lại tiền bạc'}, 
          {id: 'ts_b17_p5_opt3', text: 'Vì nó đem lại giá trị luân lý'}, 
          {id: 'ts_b17_p5_opt4', text: 'Vì nó giúp ta nổi tiếng'}
        ], 
        correctOptionId: 'ts_b17_p5_opt3'
      }
    ],
  },
];

export default bai17Lessons;
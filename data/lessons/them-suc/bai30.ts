// v16/data/lessons/them-suc/bai30.ts
import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const bai30Lessons: LessonContentData[] = [
  // Phần 1: Giới thiệu về Phụng Vụ
  {
    title: "PHỤNG VỤ",
    xp: 20,
    nextLessonId: "themsuc-bai30-l2", // ID giả định
    pages: [
      { type: 'reading', passage: "“Hằng năm, cha mẹ Đức Giê-su trẩy hội đền Giê-ru-sa-lem mừng lễ Vượt Qua” (Lc 2,41)", durationSeconds: 15 },
      { type: 'reading', passage: "Hỏi: Phụng vụ là gì ?\nThưa: Phụng vụ là việc tôn thờ chính thức của toàn thể Hội Thánh để tôn vinh Thiên Chúa Ba Ngôi và thánh hóa con người.", durationSeconds: 15 },
      { 
        type: 'multiple-choice', 
        questionText: "Phụng vụ có hai mục đích chính là gì?", 
        options: [
          {id: 'ts_b30_p1_opt1', text: 'Tôn vinh Thiên Chúa và thánh hóa con người'}, 
          {id: 'ts_b30_p1_opt2', text: 'Tưởng nhớ các thánh và cầu cho các linh hồn'}, 
          {id: 'ts_b30_p1_opt3', text: 'Học hỏi giáo lý và làm việc bác ái'},
        ], 
        correctOptionId: 'ts_b30_p1_opt1', 
        hint: "Hai mục đích này hướng về Thiên Chúa và hướng về con người." 
      },
      { 
        type: 'fill-blank', 
        questionTextBeforeBlank: "Phụng vụ là việc tôn thờ chính thức của toàn thể ", 
        questionTextAfterBlank: ".",
        options: [
            {id: 'ts_b30_p1_fb_opt1', text: 'Hội Thánh'}, 
            {id: 'ts_b30_p1_fb_opt2', text: 'Giáo xứ'}, 
            {id: 'ts_b30_p1_fb_opt3', text: 'Giáo phận'}
        ],
        correctOptionId: 'ts_b30_p1_fb_opt1', 
        hint: "Phụng vụ là hành động của toàn thể cộng đoàn đức tin."
      }
    ],
  },

  // Phần 2: Tầm quan trọng của Phụng Vụ
  {
    title: "PHỤNG VỤ",
    xp: 25,
    nextLessonId: "themsuc-bai30-l3",
    pages: [
      { type: 'reading', passage: "Hỏi:Phụng Vụ có quan trọng không ?\nThưa: Phụng Vụ rất quan trọng vì những lẽ này :\n- Một là Phụng Vụ cho ta tham dự vào việc cầu nguyện của Chúa Ki-tô, hướng lên Chúa Cha trong Chúa Thánh Thần.\n- Hai là Phụng Vụ là nguồn mạch sự sống của Hội Thánh.\n- Ba là Phụng Vụ nhằm giáo huấn và hoán cải Dân Chúa.", durationSeconds: 20 },
      { 
        type: 'multiple-choice', 
        questionText: "Đâu KHÔNG phải là lý do cho thấy sự quan trọng của Phụng Vụ?", 
        options: [
          {id: 'ts_b30_p2_opt1', text: 'Là nguồn mạch sự sống của Hội Thánh'}, 
          {id: 'ts_b30_p2_opt2', text: 'Là một truyền thống văn hóa tốt đẹp'}, 
          {id: 'ts_b30_p2_opt3', text: 'Nhằm giáo huấn và hoán cải Dân Chúa'},
          {id: 'ts_b30_p2_opt4', text: 'Cho ta tham dự vào việc cầu nguyện của Chúa Ki-tô'}
        ], 
        correctOptionId: 'ts_b30_p2_opt2', 
        hint: "Sự quan trọng của Phụng vụ mang tính thần học và thiêng liêng, không chỉ là văn hóa." 
      },
      { 
        type: 'sort', 
        prompt: "Sắp xếp 3 lý do cho thấy Phụng Vụ quan trọng:", 
        words: [
          {id: 'ts_b30_p2_w1', text: 'Tham dự vào lời cầu nguyện của Chúa Kitô'}, 
          {id: 'ts_b30_p2_w2', text: 'Nguồn mạch sự sống Hội Thánh'}, 
          {id: 'ts_b30_p2_w3', text: 'Giáo huấn và hoán cải Dân Chúa'}
        ], 
        correctOrderIds: ['ts_b30_p2_w1', 'ts_b30_p2_w2', 'ts_b30_p2_w3'], 
        hint: "Hãy nhớ lại 3 lý do được liệt kê trong bài học."
      }
    ],
  },

  // Phần 3: Ngày Chúa Nhật và Năm Phụng Vụ
  {
    title: "PHỤNG VỤ",
    xp: 25,
    nextLessonId: "themsuc-bai30-l4",
    pages: [
      { type: 'reading', passage: "Hỏi: Ngày Chúa nhật quan trọng thế nào trong cử hành Phụng vụ ?\nT. Ngày Chúa nhật rất quan trọng vì là “Ngày của Chúa”, ngày Chúa đã Phục sinh. Vì thế, ngày Chúa nhật là nền tảng và trung tâm của cả năm Phụng vụ.", durationSeconds: 15 },
      { type: 'reading', passage: "Hỏi: Năm Phụng vụ là gì ?\nT. Năm Phụng vụ là thời gian Hội thánh cử hành các mầu nhiệm Chúa Ki-tô theo chu kỳ hằng năm.", durationSeconds: 12 },
      { 
        type: 'true-false', 
        questionText: "Ngày Chúa Nhật là trung tâm của cả năm Phụng vụ vì đó là ngày Chúa Giáng sinh.", 
        correctAnswer: false, 
        hint: "Sự kiện trọng đại nào của Chúa Giêsu diễn ra vào ngày thứ nhất trong tuần?"
      },
      { 
        type: 'fill-blank', 
        questionTextBeforeBlank: "Năm Phụng vụ là thời gian Hội thánh cử hành các ", 
        questionTextAfterBlank: " Chúa Ki-tô theo chu kỳ hằng năm.",
        options: [
            {id: 'ts_b30_p3_fb_opt1', text: 'mầu nhiệm'}, 
            {id: 'ts_b30_p3_fb_opt2', text: 'phép lạ'}, 
            {id: 'ts_b30_p3_fb_opt3', text: 'bài giảng'}
        ],
        correctOptionId: 'ts_b30_p3_fb_opt1', 
        hint: "Năm Phụng Vụ giúp chúng ta sống lại toàn bộ cuộc đời và công trình cứu độ của Chúa."
      }
    ],
  },

  // Phần 4: Các Mùa Phụng Vụ
  {
    title: "PHỤNG VỤ",
    xp: 20,
    nextLessonId: "themsuc-bai30-l5",
    pages: [
      { type: 'reading', passage: "Hỏi: Năm Phụng vụ được tổ chức thế nào ?\nT. Năm Phụng vụ được tổ chức thành các mùa, là Mùa Vọng, mùa Giáng sinh, mùa Chay, mùa Phục sinh và mùa thường niên. Hội thánh cử hành năm Phụng vụ để giúp ta sống mầu nhiệm Chúa Ki-tô, hầu chuẩn bị đón Người trở lại vinh quang.", durationSeconds: 20 },
      { 
        type: 'sort', 
        prompt: "Sắp xếp các mùa Phụng Vụ theo thứ tự:", 
        words: [
          {id: 'ts_b30_p4_w1', text: 'Mùa Vọng'}, 
          {id: 'ts_b30_p4_w2', text: 'Mùa Giáng sinh'}, 
          {id: 'ts_b30_p4_w3', text: 'Mùa Chay'},
          {id: 'ts_b30_p4_w4', text: 'Mùa Phục sinh'},
          {id: 'ts_b30_p4_w5', text: 'Mùa Thường niên'}
        ], 
        correctOrderIds: ['ts_b30_p4_w1', 'ts_b30_p4_w2', 'ts_b30_p4_w3', 'ts_b30_p4_w4', 'ts_b30_p4_w5'], 
        hint: "Năm Phụng Vụ bắt đầu bằng việc trông đợi Chúa đến."
      },
      { 
        type: 'multiple-choice', 
        questionText: "Mục đích của việc cử hành năm Phụng vụ là gì?", 
        options: [
          {id: 'ts_b30_p4_opt1', text: 'Giúp ta sống mầu nhiệm Chúa Kitô và chuẩn bị đón Người trở lại'}, 
          {id: 'ts_b30_p4_opt2', text: 'Để có nhiều ngày nghỉ lễ trong năm'}, 
          {id: 'ts_b30_p4_opt3', text: 'Để nhớ lại các sự kiện lịch sử'}
        ], 
        correctOptionId: 'ts_b30_p4_opt1', 
        hint: "Mục đích không chỉ là tưởng nhớ quá khứ, mà còn hướng đến tương lai."
      }
    ]
  },

  // Phần 5: Ôn tập tổng hợp
  {
    title: "PHỤNG VỤ",
    xp: 30,
    nextLessonId: "themsuc-unitX-lY", // ID giả định cho bài học tiếp theo
    pages: [
      { 
        type: 'multiple-choice', 
        questionText: "Phụng vụ là việc tôn thờ chính thức của ai?", 
        options: [
          {id: 'ts_b30_p5_opt1', text: 'Toàn thể Hội Thánh'}, 
          {id: 'ts_b30_p5_opt2', text: 'Chỉ các linh mục và tu sĩ'}, 
          {id: 'ts_b30_p5_opt3', text: 'Mỗi cá nhân riêng lẻ'}
        ], 
        correctOptionId: 'ts_b30_p5_opt1', 
        hint: "Đây là hành động của cả một cộng đoàn."
      },
      { 
        type: 'true-false', 
        questionText: "Phụng Vụ chỉ nhằm mục đích giáo huấn Dân Chúa.",
        correctAnswer: false,
        hint: "Bài học liệt kê ba lý do quan trọng. Giáo huấn chỉ là một trong số đó."
      },
      { 
        type: 'fill-blank', 
        questionTextBeforeBlank: "Ngày Chúa nhật là ____ và trung tâm của cả năm Phụng vụ.", 
        questionTextAfterBlank: "",
        options: [
          {id: 'ts_b30_p5_fb_opt1', text: 'nền tảng'}, 
          {id: 'ts_b30_p5_fb_opt2', text: 'khởi đầu'}, 
          {id: 'ts_b30_p5_fb_opt3', text: 'kết thúc'}
        ], 
        correctOptionId: 'ts_b30_p5_fb_opt1', 
        hint: "Đây là ngày quan trọng nhất trong tuần."
      },
      { 
        type: 'multiple-choice', 
        questionText: "Mùa nào sau đây KHÔNG phải là một mùa trong năm Phụng vụ?", 
        options: [
          {id: 'ts_b30_p5_opt2', text: 'Mùa Vọng'}, 
          {id: 'ts_b30_p5_opt3', text: 'Mùa Gặt'}, 
          {id: 'ts_b30_p5_opt4', text: 'Mùa Chay'},
          {id: 'ts_b30_p5_opt5', text: 'Mùa Phục Sinh'}
        ], 
        correctOptionId: 'ts_b30_p5_opt3', 
        hint: "Hãy nhớ lại 5 mùa Phụng Vụ đã được liệt kê."
      }
    ],
  },
];

export default bai30Lessons;
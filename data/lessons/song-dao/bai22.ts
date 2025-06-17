// v16/data/lessons/song-dao/bai22.ts
import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const bai22Lessons: LessonContentData[] = [
    // Phần 1
    {
        title: "HỘI THÁNH CỬ HÀNH PHỤNG VỤ",
        xp: 20,
        nextLessonId: "songdao-bai22-l2",
        pages: [
            { type: 'reading', passage: "“Họ đồng tâm nhất trí, ngày ngày chuyên cần đến Đền thờ. Khi làm lễ bẻ bánh tại tư gia, họ dùng bữa với lòng đơn sơ vui vẻ. Họ ca tụng Thiên Chúa” (Cv 3,46)", durationSeconds: 15 },
            { type: 'reading', passage: "Hỏi: Những ai được cử hành Phụng vụ của Hội thánh ?\nT. Toàn thể Dân Chúa, vì tất cả đều có chức tư tế chung ; Tuy nhiên một số tín hữu được tuyển chọn qua Bí tích Truyền chức thánh để cử hành nhân danh Chúa Ki-tô.", durationSeconds: 18 },
            {
                type: 'true-false',
                questionText: 'Chỉ có các linh mục mới được cử hành Phụng vụ.',
                correctAnswer: false,
                hint: 'Bài học nói rằng "Toàn thể Dân Chúa" được cử hành Phụng vụ.'
            }
        ]
    },
    // Phần 2
    {
        title: "HỘI THÁNH CỬ HÀNH PHỤNG VỤ",
        xp: 25,
        nextLessonId: "songdao-bai22-l3",
        pages: [
            { type: 'reading', passage: "Hỏi: Cử hành phụng vụ gồm những yếu tố nào ?\nT. Cử hành phụng vụ gồm hai yếu tố chính này : - Một là các dấu chỉ và biểu tượng để diễn tả và thực hiện hành động cứu độ của Chúa Ki-tô. - Hai là lời nói và hành động, qua đó con người gặp gỡ và đối thoại với Thiên Chúa.", durationSeconds: 20 },
            {
                type: 'sort',
                prompt: 'Sắp xếp hai yếu tố chính của việc cử hành phụng vụ:',
                words: [
                    {id: 'sd_b22_p2_w1', text: 'Các dấu chỉ và biểu tượng'},
                    {id: 'sd_b22_p2_w2', text: 'Lời nói và hành động'}
                ],
                correctOrderIds: ['sd_b22_p2_w1', 'sd_b22_p2_w2'],
            },
        ]
    },
    // Phần 3
    {
        title: "HỘI THÁNH CỬ HÀNH PHỤNG VỤ",
        xp: 20,
        nextLessonId: "songdao-bai22-l4",
        pages: [
            { type: 'reading', passage: "Hỏi: Ngày Chúa nhật quan trọng thế nào trong cử hành Phụng vụ ?\nT. Ngày Chúa nhật rất quan trọng vì là “Ngày của Chúa”, ngày Chúa đã Phục sinh. Vì thế, ngày Chúa nhật là nền tảng và trung tâm của cả năm Phụng vụ.", durationSeconds: 18 },
            {
                type: 'fill-blank',
                questionTextBeforeBlank: "Ngày Chúa nhật là nền tảng và ",
                questionTextAfterBlank: " của cả năm Phụng vụ.",
                options: [{id: 'sd_b22_p3_fb1', text: 'trung tâm'}, {id: 'sd_b22_p3_fb2', text: 'khởi đầu'}, {id: 'sd_b22_p3_fb3', text: 'kết thúc'}],
                correctOptionId: 'sd_b22_p3_fb1',
            }
        ]
    },
    // Phần 4
    {
        title: "HỘI THÁNH CỬ HÀNH PHỤNG VỤ",
        xp: 25,
        nextLessonId: "songdao-bai22-l5",
        pages: [
            { type: 'reading', passage: "Hỏi: Những việc nào là việc Phụng vụ ?\nT. Là Thánh lễ, các Bí tích và Các Giờ kinh Phụng vụ.", durationSeconds: 10 },
            {
                type: 'multiple-choice',
                questionText: 'Việc nào sau đây KHÔNG phải là việc Phụng vụ chính thức?',
                options: [
                    {id: 'sd_b22_p4_opt1', text: 'Thánh lễ'},
                    {id: 'sd_b22_p4_opt2', text: 'Lần hạt Mân Côi'},
                    {id: 'sd_b22_p4_opt3', text: 'Các Bí tích'}
                ],
                correctOptionId: 'sd_b22_p4_opt2',
                hint: "Lần hạt là một việc đạo đức tốt lành, nhưng không phải là Phụng vụ chính thức của Hội Thánh."
            },
            { type: 'reading', passage: "Hỏi: Các Giờ kinh Phụng vụ là gì ?\nT. Các Giờ kinh Phụng vụ là việc thánh hiến mọi thời khắc bằng lời kinh của Hội thánh để ngợi khen Thiên Chúa.", durationSeconds: 15 },
            {
                type: 'true-false',
                questionText: 'Các Giờ kinh Phụng vụ là việc cầu nguyện riêng của các tu sĩ.',
                correctAnswer: false,
                hint: "Đây là lời kinh của toàn thể Hội Thánh."
            }
        ]
    },
    // Phần 5
    {
        title: "HỘI THÁNH CỬ HÀNH PHỤNG VỤ",
        xp: 35,
        nextLessonId: "songdao-bai30-l1",
        pages: [
            {
                type: 'multiple-choice',
                questionText: 'Ai có chức tư tế chung để cử hành Phụng vụ?',
                options: [
                    {id: 'sd_b22_p5_opt1', text: 'Toàn thể Dân Chúa'},
                    {id: 'sd_b22_p5_opt2', text: 'Chỉ các giám mục'},
                    {id: 'sd_b22_p5_opt3', text: 'Chỉ những người đã chịu phép Rửa tội'}
                ],
                correctOptionId: 'sd_b22_p5_opt1'
            },
            {
                type: 'fill-blank',
                questionTextBeforeBlank: "Ngày Chúa nhật rất quan trọng vì là ngày Chúa đã ",
                questionTextAfterBlank: ".",
                options: [{id: 'sd_b22_p5_fb1', text: 'Phục sinh'}, {id: 'sd_b22_p5_fb2', text: 'Giáng sinh'}, {id: 'sd_b22_p5_fb3', text: 'Lên trời'}],
                correctOptionId: 'sd_b22_p5_fb1'
            },
            {
                type: 'sort',
                prompt: 'Sắp xếp 3 việc được coi là việc Phụng vụ:',
                words: [
                    {id: 'sd_b22_p5_w1', text: 'Thánh lễ'},
                    {id: 'sd_b22_p5_w2', text: 'Các Bí tích'},
                    {id: 'sd_b22_p5_w3', text: 'Các Giờ kinh Phụng vụ'}
                ],
                correctOrderIds: ['sd_b22_p5_w1', 'sd_b22_p5_w2', 'sd_b22_p5_w3'],
            }
        ]
    }
];

export default bai22Lessons;
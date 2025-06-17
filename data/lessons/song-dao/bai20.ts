// v16/data/lessons/song-dao/bai20.ts
import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const bai20Lessons: LessonContentData[] = [
    // Phần 1: Phụng vụ là gì?
    {
        title: "PHỤNG VỤ",
        xp: 20,
        nextLessonId: "songdao-bai20-l2",
        pages: [
            { type: 'reading', passage: "“Nếu miệng bạn tuyên xưng Đức Giê-su là Chúa và lòng bạn tin rằng Thiên Chúa đã làm cho Người sống lại từ cõi chết thì bạn sẽ được cứu độ” (Rm 10,9)", durationSeconds: 15 },
            { type: 'reading', passage: "Hỏi: Phụng vụ là gì ?\nT. Phụng vụ là việc tôn thờ chính thức của toàn thể Hội Thánh để tôn vinh Thiên Chúa Ba Ngôi và thánh hóa con người.", durationSeconds: 15 },
            {
                type: 'multiple-choice',
                questionText: 'Phụng vụ là việc tôn thờ chính thức của ai?',
                options: [
                    { id: 'sd_b20_p1_opt1', text: 'Toàn thể Hội Thánh' },
                    { id: 'sd_b20_p1_opt2', text: 'Chỉ các linh mục' },
                    { id: 'sd_b20_p1_opt3', text: 'Mỗi cá nhân riêng lẻ' },
                ],
                correctOptionId: 'sd_b20_p1_opt1',
                hint: "Đây là hành động của cả cộng đoàn Dân Chúa."
            },
        ]
    },
    // Phần 2: Vai trò của Chúa Cha và Chúa Con
    {
        title: "PHỤNG VỤ",
        xp: 25,
        nextLessonId: "songdao-bai20-l3",
        pages: [
            { type: 'reading', passage: "Hỏi: Trong Phụng Vụ, ta tôn thờ Chúa Cha thế nào ?\nT. Trong Phụng vụ, ta tuyên xưng và tôn thờ Chúa Cha là nguồn mạch mọi phúc lành mà Người ban cho ta nơi Con của Người.", durationSeconds: 15 },
            {
                type: 'fill-blank',
                questionTextBeforeBlank: "Trong Phụng vụ, ta tôn thờ Chúa Cha là ",
                questionTextAfterBlank: " mọi phúc lành.",
                options: [{id: 'sd_b20_p2_fb1', text: 'nguồn mạch'}, {id: 'sd_b20_p2_fb2', text: 'kết quả'}, {id: 'sd_b20_p2_fb3', text: 'lý do'}],
                correctOptionId: 'sd_b20_p2_fb1',
            },
            { type: 'reading', passage: "Hỏi: Trong Phụng vụ, Chúa Ki-tô hoạt động thế nào ?\nT. Trong Phụng vụ, Chúa Ki-tô thực hiện mầu nhiệm cứu độ của Người để thánh hóa nhân loại và cho Hội Thánh cảm nếm trước Phụng vụ trên trời.", durationSeconds: 18 },
            {
                type: 'true-false',
                questionText: 'Trong Phụng vụ, Chúa Kitô chỉ nhắc lại mầu nhiệm cứu độ chứ không thực hiện nó.',
                correctAnswer: false,
                hint: "Bài học nói rằng Chúa Kitô 'thực hiện' mầu nhiệm cứu độ của Người."
            }
        ]
    },
    // Phần 3: Sứ mệnh của Chúa Thánh Thần
    {
        title: "PHỤNG VỤ",
        xp: 30,
        nextLessonId: "songdao-bai20-l4",
        pages: [
            { type: 'reading', passage: "Hỏi: Trong Phụng vụ, Chúa Thánh Thần có sứ mệnh nào ?\nT. Trong Phụng vụ, Chúa Thánh Thần có những sứ mệnh này : - Một là chuẩn bị cộng đoàn gặp gỡ Chúa Ki-tô. - Hai là nhắc nhớ và bày tỏ mầu nhiệm Chúa Ki-tô. - Ba là hiện tại hoá công cuộc cứu độ của Chúa Ki-tô và xây dựng tình hiệp thông trong Hội thánh.", durationSeconds: 25 },
            {
                type: 'sort',
                prompt: 'Sắp xếp 3 sứ mệnh của Chúa Thánh Thần trong Phụng vụ:',
                words: [
                    {id: 'sd_b20_p3_w1', text: 'Chuẩn bị cộng đoàn'},
                    {id: 'sd_b20_p3_w2', text: 'Bày tỏ mầu nhiệm Chúa Kitô'},
                    {id: 'sd_b20_p3_w3', text: 'Hiện tại hóa công cuộc cứu độ'}
                ],
                correctOrderIds: ['sd_b20_p3_w1', 'sd_b20_p3_w2', 'sd_b20_p3_w3'],
            },
            {
                type: 'multiple-choice',
                questionText: 'Ai chuẩn bị cộng đoàn để gặp gỡ Chúa Kitô trong Phụng vụ?',
                options: [
                    {id: 'sd_b20_p3_opt1', text: 'Chúa Thánh Thần'},
                    {id: 'sd_b20_p3_opt2', text: 'Linh mục'},
                    {id: 'sd_b20_p3_opt3', text: 'Cộng đoàn tự chuẩn bị'}
                ],
                correctOptionId: 'sd_b20_p3_opt1',
            }
        ]
    },
    // Phần 4: Củng cố kiến thức
    {
        title: "PHỤNG VỤ",
        xp: 20,
        nextLessonId: "songdao-bai20-l5",
        pages: [
            {
                type: 'true-false',
                questionText: 'Trong Phụng vụ, chỉ có Chúa Cha hoạt động.',
                correctAnswer: false,
                hint: "Toàn thể Ba Ngôi Thiên Chúa đều hoạt động trong Phụng vụ."
            },
            {
                type: 'multiple-choice',
                questionText: 'Việc "hiện tại hóa công cuộc cứu độ" là sứ mệnh của ai trong Phụng vụ?',
                options: [
                    {id: 'sd_b20_p4_opt1', text: 'Chúa Con'},
                    {id: 'sd_b20_p4_opt2', text: 'Chúa Cha'},
                    {id: 'sd_b20_p4_opt3', text: 'Chúa Thánh Thần'}
                ],
                correctOptionId: 'sd_b20_p4_opt3'
            }
        ]
    },
    // Phần 5: Ôn tập
    {
        title: "PHỤNG VỤ",
        xp: 35,
        nextLessonId: "songdao-bai21-l1",
        pages: [
            {
                type: 'multiple-choice',
                questionText: 'Phụng vụ có hai mục đích là gì?',
                options: [
                    {id: 'sd_b20_p5_opt1', text: 'Tôn vinh Thiên Chúa và thánh hóa con người'},
                    {id: 'sd_b20_p5_opt2', text: 'Gặp gỡ bạn bè và ca hát'},
                    {id: 'sd_b20_p5_opt3', text: 'Học hỏi và làm từ thiện'}
                ],
                correctOptionId: 'sd_b20_p5_opt1'
            },
            {
                type: 'fill-blank',
                questionTextBeforeBlank: "Trong Phụng vụ, Chúa Kitô thực hiện ",
                questionTextAfterBlank: " của Người để thánh hóa nhân loại.",
                options: [{id: 'sd_b20_p5_fb1', text: 'mầu nhiệm cứu độ'}, {id: 'sd_b20_p5_fb2', text: 'các phép lạ'}, {id: 'sd_b20_p5_fb3', text: 'lời hứa'}],
                correctOptionId: 'sd_b20_p5_fb1'
            },
            {
                type: 'true-false',
                questionText: 'Một trong các sứ mệnh của Chúa Thánh Thần là nhắc nhớ và bày tỏ mầu nhiệm Chúa Kitô.',
                correctAnswer: true
            }
        ]
    }
];

export default bai20Lessons;
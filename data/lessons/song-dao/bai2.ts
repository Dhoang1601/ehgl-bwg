// v16/data/lessons/song-dao/bai2.ts
import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const bai2Lessons: LessonContentData[] = [
    // Phần 1
    {
        title: "THIÊN CHÚA MẶC KHẢI CON NGƯỜI",
        xp: 20,
        nextLessonId: "songdao-bai2-l2",
        pages: [
            { type: 'reading', passage: "“Thuở xưa, nhiều lần nhiều cách, Thiên Chúa đã phán dạy cha ông chúng ta qua các ngôn sứ ; nhưng vào thời sau hết này, Thiên Chúa đã phán dạy chúng ta qua Thánh Tử...” (Dt 1, 1-2)", durationSeconds: 18 },
            { type: 'reading', passage: "Hỏi: Mặc khải là gì ?\nT. Mặc khải là việc Thiên Chúa tỏ bày cho con người biết Thiên Chúa là ai và Người muốn gì. Nhờ đó con người có thể đến với Thiên Chúa và hiệp thông với Người.", durationSeconds: 15 },
            {
                type: 'multiple-choice',
                questionText: 'Mặc khải là việc Thiên Chúa tỏ bày cho con người biết điều gì?',
                options: [
                    { id: 'sd_b2_p1_opt1', text: 'Thiên Chúa là ai và Người muốn gì' },
                    { id: 'sd_b2_p1_opt2', text: 'Tương lai của thế giới' },
                    { id: 'sd_b2_p1_opt3', text: 'Cách để làm giàu' },
                ],
                correctOptionId: 'sd_b2_p1_opt1',
                hint: "Mặc khải giúp ta hiểu về chính Thiên Chúa và thánh ý của Người."
            },
        ]
    },
    // Phần 2
    {
        title: "THIÊN CHÚA MẶC KHẢI CON NGƯỜI",
        xp: 25,
        nextLessonId: "songdao-bai2-l3",
        pages: [
            { type: 'reading', passage: "Hỏi: Thiên Chúa mặc khải cho ta bằng cách nào ?\nT. Thiên Chúa dùng lời nói và hành động mà tỏ mình cho ta qua từng giai đoạn trong lịch sử cứu độ.", durationSeconds: 12 },
            { type: 'reading', passage: "Hỏi: Thiên Chúa mặc khải qua những giai đoạn nào ?\nT. Thiên Chúa đã mặc khải cho tổ tông loài người, cho các Tổ phụ, các Ngôn sứ và sau cùng Người đã mặc khải trọn vẹn nơi Chúa Giê-su Ki-tô.", durationSeconds: 15 },
            {
                type: 'sort',
                prompt: 'Sắp xếp các giai đoạn Thiên Chúa mặc khải:',
                words: [
                    {id: 'sd_b2_p2_w1', text: 'Tổ tông loài người'},
                    {id: 'sd_b2_p2_w2', text: 'Các Tổ phụ'},
                    {id: 'sd_b2_p2_w3', text: 'Các Ngôn sứ'},
                    {id: 'sd_b2_p2_w4', text: 'Chúa Giê-su Ki-tô'}
                ],
                correctOrderIds: ['sd_b2_p2_w1', 'sd_b2_p2_w2', 'sd_b2_p2_w3', 'sd_b2_p2_w4'],
                hint: "Đây là tiến trình mặc khải trong lịch sử cứu độ."
            },
        ]
    },
    // Phần 3
    {
        title: "THIÊN CHÚA MẶC KHẢI CON NGƯỜI",
        xp: 20,
        nextLessonId: "songdao-bai2-l4",
        pages: [
            { type: 'reading', passage: "Hỏi: Vì sao Chúa Giê-su Ki-tô là mặc khải trọn vẹn ?\nT. Vì Chúa Giê-su Ki-tô là Con Thiên Chúa làm người, là Lời duy nhất và hoàn hảo của Chúa Cha.", durationSeconds: 15 },
            {
                type: 'fill-blank',
                questionTextBeforeBlank: "Chúa Giê-su Ki-tô là Lời duy nhất và ",
                questionTextAfterBlank: " của Chúa Cha.",
                options: [{id: 'sd_b2_p3_fb1', text: 'hoàn hảo'}, {id: 'sd_b2_p3_fb2', text: 'quan trọng'}, {id: 'sd_b2_p3_fb3', text: 'dễ hiểu'}],
                correctOptionId: 'sd_b2_p3_fb1'
            }
        ]
    },
    // Phần 4
    {
        title: "THIÊN CHÚA MẶC KHẢI CON NGƯỜI",
        xp: 20,
        nextLessonId: "songdao-bai2-l5",
        pages: [
            {
                type: 'true-false',
                questionText: 'Thiên Chúa chỉ mặc khải qua các Ngôn sứ.',
                correctAnswer: false,
                hint: 'Lời Chúa trong thư Do-thái (Dt 1, 1-2) và bài học đã nói rõ điều này.'
            },
            {
                type: 'multiple-choice',
                questionText: 'Đâu là đỉnh cao của Mặc khải?',
                options: [
                    {id: 'sd_b2_p4_opt1', text: 'Nơi Chúa Giê-su Kitô'},
                    {id: 'sd_b2_p4_opt2', text: 'Nơi các Tổ phụ'},
                    {id: 'sd_b2_p4_opt3', text: 'Nơi các Ngôn sứ'}
                ],
                correctOptionId: 'sd_b2_p4_opt1'
            }
        ]
    },
    // Phần 5
    {
        title: "THIÊN CHÚA MẶC KHẢI CON NGƯỜI",
        xp: 30,
        nextLessonId: "songdao-bai3-l1",
        pages: [
            {
                type: 'multiple-choice',
                questionText: 'Mặc khải là gì?',
                options: [
                    {id: 'sd_b2_p5_opt1', text: 'Là việc Thiên Chúa tỏ mình và cho biết ý muốn của Người'},
                    {id: 'sd_b2_p5_opt2', text: 'Là một cuốn sách cổ'},
                    {id: 'sd_b2_p5_opt3', text: 'Là một bộ luật'}
                ],
                correctOptionId: 'sd_b2_p5_opt1'
            },
            {
                type: 'true-false',
                questionText: 'Sau Chúa Giê-su, sẽ không có một mặc khải công nào khác.',
                correctAnswer: true,
                hint: "Chúa Giê-su là mặc khải trọn vẹn và cuối cùng."
            },
            {
                type: 'fill-blank',
                questionTextBeforeBlank: "Thiên Chúa dùng lời nói và ",
                questionTextAfterBlank: " mà tỏ mình cho ta.",
                options: [{id: 'sd_b2_p5_fb1', text: 'hành động'}, {id: 'sd_b2_p5_fb2', text: 'phép lạ'}, {id: 'sd_b2_p5_fb3', text: 'sứ điệp'}],
                correctOptionId: 'sd_b2_p5_fb1'
            }
        ]
    }
];

export default bai2Lessons;
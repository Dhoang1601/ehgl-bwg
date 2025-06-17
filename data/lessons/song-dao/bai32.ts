// v16/data/lessons/song-dao/bai32.ts
import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const bai32Lessons: LessonContentData[] = [
    // Phần 1
    {
        title: "TRÁCH NHIỆM LUÂN LÝ",
        xp: 25,
        nextLessonId: "songdao-bai32-l2",
        pages: [
            { type: 'reading', passage: "“Các người chết được xét xử tùy theo việc họ đã làm chiếu theo những gì đã được ghi chép trong sổ sách” (Kh 20,12)", durationSeconds: 15 },
            { type: 'reading', passage: "Hỏi: Muốn đánh giá một hành vi là tốt hay xấu, nặng hay nhẹ, ta dựa vào đâu ?\nT. Ta dựa vào ba điểm này : - Một là điều ta chọn là tốt hay xấu, - Hai là ta nhắm mục đích tốt hay xấu, - Ba là những hoàn cảnh lúc ấy làm cho sự việc thành nặng hoặc nhẹ hơn.", durationSeconds: 20 },
            {
                type: 'sort',
                prompt: 'Sắp xếp 3 yếu tố để đánh giá một hành vi:',
                words: [
                    {id: 'sd_b32_p1_w1', text: 'Điều chọn lựa (đối tượng)'},
                    {id: 'sd_b32_p1_w2', text: 'Mục đích nhắm tới'},
                    {id: 'sd_b32_p1_w3', text: 'Hoàn cảnh'}
                ],
                correctOrderIds: ['sd_b32_p1_w1', 'sd_b32_p1_w2', 'sd_b32_p1_w3'],
            },
        ]
    },
    // Phần 2
    {
        title: "TRÁCH NHIỆM LUÂN LÝ",
        xp: 20,
        nextLessonId: "songdao-bai32-l3",
        pages: [
            { type: 'reading', passage: "Hỏi: Mục đích ta nhắm ảnh hưởng đến việc ta làm như thế nào ?\nT. Một hành động tốt được làm vì mục đích xấu, sẽ trở thành xấu, và ngược lại, mục đích dù tốt đến đâu cũng không làm cho hành động xấu trở thành tốt, vì “mục đích không biện minh cho phương tiện”.", durationSeconds: 20 },
            {
                type: 'true-false',
                questionText: 'Mục đích tốt có thể làm cho một hành động xấu trở nên tốt.',
                correctAnswer: false,
                hint: "Bài học có câu: 'mục đích không biện minh cho phương tiện'."
            },
        ]
    },
    // Phần 3
    {
        title: "TRÁCH NHIỆM LUÂN LÝ",
        xp: 30,
        nextLessonId: "songdao-bai32-l4",
        pages: [
            { type: 'reading', passage: "Hỏi: Hành vi tốt xấu của con người còn bị điều gì chi phối nữa không ?\nT. Còn bị chi phối bởi bảy xúc cảm chính là : mừng, giận, buồn, sợ, yêu, ghét và ham muốn (Hỷ, nộ, ai, cụ, ái, ố, dục).", durationSeconds: 18 },
            {
                type: 'sort',
                prompt: 'Sắp xếp một vài trong bảy xúc cảm chính:',
                words: [
                    {id: 'sd_b32_p3_w1', text: 'Mừng'},
                    {id: 'sd_b32_p3_w2', text: 'Giận'},
                    {id: 'sd_b32_p3_w3', text: 'Buồn'},
                    {id: 'sd_b32_p3_w4', text: 'Sợ'}
                ],
                correctOrderIds: ['sd_b32_p3_w1', 'sd_b32_p3_w2', 'sd_b32_p3_w3', 'sd_b32_p3_w4'],
            },
            {
                type: 'multiple-choice',
                questionText: 'Đâu không phải là một trong bảy xúc cảm chính được liệt kê?',
                options: [
                    {id: 'sd_b32_p3_opt1', text: 'Yêu'},
                    {id: 'sd_b32_p3_opt2', text: 'Ghét'},
                    {id: 'sd_b32_p3_opt3', text: 'Thất vọng'}
                ],
                correctOptionId: 'sd_b32_p3_opt3'
            }
        ]
    },
    // Phần 4
    {
        title: "TRÁCH NHIỆM LUÂN LÝ",
        xp: 20,
        nextLessonId: "songdao-bai32-l5",
        pages: [
            { type: 'reading', passage: "Hỏi: Vậy ta phải làm gì đối với các xúc cảm của ta ?\nT. Ta cần tập làm chủ và qui hướng các xúc cảm ấy đến những điều tốt.", durationSeconds: 12 },
            {
                type: 'multiple-choice',
                questionText: 'Ta phải làm gì với các xúc cảm của mình?',
                options: [
                    {id: 'sd_b32_p4_opt1', text: 'Làm chủ và qui hướng chúng đến điều tốt'},
                    {id: 'sd_b32_p4_opt2', text: 'Loại bỏ hoàn toàn chúng'},
                    {id: 'sd_b32_p4_opt3', text: 'Để chúng tự do phát triển'}
                ],
                correctOptionId: 'sd_b32_p4_opt1'
            }
        ]
    },
    // Phần 5
    {
        title: "TRÁCH NHIỆM LUÂN LÝ",
        xp: 35,
        nextLessonId: "songdao-bai33-l1",
        pages: [
            {
                type: 'multiple-choice',
                questionText: 'Để đánh giá một hành vi, ta KHÔNG dựa vào yếu tố nào sau đây?',
                options: [
                    {id: 'sd_b32_p5_opt1', text: 'Điều ta chọn'},
                    {id: 'sd_b32_p5_opt2', text: 'Mục đích ta nhắm'},
                    {id: 'sd_b32_p5_opt3', text: 'Ý kiến của người khác'}
                ],
                correctOptionId: 'sd_b32_p5_opt3'
            },
            {
                type: 'true-false',
                questionText: 'Mục đích tốt không thể biện minh cho phương tiện xấu.',
                correctAnswer: true
            },
            {
                type: 'fill-blank',
                questionTextBeforeBlank: "Ta cần tập làm chủ và qui hướng các ",
                questionTextAfterBlank: " của mình đến những điều tốt.",
                options: [{id: 'sd_b32_p5_fb1', text: 'xúc cảm'}, {id: 'sd_b32_p5_fb2', text: 'hành vi'}, {id: 'sd_b32_p5_fb3', text: 'suy nghĩ'}],
                correctOptionId: 'sd_b32_p5_fb1'
            }
        ]
    }
];

export default bai32Lessons;
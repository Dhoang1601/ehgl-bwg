// v16/data/lessons/song-dao/bai31.ts
import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const bai31Lessons: LessonContentData[] = [
    // Phần 1
    {
        title: "TỰ DO CỦA CON NGƯỜI",
        xp: 20,
        nextLessonId: "songdao-bai31-l2",
        pages: [
            { type: 'reading', passage: "“Quả thế, thưa anh em, anh em đã được gọi để hưởng tự do. Có điều là đừng lợi dụng tự do để sống theo tính xác thịt, nhưng hãy lấy đức mến mà phục vụ lẫn nhau” (Gl 5, 13)", durationSeconds: 18 },
            { type: 'reading', passage: "Hỏi: Tự do là gì ?\nT. Tự do là khả năng chọn lựa, nhờ đó mà con người có thể cân nhắc, quyết định và chịu trách nhiệm về các hành vi của mình.", durationSeconds: 15 },
            {
                type: 'multiple-choice',
                questionText: 'Tự do là khả năng gì?',
                options: [
                    { id: 'sd_b31_p1_opt1', text: 'Chọn lựa' },
                    { id: 'sd_b31_p1_opt2', text: 'Làm mọi điều mình thích' },
                    { id: 'sd_b31_p1_opt3', text: 'Phê phán người khác' },
                ],
                correctOptionId: 'sd_b31_p1_opt1'
            },
        ]
    },
    // Phần 2
    {
        title: "TỰ DO CỦA CON NGƯỜI",
        xp: 25,
        nextLessonId: "songdao-bai31-l3",
        pages: [
            { type: 'reading', passage: "Hỏi: Con người có thể lạm dụng tự do của mình để làm điều xấu không ?\nT. Con người có thể lạm dụng tự do để chối bỏ tình yêu Thiên Chúa và khi đó trở thành nô lệ tội lỗi.", durationSeconds: 15 },
            {
                type: 'fill-blank',
                questionTextBeforeBlank: "Khi lạm dụng tự do để làm điều xấu, con người trở thành nô lệ ",
                questionTextAfterBlank: ".",
                options: [{id: 'sd_b31_p2_fb1', text: 'tội lỗi'}, {id: 'sd_b31_p2_fb2', text: 'của cải'}, {id: 'sd_b31_p2_fb3', text: 'danh vọng'}],
                correctOptionId: 'sd_b31_p2_fb1'
            },
            {
                type: 'true-false',
                questionText: 'Lời Chúa trong thư Ga-lát khuyên chúng ta lợi dụng tự do để sống theo tính xác thịt.',
                correctAnswer: false,
                hint: "Thư Ga-lát nói: 'đừng lợi dụng tự do để sống theo tính xác thịt'."
            }
        ]
    },
    // Phần 3
    {
        title: "TỰ DO CỦA CON NGƯỜI",
        xp: 25,
        nextLessonId: "songdao-bai31-l4",
        pages: [
            { type: 'reading', passage: "Hỏi: Có những trường hợp nào ta được giảm bớt trách nhiệm hoặc không bị qui trách nhiệm ?\nT. Có ba trường hợp này : - Một là do không biết, - Hai là do bị ép buộc, - Ba là do sợ hãi.", durationSeconds: 15 },
            {
                type: 'sort',
                prompt: 'Sắp xếp 3 trường hợp được giảm bớt hoặc không bị qui trách nhiệm:',
                words: [
                    {id: 'sd_b31_p3_w1', text: 'Do không biết'},
                    {id: 'sd_b31_p3_w2', text: 'Do bị ép buộc'},
                    {id: 'sd_b31_p3_w3', text: 'Do sợ hãi'}
                ],
                correctOrderIds: ['sd_b31_p3_w1', 'sd_b31_p3_w2', 'sd_b31_p3_w3'],
            },
             {
                type: 'multiple-choice',
                questionText: 'Trường hợp nào sau đây KHÔNG phải là trường hợp được giảm bớt trách nhiệm?',
                options: [
                    {id: 'sd_b31_p3_opt1', text: 'Do không biết'},
                    {id: 'sd_b31_p3_opt2', text: 'Do lười biếng'},
                    {id: 'sd_b31_p3_opt3', text: 'Do sợ hãi'}
                ],
                correctOptionId: 'sd_b31_p3_opt2'
            }
        ]
    },
    // Phần 4
    {
        title: "TỰ DO CỦA CON NGƯỜI",
        xp: 20,
        nextLessonId: "songdao-bai31-l5",
        pages: [
            { type: 'reading', passage: "Hỏi: Ân sủng của Thiên Chúa có làm mất tự do con người không ?\nT. Ân sủng chẳng những không làm mất tự do của con người, mà còn tăng thêm tự do nội tâm. Nhờ ân sủng, Chúa Thánh thần giáo dục con người trở thành những cộng tác viên đắc lực của Người.", durationSeconds: 18 },
            {
                type: 'true-false',
                questionText: 'Ân sủng của Thiên Chúa làm mất đi sự tự do của con người.',
                correctAnswer: false,
                hint: "Bài học nói rằng ân sủng 'tăng thêm tự do nội tâm'."
            }
        ]
    },
    // Phần 5
    {
        title: "TỰ DO CỦA CON NGƯỜI",
        xp: 30,
        nextLessonId: "songdao-bai32-l1",
        pages: [
            {
                type: 'multiple-choice',
                questionText: 'Lạm dụng tự do để làm điều xấu sẽ dẫn đến hậu quả gì?',
                options: [
                    {id: 'sd_b31_p5_opt1', text: 'Trở thành nô lệ tội lỗi'},
                    {id: 'sd_b31_p5_opt2', text: 'Trở nên tự do hơn'},
                    {id: 'sd_b31_p5_opt3', text: 'Được Thiên Chúa khen thưởng'}
                ],
                correctOptionId: 'sd_b31_p5_opt1'
            },
            {
                type: 'fill-blank',
                questionTextBeforeBlank: "Tự do là khả năng chọn lựa, nhờ đó con người có thể cân nhắc, quyết định và ",
                questionTextAfterBlank: " về hành vi của mình.",
                options: [{id: 'sd_b31_p5_fb1', text: 'chịu trách nhiệm'}, {id: 'sd_b31_p5_fb2', text: 'quên đi'}, {id: 'sd_b31_p5_fb3', text: 'biện minh'}],
                correctOptionId: 'sd_b31_p5_fb1'
            },
            {
                type: 'true-false',
                questionText: 'Một người bị ép buộc làm điều xấu thì không bị qui trách nhiệm hoặc được giảm bớt.',
                correctAnswer: true
            }
        ]
    }
];

export default bai31Lessons;
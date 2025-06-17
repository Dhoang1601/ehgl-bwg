// v16/data/lessons/song-dao/bai3.ts
import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const bai3Lessons: LessonContentData[] = [
    // Phần 1
    {
        title: "CÁCH THỨC LƯU TRUYỀN MẶC KHẢI",
        xp: 25,
        nextLessonId: "songdao-bai3-l2",
        pages: [
            { type: 'reading', passage: "“Lời ngôn sứ không bao giờ lại do ý muốn người phàm, nhưng chính nhờ Thánh Thần thúc đẩy mà có những người đã nói theo lệnh của Thiên Chúa” (2 Pr 1,21)", durationSeconds: 15 },
            { type: 'reading', passage: "Hỏi: Mặc khải được lưu truyền thế nào ?\nT. Mặc khải được lưu truyền qua Thánh Kinh và Thánh Truyền.", durationSeconds: 10 },
            {
                type: 'multiple-choice',
                questionText: 'Mặc khải được lưu truyền qua hai nguồn nào?',
                options: [
                    { id: 'sd_b3_p1_opt1', text: 'Thánh Kinh và Thánh Truyền' },
                    { id: 'sd_b3_p1_opt2', text: 'Sách vở và lời kể' },
                    { id: 'sd_b3_p1_opt3', text: 'Giáo luật và các văn kiện' },
                ],
                correctOptionId: 'sd_b3_p1_opt1'
            },
        ]
    },
    // Phần 2
    {
        title: "CÁCH THỨC LƯU TRUYỀN MẶC KHẢI",
        xp: 25,
        nextLessonId: "songdao-bai3-l3",
        pages: [
            { type: 'reading', passage: "Hỏi: Thánh Kinh là gì ?\nT. Thánh Kinh là sách ghi chép mặc khải của Thiên Chúa dưới sự linh hứng của Chúa Thánh Thần.", durationSeconds: 12 },
            {
                type: 'fill-blank',
                questionTextBeforeBlank: "Thánh Kinh được viết ra dưới sự linh hứng của ",
                questionTextAfterBlank: ".",
                options: [{id: 'sd_b3_p2_fb1', text: 'Chúa Thánh Thần'}, {id: 'sd_b3_p2_fb2', text: 'các vua'}, {id: 'sd_b3_p2_fb3', text: 'dân chúng'}],
                correctOptionId: 'sd_b3_p2_fb1'
            },
            { type: 'reading', passage: "Hỏi: Thánh Truyền là gì ?\nT. Thánh Truyền là mặc khải của Thiên Chúa mà Chúa Giê-su đã trao phó cho các Tông đồ và các Đấng kế vị để các Ngài gìn giữ, trình bày và rao giảng cách trung thành.", durationSeconds: 18 },
            {
                type: 'true-false',
                questionText: 'Thánh Truyền là những câu chuyện do dân gian tự sáng tác ra.',
                correctAnswer: false,
                hint: "Thánh Truyền bắt nguồn từ chính Chúa Giê-su và được các Tông đồ lưu truyền."
            }
        ]
    },
    // Phần 3
    {
        title: "CÁCH THỨC LƯU TRUYỀN MẶC KHẢI",
        xp: 20,
        nextLessonId: "songdao-bai3-l4",
        pages: [
            { type: 'reading', passage: "Hỏi: Huấn quyền là gì ?\nT. Huấn quyền là quyền của Hội thánh được Chúa Ki-tô trao phó để giải thích và áp dụng Lời Chúa.", durationSeconds: 12 },
            {
                type: 'multiple-choice',
                questionText: 'Nhiệm vụ của Huấn quyền là gì?',
                options: [
                    { id: 'sd_b3_p3_opt1', text: 'Thêm bớt Lời Chúa' },
                    { id: 'sd_b3_p3_opt2', text: 'Giải thích và áp dụng Lời Chúa' },
                    { id: 'sd_b3_p3_opt3', 'text': 'Sáng tác Lời Chúa mới' }
                ],
                correctOptionId: 'sd_b3_p3_opt2',
            }
        ]
    },
    // Phần 4
    {
        title: "CÁCH THỨC LƯU TRUYỀN MẶC KHẢI",
        xp: 20,
        nextLessonId: "songdao-bai3-l5",
        pages: [
            { type: 'reading', passage: "Hỏi: Các tín hữu có dự phần vào việc lưu truyền mặc khải không ?\nT. Tất cả các tín hữu đều dự phần vào việc lưu truyền mặc khải vì họ đã nhận được ơn Chúa Thánh Thần dạy dỗ và hướng dẫn.", durationSeconds: 15 },
            {
                type: 'true-false',
                questionText: 'Chỉ có hàng giáo sĩ mới có trách nhiệm lưu truyền mặc khải.',
                correctAnswer: false,
                hint: 'Bài học nói rằng "Tất cả các tín hữu đều dự phần".'
            }
        ]
    },
    // Phần 5
    {
        title: "CÁCH THỨC LƯU TRUYỀN MẶC KHẢI",
        xp: 30,
        nextLessonId: "songdao-bai20-l1",
        pages: [
            {
                type: 'multiple-choice',
                questionText: 'Thánh Kinh và Thánh Truyền có mối liên hệ với nhau thế nào?',
                options: [
                    { id: 'sd_b3_p5_opt1', text: 'Cả hai đều là cách thức lưu truyền Mặc khải'},
                    { id: 'sd_b3_p5_opt2', text: 'Thánh Kinh quan trọng hơn Thánh Truyền'},
                    { id: 'sd_b3_p5_opt3', text: 'Thánh Truyền quan trọng hơn Thánh Kinh'}
                ],
                correctOptionId: 'sd_b3_p5_opt1'
            },
            {
                type: 'fill-blank',
                questionTextBeforeBlank: "Huấn quyền có quyền ",
                questionTextAfterBlank: " và áp dụng Lời Chúa.",
                options: [{id: 'sd_b3_p5_fb1', text: 'giải thích'}, {id: 'sd_b3_p5_fb2', text: 'thay đổi'}, {id: 'sd_b3_p5_fb3', text: 'phê bình'}],
                correctOptionId: 'sd_b3_p5_fb1'
            },
            {
                type: 'true-false',
                questionText: 'Mỗi tín hữu đều có vai trò trong việc lưu truyền mặc khải.',
                correctAnswer: true
            }
        ]
    }
];

export default bai3Lessons;
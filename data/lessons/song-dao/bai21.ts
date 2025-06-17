// v16/data/lessons/song-dao/bai21.ts
import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const bai21Lessons: LessonContentData[] = [
    // Phần 1: Bí tích là gì?
    {
        title: "BÍ TÍCH",
        xp: 20,
        nextLessonId: "songdao-bai21-l2",
        pages: [
            { type: 'reading', passage: "“Một người lính lấy giáo đâm vào cạnh sườn Người. Tức thì, máu cùng nước chảy ra” (Ga 19,34)", durationSeconds: 15 },
            { 
                type: 'multiple-choice',
                questionText: 'Cạnh sườn bị đâm của Chúa Giê-su tuôn ra máu và nước là hình ảnh báo trước điều gì?',
                options: [
                    { id: 'sd_b21_p1_opt1', text: 'Các Bí tích của Hội Thánh, đặc biệt là Rửa Tội và Thánh Thể'},
                    { id: 'sd_b21_p1_opt2', text: 'Sự đau khổ của Chúa Giê-su'},
                    { id: 'sd_b21_p1_opt3', text: 'Sự phục sinh của Người'},
                ],
                correctOptionId: 'sd_b21_p1_opt1',
                hint: "Nước tượng trưng cho sự thanh tẩy (Rửa tội), Máu tượng trưng cho hy tế (Thánh Thể)."
            },
            { type: 'reading', passage: "Hỏi: Bí tích là gì ?\nT. Bí tích là những dấu chỉ hữu hiệu của ân sủng do Chúa Giê-su thiết lập và được trao lại cho Hội Thánh để ban sự sống thần linh cho chúng ta.", durationSeconds: 15 },
            {
                type: 'fill-blank',
                questionTextBeforeBlank: "Bí tích là những dấu chỉ ",
                questionTextAfterBlank: " của ân sủng.",
                options: [{id: 'sd_b21_p1_fb1', text: 'hữu hiệu'}, {id: 'sd_b21_p1_fb2', text: 'tượng trưng'}, {id: 'sd_b21_p1_fb3', text: 'đơn giản'}],
                correctOptionId: 'sd_b21_p1_fb1',
                hint: "Không chỉ là dấu chỉ, Bí tích còn thực sự mang lại ơn sủng mà nó biểu thị."
            },
        ]
    },
    // Phần 2: Bí tích đức tin
    {
        title: "BÍ TÍCH",
        xp: 20,
        nextLessonId: "songdao-bai21-l3",
        pages: [
            { type: 'reading', passage: "Hỏi: Vì sao gọi là Bí tích đức tin ?\nT. Vì khi lãnh nhận các Bí tích, ta phải có lòng tin, và nhờ các Bí tích, đức tin của ta càng thêm mạnh mẽ và vững chắc hơn.", durationSeconds: 15 },
            {
                type: 'true-false',
                questionText: 'Các Bí tích vừa đòi hỏi đức tin, vừa nuôi dưỡng đức tin.',
                correctAnswer: true,
                hint: "Đây là mối tương quan hai chiều."
            },
            {
                type: 'multiple-choice',
                questionText: 'Để lãnh nhận Bí tích, điều kiện cần thiết là gì?',
                options: [
                    {id: 'sd_b21_p2_opt1', text: 'Có lòng tin'},
                    {id: 'sd_b21_p2_opt2', text: 'Có nhiều tiền'},
                    {id: 'sd_b21_p2_opt3', text: 'Đủ 18 tuổi'}
                ],
                correctOptionId: 'sd_b21_p2_opt1',
                hint: "Đức tin là cửa ngõ để bước vào các mầu nhiệm."
            }
        ]
    },
    // Phần 3: Ai cử hành Bí tích?
    {
        title: "BÍ TÍCH",
        xp: 20,
        nextLessonId: "songdao-bai21-l4",
        pages: [
            { type: 'reading', passage: "Hỏi: Ai cử hành các Bí tích ?\nT. Hội Thánh cử hành các Bí tích với tư cách là Cộng đoàn Tư Tế của Chúa Ki-tô.", durationSeconds: 12 },
            {
                type: 'fill-blank',
                questionTextBeforeBlank: "Hội Thánh cử hành các Bí tích với tư cách là ",
                questionTextAfterBlank: " của Chúa Ki-tô.",
                options: [{id: 'sd_b21_p3_fb1', text: 'Cộng đoàn Tư Tế'}, {id: 'sd_b21_p3_fb2', text: 'một tổ chức'}, {id: 'sd_b21_p3_fb3', text: 'một nhóm người'}],
                correctOptionId: 'sd_b21_p3_fb1'
            }
        ]
    },
    // Phần 4: Sự cần thiết của Bí tích
    {
        title: "BÍ TÍCH",
        xp: 25,
        nextLessonId: "songdao-bai21-l5",
        pages: [
            { type: 'reading', passage: "Hỏi: Các Bí tích có cần thiết để được cứu độ không ?\nT. Đối với các tín hữu, các Bí tích cần thiết để được ơn cứu độ, vì chính Chúa Ki-tô hành động nơi các Bí tích, và Chúa Thánh Thần làm cho những người lãnh nhận nên giống Con Thiên Chúa.", durationSeconds: 20 },
            {
                type: 'true-false',
                questionText: 'Đối với các tín hữu, các Bí tích không cần thiết cho ơn cứu độ.',
                correctAnswer: false,
                hint: "Bài học khẳng định các Bí tích 'cần thiết để được ơn cứu độ'."
            },
            {
                type: 'multiple-choice',
                questionText: 'Ai là người hành động chính yếu trong các Bí tích?',
                options: [
                    {id: 'sd_b21_p4_opt1', text: 'Chính Chúa Kitô'},
                    {id: 'sd_b21_p4_opt2', text: 'Linh mục cử hành'},
                    {id: 'sd_b21_p4_opt3', text: 'Cộng đoàn tham dự'}
                ],
                correctOptionId: 'sd_b21_p4_opt1',
                hint: "Linh mục là thừa tác viên, nhưng Đấng hành động chính là..."
            }
        ]
    },
    // Phần 5: Ôn tập
    {
        title: "BÍ TÍCH",
        xp: 35,
        nextLessonId: "songdao-bai22-l1",
        pages: [
            {
                type: 'multiple-choice',
                questionText: 'Bí tích là những dấu chỉ hữu hiệu của ân sủng do ai thiết lập?',
                options: [
                    {id: 'sd_b21_p5_opt1', text: 'Chúa Giê-su'},
                    {id: 'sd_b21_p5_opt2', text: 'Các Tông đồ'},
                    {id: 'sd_b21_p5_opt3', text: 'Hội Thánh'}
                ],
                correctOptionId: 'sd_b21_p5_opt1'
            },
            {
                type: 'true-false',
                questionText: 'Khi lãnh nhận Bí tích, đức tin của chúng ta sẽ được củng cố.',
                correctAnswer: true
            },
            {
                type: 'fill-blank',
                questionTextBeforeBlank: "Các Bí tích cần thiết để được ơn ",
                questionTextAfterBlank: ".",
                options: [{id: 'sd_b21_p5_fb1', text: 'cứu độ'}, {id: 'sd_b21_p5_fb2', text: 'khôn ngoan'}, {id: 'sd_b21_p5_fb3', text: 'tha thứ'}],
                correctOptionId: 'sd_b21_p5_fb1'
            }
        ]
    }
];

export default bai21Lessons;
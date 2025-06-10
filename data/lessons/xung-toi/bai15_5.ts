import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const lessonContent: LessonContentData = {
  title: "Lương Tâm",
  xp: 25,
  nextLessonId: "xungtoi2-unit16-l1",
  pages: [
    { type: 'reading', passage: 'Ôn tập tổng quát: Lương tâm – Rm 2,14 và GLCG 303–306.', durationSeconds: 10 },

    { type: 'multiple-choice', questionText: 'Theo Rm 2,14, dân ngoại có thể sống tốt nhờ điều gì?', options: [ { id: 'mc1', text: 'Lương tâm hay luật tự nhiên trong lòng' }, { id: 'mc2', text: 'Giáo huấn của các ngôn sứ' } ], correctOptionId: 'mc1', hint: 'Luật tự nhiên là trung tâm đoạn này.' },

    { type: 'true-false', questionText: 'Lương tâm giúp ta phân biệt điều lành điều dữ.', correctAnswer: true, hint: 'Đây là vai trò chính của lương tâm.' },

    { type: 'fill-blank', questionTextBeforeBlank: 'Lương tâm là luật tự nhiên mà Thiên Chúa đã đặt sẵn nơi ', questionTextAfterBlank: '.', options: [ { id: 'fb1', text: 'đáy lòng mỗi người' }, { id: 'fb2', text: 'trái tim con người' } ], correctOptionId: 'fb1', hint: 'Trích GLCG 303.' },

    { type: 'sort', prompt: 'Sắp xếp quá trình đào tạo lương tâm theo GLCG 306:', words: [ { id: 's1', text: 'Xa lánh tội lỗi' }, { id: 's2', text: 'Cầu nguyện' }, { id: 's3', text: 'Nghe lời Hội Thánh' }, { id: 's4', text: 'Bàn hỏi với người khôn ngoan' } ].sort(() => Math.random() - 0.5), correctOrderIds: ['s1', 's2', 's3', 's4'], hint: 'Từ nền tảng đến nâng cao.' },

    { type: 'multiple-choice', questionText: 'Ta có cần luôn làm theo lương tâm không?', options: [ { id: 'mc3', text: 'Có, phải luôn làm theo' }, { id: 'mc4', text: 'Không, chỉ khi cần thiết' } ], correctOptionId: 'mc3', hint: 'GLCG 304.' },

    { type: 'true-false', questionText: 'Lương tâm là tiếng nói của xã hội.', correctAnswer: false, hint: 'Là tiếng nói của Thiên Chúa trong lòng người.' },

    { type: 'fill-blank', questionTextBeforeBlank: 'Để đào tạo lương tâm, ta cần học hỏi ', questionTextAfterBlank: '.', options: [ { id: 'fb3', text: 'Lời Chúa' }, { id: 'fb4', text: 'luật xã hội' } ], correctOptionId: 'fb3', hint: 'GLCG 306.' },

    { type: 'multiple-choice', questionText: 'Một trong các cách đào tạo lương tâm là gì?', options: [ { id: 'mc5', text: 'Bàn hỏi với người đạo đức khôn ngoan' }, { id: 'mc6', text: 'Đọc báo mỗi ngày' } ], correctOptionId: 'mc5', hint: 'Trích trực tiếp giáo lý.' }
  ]
};

export default lessonContent;
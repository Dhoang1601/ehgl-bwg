import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const lessonContent: LessonContentData = {
  title: "Con Người Là Hình Ảnh Thiên Chúa",
  xp: 50,
  nextLessonId: "xungtoi2-unit15-l1",
  pages: [
    { type: 'reading', passage: 'Ôn tập tổng quát: Con người là hình ảnh Thiên Chúa – theo Ep 4,23 và GLCG 287–291.', durationSeconds: 10 },

    { type: 'multiple-choice', questionText: 'Ep 4,23 dạy ta điều gì?', options: [ { id: 'mc1', text: 'Phải đổi mới tâm trí và sống công chính, thánh thiện' }, { id: 'mc2', text: 'Phải giữ luật Môsê' }, { id: 'mc3', text: 'Sống theo thời đại' }, { id: 'mc4', text: 'Không cần thay đổi' } ], correctOptionId: 'mc1', hint: 'Ep 4,23 nhấn mạnh tâm trí và đời sống mới.' },

    { type: 'true-false', questionText: 'Con người là hình ảnh Thiên Chúa vì có linh hồn, trí tuệ và ý chí tự do.', correctAnswer: true, hint: 'GLCG 287 xác định rõ điều này.' },

    { type: 'fill-blank', questionTextBeforeBlank: 'Tội lỗi làm tổn thương hình ảnh Thiên Chúa và khiến con người dễ ', questionTextAfterBlank: '.', options: [ { id: 'fb1', text: 'hướng về điều xấu' }, { id: 'fb2', text: 'bị Thiên Chúa từ bỏ' }, { id: 'fb3', text: 'trở nên mạnh mẽ' } ], correctOptionId: 'fb1', hint: 'Theo GLCG 288.' },

    { type: 'sort', prompt: 'Sắp xếp các mối phúc thật sau theo thứ tự:', words: [ { id: 's1', text: 'Lòng khó khăn' }, { id: 's2', text: 'Hiền lành' }, { id: 's3', text: 'Khóc lóc' }, { id: 's4', text: 'Khao khát nhân đức' } ].sort(() => Math.random() - 0.5), correctOrderIds: ['s1', 's2', 's3', 's4'], hint: 'Theo đúng trình tự của giáo lý.' },

    { type: 'multiple-choice', questionText: 'Ai giữ lòng sạch sẽ sẽ được gì?', options: [ { id: 'mc5', text: 'Được thấy mặt Thiên Chúa' }, { id: 'mc6', text: 'Được bình an' } ], correctOptionId: 'mc5', hint: 'Mối phúc thứ sáu.' },

    { type: 'fill-blank', questionTextBeforeBlank: 'Ai làm cho người hòa thuận sẽ được gọi là ', questionTextAfterBlank: '.', options: [ { id: 'fb2_1', text: 'con Đức Chúa Trời' }, { id: 'fb2_2', text: 'thánh nhân' } ], correctOptionId: 'fb2_1', hint: 'Một trong tám mối phúc.' },

    { type: 'true-false', questionText: 'Tội lỗi không ảnh hưởng đến hình ảnh Thiên Chúa nơi con người.', correctAnswer: false, hint: 'GLCG 288 khẳng định điều ngược lại.' },

    { type: 'multiple-choice', questionText: 'Hình ảnh Thiên Chúa bị tổn thương có thể được phục hồi bằng cách nào?', options: [ { id: 'mc7', text: 'Sống theo các mối phúc thật và làm môn đệ Chúa Ki-tô' }, { id: 'mc8', text: 'Cầu nguyện mà không hành động' }, { id: 'mc9', text: 'Tự cố gắng bằng sức riêng' } ], correctOptionId: 'mc7', hint: 'Gắn với GLCG 290.' },

    { type: 'sort', prompt: 'Sắp xếp đúng thứ tự 4 mối phúc thật cuối:', words: [ { id: 's5', text: 'Thương xót người' }, { id: 's6', text: 'Giữ lòng sạch sẽ' }, { id: 's7', text: 'Làm cho người hòa thuận' }, { id: 's8', text: 'Chịu khốn nạn vì đạo ngay' } ].sort(() => Math.random() - 0.5), correctOrderIds: ['s5', 's6', 's7', 's8'], hint: 'Tiếp theo 4 mối phúc đầu.' },

    { type: 'multiple-choice', questionText: 'Sống như môn đệ Chúa Ki-tô là sống thế nào?', options: [ { id: 'mc10', text: 'Theo tinh thần các mối phúc thật' }, { id: 'mc11', text: 'Chỉ đi nhà thờ' } ], correctOptionId: 'mc10', hint: 'GLCG 290.' },

    { type: 'fill-blank', questionTextBeforeBlank: 'Chúa Ki-tô đã công bố ', questionTextAfterBlank: ' mối phúc thật.', options: [ { id: 'fb3_1', text: '8' }, { id: 'fb3_2', text: '10' } ], correctOptionId: 'fb3_1', hint: 'Theo giáo lý.' },

    { type: 'true-false', questionText: 'Người có lòng khó khăn sẽ được Nước Thiên Chúa.', correctAnswer: true, hint: 'Mối phúc đầu tiên.' },

    { type: 'multiple-choice', questionText: 'Tại sao con người hướng về sự thiện ngay từ lòng mẹ?', options: [ { id: 'mc12', text: 'Vì được Thiên Chúa tạo dựng theo hình ảnh của Người' }, { id: 'mc13', text: 'Vì học được từ cha mẹ' } ], correctOptionId: 'mc12', hint: 'GLCG 287.' },

    { type: 'sort', prompt: 'Sắp xếp các yếu tố của hình ảnh Thiên Chúa trong con người:', words: [ { id: 's9', text: 'Linh hồn thiêng liêng' }, { id: 's10', text: 'Trí tuệ' }, { id: 's11', text: 'Ý chí tự do' }, { id: 's12', text: 'Hướng về sự thiện' } ].sort(() => Math.random() - 0.5), correctOrderIds: ['s9', 's10', 's11', 's12'], hint: 'GLCG 287.' }
  ]
};

export default lessonContent;

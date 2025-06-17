// data/lessons/xung-toi/baimodau.ts
import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const baimodauLessons: LessonContentData[] = [
  // Corresponds to original baimodau_1.ts
  {
    title: "Em Học Giáo Lý",
    xp: 25,
    nextLessonId: "xungtoi-baimodau-l2",
    pages: [
      { type: 'reading', passage: "“Phúc cho kẻ nghe Lời Thiên Chúa và đem ra thực hành” (Lc11,28)", durationSeconds: 15 },
      { type: 'multiple-choice', questionText: "Lời chúa sau:'Phúc cho kẻ nghe Lời Thiên Chúa và đem ra thực hành' có trích dẫn là:", options: [{id: 'lc_opt1', text: 'Lc 11,28'}, {id: 'lc_opt2', text: 'Mt 5,3'}, {id: 'lc_opt3', text: 'Ga 3,16'}, {id: 'lc_opt4', text: 'Cv 2,38'}], correctOptionId: 'lc_opt1', hint: "Trích dẫn này nói về việc lắng nghe và thực hành Lời Chúa, được ghi trong Tin Mừng Luca." },
      { type: 'reading', passage: "Hỏi: Em học giáo lý để làm gì ? Thưa: Em học giáo lý để biết Thiên Chúa là Cha và mọi người là anh chị em.", durationSeconds: 5 },
      { type: 'fill-blank', questionTextBeforeBlank: "Em học giáo lý để biết Thiên Chúa là ", questionTextAfterBlank: " và mọi người là anh chị em.", options: [{id: 'q1_opt_1', text: 'Chúa tể'}, {id: 'q1_opt_2', text: 'Vua'}, {id: 'q1_opt_3', text: 'Cha'}, {id: 'q1_opt_4', text: 'Bạn'}], correctOptionId: 'q1_opt_3', hint: "Em học giáo lý để biết Thiên Chúa là Cha và mọi người là anh chị em." },
      { type: 'reading', passage: "Hỏi: Em biết như thế làm chi ? Thưa: Em biết như thế để mến Chúa, yêu người, cho ngày sau được hưởng phúc đời đời.", durationSeconds: 5 },
      { type: 'sort', prompt: "Sắp xếp các từ để hoàn thành mục đích của việc nhận biết giáo lý:", words: [{id: 'q2_w1', text: 'mến'}, {id: 'q2_w2', text: 'Chúa'}, {id: 'q2_w3', text: 'yêu'}, {id: 'q2_w4', text: 'người'}], correctOrderIds: ['q2_w1', 'q2_w2', 'q2_w3', 'q2_w4'], hint: "Em biết như thế để mến Chúa, yêu người, cho ngày sau được hưởng phúc đời đời." }
    ],
  },
  // Corresponds to original baimodau_2.ts
  {
    title: "Em Học Giáo Lý",
    xp: 15,
    nextLessonId: "xungtoi-baimodau-l3",
    pages: [
      { type: 'reading', passage: "Hỏi: Em học giáo lý để làm gì ?\nThưa: Em học giáo lý để biết Thiên Chúa là Cha và mọi người là anh chị em.", durationSeconds: 7 },
      { type: 'fill-blank', questionTextBeforeBlank: "Em học giáo lý để biết Thiên Chúa là ", questionTextAfterBlank: " và mọi người là anh chị em.", options: [{id: 'xt_bm2_q2_opt1', text: 'Vua'}, {id: 'xt_bm2_q2_opt2', text: 'Thầy'}, {id: 'xt_bm2_q2_opt3', text: 'Cha'}, {id: 'xt_bm2_q2_opt4', text: 'Bạn'}], correctOptionId: 'xt_bm2_q2_opt3', hint: "Em học giáo lý để biết Thiên Chúa là Cha và mọi người là anh chị em." },
      { type: 'sort', prompt: "Ghép các từ sau thành câu có nghĩa.", words: [{id: 'xt_bm2_q3_w5', text: 'và'}, {id: 'xt_bm2_q3_w1', text: 'Thiên'}, {id: 'xt_bm2_q3_w9', text: 'anh'}, {id: 'xt_bm2_q3_w3', text: 'là'}, {id: 'xt_bm2_q3_w7', text: 'người'}, {id: 'xt_bm2_q3_w2', text: 'Chúa'}, {id: 'xt_bm2_q3_w11', text: 'em'}, {id: 'xt_bm2_q3_w6', text: 'mọi'}, {id: 'xt_bm2_q3_w4', text: 'cha'}, {id: 'xt_bm2_q3_w10', text: 'chị'}, {id: 'xt_bm2_q3_w8', text: 'là'}], correctOrderIds: [['xt_bm2_q3_w1', 'xt_bm2_q3_w2', 'xt_bm2_q3_w3', 'xt_bm2_q3_w4', 'xt_bm2_q3_w5', 'xt_bm2_q3_w6', 'xt_bm2_q3_w7', 'xt_bm2_q3_w8', 'xt_bm2_q3_w9', 'xt_bm2_q3_w10', 'xt_bm2_q3_w11'], ['xt_bm2_q3_w1', 'xt_bm2_q3_w2', 'xt_bm2_q3_w8', 'xt_bm2_q3_w4', 'xt_bm2_q3_w5', 'xt_bm2_q3_w6', 'xt_bm2_q3_w7', 'xt_bm2_q3_w3', 'xt_bm2_q3_w9', 'xt_bm2_q3_w10', 'xt_bm2_q3_w11']], hint: "'Thiên Chúa là cha và mọi người là anh chị em" },
      { type: 'multiple-choice', questionText: "Hoàn thành câu trả lời: 'Em học giáo lý để biết Thiên Chúa là Cha và mọi người là ...'", options: [{id: 'xt_bm2_q4_opt1', text: 'thân bằng'}, {id: 'xt_bm2_q4_opt2', text: 'bạn bè'}, {id: 'xt_bm2_q4_opt3', text: 'anh chị em'}, {id: 'xt_bm2_q4_opt4', text: 'đồng loại'}], correctOptionId: 'xt_bm2_q4_opt3', hint: "Hãy nhớ chính xác cụm từ cuối cùng." },
      { type: 'true-false', questionText: "'Em học giáo lý để biết Thiên Chúa là Cha và mọi người là bạn bè'.", correctAnswer: false, hint: "Kiểm tra lại từ cuối cùng trong câu trả lời." }
    ],
  },
  // Corresponds to original baimodau_3.ts
  {
    title: "Em Học Giáo Lý",
    xp: 20,
    nextLessonId: "xungtoi-baimodau-l4",
    pages: [
      { type: 'reading', passage: "Hỏi: Em biết như thế làm chi ?\nThưa: Em biết như thế để mến Chúa, yêu người, cho ngày sau được hưởng phúc đời đời.", durationSeconds: 7 },
      { type: 'fill-blank', questionTextBeforeBlank: "Em biết như thế để ", questionTextAfterBlank: ", yêu người, cho ngày sau được hưởng phúc đời đời.", options: [{id: 'xt_bm3_q2_opt1', text: 'mến Chúa'}, {id: 'xt_bm3_q2_opt2', text: 'hiểu biết'}, {id: 'xt_bm3_q2_opt3', text: 'vâng lời'}, {id: 'xt_bm3_q2_opt4', text: 'phục vụ'}], correctOptionId: 'xt_bm3_q2_opt1', hint: "Em biết như thế để mến Chúa, yêu người, cho ngày sau được hưởng phúc đời đời." },
      { type: 'sort', prompt: "Sắp xếp các từ để hoàn thành cụm từ: '...Chúa, ...người'.", words: [{id: 'xt_bm3_q3_w1', text: 'yêu'}, {id: 'xt_bm3_q3_w2', text: 'mến'}], correctOrderIds: ['xt_bm3_q3_w2', 'xt_bm3_q3_w1'], hint: "Câu này mà không làm được á???." },
      { type: 'true-false', questionText: "Việc biết giáo lý giúp em mến Chúa và yêu người.", correctAnswer: true, hint: "Qúa dễ luôn mà không trả lời được, gà." },
      { type: 'multiple-choice', questionText: "Để được phúc đời đời, em phải...", options: [{id: 'xt_bm3_q5_opt1', text: 'có kiến thức.'}, {id: 'xt_bm3_q5_opt2', text: 'mến Chúa, yêu người.'}, {id: 'xt_bm3_q5_opt3', text: 'đẹp trai.'}, {id: 'xt_bm3_q5_opt4', text: 'biết Thiên Chúa.'}], correctOptionId: 'xt_bm3_q5_opt2', hint: "Đẹp trai." }
    ],
  },
  // Corresponds to original baimodau_4.ts
  {
    title: "Em Học Giáo Lý",
    xp: 15,
    nextLessonId: "xungtoi-baimodau-l5",
    pages: [
      { type: 'reading', passage: "Hỏi: Em biết như thế làm chi ?\nThưa: Em biết như thế để mến Chúa, yêu người, cho ngày sau được hưởng phúc đời đời.", durationSeconds: 15 },
      { type: 'fill-blank', questionTextBeforeBlank: "Lời Chúa dạy: 'Phúc cho kẻ nghe Lời Thiên Chúa và đem ra...", questionTextAfterBlank: "'.", options: [{id: 'xt_bm4_q2_opt1', text: 'suy gẫm'}, {id: 'xt_bm4_q2_opt2', text: 'ghi nhớ'}, {id: 'xt_bm4_q2_opt3', text: 'thực hành'}, {id: 'xt_bm4_q2_opt4', text: 'chia sẻ'}], correctOptionId: 'xt_bm4_q2_opt3', hint: "Hãy nhớ lại lời chúa từ các bài học trước, hong nhớ hơi kém." },
      { type: 'sort', prompt: "Em biết như thế để...", words: [ {id: 'xt_bm4_q3_w1', text: 'mến'}, {id: 'xt_bm4_q3_w2', text: 'cho ngày'}, {id: 'xt_bm4_q3_w3', text: 'đời đời'}, {id: 'xt_bm4_q3_w4', text: 'hưởng phúc'}, {id: 'xt_bm4_q3_w5', text: 'sau được'}, {id: 'xt_bm4_q3_w6', text: 'Chúa,'}, {id: 'xt_bm4_q3_w7', text: 'người,'}, {id: 'xt_bm4_q3_w8', text: 'yêu,'} ], correctOrderIds: ['xt_bm4_q3_w1', 'xt_bm4_q3_w6', 'xt_bm4_q3_w8', 'xt_bm4_q3_w7', 'xt_bm4_q3_w2', 'xt_bm4_q3_w5', 'xt_bm4_q3_w4', 'xt_bm4_q3_w3'], hint: "Em biết như thế để mến Chúa, yêu người, cho ngày sau được hưởng phúc đời đời." },
      { type: 'multiple-choice', questionText: "Học giáo lý để biết Thiên Chúa là Cha và mọi người là ...?", options: [{id: 'xt_bm4_q4_opt1', text: 'bạn bè.'}, {id: 'xt_bm4_q4_opt2', text: 'anh em.'}, {id: 'xt_bm4_q4_opt3', text: 'anh chị em.'}, {id: 'xt_bm4_q4_opt4', text: 'người thân.'}], correctOptionId: 'xt_bm4_q4_opt3', hint: "Học giáo lý để biết Thiên Chúa là Cha và mọi người là anh chị em." },
      { type: 'true-false', questionText: "Biết giáo lý để mến Chúa, yêu người, cho ngày sau được giàu sang phú quý.", correctAnswer: false, hint: "Đọc kĩ câu xem đúng chưa?" }
    ],
  },
  // Corresponds to original baimodau_5.ts
  {
    title: "Em Học Giáo Lý",
    xp: 20,
    nextLessonId: "xungtoi-unit1-l1", // Points to the first lesson of the next unit
    pages: [
      { type: 'reading', passage: "“Phúc cho kẻ nghe Lời Thiên Chúa và đem ra thực hành” (Lc 11,28)", durationSeconds: 15 },
      { type: 'sort', prompt: "Sắp xếp các cụm từ sau đây để hoàn thành Lời Chúa:", words: [{id: 'xt_bm5_p2_phrase1', text: '“Phúc cho'}, {id: 'xt_bm5_p2_phrase2', text: 'kẻ nghe'}, {id: 'xt_bm5_p2_phrase3', text: 'Lời Thiên Chúa'}, {id: 'xt_bm5_p2_phrase4', text: 'và đem ra'}, {id: 'xt_bm5_p2_phrase5', text: 'thực hành”'}, {id: 'xt_bm5_p2_phrase6', text: '(Lc 11,28)'}].sort(() => Math.random() - 0.5), correctOrderIds: ['xt_bm5_p2_phrase1', 'xt_bm5_p2_phrase2', 'xt_bm5_p2_phrase3', 'xt_bm5_p2_phrase4', 'xt_bm5_p2_phrase5', 'xt_bm5_p2_phrase6'], hint: "Lời Chúa mà không nhớ thì chịu rồi!" },
      { type: 'reading', passage: "Hỏi: Em học giáo lý để làm gì ?\nThưa: Em học giáo lý để biết Thiên Chúa là Cha và mọi người là anh chị em.", durationSeconds: 7 },
      { type: 'fill-blank', questionTextBeforeBlank: "Hoàn thành câu trả lời: 'Em học giáo lý để biết Thiên Chúa là Cha và mọi người là ", questionTextAfterBlank: "'.", options: [{id: 'xt_bm5_p4_opt1', text: 'anh chị em'}, {id: 'xt_bm5_p4_opt2', text: 'bạn bè'}, {id: 'xt_bm5_p4_opt3', text: 'người thân'}, {id: 'xt_bm5_p4_opt4', text: 'đồng loại'}].sort(() => Math.random() - 0.5), correctOptionId: 'xt_bm5_p4_opt1', hint: "Gợi ý: Nhớ chính xác cụm từ cuối cùng trong câu trả lời." },
      { type: 'reading', passage: "Hỏi: Em biết như thế làm chi ?\nThưa: Em biết như thế để mến Chúa, yêu người, cho ngày sau được hưởng phúc đời đời.", durationSeconds: 7 },
      { type: 'sort', prompt: "Hỏi: Em biết như thế làm chi ?\nThưa:...", words: [{id: 'xt_bm5_p6_phrase1', text: 'Em biết như thế'}, {id: 'xt_bm5_p6_phrase2', text: 'để mến Chúa,'}, {id: 'xt_bm5_p6_phrase3', text: 'yêu người,'}, {id: 'xt_bm5_p6_phrase4', text: 'cho ngày sau'}, {id: 'xt_bm5_p6_phrase5', text: 'được hưởng'}, {id: 'xt_bm5_p6_phrase6', text: 'phúc đời đời.'}].sort(() => Math.random() - 0.5), correctOrderIds: ['xt_bm5_p6_phrase1', 'xt_bm5_p6_phrase2', 'xt_bm5_p6_phrase3', 'xt_bm5_p6_phrase4', 'xt_bm5_p6_phrase5', 'xt_bm5_p6_phrase6'], hint: "Em biết như thế để mến Chúa, yêu người, cho ngày sau được hưởng phúc đời đời." }
    ],
  },
];

export default baimodauLessons;

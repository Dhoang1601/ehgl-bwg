import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const lessonContent: LessonContentData = {
  title: "Con Người Là Hình Ảnh Thiên Chúa",
  xp: 35,
  nextLessonId: "xungtoi2-unit14-l5",
  pages: [
    {
      type: 'reading',
      passage: "Hỏi: Sống như môn đệ Chúa Ki-tô là thế nào?\nThưa: Là thực hiện tinh thần bài giảng trên núi được gồm tóm trong các mối phúc thật.",
      durationSeconds: 10
    },
    {
      type: 'multiple-choice',
      questionText: "Sống như môn đệ Chúa Ki-tô là gì?",
      options: [
        { id: 'b14_4_opt1', text: 'Tham gia các hoạt động xã hội' },
        { id: 'b14_4_opt2', text: 'Giữ chay tịnh thường xuyên' },
        { id: 'b14_4_opt3', text: 'Sống theo các mối phúc thật' },
        { id: 'b14_4_opt4', text: 'Tránh xa mọi người' }
      ],
      correctOptionId: 'b14_4_opt3',
      hint: "Tâm điểm là bài giảng trên núi."
    },
    {
      type: 'reading',
      passage: "Hỏi: Có những mối phúc thật nào?\nThưa: Chúa Ki-tô đã công bố 8 mối phúc thật này:",
      durationSeconds: 12
    },
    {
      type: 'sort',
      prompt: "Sắp xếp đúng thứ tự 3 mối phúc đầu tiên:",
      words: [
        { id: 'b14_4_s1', text: 'Ai có lòng khó khăn...' },
        { id: 'b14_4_s2', text: 'Ai hiền lành...' },
        { id: 'b14_4_s3', text: 'Ai khóc lóc...' }
      ].sort(() => Math.random() - 0.5),
      correctOrderIds: ['b14_4_s1', 'b14_4_s2', 'b14_4_s3'],
      hint: "Dựa vào thứ tự mối phúc thật trong giáo lý."
    },
    {
      type: 'multiple-choice',
      questionText: "Ai giữ lòng sạch sẽ sẽ được điều gì?",
      options: [
        { id: 'b14_4_q5o1', text: 'Được thấy mặt Thiên Chúa' },
        { id: 'b14_4_q5o2', text: 'Được làm vua' },
        { id: 'b14_4_q5o3', text: 'Được giàu sang' },
        { id: 'b14_4_q5o4', text: 'Được tha mọi tội' }
      ],
      correctOptionId: 'b14_4_q5o1',
      hint: "Đây là phần thưởng dành cho ai giữ lòng sạch sẽ."
    },
    {
      type: 'fill-blank',
      questionTextBeforeBlank: "Ai làm cho người hòa thuận, ấy là phúc thật, vì sẽ được gọi là ",
      questionTextAfterBlank: ".",
      options: [
        { id: 'b14_4_fb1', text: 'con Đức Chúa Trời' },
        { id: 'b14_4_fb2', text: 'người tốt' },
        { id: 'b14_4_fb3', text: 'thiên thần' },
        { id: 'b14_4_fb4', text: 'người thánh thiện' }
      ],
      correctOptionId: 'b14_4_fb1',
      hint: "Trích đúng lời Chúa."
    },
    {
      type: 'true-false',
      questionText: "Ai chịu khốn nạn vì đạo ngay sẽ được gọi là người thánh thiện.",
      correctAnswer: false,
      hint: "Phần thưởng dành cho họ là Nước Đức Chúa Trời."
    }
  ]
};

export default lessonContent;

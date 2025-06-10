
// src/data/lessons/song-dao/baimodau_1.ts
import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const lessonContent: LessonContentData = {
  title: "Bài mở đầu: Làm quen với Sống Đạo", // Example, ensure matches generated title
  xp: 10,
  nextLessonId: "songdao-unit1-l2",
  pages: [
    { type: 'heading', content: 'Sống Đạo: Hành Trình Theo Chúa Kitô' },
    { type: 'text', content: 'Sống đạo không chỉ là việc giữ các luật lệ tôn giáo, mà là một cuộc sống biến đổi theo Tin Mừng của Chúa Giêsu. Đó là hành trình yêu thương, phục vụ và trở nên giống Chúa Kitô hơn mỗi ngày.' },
    { type: 'image', imageUrl: 'https://via.placeholder.com/400x200.png?text=Sống+Đạo', altText: 'Hình ảnh minh họa Sống Đạo' },
    { type: 'subheading', content: 'Các chiều kích của đời sống đạo' },
    { type: 'text', content: 'Đời sống đạo bao gồm nhiều khía cạnh: cầu nguyện, tham dự các bí tích, học hỏi Lời Chúa, thực hành bác ái, và làm chứng cho Tin Mừng trong môi trường sống của mình.' },
  ],
};

export default lessonContent;

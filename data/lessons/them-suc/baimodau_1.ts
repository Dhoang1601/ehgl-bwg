
// src/data/lessons/them-suc/baimodau_1.ts
import { LessonContentData } from '../../../components/learning/LessonDetailPage';

const lessonContent: LessonContentData = {
  title: "Bài mở đầu: Làm quen với Thêm Sức", // Example, ensure matches generated title
  xp: 10,
  nextLessonId: "themsuc-unit1-l2",
  pages: [
    { type: 'heading', content: 'Chào mừng đến với Bí Tích Thêm Sức!' },
    { type: 'text', content: 'Bí Tích Thêm Sức là một trong ba bí tích khai tâm Kitô giáo, cùng với Rửa Tội và Thánh Thể. Qua bí tích này, chúng ta được lãnh nhận Chúa Thánh Thần một cách đặc biệt, trở nên những chứng nhân mạnh mẽ hơn của Chúa Kitô.' },
    { type: 'image', imageUrl: 'https://via.placeholder.com/400x200.png?text=Bí+Tích+Thêm+Sức', altText: 'Hình ảnh minh họa Bí Tích Thêm Sức' },
    { type: 'subheading', content: 'Ý nghĩa của Bí Tích Thêm Sức' },
    { type: 'text', content: 'Bí tích này kiện toàn ân sủng của Bí Tích Rửa Tội, ghi một ấn tín thiêng liêng không thể xóa được, và ban cho chúng ta sức mạnh của Chúa Thánh Thần để tuyên xưng đức tin bằng lời nói và việc làm.' },
  ],
};

export default lessonContent;

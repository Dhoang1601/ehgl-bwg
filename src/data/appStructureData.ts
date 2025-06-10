// src/data/appStructureData.ts

// --- START: Interfaces for the Learning Path Structure ---
export interface Lesson {
  id: string; // e.g., "xungtoi-unit1-l1"
  title: string; // e.g., "Bài mở đầu: Làm quen với Xưng tội"
  status: 'locked' | 'unlocked' | 'completed'; // Default to 'locked' in static, overridden dynamically
  xp: number;
}

export interface Unit {
  id: string; // e.g., "xungtoi-unit1" (unique within a class's path)
  title: string; // e.g., "UNIT 1: XƯNG TỘI 1 CĂN BẢN"
  lessons: Lesson[];
}

// This is the structure for each specific class's learning path data.
export interface LearningPathData {
  categoryName: string; // e.g., "Xưng Tội"
  currentChapterTitle: string; // Hardcoded for the ChapterBanner, e.g., "CHƯƠNG 1: XƯNG TỘI CĂN BẢN"
  currentChapterLessonName: string; // Hardcoded for the ChapterBanner, e.g., "Bài mở đầu: Làm quen với Xưng tội"
  units: Unit[];
  totalLessons: number;
}
// --- END: Interfaces ---

// --- START: Static Learning Path Data ---
// Note: Lesson IDs (e.g., "xungtoi-unit1-l1") must match the IDs used for:
// 1. Keys in `lessonsStatus` (localStorage).
// 2. The `lessonId` prop passed to `LessonDetailPage`.
// 3. The logic in `LessonDetailPage`'s `getLessonFileDetails` to map these IDs to actual lesson content files.

export const APP_LEARNING_PATH_DATA: Record<string, Record<string, LearningPathData>> = {
  "xungtoi": { // Category Key: Xưng Tội
    "Xưng Tội 1": { // Class Name String
      categoryName: "Xưng Tội",
      currentChapterTitle: "PHẦN I : TUYÊN XƯNG ĐỨC TIN", // Default banner title for this class
      currentChapterLessonName: "BÀI MỞ ĐẦU: EM HỌC GIÁO LÝ", // Default banner lesson name
      units: [
        {
          id: "xungtoi-unit1",
          title: "BÀI MỞ ĐẦU: EM HỌC GIÁO LÝ",
          lessons: [
            { id: "xungtoi-unit1-l1", title: "BÀI MỞ ĐẦU: EM HỌC GIÁO LÝ", xp: 25, status: 'locked' },
            { id: "xungtoi-unit1-l2", title: "BÀI MỞ ĐẦU: EM HỌC GIÁO LÝ", xp: 15, status: 'locked' },
            { id: "xungtoi-unit1-l3", title: "BÀI MỞ ĐẦU: EM HỌC GIÁO LÝ", xp: 20, status: 'locked' },
            { id: "xungtoi-unit1-l4", title: "BÀI MỞ ĐẦU: EM HỌC GIÁO LÝ", xp: 15, status: 'locked' },
            { id: "xungtoi-unit1-l5", title: "BÀI MỞ ĐẦU: EM HỌC GIÁO LÝ", xp: 20, status: 'locked' },
          ],
        },
        {
          id: "xungtoi-unit2",
          title: "Bài 01 : THIÊN CHÚA SÁNG TẠO TRỜI ĐẤT MUÔN VẬT.",
          lessons: [
            { id: "xungtoi-unit2-l1", title: "Bài 01 : THIÊN CHÚA SÁNG TẠO TRỜI ĐẤT MUÔN VẬT.", xp: 20, status: 'locked' },
            { id: "xungtoi-unit2-l2", title: "Bài 01 : THIÊN CHÚA SÁNG TẠO TRỜI ĐẤT MUÔN VẬT.", xp: 15, status: 'locked' },
            { id: "xungtoi-unit2-l3", title: "Bài 01 : THIÊN CHÚA SÁNG TẠO TRỜI ĐẤT MUÔN VẬT.", xp: 20, status: 'locked' },
            { id: "xungtoi-unit2-l4", title: "Bài 01 : THIÊN CHÚA SÁNG TẠO TRỜI ĐẤT MUÔN VẬT.", xp: 15, status: 'locked' },
            { id: "xungtoi-unit2-l5", title: "Bài 01 : THIÊN CHÚA SÁNG TẠO TRỜI ĐẤT MUÔN VẬT.", xp: 20, status: 'locked' },
          ],
        },
        {
          id: "xungtoi-unit3",
          title: "Bài 02 : THIÊN CHÚA TẠO DỰNG CON NGƯỜI",
          lessons: [
            { id: "xungtoi-unit3-l1", title: "Bài 02 : THIÊN CHÚA TẠO DỰNG CON NGƯỜI", xp: 20, status: 'locked' },
            { id: "xungtoi-unit3-l2", title: "Bài 02 : THIÊN CHÚA TẠO DỰNG CON NGƯỜI", xp: 15, status: 'locked' },
            { id: "xungtoi-unit3-l3", title: "Bài 02 : THIÊN CHÚA TẠO DỰNG CON NGƯỜI", xp: 20, status: 'locked' },
            { id: "xungtoi-unit3-l4", title: "Bài 02 : THIÊN CHÚA TẠO DỰNG CON NGƯỜI", xp: 15, status: 'locked' },
            { id: "xungtoi-unit3-l5", title: "Bài 02 : THIÊN CHÚA TẠO DỰNG CON NGƯỜI", xp: 25, status: 'locked' },
          ],
        }
      ],
      totalLessons: 15,
    },
    "Xưng Tội 2": {
      categoryName: "Xưng Tội",
      currentChapterTitle: "PHẦN II : SỐNG TRONG CHÚA KI-TÔ",
      currentChapterLessonName: "Bài 14 : CON NGƯỜI LÀ HÌNH ẢNH THIÊN CHÚA",
      units: [
        {
          id: "xungtoi2-unit14", // Ensure unique unit IDs if needed, or context implies uniqueness
          title: "Bài 14 : CON NGƯỜI LÀ HÌNH ẢNH THIÊN CHÚA",
          lessons: [
            { id: "xungtoi2-unit14-l1", title: "Bài 14 : CON NGƯỜI LÀ HÌNH ẢNH THIÊN CHÚA", xp: 30, status: 'locked' },
            // Add 4 more lessons for Xưng Tội 2, Unit 1
            { id: "xungtoi2-unit14-l2", title: "Bài 14 : CON NGƯỜI LÀ HÌNH ẢNH THIÊN CHÚA", xp: 30, status: 'locked' },
            { id: "xungtoi2-unit14-l3", title: "Bài 14 : CON NGƯỜI LÀ HÌNH ẢNH THIÊN CHÚA", xp: 35, status: 'locked' },
            { id: "xungtoi2-unit14-l4", title: "Bài 14 : CON NGƯỜI LÀ HÌNH ẢNH THIÊN CHÚA", xp: 35, status: 'locked' },
            { id: "xungtoi2-unit14-l5", title: "Bài 14 : CON NGƯỜI LÀ HÌNH ẢNH THIÊN CHÚA", xp: 50, status: 'locked' },
          ],
        },
        // Add 2 more units for Xưng Tội 2, each with 5 lessons
         {
          id: "xungtoi2-unit15",
          title: "Bài 15 : LƯƠNG TÂM",
          lessons: [
            { id: "xungtoi2-unit15-l1", title: "Bài 15 : LƯƠNG TÂM", xp: 20, status: 'locked' },
            { id: "xungtoi2-unit15-l2", title: "Bài 15 : LƯƠNG TÂM", xp: 20, status: 'locked' },
            { id: "xungtoi2-unit15-l3", title: "Bài 15 : LƯƠNG TÂM", xp: 20, status: 'locked' },
            { id: "xungtoi2-unit15-l4", title: "Bài 15 : LƯƠNG TÂM", xp: 20, status: 'locked' },
            { id: "xungtoi2-unit15-l5", title: "Bài 15 : LƯƠNG TÂM", xp: 20, status: 'locked' },
          ],
        },
        {
          id: "xungtoi2-unit16",
          title: "Bài 16 : NHÂN ĐỨC",
          lessons: [
            { id: "xungtoi2-unit16-l1", title: "Bài 16 : NHÂN ĐỨC", xp: 20, status: 'locked' },
            { id: "xungtoi2-unit16-l2", title: "Bài 16 : NHÂN ĐỨC", xp: 20, status: 'locked' },
            { id: "xungtoi2-unit16-l3", title: "Bài 16 : NHÂN ĐỨC", xp: 20, status: 'locked' },
            { id: "xungtoi2-unit16-l4", title: "Bài 16 : NHÂN ĐỨC", xp: 20, status: 'locked' },
            { id: "xungtoi2-unit16-l5", title: "Bài 16 : NHÂN ĐỨC", xp: 25, status: 'locked' },
          ],
        }
      ],
      totalLessons: 15,
    },
    // "Xưng Tội 3": { ... } // Structure similarly
  },
  "themsuc": { // Category Key: Thêm Sức
    "Thêm Sức 1": { // Class Name String
      categoryName: "Thêm Sức",
      currentChapterTitle: "CHƯƠNG 1: CHUẨN BỊ THÊM SỨC",
      currentChapterLessonName: "Bài mở đầu: Tìm hiểu Bí Tích Thêm Sức",
      units: [
        {
          id: "themsuc-unit1",
          title: "UNIT 1: CHÚA THÁNH THẦN",
          lessons: [
            { id: "themsuc-unit1-l1", title: "Bài mở đầu: Tìm hiểu Bí Tích Thêm Sức", xp: 25, status: 'locked' },
            // Add 4 more lessons
            { id: "themsuc-unit1-l2", title: "Bài 1.1: Chúa Thánh Thần là Ai?", xp: 20, status: 'locked' },
            { id: "themsuc-unit1-l3", title: "Bài 1.2: Hoạt động của Chúa Thánh Thần", xp: 20, status: 'locked' },
            { id: "themsuc-unit1-l4", title: "Bài 1.3: Bảy Ơn Chúa Thánh Thần (Phần 1)", xp: 20, status: 'locked' },
            { id: "themsuc-unit1-l5", title: "Bài 1.4: Bảy Ơn Chúa Thánh Thần (Phần 2)", xp: 20, status: 'locked' },
          ],
        },
        // Add 2 more units for Thêm Sức 1
        {
          id: "themsuc-unit2",
          title: "UNIT 2: HỘI THÁNH VÀ SỨ VỤ",
          lessons: [
            { id: "themsuc-unit2-l1", title: "Bài 2.1: Hội Thánh của Chúa Kitô", xp: 20, status: 'locked' },
            { id: "themsuc-unit2-l2", title: "Bài 2.2: Đặc tính của Hội Thánh", xp: 20, status: 'locked' },
            { id: "themsuc-unit2-l3", title: "Bài 2.3: Vai trò của người Tín Hữu", xp: 20, status: 'locked' },
            { id: "themsuc-unit2-l4", title: "Bài 2.4: Sống chứng nhân", xp: 20, status: 'locked' },
            { id: "themsuc-unit2-l5", title: "Bài 2.5: Loan báo Tin Mừng", xp: 20, status: 'locked' },
          ],
        },
        {
          id: "themsuc-unit3",
          title: "UNIT 3: NGHI THỨC VÀ ĐỜI SỐNG MỚI",
          lessons: [
            { id: "themsuc-unit3-l1", title: "Bài 3.1: Nghi thức Bí Tích Thêm Sức", xp: 20, status: 'locked' },
            { id: "themsuc-unit3-l2", title: "Bài 3.2: Ấn tín Thêm Sức", xp: 20, status: 'locked' },
            { id: "themsuc-unit3-l3", title: "Bài 3.3: Sống đời sống mới trong Thánh Thần", xp: 20, status: 'locked' },
            { id: "themsuc-unit3-l4", title: "Bài 3.4: Phân định ơn gọi", xp: 20, status: 'locked' },
            { id: "themsuc-unit3-l5", title: "Bài 3.5: Ôn tập cuối khóa Thêm Sức 1", xp: 25, status: 'locked' },
          ],
        }
      ],
      totalLessons: 15,
    },
    // "Thêm Sức 2": { ... },
    // "Thêm Sức 3": { ... },
  },
  "songdao": { // Category Key: Sống Đạo
    "Sống Đạo 1": { // Class Name String
      categoryName: "Sống Đạo",
      currentChapterTitle: "CHƯƠNG 1: NỀN TẢNG ĐỜI SỐNG KITÔ HỮU",
      currentChapterLessonName: "Bài mở đầu: Sống Đạo là gì?",
      units: [
        {
          id: "songdao-unit1",
          title: "UNIT 1: CẦU NGUYỆN VÀ KINH THÁNH",
          lessons: [
            { id: "songdao-unit1-l1", title: "Bài mở đầu: Sống Đạo là gì?", xp: 25, status: 'locked' },
            // Add 4 more lessons
            { id: "songdao-unit1-l2", title: "Bài 1.1: Các hình thức cầu nguyện", xp: 20, status: 'locked' },
            { id: "songdao-unit1-l3", title: "Bài 1.2: Kinh Thánh - Lời Chúa", xp: 20, status: 'locked' },
            { id: "songdao-unit1-l4", title: "Bài 1.3: Lectio Divina", xp: 20, status: 'locked' },
            { id: "songdao-unit1-l5", title: "Bài 1.4: Tĩnh tâm và linh thao", xp: 20, status: 'locked' },
          ],
        },
        // Add 2 more units for Sống Đạo 1
         {
          id: "songdao-unit2",
          title: "UNIT 2: LUÂN LÝ KITÔ GIÁO",
          lessons: [
            { id: "songdao-unit2-l1", title: "Bài 2.1: Lương tâm", xp: 20, status: 'locked' },
            { id: "songdao-unit2-l2", title: "Bài 2.2: Tự do và trách nhiệm", xp: 20, status: 'locked' },
            { id: "songdao-unit2-l3", title: "Bài 2.3: Các mối phúc thật", xp: 20, status: 'locked' },
            { id: "songdao-unit2-l4", title: "Bài 2.4: Công bằng xã hội (Giới thiệu)", xp: 20, status: 'locked' },
            { id: "songdao-unit2-l5", title: "Bài 2.5: Bảo vệ sự sống và phẩm giá con người", xp: 20, status: 'locked' },
          ],
        },
        {
          id: "songdao-unit3",
          title: "UNIT 3: SỐNG TRONG CỘNG ĐOÀN",
          lessons: [
            { id: "songdao-unit3-l1", title: "Bài 3.1: Gia đình Kitô hữu", xp: 20, status: 'locked' },
            { id: "songdao-unit3-l2", title: "Bài 3.2: Giáo xứ - Cộng đoàn đức tin", xp: 20, status: 'locked' },
            { id: "songdao-unit3-l3", title: "Bài 3.3: Phục vụ tha nhân", xp: 20, status: 'locked' },
            { id: "songdao-unit3-l4", title: "Bài 3.4: Đối thoại liên tôn", xp: 20, status: 'locked' },
            { id: "songdao-unit3-l5", title: "Bài 3.5: Ôn tập cuối khóa Sống Đạo 1", xp: 25, status: 'locked' },
          ],
        }
      ],
      totalLessons: 15,
    },
    // "Sống Đạo 2": { ... },
    // "Sống Đạo 3": { ... },
  }
  // TODO: Populate "Xưng Tội 3", "Thêm Sức 2", "Thêm Sức 3", "Sống Đạo 2", "Sống Đạo 3"
  // following the same pattern with unique lesson IDs and hardcoded titles.
  // For brevity, only Xưng Tội 1 & 2, Thêm Sức 1, Sống Đạo 1 are partially filled.
  // Ensure all lesson IDs are unique as per their category-unit-lesson structure.
  // e.g., for "Xưng Tội 2, Unit 1, Lesson 2": id: "xungtoi2-unit1-l2"
  // e.g., for "Thêm Sức 2, Unit 1, Lesson 1": id: "themsuc2-unit1-l1"
};
// --- END: Static Learning Path Data ---

// The getMockLearningPathData function has been removed.
// Components should now import APP_LEARNING_PATH_DATA and process it.

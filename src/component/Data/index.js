// locations.js

export const locations = [
  "القاهرة",
  "الإسكندرية",
  "الجيزة ",
  "المنصورة",
 " الإسماعيلية",
 "السويس",
 "الفيوم",
 "بورسعيد",
 "الشرقية",
"الدقهلية",
"كفر الشيخ",
  "الغربية",
  "البحيرة",
  "مطروح",
  "الأقصر",
  "اسوان",
  "سوهاج",
  "قنا",
  "البحر الأحمر",
"بني سويف",
  "دمياط",
  "الوادي الجديد",
  "شمال سيناء",
  "جنوب سيناء",
  "المنيا",
  "المنوفية",
  "اسيوط",
];

// جميع الدول العربية
export const nationalities = [
  "سعودي",
  "إماراتي",
  "كويتي",
  "قطري",
  "عماني",
  "جزائري",
  "تونسي",
  "مغربي",
  "ليبي",
  "سوداني",
  "يمني",
  "سوري",
  "عراقي",
  "لبناني",
  "فلسطيني",
  "أردني",
  "بحريني",
  "موريتاني",
  "صومالي",
  "جيبوتي",
  "كوموري",
  "مالديفي",
  // Add more nationalities as needed
];

export const secondarySchoolBranches = [
  "الأدبي (Al-Adabi)", // Literary Branch
  "العلمي (Al-Ilmi)", // Scientific Branch
  "الرياضيات والعلوم (Al-Riyadiyat wa Al-Ulum)", // Mathematics and Sciences Branch
  "الاقتصاد والإدارة (Al-Iqtisad wa Al-Idara)", // Economics and Administration Branch
  "التكنولوجيا الصناعية (Al-Taknologia Al-Sanayia)", // Industrial Technology Branch
  "الزراعي (Al-Zirai)", // Agricultural Branch
  "الفنون (Al-Funun)", // Arts Branch
  "الصحة والبيئة (Al-Sihha wa Al-Bi'a)", // Health and Environment Branch
  "علم النفس والاجتماع (Ilm al-Nafs wa al-Ijtima')", // Psychology and Sociology Branch
  "اللغات الأجنبية (Al-Lughat Al-Ajnabiya)", // Foreign Languages Branch
  "الصناعات الغذائية (Al-Sina'at Al-Ghida'iya)", // Food Industries Branch
  "الفيزياء والكيمياء (Al-Fiziyaa wa Al-Kimiya)", // Physics and Chemistry Branch
  // Add more branches as needed
];

// جدول للكليات في مصر
export const egyptColleges = [
  { id: 1, name: "كليه الحاسبات" },
  { id: 2, name: "كليه الهندسه" },
  { id: 3, name: "كليه الطب" },
  { id: 4, name: "كليه العلوم" },
  { id: 5, name: "كليه الصيدله" },
  { id: 6, name: "كليه التربيه" },
  { id: 7, name: "كليه الفنون الجميله" },
  { id: 8, name: "كليه الاداب" },
  { id: 9, name: "كليه الحقوق" },
  { id: 10, name: "كليه الخدمه الاجتماعيه" },
  { id: 11, name: "كليه التكنولوجيا" },
  { id: 12, name: "كليه السياحه والفنادق" },
  // أضف المزيد من الكليات حسب الحاجة
];

// جدول للجامعات في مصر
export const egyptUniversities = [
  { id: 1, name: "حلوان الاهلية" },
  { id: 2, name: "حلوان" },
  // أضف المزيد من الجامعات حسب الحاجة
];

export const gpa = [
  "ضعيف",
  "مقبول",
  "متوسط",
  "جيد",
  "جيد جدا",
  "امتياز",
  // أضف المزيد من التقديرات حسب الحاجة
];

// بيانات المحافظات والبلدان التابعة لها
export const provinces = [
  {
    "المحافظة": "القاهرة الكبرى",
    "البلدان": [
      { "الاسم": "القاهرة", "مستبعدة": true },
      { "الاسم": "الجيزة", "مستبعدة": true },
      { "الاسم": "القليوبية", "مستبعدة": true }
    ]
  },
  {
    "المحافظة": "الجيزة",
    "البلدان": [
      { "الاسم": "مركز الواحات البحرية", "مستبعدة": false }
    ]
  },
  {
    "المحافظة": "القليوبية",
    "البلدان": [
      { "الاسم": "كفر شكر", "مستبعدة": false }
    ]
  },
  {
    "المحافظة": "محافظات أخرى",
    "البلدان": [
      { "الاسم": "دمياط", "مستبعدة": false },
      { "الاسم": "الدقهليه", "مستبعدة": false },
      { "الاسم": "الغربيه", "مستبعدة": false },
      { "الاسم": "الشرقيه", "مستبعدة": false },
      { "الاسم": "اسيوط", "مستبعدة": false },
      { "الاسم": "قنا", "مستبعدة": false },
      { "الاسم": "اسوان", "مستبعدة": false },
      { "الاسم": "جنوب الوادي", "مستبعدة": false },
      { "الاسم": "البحيره", "مستبعدة": false },
      { "الاسم": "بور سعيد", "مستبعدة": false },
      { "الاسم": "البحر الاحمر", "مستبعدة": false },
      { "الاسم": "الفيوم", "مستبعدة": false },
      { "الاسم": "بني سويف", "مستبعدة": false },
      { "الاسم": "الاسكنريه", "مستبعدة": false },
      { "الاسم": "سوهاج", "مستبعدة": false },
      { "الاسم": "مطروح", "مستبعدة": false },
      { "الاسم": "السويس", "مستبعدة": false },
      { "الاسم": "المنيا", "مستبعدة": false },
      { "الاسم": "الاقصر", "مستبعدة": false },
      { "الاسم": "شمال سيناء", "مستبعدة": false },
      { "الاسم": "المنوفيه", "مستبعدة": false },
      { "الاسم": "جنوب سيناء", "مستبعدة": false },
      { "الاسم": "كفر الشيخ", "مستبعدة": false },
      { "الاسم": "الاسماعيليه", "مستبعدة": false },
    ]
  }
];

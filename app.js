/**
 * MOHAMMED BAQIR - PORTFOLIO INTERACTIVE APPLICATION
 * Features: i18n (AR/EN), Theme Toggle, Live Search & Filtering,
 * Interactive Modal, PWA offline registration, Mobile Share.
 */

// 1. PROJECT DATA REPOSITORY
const PROJECTS_DATA = {
  project_3: {
    category: { ar: "أنظمة متكاملة (Full-Stack)", en: "Full-Stack System" },
    title: { ar: "مشروع إدارة المجمع والوحدات السكنية", en: "Residential Compound Management System" },
    desc: {
      ar: "نظام إداري متطور وشامل للمجمعات والوحدات السكنية. تم بناؤه باستخدام أحدث تقنيات Next.js 14 مع TypeScript في الواجهة الأمامية و Node.js في الخادم، مع استخدام Prisma ORM للتعامل الفعال مع قواعد البيانات، ودعم التحديثات والإشعارات اللحظية عبر تقنية Socket.io.",
      en: "A comprehensive enterprise system for residential compound and housing unit management. Built with Next.js 14, TypeScript, Node.js backend, Prisma ORM, and Socket.io for real-time notifications and telemetry."
    },
    features: {
      ar: [
        "لوحة تحكم تفاعلية لمتابعة حالة الوحدات السكنية (شاغرة، محجوزة، تحت الصيانة)",
        "نظام متكامل لإدارة عقود المستأجرين وتوثيق الدفعات المالية والأقساط",
        "تحديثات حية وفورية عبر WebSockets / Socket.io دون الحاجة لإعادة تحميل الصفحة",
        "هيكلية كود نظيفة (Clean Architecture) مع فصل الواجهات (Frontend) عن الخدمات الخلفية (Backend)",
        "تصميم متجاوب ومتوافق مع جميع شاشات الهواتف والأجهزة اللوحية واللابتوب"
      ],
      en: [
        "Interactive dashboard tracking housing unit statuses (Vacant, Occupied, Maintenance)",
        "Complete tenancy contracts and financial installment billing management",
        "Real-time WebSocket / Socket.io live updates without page reload",
        "Clean scalable architecture with separated Next.js frontend and Node backend",
        "Fully responsive layout optimized for mobile, tablet, and desktop screens"
      ]
    },
    tech: ["Next.js 14", "TypeScript", "Node.js", "Prisma ORM", "Socket.io", "Tailwind CSS", "PostgreSQL / SQLite"],
    repoUrl: "https://github.com/mhmd-baqir/project_3"
  },

  graduation_projects: {
    category: { ar: "الذكاء الاصطناعي و Python", en: "AI & Python" },
    title: { ar: "مشروع التخرج: نظام ترشيح الكتب بالذكاء الاصطناعي", en: "AI Book Recommendation & Discovery System" },
    desc: {
      ar: "مشروع تخرج نوعي يجمع بين خوارزميات التعلم الآلي وتطوير الويب والهواتف. يقوم النظام بتحليل تفضيلات القراء واهتماماتهم ثم توليد توصيات ذكية وشخصية للكتب بالاعتماد على خوارزميات معالجة اللغة الطبيعية والترشيح التعاوني والمحتوى، مع ربط خادم Flask وتطبيق هاتف.",
      en: "A graduation project integrating machine learning recommendation models with Flask web services and mobile applications. Analyzes reader interests to deliver tailored recommendations using collaborative and content-based filtering."
    },
    features: {
      ar: [
        "محرك ذكاء اصطناعي (AI Scorer & Recommender) لتقييم واقتراح الكتب المناسبة لكل قارئ",
        "خادم Flask قوي يقدم واجهات برمجة تطبيقات (RESTful APIs) للتطبيقات المختلفة",
        "دعم تطبيق الهواتف الذكية (Mobile App) للتصفح والحصول على التوصيات في أي مكان",
        "نظام تقييمات، مراجعات، وتصنيفات متعددة للكتب والمؤلفين",
        "إمكانية النشر السحابي مع ملفات تهيئة جاهزة (Render / Docker)"
      ],
      en: [
        "AI Scorer & Recommender engine evaluating reader preferences and interests",
        "Robust Flask RESTful API server serving recommendations across clients",
        "Companion mobile app architecture allowing readers to discover books on the go",
        "Reviews, ratings, and genre-based multidimensional classification",
        "Cloud deployment readiness with Render / Procfile configurations"
      ]
    },
    tech: ["Python 3", "Flask", "AI / Machine Learning", "Scikit-Learn", "REST APIs", "Mobile App", "SQLite / PostgreSQL"],
    repoUrl: "https://github.com/mhmd-baqir/graduation_projects"
  },

  supermarket1: {
    category: { ar: "تجارة إلكترونية (E-Commerce)", en: "E-Commerce" },
    title: { ar: "منصة وتطبيق السوبرماركت والتسوق الإلكتروني", en: "Full-Featured Supermarket E-Commerce Platform" },
    desc: {
      ar: "منصة تجارة إلكترونية متكاملة مصممة خصيصاً لمتاجر التجزئة والسوبرماركت. تتيح للمستخدمين تصفح المنتجات والأقسام، إضافة المنتجات للسلة بشكل تفاعلي سريع عبر AJAX، وتطبيق كوبونات التخفيض، مع لوحة إدارة ضخمة تغطي المنتجات، الطلبات، والمستخدمين.",
      en: "An end-to-end e-commerce web platform tailored for grocery and retail markets. Includes instant AJAX shopping cart, discount coupons engine, Google OAuth authentication, and complete administrative control."
    },
    features: {
      ar: [
        "سلة تسوق فورية وسريعة باستخدام تقنية AJAX دون إعادة تحميل الصفحة",
        "محرك متكامل لكوبونات الخصم والعروض الترويجية وحساب الضرائب والإجمالي",
        "تسجيل دخول سريع وآمن عبر حسابات Google (Google OAuth 2.0)",
        "لوحة تحكم إدارية شاملة: إدارة الأقسام، المنتجات، تتبع الطلبات، والمستخدمين",
        "قاعدة بيانات متقدمة مع ملفات ترحيل وهجرة بيانات SQL منظمة"
      ],
      en: [
        "Fast live AJAX shopping cart without page refreshes",
        "Discount coupon & promotional code engine with dynamic checkout calculation",
        "Seamless Google OAuth 2.0 single sign-on integration",
        "Comprehensive Admin Dashboard: categories, products, orders tracking, and users",
        "Structured MySQL database with automated schema updates and seeding scripts"
      ]
    },
    tech: ["PHP (OOP)", "MySQL", "Google OAuth 2.0", "AJAX / JavaScript", "CSS3 / HTML5", "E-Commerce Architecture"],
    repoUrl: "https://github.com/mhmd-baqir/supermarket1"
  },

  project_2: {
    category: { ar: "أنظمة طبية (Healthcare)", en: "Healthcare Tech" },
    title: { ar: "نظام إدارة عيادة الأسنان والمواعيد الطبية", en: "Dental Clinic Management System" },
    desc: {
      ar: "نظام إداري وطبي متكامل مخصص لعيادات ومراكز طب الأسنان. يهدف إلى أتمتة حجز المواعيد وتنظيم سجلات المرضى والملفات الطبية وتسهيل متابعة الجلسات وجدول عمل الأطباء بكفاءة عالية.",
      en: "A specialized healthcare clinic automation system for dental centers. Streamlines appointment scheduling, patient records, treatment history tracking, and medical administrative operations."
    },
    features: {
      ar: [
        "نظام إلكتروني لحجز مواعيد مراجعة الأسنان واختيار الأوقات المتاحة",
        "سجل تاريخي شامل لكل مريض يتضمن الإجراءات الطبية والزيارات السابقة",
        "لوحة تحكم للطبيب للإشراف على قائمة المرضى اليومية والمواعيد القادمة",
        "حماية بيانات المرضى وسجلاتهم عبر نظام تسجيل دخول وصلاحيات مستخدمين",
        "قاعدة بيانات SQL محسنة وسريعة الاستجابة"
      ],
      en: [
        "Online patient appointment booking with available time slots selection",
        "Comprehensive medical record tracking for patient dental history and procedures",
        "Dedicated doctor dashboard to inspect daily schedules and upcoming visits",
        "Role-based access control protecting confidential patient records",
        "Optimized relational MySQL schema with fast query execution"
      ]
    },
    tech: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Clinic Management"],
    repoUrl: "https://github.com/mhmd-baqir/project_2"
  },

  project_php1: {
    category: { ar: "بوابات الحجوزات (Booking)", en: "Booking Portal" },
    title: { ar: "موقع ونظام حجوزات العيادات الطبية", en: "Medical Clinic Appointments & Booking" },
    desc: {
      ar: "منصة ويب مخصصة لحجز المواعيد في العيادات الطبية والمستوصفات. تسهل على المرضى اختيار الطبيب والعيادة وتثبيت موعد الفحص، كما تساعد العيادة على تنظيم أوقات الانتظار ومنع التضارب في المواعيد.",
      en: "Web booking platform facilitating medical clinic reservations. Enables patients to choose physicians, select appointments, and streamline clinic reception workflows."
    },
    features: {
      ar: [
        "جدولة مرنة لأوقات عمل الأطباء والعيادات المختلفة",
        "واجهة مريحة وبسيطة للمرضى لحجز الموعد بخطوات معدودة",
        "تنظيم الطوابير وقوائم الانتظار داخل المركز الطبي",
        "لوحة إدارية لمراجعة وتأكيد أو تعديل المواعيد المحجوزة"
      ],
      en: [
        "Flexible scheduling for physicians across varied clinical departments",
        "Clean, straightforward user flow for booking an appointment in seconds",
        "Waitlist and patient queue management for clinic reception",
        "Administrative dashboard to confirm, reschedule, or cancel bookings"
      ]
    },
    tech: ["PHP", "MySQL", "JavaScript", "Responsive Web Design"],
    repoUrl: "https://github.com/mhmd-baqir/project_php1"
  },

  project_1: {
    category: { ar: "أدوات وتطبيقات مالية (FinTech)", en: "FinTech Utility" },
    title: { ar: "تطبيق تحويل العملات وأسعار الصرف اللحظي", en: "Real-Time Currency Converter App" },
    desc: {
      ar: "تطبيق ويب تفاعلي دقيق وسريع يتيح للمستخدمين تحويل مبالغ العملات وحساب أسعار الصرف العالمية لحظة بلحظة مع ربط مباشر ببيانات أسعار الصرف، مدعوم بواجهة مستخدم جذابة وخادم Python مساعد.",
      en: "A responsive currency converter application that calculates real-time exchange rates. Features instant conversions across world currencies with live API feeds and clean interactive UI."
    },
    features: {
      ar: [
        "تحويل لحظي بين عشرات العملات العالمية والمحلية في أجزاء من الثانية",
        "واجهة مستخدم عصرية وسريعة الاستجابة تعمل بسلاسة على الهواتف واللابتوب",
        "تحديث دوري لأسعار الصرف عبر واجهات API عالمية موثوقة",
        "تصميم مريح مع رسوم توضيحية بصرية لتجربة مستخدم ممتعة"
      ],
      en: [
        "Instant multi-currency conversion executed in milliseconds",
        "Sleek mobile-first responsive layout performing smoothly across devices",
        "Live exchange rate polling from reliable financial APIs",
        "Clean UI aesthetics with intuitive number formatting and currency flags"
      ]
    },
    tech: ["JavaScript (ES6+)", "REST APIs", "HTML5", "CSS3", "Python Server"],
    repoUrl: "https://github.com/mhmd-baqir/project_1"
  },

  portfolio: {
    category: { ar: "واجهات وتجارب ويب (Web Experiences)", en: "Web Presence" },
    title: { ar: "مواقع البورتفوليو والتجارب التفاعلية", en: "Developer Portfolio Showcase" },
    desc: {
      ar: "مجموعة نماذج وتصاميم بورتفوليو شخصية متطورة تم بناؤها لإبراز المشاريع البرمجية بأعلى كفاءة بصرية. تتميز بتأثيرات الـ Particles المتحركة على Canvas، نظام الألوان الحديث، والتجاوب الكامل مع الهواتف.",
      en: "Showcase portfolio web implementations demonstrating modern frontend crafts, animated HTML5 canvas particle engines, glassmorphism UI, and cross-device responsiveness."
    },
    features: {
      ar: [
        "خلفيات تفاعلية متحركة باستخدام HTML5 Canvas و Particles",
        "أداء فائق السرعة وخفة في التحميل بدون أي مكتبات ثقيلة",
        "توافق كامل مع شاشات الهواتف الذكية مع قوائم لمسية مريحة",
        "تنظيم متناسق للأقسام لعرض المهارات والمشاريع والتواصل"
      ],
      en: [
        "Interactive canvas background effects and particle physics",
        "Lightweight vanilla architecture with zero bloat and lightning-fast load times",
        "Flawless mobile ergonomics and touch gestures",
        "Cohesive layout highlighting repositories, skill sets, and contact channels"
      ]
    },
    tech: ["HTML5", "CSS3 / Glassmorphism", "JavaScript (Vanilla)", "Canvas API", "Responsive Design"],
    repoUrl: "https://github.com/mhmd-baqir/portfolio"
  }
};

// 2. DICTIONARY FOR ARABIC / ENGLISH TRANSLATIONS
const I18N = {
  ar: {
    brand_name: "محمد باقر",
    brand_role: "مطور برمجيات & حلول ويب",
    nav_projects: "المشاريع",
    nav_skills: "المهارات والتقنيات",
    nav_guide: "التشغيل على الهاتف",
    nav_contact: "تواصل معي",
    hero_badge: "متاح للعمل والمشاريع البرمجية الجديدة",
    hero_hello: "مرحباً بك، أنا",
    hero_name: "محمد باقر (Mohammed Baqir)",
    hero_subtitle: "مطور برمجيات ومواقع Full-Stack متخصص في بناء أنظمة الويب المتكاملة، تطبيقات الذكاء الاصطناعي، والمنصات التفاعلية بتقنيات Next.js، TypeScript، PHP، و Python.",
    btn_explore_projects: "استعراض المشاريع البرمجية",
    btn_mobile_ready: "تثبيت وتصفح من الهاتف",
    btn_github_repos: "حساب GitHub الرسمي",
    stat_projects: "مشاريع برمجية متكاملة",
    stat_stacks: "بيئات ولغات برمجية",
    stat_responsive: "متوافق مع الهواتف واللابتوب",
    stat_offline: "يعمل دون إنترنت وفي أي مكان",
    section_tag_projects: "كافة المستودعات والمشاريع",
    projects_title_prefix: "معرض",
    projects_title_highlight: "المشاريع البرمجية",
    projects_subtitle: "جميع مشاريعي المرفوعة على GitHub مرتبة ومنظمة مع تفاصيل التقنيات المستخدمة وروابط الكود المباشرة وإمكانية الفتح في أي لحظة.",
    search_placeholder: "ابحث عن مشروع، لغة، تقنية...",
    filter_all: "الكل (All)",
    filter_fullstack: "Full-Stack & Next.js",
    filter_php: "PHP & MySQL",
    filter_python: "Python & الذكاء الاصطناعي",
    filter_frontend: "Front-End & أدوات",
    btn_open_live: "فتح وتصفح المشروع",
    btn_details_short: "التفاصيل",
    btn_full_details: "تفاصيل كاملة",
    badge_featured: "مميز ومتقدم ⭐",
    badge_grad: "مشروع تخرج 🎓",
    hub_title: "جميع المستودعات على GitHub",
    hub_desc: "تصفح كافة المستودعات، الأكواد، وآخر التحديثات والتعديلات على حسابي الرسمي مباشرة.",
    hub_btn: "الانتقال إلى GitHub",
    no_results_title: "لا توجد مشاريع مطابقة",
    no_results_desc: "جرّب البحث بكلمة أخرى أو قم بإلغاء الفلتر الحالي.",
    skills_tag: "الخبرات والقدرات",
    skills_title_prefix: "التقنيات و",
    skills_title_highlight: "المهارات البرمجية",
    skills_subtitle: "مجموعة الأدوات ولغات البرمجة وأطر العمل التي أستخدمها في بناء المشاريع من الصفر وحتى النشر والإطلاق.",
    cat_fullstack: "تطوير Full-Stack الحديث",
    cat_fullstack_desc: "بناء تطبيقات سريعة، تفاعلية وقابلة للتوسع بأحدث أطر العمل العالمية.",
    cat_backend: "تطوير الويب بـ PHP & قواعد البيانات",
    cat_backend_desc: "تطوير أنظمة إدارة متكاملة، مواقع تجارة إلكترونية، وربط قواعد البيانات بذكاء وأمان.",
    cat_ai: "Python والذكاء الاصطناعي",
    cat_ai_desc: "تطوير خوارزميات الترشيح والتوصية، معالجة البيانات، وبناء خوادم الـ API بالذكاء الاصطناعي.",
    cat_tools: "التصميم المتجاوب وتجربة المستخدم",
    cat_tools_desc: "واجهات عصرية متجاوبة مع الهواتف، اللابتوبات، مع إمكانية التثبيت السريع كـ PWA.",
    guide_badge: "سهولة الوصول والتنقل",
    guide_title: "كيف تفتح مشاريعك وتتصفحها في أي وقت ومن أي مكان؟",
    guide_lead: "تم تصميم هذا البورتفوليو ليعمل كـ تطبيق ويب متقدم (PWA). يمكنك تثبيته على هاتفك (آيفون أو أندرويد) بضغطة زر ليظهر كأيقونة تطبيق مستقل في شاشتك الرئيسية، وتفتحه بأي وقت دون الحاجة لفتح المتصفح يدوياً!",
    step1_title: "على هواتف Android (Chrome)",
    step1_desc: "افتح الرابط في متصفح Google Chrome، اضغط على النقاط الثلاث (⋮) في أعلى المتصفح، ثم اختر \"إضافة إلى الشاشة الرئيسية\" (Add to Home screen) أو \"تثبيت التطبيق\".",
    step2_title: "على هواتف iPhone (Safari)",
    step2_desc: "افتح الرابط في متصفح Safari، اضغط على أيقونة المشاركة (مربع بسهم لأعلى ⬆️)، ثم مرر للأسفل واختر \"إضافة إلى الشاشة الرئيسية\" (Add to Home Screen).",
    step3_title: "على أجهزة اللابتوب والكمبيوتر",
    step3_desc: "احفظ الصفحة في المفضلة (Ctrl + D) أو اضغط على علامة التثبيت الموجودة بشريط العنوان في Chrome/Edge لتشغيله كنافذة برنامج خفيف على جهازك.",
    deploy_title: "🚀 رابط موقعك المباشر الدائم",
    deploy_desc: "عند رفع هذه الملفات إلى مستودع GitHub Pages، سيكون موقعك متاحاً برابط دائم ومجاني مدى الحياة:",
    btn_copy_url: "نسخ الرابط",
    footer_tagline: "مستعد دائماً لبناء مشاريع برمجية ذكية، مبتكرة، ومصممة بأعلى معايير الجودة والأداء.",
    modal_about: "نبذة عن المشروع",
    modal_features: "أبرز الميزات والوظائف",
    modal_tech: "التقنيات والمكتبات المستخدمة",
    modal_view_repo: "فتح المستودع على GitHub",
    modal_close: "إغلاق"
  },
  en: {
    brand_name: "Mohammed Baqir",
    brand_role: "Software & Web Developer",
    nav_projects: "Projects",
    nav_skills: "Skills & Tech",
    nav_guide: "Mobile Access",
    nav_contact: "Contact",
    hero_badge: "Available for new projects & opportunities",
    hero_hello: "Hello, I am",
    hero_name: "Mohammed Baqir",
    hero_subtitle: "Full-Stack Software and Web Developer specialized in building scalable web systems, AI applications, and interactive platforms using Next.js, TypeScript, PHP, and Python.",
    btn_explore_projects: "Explore My Projects",
    btn_mobile_ready: "Open on Mobile & Laptop",
    btn_github_repos: "Official GitHub Profile",
    stat_projects: "Finished Projects",
    stat_stacks: "Core Tech Stacks",
    stat_responsive: "Mobile & Laptop Ready",
    stat_offline: "PWA Offline Accessible",
    section_tag_projects: "All Repositories & Work",
    projects_title_prefix: "My",
    projects_title_highlight: "Software Projects",
    projects_subtitle: "All my GitHub repositories cleanly organized with tech stack details, live code links, and instant access anytime, anywhere.",
    search_placeholder: "Search projects, languages, tags...",
    filter_all: "All Projects",
    filter_fullstack: "Full-Stack & Next.js",
    filter_php: "PHP & MySQL",
    filter_python: "Python & AI",
    filter_frontend: "Front-End & Tools",
    btn_open_live: "Open & Browse App",
    btn_details_short: "Details",
    btn_full_details: "Full Details",
    badge_featured: "Featured ⭐",
    badge_grad: "Graduation Project 🎓",
    hub_title: "All Repositories on GitHub",
    hub_desc: "Browse the complete repository collection, commits, and source code directly on my GitHub profile.",
    hub_btn: "Visit GitHub Profile",
    no_results_title: "No Matching Projects",
    no_results_desc: "Try searching with different keywords or clearing your active filter.",
    skills_tag: "Technical Expertise",
    skills_title_prefix: "Skills &",
    skills_title_highlight: "Tech Stack",
    skills_subtitle: "The programming languages, frameworks, and engineering tools I leverage to construct software from concept to deployment.",
    cat_fullstack: "Modern Full-Stack Engineering",
    cat_fullstack_desc: "Engineering high-speed, interactive, and resilient applications using premier modern frameworks.",
    cat_backend: "PHP Web & Database Architecture",
    cat_backend_desc: "Developing administrative systems, e-commerce stores, and secure database integrations.",
    cat_ai: "Python & Artificial Intelligence",
    cat_ai_desc: "Implementing recommendation engines, data pipelines, and RESTful AI services.",
    cat_tools: "Responsive UX & PWA Engineering",
    cat_tools_desc: "Mobile-first interfaces that can be installed directly onto home screens as fast PWAs.",
    guide_badge: "Anywhere Accessibility",
    guide_title: "How to open and access your projects anytime on any device?",
    guide_lead: "This portfolio is crafted as a Progressive Web App (PWA). You can pin it to your iPhone or Android home screen with one tap to access your projects anytime, anywhere—even offline!",
    step1_title: "On Android (Google Chrome)",
    step1_desc: "Open the link in Chrome, tap the three dots (⋮) menu at the top right, then select \"Add to Home screen\" or \"Install app\".",
    step2_title: "On iPhone (Apple Safari)",
    step2_desc: "Open the link in Safari, tap the Share icon (square with upward arrow ⬆️), scroll down and choose \"Add to Home Screen\".",
    step3_title: "On Laptops & Desktops",
    step3_desc: "Bookmark the page (Ctrl + D) or click the install icon in the browser address bar to launch it as a standalone desktop app.",
    deploy_title: "🚀 Your Live Permanent URL",
    deploy_desc: "Once deployed to GitHub Pages, your portfolio is accessible permanently at:",
    btn_copy_url: "Copy URL",
    footer_tagline: "Always prepared to craft intelligent, high-performance software engineered to the highest standards.",
    modal_about: "About This Project",
    modal_features: "Core Features & Highlights",
    modal_tech: "Technologies & Libraries",
    modal_view_repo: "View Code on GitHub",
    modal_close: "Close"
  }
};

// 3. INITIALIZATION & STATE
let currentLang = localStorage.getItem('mb_lang') || 'ar';
let currentTheme = localStorage.getItem('mb_theme') || 'dark';

document.addEventListener('DOMContentLoaded', () => {
  // Apply saved theme
  applyTheme(currentTheme);

  // Apply saved language
  applyLanguage(currentLang);

  // Set current year
  document.getElementById('currentYear').textContent = new Date().getFullYear();

  // Apply live URLs from localStorage or projects-config.js
  applyLiveUrls();

  // Setup Event Listeners
  initNavigation();
  initThemeToggle();
  initLanguageToggle();
  initSearchAndFilter();
  initModal();
  initUrlsManager();
  initShareAndCopy();
  initPWA();
});

function getEffectiveUrls() {
  const base = window.LIVE_PROJECT_URLS || {};
  try {
    const saved = JSON.parse(localStorage.getItem('mb_live_urls') || '{}');
    return { ...base, ...saved };
  } catch (e) {
    return base;
  }
}

function applyLiveUrls() {
  const urls = getEffectiveUrls();
  document.querySelectorAll('.card-actions a[data-i18n="btn_open_live"]').forEach((link) => {
    const card = link.closest('.project-card');
    const detailsBtn = card ? card.querySelector('.btn-details') : null;
    const pid = detailsBtn ? detailsBtn.getAttribute('data-project') : null;
    if (pid && urls[pid]) {
      link.href = urls[pid];
      if (urls[pid].startsWith('http')) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      } else {
        link.removeAttribute('target');
        link.removeAttribute('rel');
      }
    }
  });
}

function initUrlsManager() {
  const openBtn = document.getElementById('manageUrlsBtn');
  const modal = document.getElementById('urlsModal');
  const closeBtn = document.getElementById('closeUrlsModalBtn');
  const list = document.getElementById('urlsInputsList');
  const saveBtn = document.getElementById('saveUrlsBtn');
  const resetBtn = document.getElementById('resetUrlsBtn');
  if (!openBtn || !modal) return;

  const editableKeys = [
    { key: 'project_3', label: 'مشروع الوحدات السكنية (Next.js / Node)' },
    { key: 'graduation_projects', label: 'مشروع التخرج - ترشيح الكتب (Python / AI)' },
    { key: 'supermarket1', label: 'منصة السوبرماركت (PHP / MySQL)' },
    { key: 'project_2', label: 'عيادة الأسنان (PHP / MySQL)' },
    { key: 'project_php1', label: 'حجوزات العيادات الطبية (PHP / MySQL)' },
    { key: 'project_1', label: 'محول العملات (Static JS)' },
    { key: 'portfolio', label: 'البورتفوليو السابق (Static HTML)' }
  ];

  openBtn.addEventListener('click', () => {
    const urls = getEffectiveUrls();
    list.innerHTML = '';
    editableKeys.forEach((item) => {
      const wrap = document.createElement('div');
      wrap.innerHTML = `
        <label style="display:block;font-size:0.82rem;font-weight:700;margin-bottom:0.25rem;">${item.label}</label>
        <input type="text" data-url-key="${item.key}" value="${urls[item.key] || ''}" style="width:100%;padding:0.55rem 0.75rem;border-radius:8px;border:1px solid var(--border-subtle);background:var(--bg-primary);color:var(--text-main);font-family:var(--font-mono);font-size:0.82rem;" />
      `;
      list.appendChild(wrap);
    });
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
  });

  const close = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  };

  if (closeBtn) closeBtn.addEventListener('click', close);
  modal.addEventListener('click', (e) => { if (e.target === modal) close(); });

  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const custom = {};
      list.querySelectorAll('input[data-url-key]').forEach((inp) => {
        const val = inp.value.trim();
        if (val) custom[inp.getAttribute('data-url-key')] = val;
      });
      localStorage.setItem('mb_live_urls', JSON.stringify(custom));
      applyLiveUrls();
      close();
      showToast(currentLang === 'ar' ? 'تم حفظ الروابط الحقيقية بنجاح!' : 'Live URLs saved!');
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      localStorage.removeItem('mb_live_urls');
      applyLiveUrls();
      close();
      showToast(currentLang === 'ar' ? 'تمت استعادة الروابط الافتراضية' : 'Default URLs restored');
    });
  }
}

// 4. THEME MANAGEMENT
function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('mb_theme', theme);
  const body = document.body;
  if (theme === 'light') {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#ffffff');
  } else {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#07090e');
  }
}

function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  }
}

// 5. LANGUAGE MANAGEMENT (i18n)
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('mb_lang', lang);

  const html = document.documentElement;
  const body = document.body;
  const langText = document.getElementById('langText');

  if (lang === 'en') {
    html.setAttribute('lang', 'en');
    html.setAttribute('dir', 'ltr');
    body.classList.add('lang-en');
    if (langText) langText.textContent = 'AR';
  } else {
    html.setAttribute('lang', 'ar');
    html.setAttribute('dir', 'rtl');
    body.classList.remove('lang-en');
    if (langText) langText.textContent = 'EN';
  }

  // Update text nodes
  const dictionary = I18N[lang];
  document.querySelectorAll('[data-i18n]').forEach((elem) => {
    const key = elem.getAttribute('data-i18n');
    if (dictionary[key]) {
      const innerSpan = elem.querySelector('span');
      if (innerSpan && elem.querySelector('svg')) {
        innerSpan.textContent = dictionary[key];
      } else {
        elem.textContent = dictionary[key];
      }
    }
  });

  // Update search placeholder
  const searchInput = document.getElementById('projectSearch');
  if (searchInput && dictionary.search_placeholder) {
    searchInput.placeholder = dictionary.search_placeholder;
  }
}

function initLanguageToggle() {
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
    });
  }
}

// 6. NAVIGATION & MOBILE DRAWER
function initNavigation() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
    });
  }

  if (closeDrawerBtn && mobileDrawer) {
    closeDrawerBtn.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
    });
  }

  drawerLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (mobileDrawer) mobileDrawer.classList.remove('open');
    });
  });

  // Back to top
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// 7. SEARCH & FILTERING SYSTEM
function initSearchAndFilter() {
  const searchInput = document.getElementById('projectSearch');
  const clearBtn = document.getElementById('clearSearch');
  const filterPills = document.querySelectorAll('.filter-pill');
  const projectCards = document.querySelectorAll('.project-card:not(.github-hub-card)');
  const noResults = document.getElementById('noResults');

  let activeFilter = 'all';

  function filterProjects() {
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    let visibleCount = 0;

    projectCards.forEach((card) => {
      const category = card.getAttribute('data-category');
      const keywords = (card.getAttribute('data-keywords') || '').toLowerCase();
      const title = (card.querySelector('.project-card-title')?.textContent || '').toLowerCase();
      const desc = (card.querySelector('.project-card-desc')?.textContent || '').toLowerCase();

      const matchesFilter = activeFilter === 'all' || category === activeFilter;
      const matchesSearch = !query || title.includes(query) || desc.includes(query) || keywords.includes(query);

      if (matchesFilter && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (noResults) {
      noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }

    if (clearBtn) {
      clearBtn.style.display = query.length > 0 ? 'block' : 'none';
    }
  }

  // Search input events
  if (searchInput) {
    searchInput.addEventListener('input', filterProjects);
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      filterProjects();
    });
  }

  // Filter tabs
  filterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      filterPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      activeFilter = pill.getAttribute('data-filter');
      filterProjects();
    });
  });
}

// 8. INTERACTIVE PROJECT DETAILS MODAL
function initModal() {
  const modal = document.getElementById('projectModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalDismissBtn = document.getElementById('modalDismissBtn');
  const detailButtons = document.querySelectorAll('.btn-details');

  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalFeaturesList = document.getElementById('modalFeaturesList');
  const modalTechBadges = document.getElementById('modalTechBadges');
  const modalGithubBtn = document.getElementById('modalGithubBtn');

  function openModal(projectId) {
    const data = PROJECTS_DATA[projectId];
    if (!data || !modal) return;

    const lang = currentLang;

    modalCategory.textContent = data.category[lang] || data.category.ar;
    modalTitle.textContent = data.title[lang] || data.title.ar;
    modalDescription.textContent = data.desc[lang] || data.desc.ar;

    // Populate features
    modalFeaturesList.innerHTML = '';
    const features = data.features[lang] || data.features.ar;
    features.forEach((feat) => {
      const li = document.createElement('li');
      li.textContent = feat;
      modalFeaturesList.appendChild(li);
    });

    // Populate tech badges
    modalTechBadges.innerHTML = '';
    data.tech.forEach((t) => {
      const span = document.createElement('span');
      span.className = 'tag';
      span.textContent = t;
      modalTechBadges.appendChild(span);
    });

    // GitHub Link
    if (modalGithubBtn) {
      modalGithubBtn.href = data.repoUrl;
    }

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  detailButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      openModal(projectId);
    });
  });

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (modalDismissBtn) modalDismissBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

// 9. SHARE & COPY URL UTILITIES
function showToast(msg) {
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast) return;

  if (toastMsg) toastMsg.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

function initShareAndCopy() {
  const shareBtn = document.getElementById('shareBtn');
  const copyUrlBtn = document.getElementById('copyUrlBtn');

  const portfolioUrl = window.location.href.startsWith('http')
    ? window.location.href
    : 'https://mhmd-baqir.github.io/official-portfolio/';

  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: 'محمد باقر | معرض المشاريع البرمجية',
            text: 'تصفح مشاريع وأعمال المطور محمد باقر على الويب والهاتف',
            url: portfolioUrl
          });
        } catch (e) {
          // User dismissed or unsupported
        }
      } else {
        // Fallback to copy
        copyToClipboard(portfolioUrl);
      }
    });
  }

  if (copyUrlBtn) {
    copyUrlBtn.addEventListener('click', () => {
      copyToClipboard(portfolioUrl);
    });
  }
}

function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(currentLang === 'ar' ? 'تم نسخ الرابط بنجاح!' : 'Link copied to clipboard!');
    }).catch(() => {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showToast(currentLang === 'ar' ? 'تم نسخ الرابط بنجاح!' : 'Link copied to clipboard!');
  } catch (err) {
    showToast(text);
  }
  document.body.removeChild(textarea);
}

// 10. PROGRESSIVE WEB APP (SERVICE WORKER)
function initPWA() {
  if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then((reg) => {
          console.log('PWA ServiceWorker registered with scope: ', reg.scope);
        })
        .catch((err) => {
          console.log('PWA ServiceWorker registration failed: ', err);
        });
    });
  }
}

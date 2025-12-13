// نشغل الكود بعد ما الـ DOM يجهز
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    const menuToggle  = document.getElementById('menuToggle');
    const navLinks    = document.querySelectorAll('nav a');
    const THEME_KEY   = 'theme';

    // دالة تساعدنا نضبط شكل زر الثيم حسب الوضع الحالي
    const updateThemeIcon = () => {
        if (!themeToggle) return;
        if (body.classList.contains('dark')) {
            themeToggle.textContent = '☀️'; // حالياً دارك → الزر يعرض "أرجع لايت"
        } else {
            themeToggle.textContent = '🌙'; // حالياً لايت → الزر يعرض "روح دارك"
        }
    };

    // نقرأ الثيم من localStorage (لو موجود)
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme === 'dark') {
        body.classList.add('dark');
    }
    // نحدّث الأيقونة على حسب الوضع الحالي (سواء من التخزين أو الديفولت)
    updateThemeIcon();

    // ===== Dark Mode Toggle =====
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark');

            if (body.classList.contains('dark')) {
                localStorage.setItem(THEME_KEY, 'dark');
            } else {
                localStorage.setItem(THEME_KEY, 'light');
            }

            updateThemeIcon();
        });
    }

    // ===== Mobile Nav Toggle =====
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            body.classList.toggle('nav-open');
        });
    }

    // لما يضغط على أي لينك من قائمة الناف في الجوال → نقفل المنيو
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            body.classList.remove('nav-open');
        });
    });
});

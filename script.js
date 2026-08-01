document.addEventListener("DOMContentLoaded", function () {
    const langSwitch = document.querySelector(".language-switch");
    const title = document.getElementById("title");
    const accessBtn = document.getElementById("accessBtn");

    const navIds = [
        "nav-home",
        "nav-about",
        "nav-faq",
        "nav-contact",
        "nav-login",
        "nav-signup"
    ];

    const translations = {
        EN: {
            title: "Circle of the Living FORCE!",
            button: "Access",
            nav: ["Home", "About Us", "Faq", "Contact us", "Login", "Signup"]
        },
        RU: {
            title: "Круг ЖиваЯ СИЛА!",
            button: "Доступ",
            nav: ["Главная", "О нас", "Вопросы", "Контакты", "Вход", "Регистрация"]
        },
        ES: {
            title: "Círculo de la Fuerza Viva!",
            button: "Acceso",
            nav: ["Inicio", "Sobre nosotros", "Preguntas", "Contacto", "Iniciar sesión", "Registro"]
        },
        ZH: {
            title: "生命之力之环!",
            button: "进入",
            nav: ["主页", "关于我们", "常见问题", "联系我们", "登录", "注册"]
        },
        AR: {
            title: "دائرة القوة الحية!",
            button: "دخول",
            nav: ["الرئيسية", "معلومات عنا", "الأسئلة", "اتصل بنا", "تسجيل الدخول", "إنشاء حساب"]
        },
        FR: {
            title: "Cercle de la Force Vivante!",
            button: "Accès",
            nav: ["Accueil", "À propos", "FAQ", "Contact", "Connexion", "Inscription"]
        }
    };

    let langs = ["EN", "RU", "ES", "ZH", "AR", "FR"];

    const urlParams = new URLSearchParams(window.location.search);
    const currentLang = urlParams.get("lang");

    let index = langs.indexOf(currentLang);
    if (index === -1) index = 0;

    function applyTranslations(lang) {
        if (translations[lang]) {
            if (title) title.innerHTML = translations[lang].title;
            if (accessBtn) accessBtn.textContent = translations[lang].button;

            navIds.forEach((id, i) => {
                const el = document.getElementById(id);
                if (el) el.textContent = translations[lang].nav[i];
            });
        }
    }

    applyTranslations(langs[index]);

    if (langSwitch) {
        langSwitch.textContent = langs[index];

        langSwitch.addEventListener("click", function () {
            index = (index + 1) % langs.length;
            let lang = langs[index];
            langSwitch.textContent = lang;

            applyTranslations(lang);
        });
    }

    if (accessBtn) {
        accessBtn.addEventListener("click", function () {
            window.location.href = "second_page.html?lang=" + langs[index];
        });
    }
});

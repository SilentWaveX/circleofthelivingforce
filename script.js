document.addEventListener("DOMContentLoaded", function () {
    const langSwitch = document.querySelector(".language-switch");
    const title = document.getElementById("title");

    const translations = {
    EN: {
        title: "Circle of the Living FORCE!",
        button: "Access"
    },
    RU: {
        title: "Круг ЖиваЯ СИЛА!",
        button: "Доступ"
    },
    ES: {
        title: "Círculo de la Fuerza Viva!",
        button: "Acceso"
    },
    ZH: {
        title: "生命之力之环!",
        button: "进入"
    },
    AR: {
        title: "دائرة القوة الحية!",
        button: "دخول"
    },
    FR: {
        title: "Cercle de la Force Vivante!",
        button: "Accès"
    }
};

    let langs = ["EN", "RU", "ES", "ZH", "AR", "FR"];
    let index = 0;

    if (langSwitch) {
        langSwitch.textContent = langs[index];

        langSwitch.addEventListener("click", function () {
            index = (index + 1) % langs.length;
            let lang = langs[index];
            langSwitch.textContent = lang;

            if (title && translations[lang]) {
                title.innerHTML = translations[lang];
            }
        });
    }
});

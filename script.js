document.addEventListener("DOMContentLoaded", function () {
    const langSwitch = document.querySelector(".language-switch");
    const title = document.getElementById("title");

    const translations = {
        EN: "Circle of the Living FORCE!",
        RU: "Круг ЖиваЯ СИЛА!",
        ES: "Círculo de la Fuerza Viva!",
        ZH: "生命之力之环!",
        AR: "دائرة القوة الحية!",
        FR: "Cercle de la Force Vivante!"
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

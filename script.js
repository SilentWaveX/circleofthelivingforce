document.addEventListener("DOMContentLoaded", function () {
    const langSwitch = document.querySelector(".language-switch");

    let langs = ["EN", "RU", "ES", "ZH", "AR", "FR"];
    let index = 0;

    if (langSwitch) {
        langSwitch.textContent = langs[index];

        langSwitch.addEventListener("click", function () {
            index = (index + 1) % langs.length;
            langSwitch.textContent = langs[index];
        });
    }
});

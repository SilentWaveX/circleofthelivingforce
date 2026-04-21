document.addEventListener("DOMContentLoaded", function () {
    const langSwitch = document.querySelector(".language-switch");

    if (langSwitch) {
        langSwitch.addEventListener("click", function () {
            alert("Language switch works");
        });
    }
});

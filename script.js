function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-pt][data-en]");

    elements.forEach(element => {
        element.innerHTML = element.getAttribute(`data-${lang}`);
    });

    localStorage.setItem("language", lang);

    if (lang === "pt") {
        document.documentElement.lang = "pt-br";
    } else {
        document.documentElement.lang = "en";
    }
}

function setTheme(theme) {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(theme + "-mode");
    localStorage.setItem("theme", theme);
}

window.onload = function () {
    const savedLanguage = localStorage.getItem("language") || "pt";
    const savedTheme = localStorage.getItem("theme") || "light";

    setLanguage(savedLanguage);
    setTheme(savedTheme);
};
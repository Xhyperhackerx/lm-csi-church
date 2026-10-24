const englishBtn = document.getElementById("englishBtn");
const malayalamBtn = document.getElementById("malayalamBtn");

function changeLanguage(language) {
  document.documentElement.lang = language;

  const elements = document.querySelectorAll("[data-en]");

  elements.forEach((element) => {
    if (language === "ml") {
      element.textContent = element.getAttribute("data-ml");
    } else {
      element.textContent = element.getAttribute("data-en");
    }
  });

  if (language === "ml") {
    malayalamBtn.classList.add("active");
    englishBtn.classList.remove("active");
  } else {
    englishBtn.classList.add("active");
    malayalamBtn.classList.remove("active");
  }
}

englishBtn.addEventListener("click", () => {
  changeLanguage("en");
});

malayalamBtn.addEventListener("click", () => {
  changeLanguage("ml");
});

// Mobile menu

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});

// Footer year

document.getElementById("year").textContent = new Date().getFullYear();

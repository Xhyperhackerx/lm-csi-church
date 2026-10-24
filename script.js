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

document.getElementById("year").textContent = new Date().getFullYear();

// Navbar effect when scrolling

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  if (window.scrollY > 60) {
    header.style.background = "rgba(7,27,46,0.98)";
  } else {
    header.style.background = "rgba(7,27,46,0.92)";
  }
});

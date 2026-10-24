const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {
  menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  document.querySelectorAll(".navbar a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  });
}

// Current year
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Moving photo gallery
const galleryTrack = document.getElementById("galleryTrack");
const galleryPrev = document.getElementById("galleryPrev");
const galleryNext = document.getElementById("galleryNext");

if (galleryTrack && galleryPrev && galleryNext) {
  const scrollGallery = (direction) => {
    const firstPhoto = galleryTrack.querySelector(".gallery-item");

    if (!firstPhoto) return;

    const gap = parseFloat(getComputedStyle(galleryTrack).gap) || 0;

    const distance = firstPhoto.getBoundingClientRect().width + gap;

    galleryTrack.scrollBy({
      left: direction * distance,
      behavior: "smooth",
    });
  };

  galleryPrev.addEventListener("click", () => {
    scrollGallery(-1);
  });

  galleryNext.addEventListener("click", () => {
    scrollGallery(1);
  });
}

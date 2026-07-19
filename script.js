// script.js

// ================================
// NAVBAR SCROLL EFFECT
// ================================
const nav = document.getElementById("mainNav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// ================================
// ACTIVE NAV LINK ON SCROLL
// ================================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${entry.target.id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((s) => sectionObserver.observe(s));

// ================================
// SCROLL REVEAL
// ================================
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach((el) => revealObserver.observe(el));

// ================================
// CAROUSEL: DETECCIÓN DE ORIENTACIÓN
// ================================
function applyCarouselOrientation() {
  const images = document.querySelectorAll(".carousel-img");

  images.forEach((img) => {
    const apply = () => {
      if (img.naturalWidth === 0 || img.naturalHeight === 0) return;

      const isPortrait = img.naturalHeight > img.naturalWidth;
      img.classList.toggle("is-portrait", isPortrait);
      img.classList.toggle("is-landscape", !isPortrait);
    };

    // Si ya cargó (caché)
    if (img.complete) {
      apply();
    } else {
      img.addEventListener("load", apply);
    }
  });
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", applyCarouselOrientation);
// ---- Footer year ----
document.getElementById("year").textContent = new Date().getFullYear();

// ---- Rotating role highlight (Data Scientist <-> AI/ML Engineer) ----
const roles = document.querySelectorAll(".role");
let activeRole = 0;
if (roles.length > 1 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  setInterval(() => {
    roles[activeRole].removeAttribute("data-active");
    activeRole = (activeRole + 1) % roles.length;
    roles[activeRole].setAttribute("data-active", "");
  }, 2600);
}

// ---- Mobile menu ----
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("is-open");
  nav.classList.toggle("menu-open", open);
  burger.setAttribute("aria-expanded", String(open));
});

navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    nav.classList.remove("menu-open");
    burger.setAttribute("aria-expanded", "false");
  })
);

// ---- Scroll reveal ----
const revealTargets = document.querySelectorAll(".card, .project, .hero__text, .hero__portrait");
revealTargets.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealTargets.forEach((el) => observer.observe(el));

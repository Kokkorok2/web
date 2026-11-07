// LR2: markup only. The only script is the mobile menu toggle, which updates ARIA state
// and a BEM modifier. Visual behaviour is attached in LR3 (SCSS); data and filters come in LR4.
const toggle = document.querySelector(".site-header__toggle");
const nav = document.getElementById("primary-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("main-nav--open", !isOpen);
  });
}

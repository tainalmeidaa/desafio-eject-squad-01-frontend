const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("primary-nav");

if (toggle && nav) {
  toggle.addEventListener("click", function () {
    nav.classList.toggle("navbar-nav--open");
    toggle.classList.toggle(
      "menu-toggle--open",
      nav.classList.contains("navbar-nav--open"),
    );
  });
}

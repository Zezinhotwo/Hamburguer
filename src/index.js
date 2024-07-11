// import _ from "lodash";
import "./assets/stylesheets/style.scss";
// menu Mobile
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelectorAll("nav.menu a, nav.menu button");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.checked = false;
    });
  });
});

// End menu Mobile

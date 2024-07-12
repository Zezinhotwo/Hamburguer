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

// Import img
import ImgBurguer from "./assets/img/Burgers.png";
const DomImgBurger = document.querySelector(".ImgBurger");
DomImgBurger.src = ImgBurguer;
// pedidos -fitas burg
import ImgOrdFrita from "./assets/img/batataFrita.png";
const DomOrderFrita = document.querySelector(".OrderFrita");
DomOrderFrita.src = ImgOrdFrita;
import ImgOrdBurg from "./assets/img/pedidoBurg.png";
const DomOrderBurg = document.querySelector(".OrderBurg");
DomOrderBurg.src = ImgOrdBurg;
// restaurant
import restaurant from "./assets/img/comendo.png";
const Domrestaurant = document.querySelector(".restaurant");
Domrestaurant.src= restaurant
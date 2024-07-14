let hamb = document.querySelector(".hamb");
let navMenu = document.querySelector(".menu");

hamb.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamb.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".title-nav");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamb.classList.remove("active");
  navMenu.classList.remove("active");
}

// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("burger").addEventListener("click", function() {
//         document.querySelector(".header").classList.toggle("open")
//     })
// })

// // Закрыть меню при нажатии на Esc
// window.addEventListener('keydown', (e) => {
//     if (e.key === "Escape") {
//         // Действие при клике
//         document.querySelector(".header").classList.remove("open")
//     }
// });

// // Закрыть меню при клике вне его
// document.getElementById("menu").addEventListener('click', event => {
//     event._isClickWithInMenu = true;
// });
// document.getElementById("burger").addEventListener('click', event => {
//     event._isClickWithInMenu = true;
// });
// document.body.addEventListener('click', event => {
//     if (event._isClickWithInMenu) return;
//     // Действие при клике
//     document.querySelector(".header").classList.remove("open")
// });

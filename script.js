const burgerMenu = document.getElementById("burger-menu");
const nav = document.querySelector("nav");

burgerMenu.onclick = () => nav.classList.toggle("visible");
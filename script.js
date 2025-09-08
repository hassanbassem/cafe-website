const burgerMenu = document.getElementById("burger-menu");
const nav = document.querySelector("nav");
const reverseElement = document.querySelector(".reverse");

burgerMenu.onclick = () => nav.classList.toggle("visible");

const resizeHandler = () => {
    if (innerWidth > 770){
        reverseElement.classList.add("reverse");
        reverseElement.classList.add("rtl");
    }
    else{
        reverseElement.classList.remove("reverse");
        reverseElement.classList.remove("rtl");

    }
}

resizeHandler();

addEventListener("resize", resizeHandler);
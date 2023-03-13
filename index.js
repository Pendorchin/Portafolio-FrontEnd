const menuIconsElement = document.getElementById("menu-icons");
const menuListElement = document.getElementById("navbar-menu");
const menuClosedElement = document.getElementById("menu-closed");
const menuOpenedElement = document.getElementById("menu-opened");

menuIconsElement.addEventListener("click", () => {
    menuListElement.classList.toggle("navbar-menu--show")
    menuClosedElement.classList.toggle("menu-icons--hidden");
    menuOpenedElement.classList.toggle("menu-icons--show");
});


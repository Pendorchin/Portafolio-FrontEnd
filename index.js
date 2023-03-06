const menuIconElement = document.getElementById("menu-icons");
const menuListElement = document.getElementById("menu-list");
const menuClosedElement = document.getElementById("menu-closed");
const menuOpenedElement = document.getElementById("menu-opened");


menuOpenedElement.classList.toggle("menu-icon--hidden");

menuIconElement.addEventListener("click", () => {
    menuListElement.classList.toggle("menu-list--show")
    menuClosedElement.classList.toggle("menu-icon--hidden");
    menuOpenedElement.classList.toggle("menu-icon--show");
});



// const logoElement = document.getElementById("nav-logo"); //

// logoElement.classList.toggle("menu-icon--hidden"); //
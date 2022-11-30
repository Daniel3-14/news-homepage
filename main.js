let menuState = false;

let menu = document.getElementById("menu-container");
let hamburger = document.getElementsByClassName("hamburger");
let menuCloser = document.getElementById("menu-close");


hamburger[0].addEventListener("click", function() {
    if (menuState === false) {
        menu.style.display = "flex";
        menuState = true;
    } 
});

menuCloser.addEventListener("click", function() {
    if (menuState === true) {
        menu.style.display = "none";
        menuState = false;
    }
});


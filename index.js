// all javascript here
const htmlProgress = 90;
const cssProgress = 80;
const jsProgress = 75;
const reactProgress = 70;

document.getElementById("html-progress").style.width = htmlProgress + "%";
document.getElementById("css-progress").style.width = cssProgress + "%";
document.getElementById("js-progress").style.width = jsProgress + "%";
document.getElementById("react-progress").style.width = reactProgress + "%";



document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

const hamburgerButton = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".nav-links");
hamburgerButton.addEventListener("click", function() {
    navList.classList.toggle("active");
});
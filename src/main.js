import './css/style.css';

const NavContent = document.querySelector(".nav-menu");
const NavTrigger = document.querySelector(".nav-hamburger");
const NavOverlay = document.querySelector(".nav-overlay");
const NavLinks = document.querySelectorAll(".nav-menu li");

function toggleNav() {
    const isOpen = NavContent.classList.toggle("active");

    NavOverlay.classList.toggle("active", isOpen);
}

NavLinks.forEach((link) => {
    link.addEventListener("click", function () {
        NavLinks.forEach((item) => {
            item.classList.remove("active");
        });

        this.classList.add("active");

        NavContent.classList.remove("active");
        NavOverlay.classList.remove("active");
    });
});

if (NavTrigger && NavContent && NavOverlay) {
    NavTrigger.addEventListener("click", toggleNav);
    NavOverlay.addEventListener("click", toggleNav);
}
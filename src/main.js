import './css/style.css';
//JS de la nav mobile
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

// JS de la section Parcours
const ParcoursCards = document.querySelectorAll(".parcours-card");
 
ParcoursCards.forEach((card) => {
    const toggle = card.querySelector(".parcours-toggle");
 
    toggle.addEventListener("click", function () {
        const isOpen = card.classList.toggle("is-open");
 
        this.textContent = isOpen ? "Réduire" : "Voir le détail";
    });
});
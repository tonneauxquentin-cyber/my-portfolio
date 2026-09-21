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

// JS du form
const ContactForm = document.querySelector("#contact-form");
const ContactFeedback = document.querySelector("#contact-feedback");
 
if (ContactForm) {
    ContactForm.addEventListener("submit", function (event) {
        event.preventDefault();
 
        const submitButton = ContactForm.querySelector(".contact-submit");
        const formData = new FormData(ContactForm);
 
        submitButton.disabled = true;
        ContactFeedback.textContent = "Envoi en cours...";
        ContactFeedback.className = "contact-feedback";
 
        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { Accept: "application/json" },
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    ContactFeedback.textContent = "Message envoyé, merci !";
                    ContactFeedback.classList.add("is-success");
                    ContactForm.reset();
                } else {
                    ContactFeedback.textContent = "Une erreur est survenue, réessayez.";
                    ContactFeedback.classList.add("is-error");
                }
            })
            .catch(() => {
                ContactFeedback.textContent = "Une erreur est survenue, réessayez.";
                ContactFeedback.classList.add("is-error");
            })
            .finally(() => {
                submitButton.disabled = false;
            });
    });
}
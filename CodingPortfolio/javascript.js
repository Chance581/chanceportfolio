const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");


// Mobile navigation
navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    navToggle.setAttribute("aria-expanded", isOpen);
});


// Close mobile navigation when a link is selected
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
    });
});
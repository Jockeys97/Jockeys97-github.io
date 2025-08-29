"use strict";

// Mobile navigation toggle
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".mobile-menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (toggleButton && navLinks) {
        toggleButton.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        // Close menu after selecting a link (mobile UX)
        navLinks.querySelectorAll("a[href^='#']").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }
});



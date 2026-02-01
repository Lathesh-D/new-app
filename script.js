// ===== Mobile Navigation Toggle =====
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");

// Create menu button dynamically
const menuBtn = document.createElement("div");
menuBtn.innerHTML = "☰";
menuBtn.classList.add("menu-btn");
navbar.prepend(menuBtn);

// Toggle menu on click
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ===== Smooth Scrolling =====
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });

        // Close menu on mobile after click
        navLinks.classList.remove("active");
    });
});

// ===== Active Section Highlight =====
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("current");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("current");
        }
    });
});

// ===== Image Lightbox (Gallery Preview) =====
const galleryImages = document.querySelectorAll(".gallery-grid img");

// Create overlay
const overlay = document.createElement("div");
overlay.classList.add("overlay");
document.body.appendChild(overlay);

// Create preview image
const previewImg = document.createElement("img");
overlay.appendChild(previewImg);

// Open image
galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        previewImg.src = img.src;
        overlay.classList.add("show");
    });
});

// Close image on click
overlay.addEventListener("click", () => {
    overlay.classList.remove("show");
});
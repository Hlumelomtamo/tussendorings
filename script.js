// Show more images in the gallery
document.addEventListener('DOMContentLoaded', () => {
    const seeMoreBtn = document.getElementById('seeMoreBtn');
    const hiddenImages = document.querySelectorAll('.gallery-grid .hidden');

    if (seeMoreBtn) {
        seeMoreBtn.addEventListener('click', () => {
            hiddenImages.forEach(img => img.classList.remove('hidden'));
            seeMoreBtn.style.display = 'none';
        });
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // Adjust for fixed navbar
                behavior: 'smooth'
            });
        }

        const navLinks = document.getElementById('nav-links');
        if (navLinks && navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
        }
    });
});

//Mobile Navbar Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        menuToggle.classList.toggle('active');
    });
}
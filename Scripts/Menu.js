// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
const mobileSearchIcon = document.querySelector('.mobile-search-icon');

// Open/Close menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.classList.toggle('mobile-menu-open');
});

// Close menu when clicking on links
mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Close menu function
function closeMobileMenu() {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.classList.remove('mobile-menu-open');
}

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    const isClickInsideMenu = mobileMenu.contains(event.target);
    const isClickOnButton = hamburger.contains(event.target);
    const isClickOnSearch = mobileSearchIcon && mobileSearchIcon.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnButton && !isClickOnSearch && mobileMenu.classList.contains('active')) {
        closeMobileMenu();
    }
});

// Close menu on scroll
window.addEventListener('scroll', function() {
    if (mobileMenu.classList.contains('active')) {
        closeMobileMenu();
    }
});

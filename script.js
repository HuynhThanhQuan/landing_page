// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    setupSmoothScroll();
    setupFormValidation();
});

// Setup smooth scrolling for navigation links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Setup form validation
function setupFormValidation() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic form validation
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        if (!name || !email || !message) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Here you would typically send the form data to your server
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Add scroll animation
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.service-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('animate');
        }
    });
}); 
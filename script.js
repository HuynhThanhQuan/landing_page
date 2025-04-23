// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    setupSmoothScroll();
    setupFormValidation();
    profileImageOptimization();
    updateLanguage('vi');
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

// Profile image optimization
function profileImageOptimization() {
    const profileImage = document.querySelector('.profile-image img');
    if (!profileImage) return;

    // Add loading animation
    const container = profileImage.closest('.profile-image');
    container.style.opacity = '0.8';
    
    // Handle image loading
    profileImage.onload = function() {
        container.style.opacity = '1';
        container.style.transition = 'opacity 0.3s ease';
        
        // Apply subtle animation
        requestAnimationFrame(() => {
            profileImage.style.transform = 'scale(1.01) translateZ(0)';
        });
    };

    // Handle image loading error
    profileImage.onerror = function() {
        console.warn('Profile image failed to load');
        container.style.opacity = '1';
    };
}

// Language switching functionality
let currentLanguage = 'vi';

// Function to update the language
function updateLanguage(lang) {
    currentLanguage = lang;
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update language switcher UI
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

// Initialize language switcher
document.addEventListener('DOMContentLoaded', () => {
    const languageBtns = document.querySelectorAll('.language-btn');
    
    languageBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });

    // Set initial language to Vietnamese
    updateLanguage('vi');
}); 
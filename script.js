// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    setupSmoothScroll();
    setupFormValidation();
    profileImageOptimization();
    initCounters();
    initCarousel();
    updateLanguage('vi');
    loadMemberLogos();
    initMemberSwiper();
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
let currentLanguage = localStorage.getItem('preferredLanguage') || 'vi';

// Function to update the language
function updateLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    
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

    // Set initial language from localStorage or default to Vietnamese
    updateLanguage(currentLanguage);
});

// Counter Animation
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-counter'));
    const suffix = element.getAttribute('data-suffix') || '';
    const duration = 2000; // Animation duration in milliseconds
    const steps = 60; // Number of steps in the animation
    const stepDuration = duration / steps;
    let current = 0;
    
    const increment = target / steps;
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, stepDuration);
}

// Initialize counter animations when elements are in view
function initCounters() {
    const counterElements = document.querySelectorAll('[data-counter]');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.hasAttribute('data-counted')) {
                animateCounter(entry.target);
                entry.target.setAttribute('data-counted', 'true');
                observer.unobserve(entry.target); // Stop observing once animation starts
            }
        });
    }, options);

    counterElements.forEach(element => {
        observer.observe(element);
    });
}

// Carousel functionality
function initCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    const interval = 5000; // Change slide every 5 seconds

    function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentSlide = index;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Set up automatic sliding
    let slideInterval = setInterval(nextSlide, interval);

    // Add click handlers to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval); // Reset interval on manual navigation
            showSlide(index);
            slideInterval = setInterval(nextSlide, interval); // Restart interval
        });
    });

    // Pause on hover
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    carouselContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, interval);
    });
}

// Load member logos
function loadMemberLogos() {
    const logoElements = {
        'techcombank-logo': memberLogos.techcombank,
        'onemount-logo': memberLogos.onemount,
        'katalon-logo': memberLogos.katalon,
        'bosch-logo': memberLogos.bosch,
        'google-logo': memberLogos.google,
        'microsoft-logo': memberLogos.microsoft,
        'ibm-logo': memberLogos.ibm,
        'grab-logo': memberLogos.grab,
        'worldquant-logo': memberLogos.worldquant,
        'viettel-logo': memberLogos.viettel,
        'vietcombank-logo': memberLogos.vietcombank,
        'acb-logo': memberLogos.acb,
        'jpmorgan-logo': memberLogos.jpmorgan
    };

    for (const [id, url] of Object.entries(logoElements)) {
        const element = document.getElementById(id);
        if (element) {
            element.src = url;
        }
    }
}

// Initialize Member Swiper
const memberSwiper = new Swiper('.member-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 5,
    loop: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    },
    speed: 7000,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 2
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 3
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 4
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 5
        }
    }
}); 
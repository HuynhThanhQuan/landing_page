// Sample portfolio data
const portfolioData = [
    {
        title: "Financial Data Analysis Platform",
        client: "Major Bank",
        description: "Built a comprehensive data analysis platform for financial risk assessment",
        image: "portfolio/portfolio1.png"
    },
    {
        title: "AI-Powered Trading System",
        client: "Investment Firm",
        description: "Developed machine learning models for automated trading decisions",
        image: "portfolio/portfolio2.png"
    },
    {
        title: "Digital Transformation Strategy",
        client: "Insurance Company",
        description: "Led digital transformation initiative with data-driven insights",
        image: "portfolio/portfolio3.png"
    }
];

// Sample blog data
const blogData = [
    {
        title: "The Future of Data Science in Fintech",
        date: "March 15, 2024",
        readTime: "5 min read",
        excerpt: "Exploring the latest trends and innovations in financial technology...",
        image: "blog/blog1.png"
    },
    {
        title: "AI Implementation Best Practices",
        date: "March 10, 2024",
        readTime: "4 min read",
        excerpt: "Key considerations for successful AI integration in enterprise...",
        image: "blog/blog2.png"
    },
    {
        title: "Data-Driven Decision Making",
        date: "March 5, 2024",
        readTime: "6 min read",
        excerpt: "How to leverage data analytics for better business outcomes...",
        image: "blog/blog3.png"
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadPortfolio();
    loadBlogPosts();
    setupSmoothScroll();
    setupFormValidation();
});

// Load portfolio items
function loadPortfolio() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    if (!portfolioGrid) return;

    portfolioData.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.innerHTML = `
            <div class="portfolio-card">
                <img src="images/${item.image}" alt="${item.title}" onerror="this.src='images/placeholder.png'">
                <div class="portfolio-content">
                    <h3>${item.title}</h3>
                    <p class="client">${item.client}</p>
                    <p class="description">${item.description}</p>
                    <a href="#" class="cta-secondary">View Case Study</a>
                </div>
            </div>
        `;
        portfolioGrid.appendChild(portfolioItem);
    });
}

// Load blog posts
function loadBlogPosts() {
    const blogCarousel = document.querySelector('.blog-carousel');
    if (!blogCarousel) return;

    blogData.forEach(post => {
        const blogPost = document.createElement('div');
        blogPost.className = 'blog-post';
        blogPost.innerHTML = `
            <div class="blog-card">
                <img src="images/${post.image}" alt="${post.title}" onerror="this.src='images/placeholder.png'">
                <div class="blog-content">
                    <div class="blog-header">
                        <div class="blog-meta">
                            <span><i class="far fa-calendar"></i> ${post.date}</span>
                            <span><i class="far fa-clock"></i> ${post.readTime}</span>
                        </div>
                        <h3>${post.title}</h3>
                        <p>${post.excerpt}</p>
                    </div>
                    <div class="blog-footer">
                        <a href="#" class="cta-secondary">Read More</a>
                    </div>
                </div>
            </div>
        `;
        blogCarousel.appendChild(blogPost);
    });
}

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
    const elements = document.querySelectorAll('.service-card, .portfolio-item, .blog-post');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('animate');
        }
    });
}); 
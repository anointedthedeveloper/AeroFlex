// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });
}

// Button Navigation
document.addEventListener('DOMContentLoaded', () => {
    // Shop Now buttons - go to products page
    const shopButtons = document.querySelectorAll('.btn-primary');
    shopButtons.forEach(button => {
        if (button.textContent.includes('Shop Now')) {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'products.html';
            });
        }
    });

    // Explore Collection button - go to products page
    const exploreButtons = document.querySelectorAll('.btn-secondary');
    exploreButtons.forEach(button => {
        if (button.textContent.includes('Explore Collection')) {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'products.html';
            });
        }
    });

    // Learn More button - go to about page
    const learnMoreButtons = document.querySelectorAll('.btn-primary');
    learnMoreButtons.forEach(button => {
        if (button.textContent.includes('Learn More')) {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'about.html';
            });
        }
    });

    // Contact Us buttons - go to contact page
    const contactButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    contactButtons.forEach(button => {
        if (button.textContent.includes('Contact Us')) {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'contact.html';
            });
        }
    });
});

// Smooth Scroll for scroll indicator
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const nextSection = document.querySelector('.featured-products, .brand-story');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Newsletter Form Submission
const newsletterForms = document.querySelectorAll('.newsletter-form, .newsletter-form-main');
newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        
        // Show success message
        alert(`Thank you for subscribing! We'll send updates to ${email}`);
        form.reset();
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Show success message
        alert(`Thank you ${name}! Your message has been sent. We'll respond to ${email} within 24 hours.`);
        contactForm.reset();
    });
}

// Add to Cart functionality
const addToCartButtons = document.querySelectorAll('.btn-add-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const productCard = button.closest('.product-card');
        const productName = productCard.querySelector('h4').textContent;
        
        // Add animation
        button.style.transform = 'scale(1.2)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 200);
        
        // Show notification
        showNotification(`${productName} added to cart!`);
    });
});

// Quick View functionality
const quickViewButtons = document.querySelectorAll('.btn-quick-view');
quickViewButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const productCard = button.closest('.product-card');
        const productName = productCard.querySelector('h4').textContent;
        
        showNotification(`Quick view for ${productName} - Feature coming soon!`);
    });
});

// Notification function
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(90deg, #00D4FF, #B026FF);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 212, 255, 0.5);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Ripple effect for buttons
document.querySelectorAll('.ripple-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            left: ${x}px;
            top: ${y}px;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Form input focus effects
const formInputs = document.querySelectorAll('input, textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.style.borderColor = '#00D4FF';
        this.style.background = 'rgba(255, 255, 255, 0.1)';
    });
    
    input.addEventListener('blur', function() {
        this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        this.style.background = 'rgba(255, 255, 255, 0.05)';
    });
});

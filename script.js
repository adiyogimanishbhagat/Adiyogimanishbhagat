// Welcome Message
window.addEventListener("load", function () {
    console.log("🌿 Welcome to Adiyogi Manish Bhagat Website - Pro V3");
    hideLoadingScreen();
});

// Hide Loading Screen
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.style.display = 'none';
    }
}

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
let isDarkMode = localStorage.getItem('darkMode') === 'true';

if (isDarkMode) {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️';
}

darkModeToggle.addEventListener('click', function () {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙';
    localStorage.setItem('darkMode', isDarkMode);
});

// Smooth Scroll for Navigation
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Back to Top Button
const topBtn = document.getElementById('topBtn');

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Booking System
let currentService = '';
let currentPrice = '';

function openBooking(service, price) {
    currentService = service;
    currentPrice = price;
    document.getElementById('serviceName').value = service;
    document.getElementById('servicePrice').value = `₹${price}`;
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('bookingDate').min = today;
    document.getElementById('bookingDate').value = today;
    
    document.getElementById('bookingModal').classList.add('active');
}

function closeBooking() {
    document.getElementById('bookingModal').classList.remove('active');
}

function submitBooking() {
    const serviceName = document.getElementById('serviceName').value;
    const servicePrice = document.getElementById('servicePrice').value;
    const bookingDate = document.getElementById('bookingDate').value;
    const bookingTime = document.getElementById('bookingTime').value;
    const clientName = document.getElementById('clientName').value;
    const clientPhone = document.getElementById('clientPhone').value;
    
    if (!bookingDate || !bookingTime || !clientName || !clientPhone) {
        alert('Please fill in all fields!');
        return;
    }
    
    const message = `Hi Manish! I would like to book ${serviceName} (${servicePrice}) on ${bookingDate} at ${bookingTime}. My name is ${clientName} and my phone is ${clientPhone}.`;
    const whatsappUrl = `https://wa.me/918804828088?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    closeBooking();
    alert('Redirecting to WhatsApp for booking confirmation...');
}

// Close modal on outside click
window.addEventListener('click', function (event) {
    const modal = document.getElementById('bookingModal');
    if (event.target === modal) {
        closeBooking();
    }
});

// Gallery Lightbox
function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = img.src;
    lightbox.classList.add('active');
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});

// Live Location Tracking
function shareLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const locationUrl = `https://wa.me/918804828088?text=I would like to track your location. My location: https://maps.google.com/?q=${lat},${lon}`;
            window.open(locationUrl, '_blank');
        }, function (error) {
            alert('Please enable location access to share your live location.');
            console.error(error);
        });
    } else {
        alert('Geolocation is not supported by your browser.');
    }
}

// Add to Cart (Simple notification)
function addToCart(productName, price) {
    const message = `I'm interested in ${productName} (₹${price}). Please provide more details and pricing.`;
    const whatsappUrl = `https://wa.me/918804828088?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const message = this.querySelector('textarea').value;
        
        const whatsappMessage = `New Contact Form Submission:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
        const whatsappUrl = `https://wa.me/918804828088?text=${encodeURIComponent(whatsappMessage)}`;
        
        window.open(whatsappUrl, '_blank');
        this.reset();
        alert('Thank you! Your message has been sent to WhatsApp.');
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-in-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Counter Animation for stats
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Smooth animations on scroll
window.addEventListener('scroll', () => {
    document.querySelectorAll('.service-card, .product-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Initialize scroll animations
document.querySelectorAll('.service-card, .product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
});

// Floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
    
    .product-icon {
        animation: float 3s ease-in-out infinite;
    }
`;
document.head.appendChild(style);

console.log('✅ All scripts loaded successfully!');

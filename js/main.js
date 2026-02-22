// Search functionality
function searchPainters() {
    const location = document.getElementById('locationSearch')?.value;
    if (location) {
        window.location.href = `find-painters.html?location=${encodeURIComponent(location)}`;
    } else {
        alert('Please enter a location');
    }
}

// Price range update
function updatePrice(value) {
    document.getElementById('priceValue').textContent = value;
}

// View painter profile
// View painter profile
function viewProfile(painterId) {
    // In a real app, you would pass the ID to load the correct profile
    window.location.href = `painter-profile.html?id=${painterId}`;
}

// Book now
function bookNow(painterId) {
    window.location.href = `book-service.html?painter=${painterId}`;
}

// WhatsApp chat
function whatsappChat(painterName) {
    const phoneNumber = '919876543210'; // Replace with actual WhatsApp number
    const message = encodeURIComponent(`Hi, I'm interested in your painting services.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

// Send quote on WhatsApp
function sendWhatsAppQuote() {
    const phoneNumber = '919876543210'; // Replace with actual WhatsApp number
    const message = encodeURIComponent(`I'd like to get a quote for painting services.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

// Handle login
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Add your login logic here
    console.log('Login attempt:', { email, password });
    
    // For demo purposes
    alert('Login functionality would be implemented with PHP backend');
}

// Handle Google login
function handleGoogleLogin() {
    // Add Google OAuth logic here
    console.log('Google login clicked');
    alert('Google login would be implemented with OAuth');
}

// Handle booking form
function handleBooking(event) {
    event.preventDefault();
    
    // Collect form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Send to PHP backend
    fetch('php/booking.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Booking request sent successfully! The painter will contact you soon.');
            window.location.href = 'find-painters.html';
        } else {
            alert('Error sending booking request. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error sending booking request. Please try again.');
    });
}

// View full color library
function viewFullLibrary() {
    window.location.href = 'color-library.html';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Get location from URL if on find-painters page
    const urlParams = new URLSearchParams(window.location.search);
    const location = urlParams.get('location');
    
    if (location && document.getElementById('locationSearch')) {
        document.getElementById('locationSearch').value = location;
    }
    
    // Initialize any other components
    console.log('AuraPaintings website loaded');
});





// Toggle mobile menu
function toggleMobileMenu() {
    const hamburger = document.getElementById('hamburgerMenu');
    const mobileNav = document.getElementById('mobileNav');
    const overlay = document.getElementById('menuOverlay');
    
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Prevent scrolling when menu is open
    if (mobileNav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Close menu when clicking on a link
document.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        const hamburger = document.getElementById('hamburgerMenu');
        const mobileNav = document.getElementById('mobileNav');
        const overlay = document.getElementById('menuOverlay');
        
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Close menu with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const hamburger = document.getElementById('hamburgerMenu');
        const mobileNav = document.getElementById('mobileNav');
        const overlay = document.getElementById('menuOverlay');
        
        if (mobileNav && mobileNav.classList.contains('active')) {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});

// Set active class based on current page
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const desktopLinks = document.querySelectorAll('.desktop-nav a');
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
    
    // Set active class on desktop nav
    desktopLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Highlight current page in mobile nav
    mobileLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.style.color = 'var(--primary)';
            link.style.fontWeight = '600';
            link.style.background = 'var(--light)';
        }
    });
});
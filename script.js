// Wait for the DOM to be fully loaded
console.log('Script loaded');
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    // Header scroll effect
    const header = document.querySelector('header');
    const scrollThreshold = 50;

    window.addEventListener('scroll', function() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    let menuOpen = false;

    menuBtn.addEventListener('click', function() {
        if (!menuOpen) {
            menuBtn.classList.add('open');
            navLinks.classList.add('show');
            menuOpen = true;
        } else {
            menuBtn.classList.remove('open');
            navLinks.classList.remove('show');
            menuOpen = false;
        }
    });

    // Close mobile menu when clicking on a nav link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (menuOpen) {
                menuBtn.classList.remove('open');
                navLinks.classList.remove('show');
                menuOpen = false;
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // No form submission handling needed since we removed the form

    // Function to check if an element is in viewport
    function isInViewport(element, offset = 150) {
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset
        );
    }
    
    // Elements to animate on scroll
    const skillItems = document.querySelectorAll('.skill-item');
    const aboutImage = document.querySelector('.about-image');
    const aboutText = document.querySelector('.about-text');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const skillCategories = document.querySelectorAll('.skill-category');
    const projectCards = document.querySelectorAll('.project-card');
    const contactWrapper = document.querySelector('.contact-wrapper');
    
    // Debug element counts
    console.log('Found elements:', {
        'skillItems': skillItems.length,
        'aboutImage': aboutImage ? 'yes' : 'no',
        'aboutText': aboutText ? 'yes' : 'no',
        'timelineItems': timelineItems.length,
        'skillCategories': skillCategories.length,
        'projectCards': projectCards.length,
        'contactWrapper': contactWrapper ? 'yes' : 'no'
    });
    
    // Function to add animation class when element is in viewport
    function handleScrollAnimation() {
        // Animate About section
        if (aboutImage && isInViewport(aboutImage)) {
            aboutImage.classList.add('animate');
        }
        
        if (aboutText && isInViewport(aboutText)) {
            aboutText.classList.add('animate');
        }
        
        // Animate Timeline items
        timelineItems.forEach((item, index) => {
            if (isInViewport(item)) {
                // Add delay based on index
                setTimeout(() => {
                    item.classList.add('animate');
                }, index * 200);
            }
        });
        
        // Animate Skill categories
        skillCategories.forEach((category, index) => {
            if (isInViewport(category)) {
                setTimeout(() => {
                    category.classList.add('animate');
                }, index * 200);
            }
        });
        
        // Animate Skill items
        skillItems.forEach((item, index) => {
            if (isInViewport(item)) {
                // Add delay based on index
                setTimeout(() => {
                    item.classList.add('animate');
                }, 100 + (index % 5) * 100);
            }
        });
        
        // Animate Project cards
        projectCards.forEach((card, index) => {
            if (isInViewport(card)) {
                setTimeout(() => {
                    card.classList.add('animate');
                }, index * 200);
            }
        });
        
        // Animate Contact section
        if (contactWrapper && isInViewport(contactWrapper)) {
            contactWrapper.classList.add('animate');
        }
    }
    
    // Check on scroll
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Check on initial load
    setTimeout(handleScrollAnimation, 500);
    
    // Force animation for visible sections on page load
    // Run immediately and also on window load
    function forceAnimations() {
        // Force animation for About section
        if (aboutImage) aboutImage.classList.add('animate');
        if (aboutText) aboutText.classList.add('animate');
        
        // Force animation for Timeline items with delay
        timelineItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate');
            }, 300 + index * 200);
        });
        
        // Force animation for Skill categories
        skillCategories.forEach((category, index) => {
            setTimeout(() => {
                category.classList.add('animate');
            }, 300 + index * 200);
        });
        
        // Force animation for visible Skill items
        skillItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate');
            }, 500 + (index % 5) * 100);
        });
        
        // Force animation for visible Project cards
        projectCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('animate');
            }, 300 + index * 200);
        });
        
        // Force animation for Contact section
        if (contactInfo) contactInfo.classList.add('animate');
        if (contactForm) contactForm.classList.add('animate');
    }
    
    // Run animations immediately
    console.log('Forcing animations on all sections');
    forceAnimations();
    
    // Also run on window load
    window.addEventListener('load', forceAnimations);
    
    // Typing animation for the hero section
    const typingElement = document.querySelector('.intro-text');
    if (typingElement) {
        const text = typingElement.textContent;
        typingElement.textContent = '';
        
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                typingElement.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100);
    }
    
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        });
    }
    
    // Add active class to nav links based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavLink() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(`.nav-links a[href*="${sectionId}"]`).classList.add('active');
            } else {
                document.querySelector(`.nav-links a[href*="${sectionId}"]`).classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
});
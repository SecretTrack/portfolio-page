// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll-to-top button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '↑';
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '20px';
scrollToTopButton.style.right = '20px';
scrollToTopButton.style.display = 'none'; // Hide by default
scrollToTopButton.style.backgroundColor = '#003285';
scrollToTopButton.style.color = '#ffffff';
scrollToTopButton.style.border = 'none';
scrollToTopButton.style.borderRadius = '5px';
scrollToTopButton.style.padding = '10px';
scrollToTopButton.style.cursor = 'pointer';
scrollToTopButton.style.zIndex = '1000'; // Ensure it's above other content
scrollToTopButton.setAttribute('aria-label', 'Scroll to top');
scrollToTopButton.style.transition = 'opacity 0.3s ease';
document.body.appendChild(scrollToTopButton);

// Show/hide scroll-to-top button based on scroll position
let lastKnownScrollPosition = 0;
let ticking = false;

window.addEventListener('scroll', () => {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
            if (lastKnownScrollPosition > 300) {
                scrollToTopButton.style.display = 'block';
                scrollToTopButton.style.opacity = '1';
            } else {
                scrollToTopButton.style.opacity = '0';
                setTimeout(() => {
                    if (lastKnownScrollPosition <= 300) {
                        scrollToTopButton.style.display = 'none';
                    }
                }, 300); // Wait for opacity transition
            }
            ticking = false;
        });

        ticking = true;
    }
});

// Smooth scroll to top when button is clicked
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


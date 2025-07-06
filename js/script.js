document.addEventListener("DOMContentLoaded", () => {
    // 1. Loading Overlay Functionality
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        // Hide the loading overlay once the DOM is fully loaded
        loadingOverlay.style.display = 'none';
        // Optional: If you use opacity for fade-out, you might do:
        // loadingOverlay.style.opacity = '0';
        // setTimeout(() => loadingOverlay.style.display = 'none', 500); // Wait for transition
    }

    // 2. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        // Add or remove 'scrolled' class based on scroll position
        const toggleNavbarScrolled = () => {
            if (window.scrollY > 50) { // Adjust scroll threshold as needed
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        // Listen for scroll events
        window.addEventListener('scroll', toggleNavbarScrolled);

        // Call once on page load to set initial state (e.g., if page loads scrolled down)
        toggleNavbarScrolled();
    }

    // 3. Theme Toggle Functionality (Dark/Light Mode)
    const toggleModeButton = document.getElementById('toggleMode');
    const modeIcon = document.getElementById('modeIcon');

    // Function to set dark mode
    function setDarkMode() {
        document.body.classList.remove('light-mode'); // Remove light mode class
        document.body.classList.add('dark-mode');    // Add dark mode class
        if (modeIcon) { // Ensure the icon element exists
            modeIcon.textContent = '☀️'; // Change icon to sun
        }
        localStorage.setItem('theme', JSON.stringify('dark')); // Save preference
    }

    // Function to set light mode
    function setLightMode() {
        document.body.classList.remove('dark-mode'); // Remove dark mode class
        document.body.classList.add('light-mode');   // Add light mode class
        if (modeIcon) { // Ensure the icon element exists
            modeIcon.textContent = '🌙'; // Change icon to moon
        }
        localStorage.setItem('theme', JSON.stringify('light')); // Save preference
    }

    // Initialize theme on page load based on saved preference
    const savedTheme = JSON.parse(localStorage.getItem('theme') || 'null'); // Get saved theme
    if (savedTheme === 'dark') {
        setDarkMode(); // Apply dark mode if saved
    } else {
        setLightMode(); // Otherwise, apply light mode (default or saved light)
    }

    // Event listener for the theme toggle button
    if (toggleModeButton) { // Ensure the button element exists
        toggleModeButton.addEventListener('click', () => {
            if (document.body.classList.contains('dark-mode')) {
                setLightMode(); // If currently dark, switch to light
            } else {
                setDarkMode();  // If currently light, switch to dark
            }
        });
    }

    // 4. Scroll-triggered Animations (Intersection Observer)
    const animatedElements = document.querySelectorAll('.animate-slide, .animate-fade, .animate-zoom');

    // Create a new Intersection Observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If element is in view, add 'in-view' class to trigger animation
                entry.target.classList.add('in-view');
            } else {
                // Optional: Remove 'in-view' when out of view.
                // This makes animations re-trigger if element scrolls out and back in.
                // If you want animation to only play once, remove this 'else' block.
                // entry.target.classList.remove('in-view');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe each animated element
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Get the current URL path, defaulting to index.html if at root
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    // Select all navigation links
    const navLinks = document.querySelectorAll('#menu a');

    // Loop through each link
    navLinks.forEach(link => {
        // Get the link's href attribute and extract the file name
        const linkPath = link.getAttribute('href').split('/').pop();

        // Check if the link's path matches the current path
        if (linkPath === currentPath) {
            // Add active styles using Tailwind classes
            link.classList.add( 'font-medium', 'text-primary');
            // Show the image
            const icon = link.querySelector('img');
            if (icon) {
                icon.classList.remove('hidden');
                icon.classList.add('block');
            }
        }
    });
    
});
document.addEventListener('DOMContentLoaded', () => {
    // Select the mobile menu toggle button and navigation links
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const openModal = document.querySelector('.open-modal');
    const modal = document.getElementById('myModal');
    const closeModal = document.querySelector('.close-button');

    // Toggle the 'active' class on the nav-links to open/close the menu
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Optional: Close the menu when clicking outside of it
    window.addEventListener('click', (event) => {
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    });

    // Modal functionality for project details
    if (openModal) {
        openModal.addEventListener('click', () => {
            modal.style.display = 'flex';
        });
    }

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    const loadingText = document.querySelector('.loading-text');
    const messages = ["Loading skills...", "Fetching projects...", "Setting up interface..."];
    let messageIndex = 0;

    // Change the text every 2 seconds
    const messageInterval = setInterval(() => {
        loadingText.textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length; // Loop through the messages array
    }, 2000);

    // Delay hiding the loader by 3 seconds after the page load
    setTimeout(() => {
        loader.style.display = 'none';
        clearInterval(messageInterval); // Stop cycling through messages once the loader is hidden
    }, 6000);

    // Create the custom cursor dot element
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isHovered = false;

    // Update target positions based on mouse movement
    document.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    // Smooth cursor movement using requestAnimationFrame
    function updateCursor() {
        // Calculate smooth movement
        mouseX += (targetX - mouseX) * 0.2; // Control the speed (0.1 for smoothness)
        mouseY += (targetY - mouseY) * 0.2;

        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;

        // Request the next frame
        requestAnimationFrame(updateCursor);
    }

    // Start smooth movement
    updateCursor();

    // Make the cursor larger on hover over clickable elements and add a border
    document.querySelectorAll('a, button, .menu-toggle').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('enlarged');
            cursor.classList.add('hovered');
        });
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('enlarged');
            cursor.classList.remove('hovered');
        });
    });
});
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Send form data to Google Sheets
    fetch(form.action, {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (response.ok) {
                alert('Your message has been sent! Thank you for reaching out.');
                form.reset(); // Clear the form
            } else {
                alert('There was an error submitting your message. Please try again.');
            }
        })
        .catch(() => alert('Network error. Please check your connection.'));
});

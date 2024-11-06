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

document.addEventListener('DOMContentLoaded', () => {
    const openModal = document.querySelector('.open-modal');
    const modal = document.getElementById('myModal');
    const closeModal = document.querySelector('.close-button');

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

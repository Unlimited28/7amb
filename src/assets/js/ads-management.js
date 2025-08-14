document.addEventListener('DOMContentLoaded', () => {
    console.log('Ads Management script loaded.');

    const modal = document.getElementById('ad-modal');
    const addAdBtn = document.getElementById('add-ad-btn');
    const closeBtn = modal.querySelector('.close-btn');
    const adForm = document.getElementById('ad-form');

    const openModal = () => modal.style.display = 'block';
    const closeModal = () => modal.style.display = 'none';

    addAdBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    adForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Ad saved successfully! (Frontend only)');
        adForm.reset();
        closeModal();
    });
});

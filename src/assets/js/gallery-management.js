document.addEventListener('DOMContentLoaded', () => {
    console.log('Gallery Management script loaded.');

    const modal = document.getElementById('image-modal');
    const addImageBtn = document.getElementById('add-image-btn');
    const closeBtn = modal.querySelector('.close-btn');
    const imageForm = document.getElementById('image-form');
    const galleryGrid = document.querySelector('.gallery-grid');

    // Modal handling
    const openModal = () => modal.style.display = 'block';
    const closeModal = () => modal.style.display = 'none';

    addImageBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Handle form submission
    imageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Image added successfully! (Frontend only)');
        imageForm.reset();
        closeModal();
    });

    // Handle remove button
    galleryGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-btn')) {
            const item = e.target.closest('.gallery-item');
            if (confirm('Are you sure you want to remove this image?')) {
                alert('Image removed. (Frontend only)');
                item.remove();
            }
        }
    });
});

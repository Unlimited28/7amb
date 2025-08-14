document.addEventListener('DOMContentLoaded', () => {
    console.log('Blog Management script loaded.');

    const modal = document.getElementById('post-modal');
    const newPostBtn = document.getElementById('new-post-btn');
    const closeBtn = modal.querySelector('.close-btn');
    const postForm = document.getElementById('post-form');
    const tableBody = document.querySelector('.manage-table tbody');

    // Modal handling
    const openModal = () => modal.style.display = 'block';
    const closeModal = () => modal.style.display = 'none';

    newPostBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Handle form submission
    postForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Blog post saved successfully! (Frontend only)');
        postForm.reset();
        closeModal();
    });

    // Handle edit button
    tableBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit-btn')) {
            openModal();
            // In a real app, you would populate the form with the post data
        }
    });
});

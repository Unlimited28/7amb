document.addEventListener('DOMContentLoaded', () => {
    console.log('Superadmin Exams script loaded.');

    const modal = document.getElementById('exam-modal');
    const createExamBtn = document.getElementById('create-exam-btn');
    const closeBtn = modal.querySelector('.close-btn');
    const examForm = document.getElementById('exam-form');
    const tableBody = document.querySelector('.manage-table tbody');

    // Modal handling
    const openModal = () => modal.style.display = 'block';
    const closeModal = () => modal.style.display = 'none';

    createExamBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Handle form submission
    examForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Exam saved successfully! (Frontend only)');
        examForm.reset();
        closeModal();
    });

    // Handle action buttons
    tableBody.addEventListener('click', (e) => {
        const target = e.target;
        if (target.tagName === 'BUTTON') {
            const row = target.closest('tr');
            const examName = row.cells[0].textContent;
            let action = '';

            if (target.classList.contains('edit-btn')) {
                action = 'edit';
                openModal(); // Open modal for editing
                return;
            } else if (target.classList.contains('assign-btn')) {
                action = 'assign';
            } else if (target.classList.contains('publish-btn')) {
                action = 'publish';
            } else if (target.classList.contains('unpublish-btn')) {
                action = 'unpublish';
            }

            if (action) {
                 alert(`Action "${action}" clicked for ${examName}. (Frontend only)`);
            }
        }
    });
});

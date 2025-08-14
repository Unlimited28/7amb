document.addEventListener('DOMContentLoaded', () => {
    console.log('Superadmin Finance script loaded.');

    // Tab switching logic
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const tabToShow = button.getAttribute('data-tab');
            tabContents.forEach(content => {
                content.classList.toggle('active', content.id === `${tabToShow}-tab`);
            });
        });
    });

    // Modal logic for Voucher
    const modal = document.getElementById('voucher-modal');
    const addVoucherBtn = document.getElementById('add-voucher-btn');
    const closeBtn = modal.querySelector('.close-btn');
    const voucherForm = document.getElementById('voucher-form');

    const openModal = () => modal.style.display = 'block';
    const closeModal = () => modal.style.display = 'none';

    addVoucherBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    voucherForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Voucher added successfully! (Frontend only)');
        voucherForm.reset();
        closeModal();
    });

    // Remove user logic
    const financeUsersTab = document.getElementById('finance-users-tab');
    financeUsersTab.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-btn')) {
            const row = e.target.closest('tr');
            const userName = row.cells[0].textContent;
            if (confirm(`Are you sure you want to remove finance user ${userName}?`)) {
                alert(`User ${userName} removed. (Frontend only)`);
                row.remove();
            }
        }
    });
});

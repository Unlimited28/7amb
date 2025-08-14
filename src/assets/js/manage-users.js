document.addEventListener('DOMContentLoaded', () => {
    console.log('Manage Users script loaded.');

    const tableBody = document.querySelector('.manage-table tbody');

    if (tableBody) {
        tableBody.addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains('activate-btn') || target.classList.contains('deactivate-btn')) {
                const row = target.closest('tr');
                const userName = row.cells[1].textContent;
                const action = target.classList.contains('activate-btn') ? 'activate' : 'deactivate';

                if (confirm(`Are you sure you want to ${action} ${userName}?`)) {
                    alert(`User ${userName} has been ${action}d. (Frontend only)`);
                    // In a real app, you would update the UI accordingly
                    // For example, toggle the button text and class
                    if (action === 'activate') {
                        target.textContent = 'Deactivate';
                        target.classList.remove('activate-btn');
                        target.classList.add('deactivate-btn');
                        row.querySelector('.status-badge').textContent = 'Active';
                        row.querySelector('.status-badge').className = 'status-badge active';
                    } else {
                        target.textContent = 'Activate';
                        target.classList.remove('deactivate-btn');
                        target.classList.add('activate-btn');
                        row.querySelector('.status-badge').textContent = 'Inactive';
                        row.querySelector('.status-badge').className = 'status-badge revoked';
                    }
                }
            }
        });
    }
});

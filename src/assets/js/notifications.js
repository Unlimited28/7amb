document.addEventListener('DOMContentLoaded', () => {
    console.log('Notifications page script loaded.');

    const filterBtns = document.querySelectorAll('.filter-btn');
    const markAllReadBtn = document.getElementById('mark-all-read-btn');
    const notificationItems = document.querySelectorAll('.notification-item');

    // Handle filtering
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            notificationItems.forEach(item => {
                if (filter === 'all') {
                    item.style.display = 'flex';
                } else if (filter === 'unread') {
                    if (item.classList.contains('unread')) {
                        item.style.display = 'flex';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });

    // Handle "Mark all as read"
    if (markAllReadBtn) {
        markAllReadBtn.addEventListener('click', () => {
            notificationItems.forEach(item => {
                item.classList.remove('unread');
            });
            // Optionally, switch back to the 'all' filter
            document.querySelector('.filter-btn[data-filter="all"]').click();
            alert('All notifications marked as read. (Frontend only)');
        });
    }
});

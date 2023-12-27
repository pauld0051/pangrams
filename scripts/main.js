document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const dropdown = document.querySelector('.dropdown > a');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Toggle hamburger menu
    hamburger.addEventListener('click', function () {
        this.classList.toggle('active');
        const navUl = document.querySelector('nav ul');
        navUl.classList.toggle('show');
    });

    // Toggle dropdown on mobile
    dropdown.addEventListener('click', function (event) {
        // Prevent default link behaviour only on mobile
        if (window.innerWidth <= 768) {
            event.preventDefault();
            dropdownContent.classList.toggle('show');
        }
    });

    // Close the dropdown if clicking outside of it
    window.addEventListener('click', function (event) {
        if (!event.target.matches('.dropdown > a') && !event.target.closest('.dropdown-content')) {
            dropdownContent.classList.remove('show');
        }
    });

    // Close dropdown when resizing to wider screens
    window.addEventListener('resize', function() {
        const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (screenWidth > 768) {
            dropdownContent.classList.remove('show');
        }
    });
});

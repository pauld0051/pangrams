document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const dropdown = document.querySelector('.menu-item-dropdown > a');
    const dropdownContent = document.querySelector('.submenu');

    // Toggle main menu
    menuToggle.addEventListener('click', function () {
        this.classList.toggle('active');
        const mainMenu = document.querySelector('.main-menu');
        mainMenu.classList.toggle('show');
    });

    // Toggle submenu on mobile
    dropdown.addEventListener('click', function (event) {
        // Prevent default link behaviour only on mobile
        if (window.innerWidth <= 768) {
            event.preventDefault();
            dropdownContent.classList.toggle('show');
        }
    });

    // Close the submenu if clicking outside of it
    window.addEventListener('click', function (event) {
        if (!event.target.matches('.menu-item-dropdown > a') && !event.target.closest('.submenu')) {
            dropdownContent.classList.remove('show');
        }
    });

    // Close dropdown when resizing to wider screens
    window.addEventListener('resize', function () {
        const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (screenWidth > 768) {
            dropdownContent.classList.remove('show');
        }
    });
});

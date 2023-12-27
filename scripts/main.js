document.addEventListener('DOMContentLoaded', function () {
    const mainMenuToggle = document.querySelector('.header-content > .menu-toggle');
    const dropdownToggle = document.querySelector('.menu-item-dropdown > a');
    const mainMenu = document.querySelector('.main-menu');
    const submenu = document.querySelector('.submenu');

    // Toggle main menu
    mainMenuToggle.addEventListener('click', function () {
        mainMenu.classList.toggle('show');
    });

    // Toggle submenu on mobile
    dropdownToggle.addEventListener('click', function (event) {
        // Prevent default link behaviour only on mobile
        if (window.innerWidth <= 768) {
            event.preventDefault();
            submenu.classList.toggle('show');
        }
    });

    // Close the submenu if clicking outside of it
    window.addEventListener('click', function (event) {
        if (!event.target.matches('.menu-item-dropdown > a') && !event.target.closest('.submenu')) {
            submenu.classList.remove('show');
        }
    });

    // Close dropdown when resizing to wider screens
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            submenu.classList.remove('show');
        }
    });
});

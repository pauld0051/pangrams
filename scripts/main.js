document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainMenu = document.querySelector('.main-menu');

    // Toggle main menu
    menuToggle.addEventListener('click', function () {
        mainMenu.classList.toggle('show');
    });

    // Add event listeners to all dropdown toggles
    document.querySelectorAll('.menu-item-dropdown').forEach(function (dropdown) {
        const toggle = dropdown.querySelector('a');
        const submenu = dropdown.querySelector('.submenu');

        toggle.addEventListener('click', function (event) {
            if (window.innerWidth <= 768) {
                event.preventDefault(); // Prevent the default anchor behavior
                submenu.classList.toggle('show'); // Toggle the `.show` class on the submenu
            }
        });
    });

    // Close the submenu if clicking outside of it
    window.addEventListener('click', function (event) {
        if (!event.target.matches('.menu-item-dropdown > a') && !event.target.closest('.submenu')) {
            document.querySelectorAll('.submenu').forEach(function (submenu) {
                submenu.classList.remove('show');
            });
        }
    });

    // Close dropdown when resizing to wider screens
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            document.querySelectorAll('.submenu').forEach(function (submenu) {
                submenu.classList.remove('show');
            });
        }
    });
});

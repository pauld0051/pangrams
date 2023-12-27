// main.js
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainMenu = document.querySelector('.main-menu');
    const menuLinks = document.querySelectorAll('nav ul li a:not(.dropdown-toggle)'); // Ignore dropdown toggles

    menuToggle.addEventListener('click', function () {
        mainMenu.classList.toggle('show');
    });

    // Close the menu when a non-dropdown link is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            mainMenu.classList.remove('show');
        });
    });

    // Handle submenus for mobile
    const dropdownToggles = document.querySelectorAll('.menu-item-dropdown > a');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function (event) {
            // Prevent navigation for dropdown toggles
            event.preventDefault(); 
            const parentListItem = this.parentElement;
            parentListItem.classList.toggle('active'); // Toggle active class on parent li

            // This is just toggling, no need to check for the 'submenu' class
            const submenu = this.nextElementSibling;
            submenu.classList.toggle('show'); // Toggle show class on submenu
        });
    });

    // Close the menu if clicking outside of it
    document.addEventListener('click', function (event) {
        if (!event.target.matches('.menu-toggle, .menu-toggle *') && !event.target.closest('.main-menu')) {
            mainMenu.classList.remove('show');
        }
    });
});

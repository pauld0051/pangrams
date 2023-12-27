// main.js
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainMenu = document.querySelector('.main-menu');

    menuToggle.addEventListener('click', function () {
        mainMenu.classList.toggle('show');
    });

    // Handle submenus for mobile
    const dropdownToggles = document.querySelectorAll('.menu-item-dropdown > a');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function (event) {
            const submenu = this.nextElementSibling;
            if (submenu && submenu.classList.contains('submenu')) {
                event.preventDefault(); // Prevent navigation
                submenu.classList.toggle('active'); // Show the submenu
            }
        });
    });
});

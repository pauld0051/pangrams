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
            event.preventDefault(); // Prevent navigation
            const parentListItem = this.parentElement;
            parentListItem.classList.toggle('active'); // Toggle active class on parent li
            const submenu = this.nextElementSibling;
            if (submenu && submenu.classList.contains('submenu')) {
                submenu.classList.toggle('show'); // Toggle show class on submenu
            }
        });
    });
});

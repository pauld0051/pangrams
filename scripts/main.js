document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', function () {
        // Toggle an 'active' class instead of directly changing the style
        document.body.classList.toggle('menu-active');
    });

    // If the user taps outside the menu, close the menu
    document.addEventListener('click', function (event) {
        if (!hamburger.contains(event.target) && !event.target.matches('.dropdown a')) {
            document.body.classList.remove('menu-active');
        }
    });
});

// Adjust menu visibility based on 'menu-active' class
window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        // Reset any inline styles added by JavaScript
        document.body.classList.remove('menu-active');
    }
});

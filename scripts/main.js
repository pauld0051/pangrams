document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.createElement('div');
    hamburger.classList.add('hamburger');
    // Add the hamburger lines or icon here
    hamburger.textContent = '☰'; // Simple text hamburger icon

    const headerContent = document.querySelector('.header-content');
    headerContent.insertBefore(hamburger, headerContent.childNodes[0]);

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        const navUl = document.querySelector('nav ul');
        navUl.style.display = hamburger.classList.contains('active') ? 'flex' : 'none';
    });
});

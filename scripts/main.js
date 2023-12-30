
// Function to load and initialize header and footer
function loadHeaderAndFooter() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('globalHeader').innerHTML = data;
            initializeMenu(); // Initialize the menu after the header is loaded
        });

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('globalFooter').innerHTML = data;
            // Any footer-specific JavaScript can go here
        });
}

// Execute loadHeaderAndFooter once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadHeaderAndFooter);

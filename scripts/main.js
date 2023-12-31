// Function to load and initialize header and footer
function loadHeaderAndFooter() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('globalHeader').innerHTML = data;
            // Any header-specific JavaScript can go here
        });

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('globalFooter').innerHTML = data;
            // Update the year in the footer
            document.getElementById('currentYear').textContent = new Date().getFullYear();
        });
}

// Execute loadHeaderAndFooter once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadHeaderAndFooter);

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
            const currentYearElement = document.getElementById('currentYear');
            if (currentYearElement) {
                currentYearElement.textContent = new Date().getFullYear();
            }
        });
}

// Attaching a reset event to each form and clearing child textareas
function attachFormResetEvents() {
    // Get all forms on the page
    var forms = document.querySelectorAll('form');
    
    // Iterate over each form and attach the reset event
    forms.forEach(function (form) {
        form.addEventListener('reset', function() {
            // Get all textareas within the current form
            var textareas = form.querySelectorAll('textarea');

            // Clear each textarea
            textareas.forEach(function (textarea) {
                textarea.value = '';
            });
        });
    });
}

// Execute loadHeaderAndFooter and attachFormResetEvents once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    loadHeaderAndFooter();
    attachFormResetEvents();
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopButton").style.display = "block";
  } else {
    document.getElementById("scrollToTopButton").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}


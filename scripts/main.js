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
  // Check the scroll position and show/hide the button
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopButton").style.display = "block";
  } else {
    document.getElementById("scrollToTopButton").style.display = "none";
  }
}

// When the user clicks on the button, scroll smoothly to the top of the document
function scrollToTop() {
  // Use the scrollTo method with smooth behavior
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// This script is simplified to rely on Bootstrap's built-in dropdown features
document.addEventListener("DOMContentLoaded", function() {
  // Only add the additional functionality for small screens
  if (window.innerWidth < 992) {
    // Toggle submenu visibility on click
    document.querySelectorAll('.dropdown-menu a.dropdown-toggle').forEach(function(element){
      element.addEventListener('click', function (e) {
          let nextEl = this.nextElementSibling;
          if(nextEl && nextEl.classList.contains('dropdown-menu')) {  
            // Toggle the display of the submenu
            nextEl.classList.toggle('show');
            // Prevent the default action of the anchor
            e.preventDefault();
            // Stop the event from propagating to higher-level elements
            e.stopPropagation();
          }
      });
    });

    // Ensure that submenu hides when a submenu item is clicked
    document.querySelectorAll('.submenu .dropdown-item').forEach(function(element){
      element.addEventListener('click', function () {
        let submenu = this.closest('.dropdown-menu');
        if (submenu) {
          submenu.classList.remove('show');
        }
      });
    });
  }
});

document.addEventListener('click', function(e) {
    // Check if the clicked element is a submenu trigger
    if (e.target.matches('.dropdown-menu a')) {
        var submenu = e.target.nextElementSibling;

        // Check if the next element is a submenu
        if (submenu && submenu.classList.contains('submenu')) {
            e.preventDefault();
            e.stopPropagation(); // Stop the click from being propagated.

            // Toggle the submenu display on click
            submenu.style.display = (submenu.style.display === 'block' ? 'none' : 'block');
        }
    }
});


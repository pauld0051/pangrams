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

// Submenu in headers
document.addEventListener("DOMContentLoaded", function() {
  // Function to adjust the submenu if it goes off the right side of the screen
  function adjustSubmenu() {
    document.querySelectorAll('.dropdown-menu .submenu').forEach(function(submenu) {
      // Reset style to default right position
      submenu.style.right = '100%';
      submenu.style.left = 'auto';

      // Get the bounding rectangle of the submenu
      var rect = submenu.getBoundingClientRect();

      // If the submenu goes off the right edge of the screen, position it to the left
      if (rect.right > window.innerWidth) {
        submenu.style.right = 'auto';
        submenu.style.left = '100%';
      }
    });
  }

  // Adjust submenu on hover
  document.querySelectorAll('.dropdown-menu > li').forEach(function(dropdown) {
    dropdown.addEventListener('mouseenter', adjustSubmenu);
  });

  // If it's a small screen, setup the accordion dropdown functionality
  if (window.innerWidth < 992) {
    // close all inner dropdowns when parent is closed
    document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
      everydropdown.addEventListener('hidden.bs.dropdown', function () {
        this.querySelectorAll('.submenu').forEach(function(everysubmenu){
          everysubmenu.style.display = 'none';
        });
      });
    });

    document.querySelectorAll('.dropdown-menu a').forEach(function(element){
      element.addEventListener('click', function (e) {
          let nextEl = this.nextElementSibling;
          if(nextEl && nextEl.classList.contains('submenu')) {  
            // prevent opening link if link needs to open dropdown
            e.preventDefault();
            if(nextEl.style.display == 'block'){
              nextEl.style.display = 'none';
            } else {
              nextEl.style.display = 'block';
            }
          }
      });
    });
  }
});

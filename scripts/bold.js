document.addEventListener('DOMContentLoaded', (event) => {
    // Prevent the form from submitting when the 'Transform' button is clicked
    document.getElementById('boldTextForm').addEventListener('submit', function(event) {
      event.preventDefault();
      convertToBold();
    });
    
    // Function to convert text to bold and display it
    function convertToBold() {
      var userInput = document.getElementById('textInput').value;
      var boldText = '<b>' + userInput + '</b>';
      document.getElementById('boldTextOutput').value = boldText;
    }
    
    // Copy the bold text to the clipboard when the 'Copy Text' button is clicked
    document.getElementById('copyButton').addEventListener('click', function() {
      var copyText = document.getElementById('boldTextOutput');
      copyText.select();
      document.execCommand('copy');
    });
  });
  
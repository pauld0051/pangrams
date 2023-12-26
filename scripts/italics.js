document.addEventListener('DOMContentLoaded', (event) => {
    // Prevent the form from submitting when the 'Transform' button is clicked
    document.getElementById('alternatingTextForm').addEventListener('submit', function(event) {
      event.preventDefault();
      convertToItalics();
    });
    
    // Function to convert text to italics and display it
    function convertToItalics() {
      var userInput = document.getElementById('textInput').value;
      var italicText = '<i>' + userInput + '</i>';
      document.getElementById('italicTextOutput').value = italicText;
    }
    
    // Optional: Copy the italic text to the clipboard when the 'Copy Text' button is clicked
    document.getElementById('copyButton').addEventListener('click', function() {
      var copyText = document.getElementById('italicTextOutput');
      copyText.select();
      document.execCommand('copy');
    });
  });
  
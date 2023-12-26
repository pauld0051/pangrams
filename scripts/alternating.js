document.addEventListener('DOMContentLoaded', function () {
    // Alternating text maker
    document.getElementById('alternatingTextForm').addEventListener('submit', function (e) {
      e.preventDefault();
  
      const inputText = document.getElementById('textInput').value;
      let alternatingText = '';
      let alternatePatternText = '';
  
      // Convert to alternating case
      for (let i = 0; i < inputText.length; i++) {
        alternatingText += i % 2 === 0 ? inputText[i].toLowerCase() : inputText[i].toUpperCase();
        alternatePatternText += i % 2 !== 0 ? inputText[i].toLowerCase() : inputText[i].toUpperCase();
      }
  
      // Set the alternating text as the value of the output textbox
      const outputTextbox = document.getElementById('alternatingTextOutput');
      outputTextbox.value = alternatingText;
  
      // Set the alternate pattern text as the value of the new output textbox
      const alternatePatternOutput = document.getElementById('alternatePatternOutput');
      alternatePatternOutput.value = alternatePatternText;
    });
  
    // Function to copy text to clipboard
    function copyToClipboard(text) {
      const dummy = document.createElement('textarea');
      document.body.appendChild(dummy);
      dummy.value = text;
      dummy.select();
      document.execCommand('copy');
      document.body.removeChild(dummy);
    }
  
    // Event listener for the copy button
    document.getElementById('copyButton').addEventListener('click', function () {
      // Since there are now two text areas, you need to decide which one to copy from
      // This example will copy from the original alternating text output
      const textToCopy = document.getElementById('alternatingTextOutput').value;
      copyToClipboard(textToCopy);
    });
  });
  
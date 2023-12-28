document.addEventListener('DOMContentLoaded', function () {
const boldMap = {
    'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲',
    'f': '𝗳', 'g': '𝗴', 'h': '𝗵', 'i': '𝗶', 'j': '𝗷',
    'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻', 'o': '𝗼',
    'p': '𝗽', 'q': '𝗾', 'r': '𝗿', 's': '𝘀', 't': '𝘁',
    'u': '𝘂', 'v': '𝘃', 'w': '𝘄', 'x': '𝘅', 'y': '𝘆',
    'z': '𝘇', 'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗',
    'E': '𝗘', 'F': '𝗙', 'G': '𝗚', 'H': '𝗛', 'I': '𝗜',
    'J': '𝗝', 'K': '𝗞', 'L': '𝗟', 'M': '𝗠', 'N': '𝗡',
    'O': '𝗢', 'P': '𝗣', 'Q': '𝗤', 'R': '𝗥', 'S': '𝗦',
    'T': '𝗧', 'U': '𝗨', 'V': '𝗩', 'W': '𝗪', 'X': '𝗫',
    'Y': '𝗬', 'Z': '𝗭', '1': '𝟭', '2': '𝟮', '3': '𝟯',
    '4': '𝟰', '5': '𝟱', '6': '𝟲', '7': '𝟳', '8': '𝟴',
    '9': '𝟵', '0': '𝟬',
    // Special characters
  'ä': '𝗮̈', 'ö': '𝗼̈', 'ü': '𝘂̈', 'Ä': '𝗔̈', 'Ö': '𝗢̈', 'Ü': '𝗨̈',
  'å': '𝗮̊', 'Å': '𝗔̊', 'é': '𝗲́', 'É': '𝗘́',
  'À': '𝗔', 'Á': '𝗔', 'Â': '𝗔', 'Ã': '𝗔', 'Ä': '𝗔', 'Å': '𝗔', 'Æ': '𝗔', 'Ç': '𝗖',
  'È': '𝗘', 'É': '𝗘', 'Ê': '𝗘', 'Ë': '𝗘', 'Ì': '𝗜', 'Í': '𝗜', 'Î': '𝗜', 'Ï': '𝗜',
  'Ð': '𝗗', 'Ñ': '𝗡', 'Ò': '𝗢', 'Ó': '𝗢', 'Ô': '𝗢', 'Õ': '𝗢', 'Ö': '𝗢', 'Ø': '𝗢',
  'Ù': '𝗨', 'Ú': '𝗨', 'Û': '𝗨', 'Ü': '𝗨', 'Ý': '𝗬', 'Þ': '𝗧', 'ß': '𝗦', 'à': '𝗮',
  'á': '𝗮', 'â': '𝗮', 'ã': '𝗮', 'ä': '𝗮', 'å': '𝗮', 'æ': '𝗮', 'ç': '𝗰', 'è': '𝗲',
  'é': '𝗲', 'ê': '𝗲', 'ë': '𝗲', 'ì': '𝗶', 'í': '𝗶', 'î': '𝗶', 'ï': '𝗶', 'ð': '𝗱',
  'ñ': '𝗻', 'ò': '𝗼', 'ó': '𝗼', 'ô': '𝗼', 'õ': '𝗼', 'ö': '𝗼', 'ø': '𝗼', 'ù': '𝘂',
  'ú': '𝘂', 'û': '𝘂', 'ü': '𝘂', 'ý': '𝘆', 'þ': '𝘁', 'ÿ': '𝘆',
  '.': '.', // No bold equivalent, remains the same
  ',': ',', // No bold equivalent, remains the same
  ';': ';', // No bold equivalent, remains the same
  ':': ':', // No bold equivalent, remains the same
  '!': '!', // Bold equivalent for exclamation
  '?': '?', // Bold equivalent for question mark
  '-': '-', // Bold equivalent for minus
  '(': '(', // No bold equivalent, remains the same
  ')': ')', // No bold equivalent, remains the same
  '[': '[', // No bold equivalent, remains the same
  ']': ']', // No bold equivalent, remains the same

  };


  document.getElementById('alternatingTextForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let inputText = document.getElementById('textInput').value;
    let boldText = '';

    // Convert each character to its bold equivalent
    for (let char of inputText) {
        boldText += boldMap[char] || char; // Fallback to the original character if no bold equivalent
    }

    // Set the bold text as the value of the output element
    const outputElement = document.getElementById('alternatingTextOutput');
    outputElement.textContent = boldText; // Use textContent to set text
    outputElement.style.height = ''; // Reset the height
    outputElement.style.height = outputElement.scrollHeight + 'px'; // Adjust the height to fit content
});

// Function to copy text to clipboard and change button text
document.getElementById('copyButton').addEventListener('click', function () {
    const textToCopy = document.getElementById('alternatingTextOutput').textContent;
    const copyButton = this; // 'this' refers to the button clicked

    // Copy the text
    const dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = textToCopy;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);

    // Change the button text to "Copied"
    copyButton.textContent = 'Copied';

    // Set a timeout to revert the button text back to "Copy Text" after 2 seconds
    setTimeout(function () {
        copyButton.textContent = 'Copy Text';
    }, 5000);
});

// Event listener to revert the copy button text when the input is changed
document.getElementById('textInput').addEventListener('input', function () {
    const copyButton = document.getElementById('copyButton');
    copyButton.textContent = 'Copy Text';
});
});
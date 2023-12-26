// This is a partial character map for illustrative purposes. You would need a complete map for full functionality.
const italicMap = {
    'a': '𝘢', 'b': '𝘣', 'c': '𝘤', 'd': '𝘥', 'e': '𝘦', 
    'f': '𝘧', 'g': '𝘨', 'h': '𝘩', 'i': '𝘪', 'j': '𝘫', 
    'k': '𝘬', 'l': '𝘭', 'm': '𝘮', 'n': '𝘯', 'o': '𝘰', 
    'p': '𝘱', 'q': '𝘲', 'r': '𝘳', 's': '𝘴', 't': '𝘵', 
    'u': '𝘶', 'v': '𝘷', 'w': '𝘸', 'x': '𝘹', 'y': '𝘺', 
    'z': '𝘻', 'A': '𝘈', 'B': '𝘉', 'C': '𝘊', 'D': '𝘋', 
    'E': '𝘌', 'F': '𝘍', 'G': '𝘎', 'H': '𝘏', 'I': '𝘐', 
    'J': '𝘑', 'K': '𝘒', 'L': '𝘓', 'M': '𝘔', 'N': '𝘕', 
    'O': '𝘖', 'P': '𝘗', 'Q': '𝘘', 'R': '𝘙', 'S': '𝘚', 
    'T': '𝘛', 'U': '𝘜', 'V': '𝘝', 'W': '𝘞', 'X': '𝘟', 
    'Y': '𝘠', 'Z': '𝘡', '1': '𝟭', '2': '𝟮', '3': '𝟯', 
    '4': '𝟰', '5': '𝟱', '6': '𝟲', '7': '𝟳', '8': '𝟴', 
    '9': '𝟵', '0': '𝟬',
    // Additional characters can be added here as needed
    'ä': '𝘢̈', 'ö': '𝘰̈', 'ü': '𝘶̈', 'Ä': '𝘈̈', 'Ö': '𝘖̈', 'Ü': '𝘜̈',
  'å': '𝘢̊', 'Å': '𝘈̊', 'é': '𝘦́', 'É': '𝘌́',
  'À': '𝘈', 'Á': '𝘈', 'Â': '𝘈', 'Ã': '𝘈', 'Ä': '𝘈', 'Å': '𝘈', 'Æ': '𝘈', 'Ç': '𝘊',
  'È': '𝘌', 'É': '𝘌', 'Ê': '𝘌', 'Ë': '𝘌', 'Ì': '𝘐', 'Í': '𝘐', 'Î': '𝘐', 'Ï': '𝘐',
  'Ð': '𝘋', 'Ñ': '𝘕', 'Ò': '𝘖', 'Ó': '𝘖', 'Ô': '𝘖', 'Õ': '𝘖', 'Ö': '𝘖', 'Ø': '𝘖',
  'Ù': '𝘜', 'Ú': '𝘜', 'Û': '𝘜', 'Ü': '𝘜', 'Ý': '𝘠', 'Þ': '𝘛', 'ß': '𝘚', 'à': '𝘢',
  'á': '𝘢', 'â': '𝘢', 'ã': '𝘢', 'ä': '𝘢', 'å': '𝘢', 'æ': '𝘢', 'ç': '𝘤', 'è': '𝘦',
  'é': '𝘦', 'ê': '𝘦', 'ë': '𝘦', 'ì': '𝘪', 'í': '𝘪', 'î': '𝘪', 'ï': '𝘪', 'ð': '𝘥',
  'ñ': '𝘯', 'ò': '𝘰', 'ó': '𝘰', 'ô': '𝘰', 'õ': '𝘰', 'ö': '𝘰', 'ø': '𝘰', 'ù': '𝘶',
  'ú': '𝘶', 'û': '𝘶', 'ü': '𝘶', 'ý': '𝘺', 'þ': '𝘵', 'ÿ': '𝘺',
    // Punctuation and special characters will not change for italics
};

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('alternatingTextForm').addEventListener('submit', function (e) {
        e.preventDefault();

        let inputText = document.getElementById('textInput').value;
        let italicText = '';

        // Convert each character to its italic equivalent
        for (let char of inputText) {
            italicText += italicMap[char] || char; // Fallback to the original character if no italic equivalent
        }

        // Set the italic text as the value of the output element
        const outputElement = document.getElementById('alternatingTextOutput');
        outputElement.textContent = italicText; // Use textContent to set text
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
        // Copy the value, which will retain italic formatting when pasted
        const textToCopy = document.getElementById('alternatingTextOutput').textContent;
        copyToClipboard(textToCopy);
    });
});

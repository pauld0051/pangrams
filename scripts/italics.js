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
        'À': '𝘈̀', 'Á': '𝘈́', 'Â': '𝘈̂', 'Ã': '𝘈̃', 'Ä': '𝘈̈', 'Å': '𝘈̊', 'Æ': '𝘈𝘌', 'Ç': '𝘊̧',
        'È': '𝘌̀', 'É': '𝘌́', 'Ê': '𝘌̂', 'Ë': '𝘌̈', 'Ì': '𝘐̀', 'Í': '𝘐́', 'Î': '𝘐̂', 'Ï': '𝘐̈',
        'Ð': '𝘋̵', 'Ñ': '𝘕̃', 'Ò': '𝘖̀', 'Ó': '𝘖́', 'Ô': '𝘖̂', 'Õ': '𝘖̃', 'Ö': '𝘖̈', 'Ø': '𝘖̸',
        'Ù': '𝘜̀', 'Ú': '𝘜́', 'Û': '𝘜̂', 'Ü': '𝘜̈', 'Ý': '𝘠́', 'Þ': '𝘛̵', 'ß': '𝘴𝘴', 'à': '𝘢̀',
        'á': '𝘢́', 'â': '𝘢̂', 'ã': '𝘢̃', 'ä': '𝘢̈', 'å': '𝘢̊', 'æ': '𝘢𝘦', 'ç': '𝘤̧', 'è': '𝘦̀',
        'é': '𝘦́', 'ê': '𝘦̂', 'ë': '𝘦̈', 'ì': '𝘪̀', 'í': '𝘪́', 'î': '𝘪̂', 'ï': '𝘪̈', 'ð': '𝘥̵',
        'ñ': '𝘯̃', 'ò': '𝘰̀', 'ó': '𝘰́', 'ô': '𝘰̂', 'õ': '𝘰̃', 'ö': '𝘰̈', 'ø': '𝘰̸', 'ù': '𝘶̀',
        'ú': '𝘶́', 'û': '𝘶̂', 'ü': '𝘶̈', 'ý': '𝘺́', 'þ': '𝘵̵', 'ÿ': '𝘺̈'
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

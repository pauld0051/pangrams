document.addEventListener('DOMContentLoaded', function () {
    // Alternating text maker
    document.getElementById('alternatingTextForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const inputText = document.getElementById('textInput').value;
        let alternatingText = '';

        // Convert to alternating case
        for (let i = 0; i < inputText.length; i++) {
            alternatingText += i % 2 === 0 ? inputText[i].toLowerCase() : inputText[i].toUpperCase();
        }

        // Set the alternating text as the value of the output textbox
        const outputTextbox = document.getElementById('alternatingTextOutput');
        outputTextbox.value = alternatingText;
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
        const textToCopy = document.getElementById('alternatingTextOutput').value;
        copyToClipboard(textToCopy);
    });
});

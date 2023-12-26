document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('alternatingTextForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const inputText = document.getElementById('textInput').value;
        const italicText = '<i>' + inputText + '</i>';

        // Set the italic text as the value of the output textbox
        const outputTextbox = document.getElementById('italicTextOutput');
        outputTextbox.value = italicText;
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
        const textToCopy = document.getElementById('italicTextOutput').value;
        copyToClipboard(textToCopy);
    });
});

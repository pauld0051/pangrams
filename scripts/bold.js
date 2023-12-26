document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('alternatingTextForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const inputText = document.getElementById('textInput').value;
        const boldText = '<b>' + inputText + '</b>';

        // Set the bold text as the value of the output textbox
        const outputTextbox = document.getElementById('alternatingTextOutput');
        outputTextbox.value = boldText;
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

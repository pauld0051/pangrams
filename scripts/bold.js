document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('alternatingTextForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const inputText = document.getElementById('textInput').value;
        const boldText = '<b>' + inputText + '</b>';

        // Set the bold text as the inner HTML of the output element
        // Consider changing the ID of this element to 'boldTextOutput' for clarity
        const outputElement = document.getElementById('alternatingTextOutput');
        outputElement.innerHTML = boldText;
    });

    // Function to copy text to clipboard
    function copyToClipboard(text) {
        const dummy = document.createElement('textarea');
        document.body.appendChild(dummy);
        dummy.textContent = text;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
    }

    // Event listener for the copy button
    document.getElementById('copyButton').addEventListener('click', function () {
        // Copy the textContent, which won't retain bold formatting when pasted
        const textToCopy = document.getElementById('alternatingTextOutput').textContent;
        copyToClipboard(textToCopy);
    });
});

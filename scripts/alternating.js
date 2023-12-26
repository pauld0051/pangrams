document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('alternatingTextForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const inputText = document.getElementById('textInput').value;
        let alternatingText = '';
        let alternatePatternText = '';

        // Improved alternating case logic
        for (let i = 0; i < inputText.length; i++) {
            if (i % 2 === 0) {
                alternatingText += inputText[i].toLowerCase();
                alternatePatternText += inputText[i].toUpperCase();
            } else {
                alternatingText += inputText[i].toUpperCase();
                alternatePatternText += inputText[i].toLowerCase();
            }
        }

        document.getElementById('alternatingTextOutput').value = alternatingText;

        // Check if the alternatePatternOutput exists before setting its value
        const alternatePatternOutput = document.getElementById('alternatePatternOutput');
        if (alternatePatternOutput) {
            alternatePatternOutput.value = alternatePatternText;
        }
    });

    // Simplified copy to clipboard function
    function copyToClipboard(elementId) {
        const textToCopy = document.getElementById(elementId).value;
        navigator.clipboard.writeText(textToCopy);
    }

    // Event listeners for the copy buttons
    document.getElementById('copyButton').addEventListener('click', function () {
        copyToClipboard('alternatingTextOutput');
    });

    // Ensure this element and event listener exists only if the corresponding HTML is present
    const copyButton1 = document.getElementById('copyButton1');
    if (copyButton1) {
        copyButton1.addEventListener('click', function () {
            copyToClipboard('alternatingTextOutput1');
        });
    }
});

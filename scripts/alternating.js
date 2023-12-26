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
        document.getElementById('alternatingTextOutput1').value = alternatePatternText; // Corrected the ID here
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

    // Corrected event listener for the second copy button
    document.getElementById('copyButton1').addEventListener('click', function () {
        copyToClipboard('alternatingTextOutput1'); // Corrected the ID here
    });
});

// Function to copy text and provide feedback
function copyToClipboardAndFeedback(elementId, buttonId) {
    const textArea = document.getElementById(elementId);
    const button = document.getElementById(buttonId);
    navigator.clipboard.writeText(textArea.value)
        .then(() => {
            // Temporary feedback
            const originalText = button.innerHTML;
            button.innerHTML = 'Copied!'; // Change button text to 'Copied!'
            button.classList.add('copied'); // Add a class to style the 'copied' state
            setTimeout(() => {
                button.innerHTML = originalText; // Revert button text after 2 seconds
                button.classList.remove('copied'); // Remove the 'copied' state styling
            }, 2000);
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
}

// Event listeners for the copy buttons
document.getElementById('copyButton').addEventListener('click', function () {
    copyToClipboardAndFeedback('alternatingTextOutput', 'copyButton');
});

document.getElementById('copyButton1').addEventListener('click', function () {
    copyToClipboardAndFeedback('alternatingTextOutput1', 'copyButton1');
});

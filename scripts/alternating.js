document.addEventListener('DOMContentLoaded', function () {
    // Existing pangram checker code...

    // Alternating text maker
    document.getElementById('alternatingTextForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const inputText = document.getElementById('textInput').value;
        let alternatingText = '';

        for (let i = 0; i < inputText.length; i++) {
            // Convert to alternating case
            alternatingText += i % 2 === 0 ? inputText[i].toLowerCase() : inputText[i].toUpperCase();
        }

        const resultDiv = document.getElementById('alternatingTextResult');
        resultDiv.textContent = alternatingText;
    });
});

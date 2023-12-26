document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('pangramForm').addEventListener('submit', function (e) {
        // Prevent the form from submitting
        e.preventDefault();

        // Retrieve the inputted phrase
        const phrase = document.getElementById('phraseInput').value.toLowerCase();
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let missingLetters = [];

        // Check for missing letters
        for (let letter of alphabet) {
            if (!phrase.includes(letter)) {
                missingLetters.push(letter);
            }
        }

        // Output the result
        const resultDiv = document.getElementById('result');
        if (missingLetters.length === 0) {
            resultDiv.textContent = 'Your phrase is a pangram! It contains every letter of the alphabet.';
        } else {
            resultDiv.textContent = 'Your phrase is missing the following letters: ' + missingLetters.join(', ') + '.';
        }
    });
});

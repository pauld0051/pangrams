document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('textInput');
  const outputElement = document.getElementById('alternatingTextOutput');
  const copyButton = document.getElementById('copyButton');

  document.getElementById('alternatingTextForm').addEventListener('submit', function (e) {
    e.preventDefault();
    outputElement.textContent = toUnicodeVariant(input.value, 'bold sans'); // Replace your loop with toUnicodeVariant call
    outputElement.style.height = outputElement.scrollHeight + 'px'; // Adjust the height to fit content
  });

  copyButton.addEventListener('click', function () {
    navigator.clipboard.writeText(outputElement.textContent).then(() => {
      copyButton.textContent = 'Copied!';
      setTimeout(() => {
        copyButton.textContent = 'Copy Text';
      }, 5000);
    }).catch(err => {
      console.error('Error copying text: ', err);
    });
  });

  input.addEventListener('input', function () {
    copyButton.textContent = 'Copy Text';
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const symbols = document.querySelectorAll('.symbol-btn');

    symbols.forEach(symbol => {
        symbol.addEventListener('click', () => {
            const symbolText = symbol.dataset.symbol;
            const copiedOverlay = symbol.nextElementSibling; // Assuming it's the next sibling

            navigator.clipboard.writeText(symbolText).then(() => {
                copiedOverlay.style.display = 'block'; // Show the overlay

                setTimeout(() => {
                    copiedOverlay.style.display = 'none'; // Hide the overlay after 2 seconds
                }, 5000);
            }).catch(err => {
                console.error('Error copying text: ', err);
            });
        });
    });
});

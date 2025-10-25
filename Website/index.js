// Select the banner
const banner = document.querySelector('.banner');

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Click event: change banner background color
banner.addEventListener('click', () => {
    banner.style.backgroundColor = getRandomColor();
});

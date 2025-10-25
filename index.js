// Select the banner text
const bannerText = document.querySelector('.banner-svg text');

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Change banner text color continuously every 500ms
setInterval(() => {
    bannerText.style.fill = getRandomColor();
}, 500);

// Optional: keep banner background color change on click
const banner = document.querySelector('.banner');
banner.addEventListener('click', () => {
    banner.style.backgroundColor = getRandomColor();
});

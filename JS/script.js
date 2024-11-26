const images = [
    'Image/carousel-1.jpg',
    'Image/carousel-2.jpg',
];
let currentIndex = 0;

const heroSection = document.querySelector('.hero-section');

function updateBackground() {
    heroSection.style.backgroundImage = `url(${images[currentIndex]})`;
}


function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateBackground();
}


function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateBackground();
}


updateBackground();
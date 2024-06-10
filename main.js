let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    items[currentIndex].classList.add('active');

    const innerCarousel = document.querySelector('.carousel-inner');
    innerCarousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
    const firstItem = document.querySelector('.carousel-item');
    firstItem.classList.add('active');
});

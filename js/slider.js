const slider = document.querySelector('.slider');
const sliderList = document.querySelector('.slider-list');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const imgs = document.querySelectorAll('.slider-list img');

const sliderWidth = slider.offsetWidth;
let currentIndex = 0;
let autoPlayInterval;

function goToSlide(index) {
    const offset = -index * sliderWidth;
    sliderList.style.transform = `translateX(${offset}px)`;
}

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % imgs.length;
        goToSlide(currentIndex);
    }, 4000);
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
    goToSlide(currentIndex);
    stopAutoPlay();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imgs.length;
    goToSlide(currentIndex);
    stopAutoPlay();
});

slider.addEventListener('mouseenter', stopAutoPlay);
slider.addEventListener('mouseleave', startAutoPlay);

startAutoPlay();

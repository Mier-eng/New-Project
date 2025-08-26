
let burger = document.querySelector('.nav-button');
let navList = document.querySelector('.nav-list'); 

burger.addEventListener('click', function () {
  this.classList.toggle('active');
  navList.classList.toggle('open'); 
});

document.getElementById("scrollButton").addEventListener("click", function() {
    const targetElement = document.querySelector(".img3");
    targetElement.scrollIntoView({ behavior: "smooth" });
});



const sliderContainer = document.querySelector('.slider-container');
const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let slideIndex = 0;
let slideWidth; // Объявляем slideWidth здесь, чтобы она была доступна глобально

function updateSlideWidth() {
    // Проверяем ширину экрана
    if (window.innerWidth >= 768) {
        // На больших экранах слайдер занимает ширину экрана целиком
        slideWidth = sliderContainer.offsetWidth; // Ширина контейнера слайдера
    } else {
        // На маленьких экранах слайдер занимает 100% ширины слайда
        slideWidth = slides[0].offsetWidth;
    }
}

function moveSlider() {
    sliderWrapper.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

prevBtn.addEventListener('click', () => {
    slideIndex = (slideIndex > 0) ? slideIndex - 1 : slides.length - 1;
    moveSlider();
});

nextBtn.addEventListener('click', () => {
    slideIndex = (slideIndex < slides.length - 1) ? slideIndex + 1 : 0;
    moveSlider();
});

window.addEventListener('resize', () => {
    updateSlideWidth();
    moveSlider();
});

// Инициализация при загрузке страницы
updateSlideWidth();
moveSlider(); // Вызываем moveSlider после initial updateSlideWidth


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
let slideWidth;
let touchStartX = 0;  // Начальная координата касания
let touchEndX = 0;    // Конечная координата касания

function updateSlideWidth() {
    if (window.innerWidth >= 768) {
        slideWidth = sliderContainer.offsetWidth;
    } else {
        slideWidth = slides[0].offsetWidth;
    }
}

function moveSlider() {
    sliderWrapper.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

function nextSlide(){
    slideIndex = (slideIndex < slides.length - 1) ? slideIndex + 1 : 0;
    moveSlider();
}

function prevSlide(){
    slideIndex = (slideIndex > 0) ? slideIndex - 1 : slides.length - 1;
    moveSlider();
}

prevBtn.addEventListener('click', () => {
    prevSlide();
});

nextBtn.addEventListener('click', () => {
    nextSlide();
});

window.addEventListener('resize', () => {
    updateSlideWidth();
    moveSlider();
});

// Обработчики касаний
sliderContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;  // Запоминаем начальную координату X
});

sliderContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;  // Запоминаем конечную координату X
    handleSwipe();
});

function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;  // Расстояние свайпа

    if (swipeDistance > 50) {  // Свайп вправо (предыдущий слайд) (50 - минимальная дистанция для свайпа)
        prevSlide();
    } else if (swipeDistance < -50) {  // Свайп влево (следующий слайд)
        nextSlide();
    }
}

updateSlideWidth();
moveSlider();
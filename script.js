// Задание
// Реализовать программу, показывающую циклично разные картинки. Задача должна быть реализована на языке javascript, без использования фреймворков и сторонник библиотек (типа Jquery).

// Технические требования:

// В папке banners лежит HTML код и папка с картинками.
// При запуске программы на экране должна отображаться первая картинка.
// Через 3 секунды вместо нее должна быть показана вторая картинка.
// Еще через 3 секунды - третья.
// Еще через 3 секунды - четвертая.
// После того, как покажутся все картинки - этот цикл должен начаться заново.
// При запуске программы где-то на экране должна появиться кнопка с надписью Прекратить.
// По нажатию на кнопку Прекратить цикл завершается, на экране остается показанной та картинка, которая была там при нажатии кнопки.
// Рядом с кнопкой Прекратить должна быть кнопка Возобновить показ, при нажатии которой цикл продолжается с той картинки, которая в данный момент показана на экране.
// Разметку можно менять, добавлять нужные классы, id, атрибуты, теги.


// Необязательное задание продвинутой сложности:

// При запуске программы на экране должен быть таймер с секундами и миллисекундами, показывающий сколько осталось до показа следующей картинки.
// Делать скрытие картинки и показывание новой картинки постепенным (анимация fadeOut / fadeIn) в течение 0.5 секунды.

let intervalId;
const slides = Array.from(document.querySelectorAll('.image-to-show'));
const stopBtn = document.querySelector('.pauseBtn');
const startBtn = document.querySelector('.continueBtn');

function showNextImage() {
    const currentSlide = slides.indexOf(document.querySelector('.image-visible'));
    slides[currentSlide].classList.remove('image-visible');
    setTimeout(() => {
        slides[currentSlide].style.display = 'none';
        const nextSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
        slides[nextSlide].classList.add('image-visible');
        slides[nextSlide].style.display = 'block';
    }, 500);
}
slides[0].style.display = 'block';

function startImageSwitch() { 
    if(!intervalId) {
        intervalId = setInterval(showNextImage, 3000);
    }
    
}

function stopImageSwitch() {
    clearInterval(intervalId);
    intervalId = null;
}

startImageSwitch();

stopBtn.addEventListener('click', () => {
    stopImageSwitch();
    stopBtn.disabled = true;
    startBtn.disabled = false;
});

startBtn.addEventListener('click', () => {
    startImageSwitch();
    startBtn.disabled = true;
    stopBtn.disabled = false;
});
const imageElms = Array.from(document.querySelectorAll(".slider__item"));
const leftBtn = document.querySelector(".slider__arrow_prev");
const rightBtn = document.querySelector(".slider__arrow_next");


let activeSlideIndex = imageElms.findIndex((item) => item.classList.contains('slider__item_active'));


function slider(newSlideActive) {
    imageElms[activeSlideIndex].classList.remove('slider__item_active');
    imageElms[newSlideActive].classList.add('slider__item_active');
    activeSlideIndex = newSlideActive;
}

rightBtn.addEventListener('click', () => {
    let newSlide = activeSlideIndex + 1;
    newSlide = newSlide >= imageElms.length ? 0 : newSlide;
    slider(newSlide);
});

leftBtn.addEventListener('click', () => {
    let newSlide = activeSlideIndex - 1;
    newSlide = newSlide < 0 ? imageElms.length - 1 : newSlide;
    slider(newSlide);
}); 






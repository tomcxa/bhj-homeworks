(function() {
    const arrows = document.querySelectorAll('.slider__arrow'),
        slides = document.querySelectorAll('.slider__item'),
        dots = document.querySelectorAll('.slider__dot');

    let activeSlide = 0; //начальный активный слайд

    dots[activeSlide].classList.add('slider__dot_active'); //начальная активная точка = активному слайду

    arrows.forEach(element => {
        element.onclick = function() {
            //снимаем предыдущие активные элементы
            if(slides[activeSlide].classList.contains('slider__item_active')) {
                slides[activeSlide].classList.remove('slider__item_active');
                dots[activeSlide].classList.remove('slider__dot_active');
            }
            //если нажали на левую кнопку
            if(element.classList.contains('slider__arrow_prev')) {
                activeSlide--;
                activeSlide = (activeSlide < 0) ? slides.length - 1 : activeSlide;
            }
            //если нажали на правую
            if(element.classList.contains('slider__arrow_next')) {
                activeSlide++;
                activeSlide = (activeSlide < slides.length) ? activeSlide : 0;
            }
            //обновляем активную точку и слайд
            slides[activeSlide].classList.add('slider__item_active');
            dots[activeSlide].classList.add('slider__dot_active');
            
        }
    });

    dots.forEach((element, i) => {
        element.onclick = function() {
            //удаляем активный элемент
            slides[activeSlide].classList.remove('slider__item_active');
            dots[activeSlide].classList.remove('slider__dot_active');

            activeSlide = i; //устанавливаем активный слайд = выбраной точке
            //обновляем значения
            dots[i].classList.add('slider__dot_active');
            slides[activeSlide].classList.add('slider__item_active');
        }
    })
})()
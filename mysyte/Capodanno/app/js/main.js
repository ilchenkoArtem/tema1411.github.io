var VISIBLE_SLIDE;
//Определение ширины вьюпорта
var windowWidth;

function windowSize() {
    windowWidth = window.innerWidth;
}

function visibleSlide() {
    windowSize();
    if (windowWidth > 1150) {
        VISIBLE_SLIDE = 3;
    } else if (windowWidth <= 1150 && windowWidth > 830) {
        VISIBLE_SLIDE = 2;
    } else if (windowWidth <= 831 && windowWidth > 615) {
        VISIBLE_SLIDE = 1;
    } else if (windowWidth <= 614 && windowWidth > 550) {
        VISIBLE_SLIDE = 2;
    } else if (windowWidth <= 550) {
        VISIBLE_SLIDE = 1
    }
}

windowSize();
visibleSlide();

window.addEventListener('resize', visibleSlide);
//инициализайия СЛАЙДЕРА категорий НА ГЛАВНОЙ
$('.index__slider-container').slick({
    slidesToScroll: 3,
    infinite: false,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1151,
            settings: {
                slidesToScroll: 2,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 831,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1
            }
        },
        {
            breakpoint: 615,
            settings: {
                slidesToScroll: 2,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 551,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1
            }
        }
    ]
});


function currentSlide(parent, nameContainerSlide) {
    var containerSlide = document.querySelector(nameContainerSlide);
    var parentElement = document.querySelector(parent);
    var current = parentElement.querySelector('.index__slider-current');

    //определяем номер текущего слайдера
    function sliderCounter() {
        var slickCurrentSlide = $(nameContainerSlide).slick('slickCurrentSlide') + VISIBLE_SLIDE;
        //если номер слайдера меньше 10, то добавляем перед номером '0', если больше, то просто 0
        if (slickCurrentSlide < 10) {
            current.textContent = '0' + slickCurrentSlide;
        } else {
            current.textContent = slickCurrentSlide;
        }
    }

    //Определяем сколько всего слайдов в блоке
    function quantitySliders() {
        var sliderItemElements = containerSlide.querySelectorAll('.index__slider-item');
        var sliderAll = parentElement.querySelector('.index__slider-all');
        if (sliderItemElements < 10) {
            sliderAll.textContent = '0' + sliderItemElements.length
        } else {
            sliderAll.textContent = sliderItemElements.length;
        }
    }

    sliderCounter();
    quantitySliders();
    $(nameContainerSlide).on('afterChange', function () {
        sliderCounter()
    });
}

//инициализация счетчиков слайдера на главной странице
currentSlide('.home__slide-container', '.home__slide');
currentSlide('.festival__slide-container', '.festival__slide');
currentSlide('.disco__slide-container', '.disco__slide');
currentSlide('.restaurant__slide-container', '.restaurant__slide');
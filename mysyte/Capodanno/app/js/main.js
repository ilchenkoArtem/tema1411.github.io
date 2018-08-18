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

/*Поведние мобильного меню*/
var burgerElement = document.querySelector('.header__burger');
var burgerIconElement = document.querySelector('.header__burger-ico');
var mainNavElement = document.querySelector('.header__main-nav');
var mainNavElements = document.querySelectorAll('.header__nav-elements a');
var headerContainer = document.querySelector('.header__container');
var navBlockSearchElement = document.querySelector('.nav-block__search');
var body = document.querySelector('body');
var onBurgerElementClick = function () {
    burgerIconElement.classList.toggle('header__burger-ico--active');
    mainNavElement.classList.toggle('header__main-nav--active');
    headerContainer.classList.toggle('header__container--white');
    body.classList.toggle('body--overflow')
};

var onBurgerElementClickDontWhite = function () {
    burgerIconElement.classList.toggle('header__burger-ico--active');
    mainNavElement.classList.toggle('header__main-nav--active');
    body.classList.toggle('body--overflow')
};

burgerElement.addEventListener('click', onBurgerElementClick);
mainNavElements.forEach(function (item) {
    item.addEventListener('click', onBurgerElementClick);
});
/*замена фона header*/
var headerContainerElement = document.querySelector('.header__container');
document.onscroll = function () {
    var heightHeaderContainerElement = headerContainerElement.clientHeight;
    var scrolledTop = window.pageYOffset || document.documentElement.scrollTop;


    if (scrolledTop > heightHeaderContainerElement) {
        burgerElement.removeEventListener('click', onBurgerElementClick);
        mainNavElements.forEach(function (item) {
            item.removeEventListener('click', onBurgerElementClick);
        });
        burgerElement.addEventListener('click', onBurgerElementClickDontWhite);
        mainNavElements.forEach(function (item) {
            item.addEventListener('click', onBurgerElementClickDontWhite);
        });
        headerContainer.classList.add('header__container--white');
        headerContainerElement.style.backgroundColor = '#ffffff';
        headerContainerElement.style.boxShadow = 'rgba(0, 0, 0, 0.25) 0px 0px 45px 0px';
        if (windowWidth > 1150) {
            mainNavElements.forEach(function (item) {
                item.style.color = '#000'
            });
            navBlockSearchElement.style.backgroundColor = '#cacaca'
        }
    } else {
        burgerElement.removeEventListener('click', onBurgerElementClickDontWhite);
        mainNavElements.forEach(function (item) {
            item.removeEventListener('click', onBurgerElementClickDontWhite);
        });
        burgerElement.addEventListener('click', onBurgerElementClick);
        mainNavElements.forEach(function (item) {
            item.addEventListener('click', onBurgerElementClick);
        });
        headerContainer.classList.remove('header__container--white');
        headerContainerElement.style.backgroundColor = 'transparent';
        headerContainerElement.style.boxShadow = 'none';
        if (windowWidth > 1150) {
            mainNavElements.forEach(function (item) {
                item.style.color = '#fff'
            });
            navBlockSearchElement.style.backgroundColor = '#'
        }
    }
};
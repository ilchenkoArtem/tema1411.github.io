var VISIBLE_SLIDE;
var windowWidth;
var body = document.querySelector('body');

//скролл от начала документа до хедара
var headerMainContainerElement = document.querySelector('.header__main-container');
var heightHeaderContainerElement;
var scrolledTop;

function heightTopHeader() {
    heightHeaderContainerElement = headerMainContainerElement.clientHeight;
    scrolledTop = window.pageYOffset || document.documentElement.scrollTop;
}

// ширина окна
function windowSize() {
    windowWidth = window.innerWidth;
}

// индекс счетчика слайдеров взависимоти от ширины экрана
function visibleSlide() {
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

//функция контролирует цвет текста шапки при ресайзе страницы
function toggleClassColorTextHeader() {
    var headerMainNavActive = document.querySelector('.header__main-nav--active');
    if (windowWidth > 1050 && scrolledTop < heightHeaderContainerElement) {
        headerContainer.classList.remove('header__container--black');
    } else {
        if (headerMainNavActive) {
            body.classList.add('body--overflow');
            headerContainer.classList.add('header__container--black');
        }

    }
}

//удаляет класс body--overflow при резайзе если таков имеется
function deleteBodyOverflow() {
    var bodyOverflow = document.querySelector('.body--overflow ');
    if (windowWidth > 1050) {
        if (bodyOverflow) {
            body.classList.remove('body--overflow');
        }
    }
}

//запуск функции при загрузке страницы
windowSize();
visibleSlide();
//обрабочтик резайза страницы
window.addEventListener('resize', function () {
    heightTopHeader();
    windowSize();
    visibleSlide();
    toggleClassColorTextHeader();
    deleteBodyOverflow()
});


//инициализайия СЛАЙДЕРОВ категорий НА ГЛАВНОЙ
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

//Инициализация слайдер на главном экране
$('.main-block__slider-container').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000
});

// функция нумерации маленького слайдера на главной странице
function addNumberSlider() {
    var blockInSlider = document.querySelectorAll('.main-block__slider-number');
    blockInSlider.forEach(function (item, index) {
        if (index < 10 && index > 0) {
            item.textContent = '0' + index;
        } else if (index == 0) {
            item.textContent = '01';
        } else {
            item.textContent = index;
        }
    })

}

addNumberSlider()

//счетчик слайдера
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


//Поведние мобильного меню
var burgerElement = document.querySelector('.header__burger');
var burgerIconElement = document.querySelector('.header__burger-ico');
var mainNavElement = document.querySelector('.header__main-nav');
var mainNavElements = document.querySelectorAll('.header__nav-elements a');
var headerContainer = document.querySelector('.header__container');

// стили меню при скроле
document.onscroll = function () {
    heightTopHeader();
    if (scrolledTop > heightHeaderContainerElement) {
        headerContainer.classList.add('header__container--black');
        headerMainContainerElement.classList.add('header__main-container--bg-white');
    } else {
        headerContainer.classList.remove('header__container--black');
        headerMainContainerElement.classList.remove('header__main-container--bg-white');
    }
};

// фукция активации меню
function activeMenu() {
    mainNavElement.classList.add('header__main-nav--active');
    headerContainer.classList.add('header__container--black');
    burgerElement.removeEventListener('click', activeMenu);
    burgerElement.addEventListener('click', noActiveMenu);
    burgerIconElement.classList.add('header__burger-ico--active');
    body.classList.add('body--overflow');
    mainNavElements.forEach(function (item) {
        item.addEventListener('click', noActiveMenu);
    });

}

// функция скрытия меню
function noActiveMenu() {
    var headerContainerBgWhite = document.querySelector('.header__main-container--bg-white');
    if (headerContainerBgWhite == null) {
        headerContainer.classList.remove('header__container--black');
    }
    body.classList.remove('body--overflow');
    burgerIconElement.classList.remove('header__burger-ico--active');
    mainNavElement.classList.remove('header__main-nav--active');
    burgerElement.addEventListener('click', activeMenu);
    burgerElement.removeEventListener('click', noActiveMenu);
    mainNavElements.forEach(function (item) {
        item.removeEventListener('click', noActiveMenu);
    });
}

// обработка клика по бургеру
burgerElement.addEventListener('click', activeMenu);


// -------------------плавный скрол

var scrolling = function (links) {
    $(document).ready(function () {
        var heigthHeader = $('.header__container').height();
        $(links).on('click', 'a', function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({
                scrollTop: top - heigthHeader
            }, 500);
        });
    });
};
scrolling('.main-block__scroll-down-container');
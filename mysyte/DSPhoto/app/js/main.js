//функция определяет колличество слаайдов в каждом блоке и заносит в массив
function quantityAllSliders(container) {
    var numberOfSlides = [];
    $(container).on("init", function (event, slick) {
        numberOfSlides.push(slick.slideCount);
        var sliderAll = document.querySelectorAll('.index__slider-all');
        sliderAll.forEach(function (item, index) {
            if (numberOfSlides[index] < 10) {
                item.textContent = '0' + numberOfSlides[index]
            } else {
                item.textContent = numberOfSlides[index]
            }
        })
    });
}

function currentSlide(parent, nameContainerSlide) {
    var containerSlide = document.querySelector(nameContainerSlide);
    var parentElement = document.querySelector(parent);
    var current = parentElement.querySelector('.index__slider-current');

    //определяем номер текущего слайдера
    function sliderCounter() {
        var slickCurrentSlide = $(nameContainerSlide).slick('slickCurrentSlide') + 1;
        //если номер слайдера меньше 10, то добавляем перед номером '0', если больше, то просто 0
        if (slickCurrentSlide < 10) {
            current.textContent = '0' + slickCurrentSlide;
        } else {
            current.textContent = slickCurrentSlide;
        }
    }

    sliderCounter();
    quantityAllSliders(nameContainerSlide);
    $(nameContainerSlide).on('afterChange', function () {
        sliderCounter()
    });
}

quantityAllSliders(".main-home__slide");
$('.main-home__slide').slick({
    speed: 1000,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
});
currentSlide('.main-home', '.main-home__slide');

//функция меняет цвет лого и счетчика взависимости от дата атрибута
function changeColorForElementsSlide(slickContainer) {
    $(slickContainer).on('afterChange ', function (event, slick, currentSlide, nextSlide) {
        var currentColour = $('.slick-active').attr('data-color');
        if (currentColour === 'white') {
            $('.main-home__logo-img').css({'fill': '#fff'});
            $('.index__slider-counter').css({'color': '#fff'});
            $('.main-scroll').removeClass('main-scroll--black')
        } else {
            $('.main-home__logo-img').css({'fill': '#000'});
            $('.index__slider-counter').css({'color': '#000'});
            $('.main-scroll').addClass('main-scroll--black')
        }
    });
}

changeColorForElementsSlide('.main-home__slide');

//скролл главной галереи по колёсику мыши
function switchingСontrol(slickContainer) {
    $(slickContainer).bind('mousewheel DOMMouseScroll', function (event) {
        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            $(slickContainer).slick('slickPrev');
        }
        else {
            $(slickContainer).slick('slickNext');
        }
    });
}

switchingСontrol('.main-home__slide');
//переключение слайдра по нажатию на надпись scroll
$('.main-scroll').on ('click', function () {
    $('.main-home__slide').slick('slickNext');
})
//Управление меню
//Управление главным меню
//функция закрытия меню
function closeMenu(mainBlock, hiddenElement, openFunction, closeFunction, otherElementForClose, clickMainElement, closeEscFunction) {
    $(hiddenElement).css({
        'opacity': '0'
    });
    setTimeout(function () {
        $(mainBlock).removeClass('open-menu');
    }, 500);
    $(clickMainElement).off('click', closeFunction).on('click', openFunction);
    $(otherElementForClose).off('click', closeMainMenu);
    $(document).off('keydown', closeEscFunction);
}

//функция открытия меню
function openMenu(mainBlock, hiddenElement, openFunction, closeFunction, otherElementForClose, clickMainElement, closeEscFunction) {
    $(mainBlock).addClass('open-menu');
    setTimeout(function () {
        $(hiddenElement).css({
            'opacity': '1'
        })
    }, 500);
    $(otherElementForClose).on('click', closeFunction);
    $(document).on('keydown', closeEscFunction);
    $(clickMainElement).off('click', openFunction).on('click', closeFunction);
}

//функция закрытия по нажатию ESC
function closeESC(e, closeFunction) {
    if (e.keyCode === 27) {
        closeFunction()
    }
}

//Инициализация работы главного меню
function openMainMenu() {
    $('.burger-wrapper').addClass('burger-wrapper-close');
    closePdfMenu();
    openMenu('.main-nav', '.main-nav .nav__links, .nav__socials', openMainMenu, closeMainMenu, '.main-nav .nav__bg, .main-nav .nav__link', '.burger-container', closeMainMenuEsc);
}

function closeMainMenu() {
    $('.burger-wrapper').removeClass('burger-wrapper-close');
    closeMenu('.main-nav', '.main-nav .nav__links, .nav__socials', openMainMenu, closeMainMenu, '.main-nav .nav__bg, .main-nav .nav__link', '.burger-container', closeMainMenuEsc);
}

function closeMainMenuEsc(e) {
    closeESC(e, closeMainMenu)
}
//инициализация работы  меню с pdf
function closePdfMenu() {
    closeMenu('.pdf-nav', '.pdf-nav .nav__links, .pdf-nav__text', openPdfMenu, closePdfMenu, '.pdf-nav .nav__bg, .pdf-nav .nav__link', '.pdf-download', closePdfMenuEsc);
}

function openPdfMenu() {
    closeMainMenu();
    openMenu('.pdf-nav', '.pdf-nav .nav__links, .pdf-nav__text', openPdfMenu, closePdfMenu, '.pdf-nav .nav__bg', '.pdf-download', closePdfMenuEsc);
}

function closePdfMenuEsc(e) {
    closeESC(e, closePdfMenu)
}

$('.pdf-download').on('click', openPdfMenu);
$('.burger-container').on('click', openMainMenu);
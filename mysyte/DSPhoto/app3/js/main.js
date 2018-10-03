var widthWindow;

function onWidthWindow() {
    widthWindow = $(window).width()
}

onWidthWindow();

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
    if (widthWindow <= '600') {
        changeColorForElementsSlide();
        $('.main-home__slide').slick('slickPlay');
    }

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
    console.log(widthWindow);
    if (widthWindow <= '600') {
        $('.main-home__slide').slick('slickPause');
        $('.header__mobile-log-img').css({'fill': '#fff'});
        $('.square').css({'background-color': '#fff'});


    }
}

//функция закрытия по нажатию ESC
function closeESC(e, closeFunction) {
    if (e.keyCode === 27) {
        closeFunction()
    }
}

//функция меняет цвет лого и счетчика взависимости от дата атрибута
function changeColorForElementsSlide() {
    var currentColour = $('.slick-active').attr('data-color');
    if (currentColour === 'white') {
        $('.main-home__logo-img, .main-home__mobile-social, .header__mobile-log-img').css({'fill': '#fff'});
        $('.pdf-download_img--mobile').css({'stroke': '#fff'});
        $('.index__slider-counter, .pdf-download_text--mobile').css({'color': '#fff'});
        $('.main-scroll').removeClass('main-scroll--black');
        if (widthWindow <= '600') {
            $('.square').css({'background-color': '#fff'})
        } else {
            $('.square').css({'background-color': '#000'})
        }

    } else {
        $('.main-home__logo-img, .main-home__mobile-social, .header__mobile-log-img').css({'fill': '#000'});
        $('.pdf-download_img--mobile').css({'stroke': '#000'});
        $('.index__slider-counter, .pdf-download_text--mobile').css({'color': '#000'});
        $('.main-scroll').addClass('main-scroll--black');
        if (widthWindow <= '600') {
            $('.square').css({'background-color': '#000'})
        } else {
            $('.square').css({'background-color': '#000'})
        }
    }

}

//Инициализация работы главного меню
function openMainMenu() {
    $('.burger-wrapper').addClass('burger-wrapper-close');
    closePdfMenu();
    openMenu('.main-nav', '.main-nav .nav__links, .nav__socials, .header-home__mobile-social', openMainMenu, closeMainMenu, '.main-nav .nav__bg, .main-nav .nav__link', '.burger-container', closeMainMenuEsc);
}

function closeMainMenu() {
    $('.burger-wrapper').removeClass('burger-wrapper-close');
    closeMenu('.main-nav', '.main-nav .nav__links, .nav__socials, .header-home__mobile-social', openMainMenu, closeMainMenu, '.main-nav .nav__bg, .main-nav .nav__link', '.burger-container', closeMainMenuEsc);
}

function closeMainMenuEsc(e) {
    closeESC(e, closeMainMenu)
}

//инициализация работы  меню с pdf
function closePdfMenu() {
    changeColorForElementsSlide();
    closeMenu('.pdf-nav', '.pdf-nav .nav__links, .pdf-nav__text', openPdfMenu, closePdfMenu, '.pdf-nav .nav__bg, .pdf-nav .nav__link', '.pdf-download', closePdfMenuEsc);
}

function openPdfMenu() {
    closeMainMenu();
    $('.pdf-download--mobile').css({'z-index': '6'});
    $('.pdf-download_text--mobile').css({'color': 'white'});
    $('.pdf-download_img--mobile').css({'stroke': 'white'});
    openMenu('.pdf-nav', '.pdf-nav .nav__links, .pdf-nav__text', openPdfMenu, closePdfMenu, '.pdf-nav .nav__bg', '.pdf-download', closePdfMenuEsc);
}

function closePdfMenuEsc(e) {
    closeESC(e, closePdfMenu)
}


$(window).on('resize', onWidthWindow);
$('.pdf-download').on('click', openPdfMenu);
$('.burger-container').on('click', openMainMenu);


var homePage = document.querySelector('.main-home');

if (homePage) {
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
//инициализация работы главного слайдера
    $('.main-home__slide').slick({
        speed: 1000,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        responsive: [
            {
                breakpoint: 601,
                settings: {
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000

                }
            }
        ]
    });
    currentSlide('.main-home', '.main-home__slide');


// функция меняет цвет лого и счетчика  после переключения слайдера
    function changeColorForElementsSlideOnAfterChange(slickContainer) {
        $(slickContainer).on('afterChange ', function (event, slick, currentSlide, nextSlide) {
            changeColorForElementsSlide()
        });
    }

    changeColorForElementsSlide();
    changeColorForElementsSlideOnAfterChange('.main-home__slide');

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
    $('.main-scroll').on('click', function () {
        $('.main-home__slide').slick('slickNext');
    });
}

var portfolioPage = document.querySelector('.main-portfolio');
if (portfolioPage) {
    //фильтрация галереи
    var mixer = mixitup('.container', {
        controls: {
            toggleDefault: 'none'
        }
    });

// упралением окном фильтров
    function closeFilter() {
        $('.filter-container').removeClass('filter-container--open');
    }

    var mainButton = $('.filter-button-open');
    mainButton.on('click', function () {
        $('.filter-container').addClass('filter-container--open');
    });
    $('.filter__button').on('click', closeFilter);

//------------------------
    function addClassActive() {
        $(".gallery__photo").addClass("active");
    }

    addClassActive();


    $('.gallery__photo.active').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    $(".filter").click(function () {
        addClassActive();
        setTimeout(function () {
            $(".gallery__photo").each(function () {
                if ($(this).css('display') == 'none') {
                    $(this).removeClass("active");
                }
            });
            $('.gallery__photo.active').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        }, 700);

    });


//----------------------------------------------------------


}


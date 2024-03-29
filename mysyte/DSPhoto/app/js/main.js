var widthWindow; //ширина окна

function onWidthWindow() { //определение ширина окна
    widthWindow = $(window).width()
}

onWidthWindow();

//-----------------------ПЛАВНЫЙ СКРОЛЛ К якорной ссылке---------------------------
function smoothScroll(containerLinks, time) {
    $(containerLinks).on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, time);
    });
}

//--------------------------------------------------------------------------------

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
        $('.header__portfolio').attr('style', '');
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
        $('.header__portfolio').css({'background-color': 'transparent'});
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

//открытие главного меню
function openMainMenu() {
    $('.burger-wrapper').addClass('burger-wrapper-close');
    closePdfMenu();
    closeFilter();
    openMenu('.main-nav', '.main-nav .nav__links, .nav__socials, .header-home__mobile-social', openMainMenu, closeMainMenu, '.main-nav .nav__bg, .main-nav .nav__link', '.burger-container', closeMainMenuEsc);
}

//закртие главного меню
function closeMainMenu() {
    $('.burger-wrapper').removeClass('burger-wrapper-close');
    closeMenu('.main-nav', '.main-nav .nav__links, .nav__socials, .header-home__mobile-social', openMainMenu, closeMainMenu, '.main-nav .nav__bg, .main-nav .nav__link', '.burger-container', closeMainMenuEsc);
}

//закртие главного меню по нажатию
function closeMainMenuEsc(e) {
    closeESC(e, closeMainMenu)
}

//инициализация работы  меню с pdf
var pdfButtonMobilePortfolio = $('.pdf-download-portfolio--mobile');//кнопка pdf мобильной версии страницы порфтолио
//открытие меню pdf
function openPdfMenu() {
    closeFilter();
    closeMainMenu();
    $('.pdf-download--mobile').css({'z-index': '6'});
    $('.pdf-download_text--mobile').css({'color': 'white'});
    $('.pdf-download_img--mobile').css({'stroke': 'white'});
    openMenu('.pdf-nav', '.pdf-nav .nav__links, .pdf-nav__text', openPdfMenu, closePdfMenu, '.pdf-nav .nav__bg', '.pdf-download', closePdfMenuEsc);
    if (widthWindow <= '600') {
        pdfButtonMobilePortfolio.addClass('pdf-download-portfolio--mobile--open');
        pdfButtonMobilePortfolio.off('click', openPdfMenu);
        pdfButtonMobilePortfolio.on('click', closePdfMenu)
    }
    $(window).on('keydown', closePdfMenuEsc);
}

//закрытие меню pdf
function closePdfMenu() {
    changeColorForElementsSlide();
    closeMenu('.pdf-nav', '.pdf-nav .nav__links, .pdf-nav__text', openPdfMenu, closePdfMenu, '.pdf-nav .nav__bg, .pdf-nav .nav__link', '.pdf-download', closePdfMenuEsc);
    if (widthWindow <= '600') {

        pdfButtonMobilePortfolio.off('click', closePdfMenu);
        pdfButtonMobilePortfolio.on('click', openPdfMenu);
        setTimeout(function () {
            pdfButtonMobilePortfolio.removeClass('pdf-download-portfolio--mobile--open');
        }, 800)
        $(window).off('', closePdfMenuEsc);
    }
}

//закрытие меню pdf по esc
function closePdfMenuEsc(e) {
    closeESC(e, closePdfMenu)
}

// упралением окном фильтров
var mainButton = $('.filter-button-open');//кнопка фильтра в на странце портфолио
//открытие фильтра
function openFilter() {
    closePdfMenu();
    closeMainMenu();
    $('.filter-container').addClass('filter-container--open');
    if (widthWindow <= '600') {
        $('.header__mobile-log-img').css({'fill': '#fff'});
        $('.header__portfolio').css({'background-color': 'transparent'});
        mainButton.addClass('filter-button-open--open');
    }

    mainButton.off('click', openFilter);
    $('.filter-button-open').on('click', closeFilter);
    $(window).on('keydown', closeFilterEsc);
}

//закрытие фильтра
function closeFilter() {
    $('.filter-container').removeClass('filter-container--open');
    if (widthWindow <= '600') {
        $('.header__mobile-log-img').css({'fill': '#000'});
        $('.header__portfolio').css({'background-color': ''});
    }
    mainButton.removeClass('filter-button-open--open');
    $(window).off('keydown', closeFilterEsc);
    mainButton.on('click', openFilter);
}

//закртыие фильтра по ESC
function closeFilterEsc(e) {
    closeESC(e, closeFilter)
}

$(window).on('resize', onWidthWindow);
$('.pdf-download, .pdf-download-portfolio--mobile').on('click', openPdfMenu);
$('.burger-container').on('click', openMainMenu);


var homePage = document.querySelector('.main-home');
if (homePage) {
    $('.main-home__slide img').focus();

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

    //скролл галереи по нажатию на стрелочки на клавиатуры
    /*   $(window).on('keydown', function (e) {
           console.log(e.which);
           if (e.which == 39) {
               $(slickContainer).slick('slickNext');
           } else if (e.which == 37) {
               $(slickContainer).slick('slickNext');
           }
       });*/

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
    mainButton.on('click', openFilter);

//----------------------------------------------------------
// with Masonry & jQuery
// init Masonry
    var $grid = $('.grid').masonry({
        // Masonry options...
        itemSelector: '.gallery__photo'
    });

    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');

    });
    //фильтр галереи
    $('.grid').isotope({
        // options
        itemSelector: '.gallery__photo',
        masonry: {}
    });

    //функция скрлорит страницу в начало после работы фильтра
    function onArrange() {
        console.log('arrange done');
        document.location.href = '#top'
    }

    $grid.on('arrangeComplete', onArrange);
    //Настройки фильтра на странице пртофолио
    $('.filter.beauty').on('click', function () {
        $grid.isotope({filter: '.beauty'});
    });
    $('.filter.magazines').on('click', function () {
        $grid.isotope({filter: '.magazines'});
    });
    $('.filter.fashion').on('click', function () {
        $grid.isotope({filter: '.fashion'});
    });
    $('.filter.advertising').on('click', function () {
        $grid.isotope({filter: '.advertising'});
    });

    $('.filter.all').on('click', function () {
        $grid.isotope({filter: '.gallery__photo'});
    });

    //--------------------------------------------
    //активация при клике на фильтр + закрытие попапа по нажатию на категории
    $('.filter').on('click', function () {
        $('.filter').removeClass('filter--active');
        $(this).addClass('filter--active');
        closeFilter();
    });


    function addClassActive() {
        $(".gallery__photo").addClass("active");
    }

    addClassActive();

    function activePopup() {
        $('.gallery__photo.active').magnificPopup({
            type: 'image',
            closeMarkup: '<button title="close" type="button" class="mfp-close"></button>',
            gallery: {
                enabled: true,
                tCounter: '%curr% / %total%'
            }
        });
    }

    activePopup();

    $(".filter").click(function () {
        addClassActive();
        setTimeout(function () {
            $(".gallery__photo").each(function () {
                if ($(this).css('display') == 'none') {
                    $(this).removeClass("active");
                }
            });
            activePopup();
        }, 700);
    });

    //-------плавный скролл к верху страницы
    smoothScroll(".footer__scroll-top-container", 500)
}

//функции запускаемые при ресайзе
$(window).on('resize', function () {
    onWidthWindow();
});

var newsPage = document.querySelector('.main-news');
if (newsPage) {

    mainButton.on('click', openFilter);


    var $blog = $('.blog').masonry({
        // Masonry options...
        itemSelector: '.blog__item-wrapper',
        percentPosition: true,
        gutter: '.blog__gutter-sizer'
    });

    //Настройки фильтра на странице новстей
    $blog.isotope({
        itemSelector: '.blog__item-wrapper',
        masonry: {
            itemSelector: '.blog__item-wrapper',
            percentPosition: true,
            gutter: '.blog__gutter-sizer'
        }
    });

    $('.main-header__filter-item.backstage, .main-news .backstage').on('click', function () {
        $blog.isotope({filter: '.backstage'});
        closeFilter()

    });
    $('.main-header__filter-item.video, .main-news .video').on('click', function () {
        $blog.isotope({filter: '.video'});
        closeFilter()
    });
    $('.main-header__filter-item.publications, .main-news .publications ').on('click', function () {
        $blog.isotope({filter: '.publications'});
        closeFilter()
    });

    $('.main-header__filter-item.all, .main-news .all').on('click', function () {
        $blog.isotope({filter: '.blog__item-wrapper'});
    });

    //добавление класс при клике на фильтр вверху страницы
    function removeActiveClassFilter() {
        $('.main-header__filter-item').removeClass('main-header__filter-item--active');
        $('.filter').removeClass('filter--active');
    }

    //синхронизация активации ссылок филтров на двух фильтрах
    $('.main-header__filter-item').on('click', function () {
        removeActiveClassFilter();
        $(this).addClass('main-header__filter-item--active');
        if ($(this).hasClass('publications')) {
            $('.filter.publications').addClass('filter--active')
        } else if ($(this).hasClass('backstage')) {
            $('.filter.backstage').addClass('filter--active')
        } else if ($(this).hasClass('video')) {
            $('.filter.video').addClass('filter--active')
        } else if ($(this).hasClass('all')) {
            $('.filter.all').addClass('filter--active')
        }
    });

    $('.filter').on('click', function () {
        removeActiveClassFilter();
        $(this).addClass('filter--active');
        if ($(this).hasClass('publications')) {
            $('.main-header__filter-item.publications').addClass('main-header__filter-item--active')
        } else if ($(this).hasClass('backstage')) {
            $('.main-header__filter-item.backstage').addClass('main-header__filter-item--active')
        } else if ($(this).hasClass('video')) {
            $('.main-header__filter-item.video').addClass('main-header__filter-item--active')
        } else if ($(this).hasClass('all')) {
            $('.main-header__filter-item.all').addClass('main-header__filter-item--active')
        }
    });
    //-----------------------------
    smoothScroll('.footer__scroll-top-container', 500);

    var positionBlog = $(".blog-wrapper").offset().top;

    window.onscroll = function() {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if(scrolled >= positionBlog) {
            $('.filter-button-open').removeClass('filter-button-open--hidden')
        } else {
            $('.filter-button-open').addClass('filter-button-open--hidden')
        }
    }
}
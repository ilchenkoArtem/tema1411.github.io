var windowWidth;
var body = document.querySelector('body');
var index = document.querySelector('.index');
var about = document.querySelector('.about');
var card = document.querySelector('.card');
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

//запуск обработчика ширина экрана при загрузке страницы
windowSize();
//обрабочтик резайза страницы
window.addEventListener('resize', function () {
    heightTopHeader();
    windowSize();
    toggleClassColorTextHeader();
    deleteBodyOverflow()
});
//инициализайия СЛАЙДЕРОВ категорий НА ГЛАВНОЙ
//функция определяет колличество слаайдов в каждом блоке и заносит в массив
var numberOfSlides = [];

function quantityAllSliders() {
    $(".index__slider-container").on("init", function (event, slick) {
        numberOfSlides.push(slick.slideCount);
    });
}

quantityAllSliders();


$('.index__slider-container').slick({
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1151,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 831,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 615,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 551,
            settings: {
                autoplay: false,
                slidesToShow: 1
            }
        }
    ]
});

//функция добалвяте колличчество слайдов в счетчик каждого блока
function quantitySliders() {
    var sliderAll = document.querySelectorAll('.index__slider-all');
    sliderAll.forEach(function (item, index) {
        if (numberOfSlides[index] < 10) {
            item.textContent = '0' + numberOfSlides[index]
        } else {
            item.textContent = numberOfSlides[index]
        }
    })

}

quantitySliders();
//Инициализация слайдер на главном экране
$('.main-block__slider-container').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 551,
            settings: {
                autoplay: false,
            }
        }
    ]
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

addNumberSlider();


//счетчик слайдера
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
    quantitySliders();
    $(nameContainerSlide).on('afterChange', function () {
        sliderCounter()
    });
}


//инициализация счетчиков слайдера на главной странице
if (index) {
    currentSlide('.home__slide-container', '.home__slide');
    currentSlide('.festival__slide-container', '.festival__slide');
    currentSlide('.disco__slide-container', '.disco__slide');
    currentSlide('.restaurant__slide-container', '.restaurant__slide');
}


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

//отрытие попапа поиска
var popupSearch = document.querySelector('.popup__search');
var blockSearchImg = document.querySelector('.nav-block__search-container-img');
var popupSearchButtonClose = document.querySelector('.popup__search-button-close');

function closePopupSearch() {
    popupSearch.classList.remove('popup__search--active');
    popupSearchButtonClose.removeEventListener('click', onClickClose)
    window.removeEventListener('keydown', onKeyClose);
}

function onClickClose() {
    closePopupSearch()
}

function onKeyClose(evt) {
    if (evt.keyCode === 27) {
        closePopupSearch()
    }
}

function openPopupSearch() {
    popupSearch.classList.add('popup__search--active');
    popupSearchButtonClose.addEventListener('click', onClickClose)
    window.addEventListener('keydown', onKeyClose);
}

blockSearchImg.addEventListener('click', openPopupSearch);

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
///////////////////////////////////////////////////
var form = document.querySelector('form');
if (form) {
// Ajax send form
    var SAVE_URL = '../mail.php';
    var TIMEOUT_REQUEST = 10000;
    var SUCCESS_CODE = 200;
    var setupXHR = function (onLoad, onError) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';

        xhr.timeout = TIMEOUT_REQUEST;

        xhr.addEventListener('load', function () {
            var errorText;
            if (xhr.status === SUCCESS_CODE) {
                onLoad(xhr.response);
            } else {
                errorText = 'Cтатус ответа:' + xhr.status + ' ' + xhr.statusText;
                onError(errorText);
            }
        });

        xhr.addEventListener('error', function () {
            onError('Cтатус ответа:' + xhr.status + ' ' + xhr.statusText);
        });

        xhr.addEventListener('timeout', function () {
            onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
        });

        return xhr;
    };

    var loadData = function (onLoad, onError) {
        var xhr = setupXHR(onLoad, onError);
        xhr.open('GET', LOAD_URL);
        xhr.send();
    };

    var saveData = function (onLoad, onError, data) {
        var xhr = setupXHR(onLoad, onError);
        xhr.open('POST', SAVE_URL);
        xhr.send(data);
    };

    var backend = {
        'load': loadData,
        'save': saveData
    };

    var onDeduceErrorText = function () {
        var successForm = document.querySelector('.success__form');
        var succesFormImg = successForm.querySelector('img');
        successForm.classList.remove('success__form--disabled');
        succesFormImg.setAttribute('src', 'img/error.svg');
        setTimeout(function () {
            successForm.classList.add('success__form--disabled');
        }, 3000);
    };

    var onSubmitReset = function (form) {
        var successForm = document.querySelector('.success__form');
        successForm.classList.remove('success__form--disabled');
        successForm.setAttribute('src', 'img/succes.svg');
        setTimeout(function () {
            successForm.classList.add('success__form--disabled');
        }, 3000);
        form.reset();
    };

    form.addEventListener('submit', function (evt) {
        window.backend.save(function () {
            onSubmitReset(form)
        }, onDeduceErrorText, new FormData(form));
        evt.preventDefault();
    });
}
/////////////////////////////////////////////////////////////////////////////////////////
//ракрытие ответов на странице о нас
if (about) {
    var captionElements = about.querySelectorAll(".about__question-container-caption");

    function onControlVisibilityAnswer() {
        this.classList.toggle('about__question-container-caption--open');
    }

    captionElements.forEach(function (item) {
        item.addEventListener('click', onControlVisibilityAnswer)
    })
}
/////////////////////////////////////////////////////////////
if (card) {

    //переключение главных вкладок

    var tabsElement = document.querySelectorAll('.card_tab');
    console.log(tabsElement);
    var cardElement = document.querySelectorAll('.card__content-container>section');
    console.log(cardElement);

    function removeClassActiveCard() {
        tabsElement.forEach(function (item) {
            item.classList.remove('card_tab--active')
        })
    }

    function noVisabilityCardElement() {
        cardElement.forEach(function (item) {
            item.style.display = 'none'
        });
    }

    tabsElement.forEach(function (item, i) {
        item.addEventListener('click', function () {
            removeClassActiveCard();
            noVisabilityCardElement();
            console.log('клик');
            item.classList.add('card_tab--active');
            cardElement[i].style.display = 'flex'
        })
    });

    //Инициализация слайдера на вкладке book
    $('.book__container-photos-slick').slick();

    //Переключение вкладок с галереи на карту
    var mapElement = document.querySelector('.book__container-map');
    var photoElement = document.querySelector('.book__container-photos');
    var buttonMap = document.querySelector('.button--map');
    var buttonGallery = document.querySelector('.button--gallery');

    buttonMap.addEventListener('click', function () {
        photoElement.classList.remove('book__block-active');
        mapElement.classList.add('book__block-active');
        buttonGallery.classList.remove('book__switch--active');
        this.classList.add('book__switch--active');
    });
    buttonGallery.addEventListener('click', function () {
        mapElement.classList.remove('book__block-active');
        photoElement.classList.add('book__block-active');
        buttonMap.classList.remove('book__switch--active');
        this.classList.add('book__switch--active');
    });

    //Открытие выпадающего текста в book
    var bookCalculateButtonContainer = document.querySelectorAll('.book__calculate__item-container');
    bookCalculateButtonContainer.forEach(function (item) {
        var bookCheckboxElements = item.querySelector('.book__checkbox');
        bookCheckboxElements.addEventListener('click', function (event) {
            var eventTagName = event.target.tagName;
            if (eventTagName == 'LABEL') {
                var text = item.querySelector('.book__text-info-container');
                var downImg = item.querySelector('.book__down');
                text.classList.toggle('book__text-info-container--active');
                downImg.classList.toggle('book__down--upp')
            }
        })
    });

    //Подсчёт суммы
    var bookQuantityElements = document.querySelectorAll('.book__quantity');
    var bookPriceElemenets = document.querySelectorAll('.book__price span');


    var bookTotalElement = document.querySelector('.book__total');

    function summPrice() {
        var prices = [];
        var quantity = [];
        bookPriceElemenets.forEach(function (item) {
            prices.push(item.textContent)
        });

        bookQuantityElements.forEach(function (item) {
            quantity.push(item.textContent)
        });
        var bbb = 0;
        var summCurrent = 0;
        for (var i = 0; i < prices.length; i++) {
            summCurrent = prices[i] * quantity[i];
            bbb += summCurrent;
        }
        bookTotalElement.textContent = bbb;
        prices = [];
        quantity = [];
    }

    summPrice();

    //////////////
    var quantityContainer = document.querySelectorAll('.book__quantity-container');
    quantityContainer.forEach(function (item) {
        var buttonMinus = item.querySelector('.book__button-reduce');
        var buttonPlus = item.querySelector('.book__button-enlarge');
        var quantity = item.querySelector('.book__quantity');
        var quantityCurrent = quantity.textContent;
        console.log(quantityCurrent);
        buttonMinus.addEventListener('click', function () {
            if (quantityCurrent !== 0) {
                quantityCurrent = quantityCurrent - 1;
                quantity.textContent = quantityCurrent;
                summPrice()
            }
        });
        buttonPlus.addEventListener('click', function () {
            quantityCurrent = Number(quantityCurrent) + 1;
            quantity.textContent = quantityCurrent;
            summPrice()

        })
    })
}

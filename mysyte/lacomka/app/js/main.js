$('.first__main-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    fade: true
})
//управлеие попапом с формой заявки
//функция закрытие попапа


function closePopup() {
    $('.form-popup').addClass('form-popup--close');
    $('.form-popup__close-button').off('click', closePopup);
    $('.form-popup__bg').off('click', closePopup);
    $(document).off('keydown', closePopupESC);
}

//функция закрытие попапа по нажатию на esc
function closePopupESC(e) {
    if (e.which == 27) {
        closePopup();
    }
}

//функция откртия попапа
$('button:not(.button-callback)').on('click', function () {
    $('.form-popup').removeClass('form-popup--close');
    $('.form-popup__close-button').on('click', closePopup);
    $('.form-popup__bg').on('click', closePopup);
    $(document).on('keydown', closePopupESC);
    //заменяем заголовок формы
    var textButton = $(this).text();
    $('.form-popup__form .first__form-h3').text(textButton);
    $('.form-popup__form .form__name').attr('value', textButton);
});
//--------------------------------------------------------------------

//управлеие попапом с формой заявки
//функция закрытие попапа
function closePopupCallback() {
    $('.callback').addClass('callback--close');
    $('.callback__close-button').off('click', closePopupCallback);
    $('.callback__bg').off('click', closePopupCallback);
    $(document).off('keydown', closePopupCallbackESC);
}

//функция закрытие попапа по нажатию на esc
function closePopupCallbackESC(e) {
    if (e.which == 27) {
        closePopupCallback();
    }
}

//функция откртия попапа
$('.button-callback').on('click', function () {
    $('.callback').removeClass('callback--close');
    $('.callback__close-button').on('click', closePopupCallback);
    $('.callback__bg').on('click', closePopupCallback);
    $(document).on('keydown', closePopupCallbackESC);
});
//--------------------------------------------------------------------
//плавный скролл к якорной ссылке
$(".header__main-nav-item, .header__nav").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
});

$('.scheme__img').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
});
$('.reviews__items').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
});

$('.components__list-items').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1150,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

//ajax отправка форм
var form = document.querySelectorAll('.form');
var SAVE_URL = 'https://httpstat.us/200';
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
form.forEach(function (item) {
    item.addEventListener('submit', function (evt) {
        window.backend.save(function () {
            onSubmitReset(item)
        }, onDeduceErrorText, new FormData(item));
        evt.preventDefault();
    });
});

(function ($) {
    $.fn.animated = function (inEffect) {
        $(this).each(function () {
            var ths = $(this);
            ths.css("opacity", "0").addClass("animated").waypoint(function (dir) {
                if (dir === "down") {
                    ths.addClass(inEffect).css("opacity", "1");
                }
                ;
            }, {
                offset: "90%"
            });

        });
    };
})(jQuery);

//анимации
var animatesFunction = function () {
    $('.about, .assortment, .price, .payback, .components, .reviews, .advantages, .scheme, .foryou, .bottom-form, .footer').animated('fadeIn');
};

animatesFunction();
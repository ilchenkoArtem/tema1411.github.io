import jquery from '../libs/jquery/dist/jquery.min';

// Управление анимацией
//Animate CSS + WayPoints javaScript Plugin
//Example: $(".element").animated("zoomInUp");
//Author URL: http://webdesign-mas
/*$(document).ready(function () {
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

    var animatesFunction = function () {
        $('button:not(:first-of-type)').animated('zoomInUp');
        $('.advantages__item, .dispatch__container').animated('rotateInDownRight');
        $('.form-item').animated('zoomIn');
        $('.step, .step__button-container, footer, .about .services, .advantages, .dispatch, .main-caption, .advantages__buttons, .h2 ').animated("slideInUp");
        $('.step__item--1, .step__item--4,.step__item--7, .step__item--9, .step__item--8').animated("fadeInRight");
        $('.step__item--2, .step__item--5, .step__item--3, .step__item--6, .step__description').animated("fadeInLeft");
    };

    var inputCheckBoxElement = document.querySelectorAll('.services__radio');
    var windowWidth = window.innerWidth;
    var skypeElement = document.querySelector('#skype');
    var setTypeElement = function () {
        if (windowWidth < 1024) {
            inputCheckBoxElement.forEach(function (item) {
                item.setAttribute('type', 'checkbox');
                skypeElement.checked = null;
            })
        } else {
            inputCheckBoxElement.forEach(function (item) {
                item.setAttribute('type', 'radio');
                skypeElement.checked = 'checked';
                animatesFunction()
            })
        }
    };
    setTypeElement();
    window.onresize = function (ev) {
        windowWidth = window.innerWidth;
        setTypeElement();

    };
});*/
var videoLink = 'https://www.youtube.com/embed/Vzsuqp8Rbt4?';
videoLink = videoLink + '?rel=0&autoplay ';

var SAVE_URL = '../mail.php';
//var SAVE_URL = 'https://httpstat.us/200';
/*Поведние мобильного меню*/
var burgerElement = document.querySelector('.header__burger');
var burgerIconElement = document.querySelector('.header__burger-ico');
var mainNavElement = document.querySelector('.header__main-nav');
var mainNavElements = document.querySelectorAll('.header__nav-elements a:not(.header__services)');

var onBurgerElementClick = function () {
    burgerIconElement.classList.toggle('header__burger-ico--active');
    mainNavElement.classList.toggle('header__main-nav--active');
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
        headerContainerElement.style.backgroundColor = '#ffffff';
        headerContainerElement.style.boxShadow = 'rgba(0, 0, 0, 0.25) 0px 0px 45px 0px';
    } else {
        headerContainerElement.style.backgroundColor = 'transparent';
        headerContainerElement.style.boxShadow = 'none';
    }
};

/* Работа label в формах */
var input = document.querySelectorAll('.input');
var onInputChange = function () {
    var valueInput = this.value;
    var label = this.nextElementSibling;
    if (valueInput !== "") {
        label.classList.add('label--active');
    } else {
        label.classList.remove('label--active');
    }
};

var addListenerInput = function () {
    for (var i = 0; i < input.length; i++) {
        input[i].addEventListener('change', onInputChange);
    }
};
addListenerInput();


/*------открытие/закрытие попап и изменение заголовка попапа----------*/



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
scrolling('');

/*-----Валидация форм----*/
var inputForm = document.querySelectorAll('.form-item input');
var testValid = function () {
    var validity = this.validity.valid;
    var label = this.nextElementSibling;
    console.log(this.getAttribute('placeholder'))
    if (!validity) {
        label.classList.add('label--error');
        this.style.borderBottomColor = 'red';
        this.style.color = 'red'
    } else {
        label.classList.remove('label--error');
        this.style.borderBottomColor = '#222';
        this.style.color = '#222'
    }
};

inputForm.forEach(function (it) {
    it.addEventListener('change', testValid)
});

//---- Отправка формы без перезагрузки
/*var TIMEOUT_REQUEST = 10000;
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

/!*var formDispatch = document.querySelector('.dispatch__form');
var popupForm = document.querySelector('.popup__form');
var footerForm = document.querySelector('.footer__form');*!/

var onDeduceErrorText = function (error) {
    var successForm = document.querySelector('.success__form');
    var succesFormImg = document.querySelector('.success__form img');
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
    var label = form.querySelectorAll('label');
    setTimeout(function () {
        successForm.classList.add('success__form--disabled');
    }, 3000);
    form.reset();
    label.forEach(function (it) {
        it.classList.remove('label--active')
    })
};



formDispatch.addEventListener('submit', function (evt) {
    window.backend.save(function () {
        onSubmitReset(formDispatch)
    }, onDeduceErrorText, new FormData(formDispatch));
    evt.preventDefault();
    var input = this.querySelectorAll('.input')
    input.forEach(function (value) {
        value.testValid()
    })
});

popupForm.addEventListener('submit', function (evt) {
    window.backend.save(resetFormPopup, onDeduceErrorText, new FormData(popupForm));
    evt.preventDefault();
});

footerForm.addEventListener('submit', function (evt) {
    window.backend.save(function () {
        onSubmitReset(footerForm)
    }, onDeduceErrorText, new FormData(footerForm));
    evt.preventDefault();
});*/

var bodyElement = document.querySelector('body');

var noScrollbodyElement = function () {
    bodyElement.style.overflow = 'hidden'
};

var onScrollbodyElement = function () {
    bodyElement.style.overflow = 'auto'
};

var popupElement = document.querySelector('.popup');
var popupCloseElement = document.querySelector('.popup__close');
var buttonEase = document.querySelectorAll('.button-ease');
var popupBgElement = document.querySelector('.popup__background');
var ESK_KEY_CODE = 27;
var caption = document.querySelector('.popup__form-container h2');
var inputNameElement = document.querySelector('#popup__name-services');


var easeText = 'заполни форму и убедись<br>что английский это легко';
var mondeyText = 'заполни форму заказа<br>не откладывай на понедельник';

var closePopup = function () {
    popupElement.classList.remove('popup-active');
    popupCloseElement.removeEventListener('click', onPopupCloseElementClick);
    popupBgElement.removeEventListener('click', onPopupCloseElementClick);
    window.removeEventListener('keydown', onWindowKey)
    onScrollbodyElement();
    inputNameElement.value = 'Получить бесплатный урок';
};

var openPopup = function () {
    noScrollbodyElement();
    popupElement.classList.add('popup-active');
    popupCloseElement.addEventListener('click', onPopupCloseElementClick);
    popupBgElement.addEventListener('click', onPopupCloseElementClick);
    window.addEventListener('keydown', onWindowKey)
};
var onPopupCloseElementClick = function () {
    closePopup()
};

var onWindowKey = function (evt) {
    if (evt.keyCode === ESK_KEY_CODE) {
        closePopup();
    }
};

var onButtonEaseClick = function () {
    caption.innerHTML = easeText;
    openPopup();
};

//скрипты для главной страници
if($('.body--index').length !== 0){
    //аякс отправка формы
    $('.dispatch__form, .footer__form, .popup__form').on('submit', function (e) {
        e.preventDefault();
        var form = this;
        $.ajax({
            url: SAVE_URL,
            method: 'POST',
            data: $(this).serialize(),
            success: function () {
                var successForm = document.querySelector('.success__form');
                successForm.classList.remove('success__form--disabled');
                successForm.setAttribute('src', 'img/succes.svg');
                var label = form.querySelectorAll('label');
                setTimeout(function () {
                    successForm.classList.add('success__form--disabled');
                }, 3000);
                form.reset();
                label.forEach(function (it) {
                    it.classList.remove('label--active')
                })
                $('.popup').removeClass('popup-active')
            },
            error: function () {
                var successForm = document.querySelector('.success__form');
                var succesFormImg = document.querySelector('.success__form img');
                successForm.classList.remove('success__form--disabled');
                succesFormImg.setAttribute('src', 'img/error.svg');
                setTimeout(function () {
                    successForm.classList.add('success__form--disabled');
                }, 3000);
            }
        })
    });

    //--------------попап видио ------------

    var aboutPlayElement = document.querySelector('.about__play');
    var aboutVideoContainer = document.querySelector('.about__video-container');
    var aboutVideoBackground = document.querySelector('.about__video--background');
    var youtebIframe = aboutVideoContainer.querySelector('iframe');
    var onWindowKeyVideo = function (evt) {
        if (evt.keyCode === ESK_KEY_CODE) {
            closeVideo();
        }
    };

    var onAboutVideoBackgroundClick = function () {
        closeVideo()
    };

    var closeVideo = function () {
        onScrollbodyElement();
        youtebIframe.src = '';
        aboutVideoContainer.classList.add('about__video-container--close');
        window.removeEventListener('keydown', onWindowKeyVideo);
        aboutVideoBackground.removeEventListener('click', onAboutVideoBackgroundClick);
    };


    aboutPlayElement.onclick = function () {
        noScrollbodyElement();
        youtebIframe.src = videoLink;
        aboutVideoContainer.classList.remove('about__video-container--close');
        window.addEventListener('keydown', onWindowKeyVideo);
        aboutVideoBackground.addEventListener('click', onAboutVideoBackgroundClick);
    };
    //------




    buttonEase.forEach(function (it) {
        it.addEventListener('click', onButtonEaseClick);
    });


    popupCloseElement.addEventListener('click', onPopupCloseElementClick);
}

if(document.querySelector('.body--services')) {
    $('.tariff-button').on('click', function () {
        openPopup();
        $('#popup__name-services').attr('value', $(this).attr('data-tariff'));

    })
    
    //аякс отправка формы в сервисах
    $('.dispatch__form, .footer__form, .popup__form').on('submit', function (e) {
        e.preventDefault();
        var form = this;
        $.ajax({
            url: SAVE_URL,
            method: 'POST',
            data: $(this).serialize(),
            success: function () {
                var successForm = document.querySelector('.success__form');
                successForm.classList.remove('success__form--disabled');
                successForm.setAttribute('src', 'img/succes.svg');
                var label = form.querySelectorAll('label');
                setTimeout(function () {
                    successForm.classList.add('success__form--disabled');
                }, 3000);
                form.reset();
                label.forEach(function (it) {
                    it.classList.remove('label--active')
                })
                $('.popup').removeClass('popup-active')
            },
            error: function () {
                var successForm = document.querySelector('.success__form');
                var succesFormImg = document.querySelector('.success__form img');
                successForm.classList.remove('success__form--disabled');
                succesFormImg.setAttribute('src', 'img/error.svg');
                setTimeout(function () {
                    successForm.classList.add('success__form--disabled');
                }, 3000);
            }
        })
    });
}

/*
function ellipsizeTextBox(id) {
    var el = document.querySelector(id);
    var wordArray = el.innerHTML.split(' ');
    while(el.scrollHeight > el.offsetHeight) {
        wordArray.pop();
        el.innerHTML = wordArray.join(' ') + '...';
    }
}
ellipsizeTextBox('.last-news_preview');*/

var videoLink = 'https://www.youtube.com/embed/bbkEVJgrBUs';
videoLink = videoLink + '?rel=0';

var SAVE_URL = 'https://httpstat.us/200';


/*Поведние мобильного меню*/
var burgerElement = document.querySelector('.header__burger');
var burgerIconElement = document.querySelector('.header__burger-ico');
var mainNavElement = document.querySelector('.header__main-nav');
var mainNavElements = document.querySelectorAll('.header__nav-elements a');

var onBurgerElementClick = function () {
    burgerIconElement.classList.toggle('header__burger-ico--active');
    mainNavElement.classList.toggle('header__main-nav--active')
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
        headerContainerElement.style.backgroundColor = '#ffffff'
        headerContainerElement.style.boxShadow = 'rgba(0, 0, 0, 0.25) 0px 0px 45px 0px';
    } else {
        headerContainerElement.style.backgroundColor = 'transparent'
        headerContainerElement.style.boxShadow = 'none';
    }
};

/* Работа label в формах */
var input = document.querySelectorAll('.input');
var onInputChange = function () {
    var valueInput = this.value;
    var label = this.nextElementSibling;
    if (valueInput !== "") {
        label.classList.add('label--active')
    } else {
        label.classList.remove('label--active')
    }
}
var addListenerInput = function () {
    for (var i = 0; i < input.length; i++) {
        input[i].addEventListener('change', onInputChange)
    }
};
addListenerInput();

/*----Изменение типа input в разеделе НАШИ УСЛУГИ------------*/
var inputCheckBoxElement = document.querySelectorAll('.services__radio');
var windowWidth = window.innerWidth;
var skypeElement = document.querySelector('#skype');
console.log (skypeElement)
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
        })
    }
};
setTypeElement();
window.onresize = function (ev) {
    windowWidth = window.innerWidth;
    console.log(windowWidth);
    setTypeElement();
};

/*------открытие/закрытие попап и изменение заголовка попапа----------*/

var popupElement = document.querySelector('.popup');
console.log(popupElement);
var popupCloseElement = document.querySelector('.popup__close');
console.log(popupCloseElement);
var buttonEase = document.querySelectorAll('.button-ease');
var buttonMondey = document.querySelectorAll('.button-mondey');
var popupBgElement = document.querySelector('.popup__background');
const ESK_KEY_CODE = 27;
var caption = document.querySelector('.popup__form-container > h2');

var easeText = 'заполни форму и убедись<br>что английский это легко';
var mondeyText = 'заполни форму заказа<br>не откладывай на понедельник';

var closePopup = function () {
    popupElement.classList.remove('popup-active');
    popupCloseElement.removeEventListener('click', onPopupCloseElementClick);
    popupBgElement.removeEventListener('click', onPopupCloseElementClick);
    window.removeEventListener('keydown', onWindowKey)
}

var openPopup = function () {
    popupElement.classList.add('popup-active');
    popupCloseElement.addEventListener('click', onPopupCloseElementClick);
    popupBgElement.addEventListener('click', onPopupCloseElementClick);
    window.addEventListener('keydown', onWindowKey)
}
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

var onButtonMondeyClick = function () {
    caption.innerHTML = mondeyText;
    openPopup();
};

buttonEase.forEach(function (it) {
    it.addEventListener('click', onButtonEaseClick);
});
buttonMondey.forEach(function (it) {
    it.addEventListener('click', onButtonMondeyClick);
});

popupCloseElement.addEventListener('click', onPopupCloseElementClick);

// Плавная прокрутка
/*var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = 1;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset,  // производим прокрутка прокрутка
            hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
            start = null;
        requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  // URL с хэшем
            }
        }
    }, false);
}*/

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
scrolling('.header__nav');

/*-----Валидация форм----*/
var inputForm = document.querySelectorAll('.form-item input');
console.log(inputForm);
var testValid = function () {
    var validity = this.validity.valid;
    var label = this.nextElementSibling;
    console.log(label);
    if (!validity) {
        label.classList.add('label--error');
        this.style.borderBottomColor = 'red'
        this.style.color = 'red'
    } else {
        label.classList.remove('label--error')
        this.style.borderBottomColor = '#222'
        this.style.color = '#222'
    }
};

inputForm.forEach(function (it) {
    it.addEventListener('change', testValid)
});

//---- Отправка формы без перезагрузки
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

var formDispatch = document.querySelector('.dispatch__form');
var popupForm = document.querySelector('.popup__form');
var footerForm = document.querySelector('.footer__form');

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

var resetFormPopup = function () {
    onSubmitReset(popupForm);
    closePopup();
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
});


//--------------попап видио ------------

var aboutPlayElement = document.querySelector('.about__play');
var aboutVideoContainer = document.querySelector('.about__video-container');
var aboutVideoBackground = document.querySelector('.about__video--background');
var youtebIframe = aboutVideoContainer.querySelector('iframe');
console.log(youtebIframe)
var onWindowKeyVideo = function (evt) {
    if (evt.keyCode === ESK_KEY_CODE) {
        closeVideo();
    }
    ;
};

var onAboutVideoBackgroundClick = function () {
    closeVideo()
};

var closeVideo = function () {
    youtebIframe.src = '';
    aboutVideoContainer.classList.add('about__video-container--close');
    window.removeEventListener('keydown', onWindowKeyVideo);
    aboutVideoBackground.removeEventListener('click', onAboutVideoBackgroundClick);
};


aboutPlayElement.onclick = function () {
    youtebIframe.src = videoLink;
    aboutVideoContainer.classList.remove('about__video-container--close');
    window.addEventListener('keydown', onWindowKeyVideo);
    aboutVideoBackground.addEventListener('click', onAboutVideoBackgroundClick);
};




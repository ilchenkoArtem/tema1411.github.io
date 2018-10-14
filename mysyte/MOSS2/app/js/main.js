//Воспроизведение фонового видео на сафари
var fullScreenVideo = document.querySelector('.fullscreen-bg__video');
if (fullScreenVideo) {
    var valueButton = document.querySelector('.header__value-button');

    function mute() {
        fullScreenVideo.muted = true;
        valueButton.classList.remove('header__value-button--mute');
        valueButton.removeEventListener("click", mute);
        valueButton.addEventListener("click", unmute);
    }

    function unmute() {
        fullScreenVideo.muted = false;
        valueButton.classList.add('header__value-button--mute');
        valueButton.addEventListener("click", mute);
    }

    valueButton.addEventListener("click", unmute);
}


var burgerElement = document.querySelectorAll('.burger');
var popupMenubg = document.querySelector('.nav');
var navContainerElement = $('.nav__container');
var navContainerBgElement = $('.nav__container-bg');
var navElement = $('.nav');
var burgerSecondaryPage = $('.burger-secondaryPage');
var openMainPopup = function () {
    navContainerElement.addClass('nav__container--active');
    setTimeout(function () {
        if ($('.header-index')) {
            $('.header-index__logo').addClass('header-index__logo--disabled');
            $('.header-index__burger').addClass('header-index__burger--disabled');
            $('.header-index__social').addClass('header-index__social--disabled');
        }
        $('body').addClass('body--disabled');
        burgerSecondaryPage.addClass('burger-secondaryPage--disabled');
        navContainerBgElement.addClass('nav__container-bg--active');
        navElement.addClass('nav--active');
        window.addEventListener('keydown', closePopup);
        popupMenubg.addEventListener('click', closeMainPopup)
    }, 0.1)
};
var closeMainPopup = function () {
    navContainerElement.removeClass('nav__container--active');
    setTimeout(function () {
        if ($('.header-index')) {
            $('.header-index__logo').removeClass('header-index__logo--disabled');
            $('.header-index__burger').removeClass('header-index__burger--disabled');
            $('.header-index__social').removeClass('header-index__social--disabled');
        }
        $('body').removeClass('body--disabled');
        burgerSecondaryPage.removeClass('burger-secondaryPage--disabled');
        navContainerBgElement.removeClass('nav__container-bg--active');
        navElement.removeClass('nav--active');
        window.removeEventListener('keydown', closePopup);
        popupMenubg.removeEventListener('click', closeMainPopup)
    }, 0.1)
};

var closePopup = function (e) {
    if (e.keyCode == 27) {
        closeMainPopup()

    }
};
burgerElement.forEach(function (item) {
    item.addEventListener('click', openMainPopup);
});

//Плавный скролл
var yak = function (block) {
    $(document).ready(function () {
        $(block).on("click", "a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();

            //забираем идентификатор бока с атрибута href
            var id = $(this).attr('href'),

                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;

            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });
};

yak($('.nav__link--about'));

if ($('.packages')) {
    yak('.package-nav__item')
}

if ($('.services')) {
    yak('.service-nav__item')
}
if ($('.header-index')) {
    yak('.header-index__scroll')
}

//video
var videoPopup = document.querySelector('.video-popup');
if (videoPopup) {

    var videoPopupVideo = document.querySelector('.video-popup video');
    var closeBg = videoPopup.querySelector('.video-popup__bg');
    var buttonPlay = document.querySelectorAll('.button__play');
    var bodyElement = $('body');
    var videoSettings = [
        {
            src: 'video/video_block1.mp4',
            widthVideo: 'auto',
            heightVideo: '80vh'
        },
        {
            src: 'video/video_block2.mp4',
            widthVideo: 'auto',
            heightVideo: '80vh'
        }
    ];

    var closeVideoPopup = function () {
        videoPopupVideo.pause();
        bodyElement.removeClass('body__overflow-hidden');
        videoPopup.classList.remove('video-popup--active');
        window.removeEventListener('keydown', WindowKeyCloseVideo);
        closeBg.removeEventListener('click', closeVideoPopup);

    };

    var WindowKeyCloseVideo = function (evt) {
        if (evt.keyCode === 27) {
            closeVideoPopup();
        }
    };

    buttonPlay.forEach(function (item, index) {
        item.addEventListener('click', function () {
            bodyElement.addClass('body__overflow-hidden');
            videoPopup.classList.add('video-popup--active');
            videoPopupVideo.setAttribute('src', videoSettings[index].src);
            videoPopupVideo.style.width = videoSettings[index].widthVideo;
            videoPopupVideo.style.height = videoSettings[index].heightVideo;
            videoPopupVideo.play();
            window.addEventListener('keydown', WindowKeyCloseVideo);
            closeBg.addEventListener('click', closeVideoPopup);
        })
    });
}
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






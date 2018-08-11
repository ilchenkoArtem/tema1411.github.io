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
            src: 'video/main_video.webm',
            widthVideo: '80vw',
            heightVideo: 'auto'
        },
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







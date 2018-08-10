var burgerElement = document.querySelectorAll('.burger');
var navContainerElement = $('.nav__container');
var navContainerBgElement = $('.nav__container-bg');
var navElement = $('.nav');
var burgerSecondaryPage = $('.burger-secondaryPage');
var controlMainPopup = function () {
    navContainerElement.toggleClass('nav__container--active');
    setTimeout(function () {
        if($('.header-index')) {
            $('.header-index__logo').toggleClass('header-index__logo--disabled');
            $('.header-index__burger').toggleClass('header-index__burger--disabled');
            $('.header-index__social').toggleClass('header-index__social--disabled');
        }
        $('body').toggleClass('body--disabled');
        burgerSecondaryPage.toggleClass('burger-secondaryPage--disabled');
        navContainerBgElement.toggleClass('nav__container-bg--active');
        navElement.toggleClass('nav--active');
    }, 0.1)
};

var closePopup = function (e) {
    if (e.keyCode == 27) {
        controlMainPopup()
    }
};
burgerElement.forEach(function (item) {
    item.addEventListener('click', controlMainPopup);
    window.addEventListener('keydown', closePopup);
});

$('.nav__main-nav-container').click(function () {
    controlMainPopup()
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
    yak('.header-index__container-items')
}

//video
if($('.video')) {
    (function () {
        'use strict';

        var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
        var isCommonjs = typeof module !== 'undefined' && module.exports;
        var keyboardAllowed = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element;

        var fn = (function () {
            var val;

            var fnMap = [
                [
                    'requestFullscreen',
                    'exitFullscreen',
                    'fullscreenElement',
                    'fullscreenEnabled',
                    'fullscreenchange',
                    'fullscreenerror'
                ],
                // New WebKit
                [
                    'webkitRequestFullscreen',
                    'webkitExitFullscreen',
                    'webkitFullscreenElement',
                    'webkitFullscreenEnabled',
                    'webkitfullscreenchange',
                    'webkitfullscreenerror'

                ],
                // Old WebKit (Safari 5.1)
                [
                    'webkitRequestFullScreen',
                    'webkitCancelFullScreen',
                    'webkitCurrentFullScreenElement',
                    'webkitCancelFullScreen',
                    'webkitfullscreenchange',
                    'webkitfullscreenerror'

                ],
                [
                    'mozRequestFullScreen',
                    'mozCancelFullScreen',
                    'mozFullScreenElement',
                    'mozFullScreenEnabled',
                    'mozfullscreenchange',
                    'mozfullscreenerror'
                ],
                [
                    'msRequestFullscreen',
                    'msExitFullscreen',
                    'msFullscreenElement',
                    'msFullscreenEnabled',
                    'MSFullscreenChange',
                    'MSFullscreenError'
                ]
            ];

            var i = 0;
            var l = fnMap.length;
            var ret = {};

            for (; i < l; i++) {
                val = fnMap[i];
                if (val && val[1] in document) {
                    for (i = 0; i < val.length; i++) {
                        ret[fnMap[0][i]] = val[i];
                    }
                    return ret;
                }
            }

            return false;
        })();

        var eventNameMap = {
            change: fn.fullscreenchange,
            error: fn.fullscreenerror
        };

        var screenfull = {
            request: function (elem) {
                var request = fn.requestFullscreen;

                elem = elem || document.documentElement;

                // Work around Safari 5.1 bug: reports support for
                // keyboard in fullscreen even though it doesn't.
                // Browser sniffing, since the alternative with
                // setTimeout is even worse.
                if (/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)) {
                    elem[request]();
                } else {
                    elem[request](keyboardAllowed && Element.ALLOW_KEYBOARD_INPUT);
                }
            },
            exit: function () {
                document[fn.exitFullscreen]();
            },
            toggle: function (elem) {
                if (this.isFullscreen) {
                    this.exit();
                } else {
                    this.request(elem);
                }
            },
            onchange: function (callback) {
                this.on('change', callback);
            },
            onerror: function (callback) {
                this.on('error', callback);
            },
            on: function (event, callback) {
                var eventName = eventNameMap[event];
                if (eventName) {
                    document.addEventListener(eventName, callback, false);
                }
            },
            off: function (event, callback) {
                var eventName = eventNameMap[event];
                if (eventName) {
                    document.removeEventListener(eventName, callback, false);
                }
            },
            raw: fn
        };

        if (!fn) {
            if (isCommonjs) {
                module.exports = false;
            } else {
                window.screenfull = false;
            }

            return;
        }

        Object.defineProperties(screenfull, {
            isFullscreen: {
                get: function () {
                    return Boolean(document[fn.fullscreenElement]);
                }
            },
            element: {
                enumerable: true,
                get: function () {
                    return document[fn.fullscreenElement];
                }
            },
            enabled: {
                enumerable: true,
                get: function () {
                    // Coerce to boolean in case of old WebKit
                    return Boolean(document[fn.fullscreenEnabled]);
                }
            }
        });

        if (isCommonjs) {
            module.exports = screenfull;
        } else {
            window.screenfull = screenfull;
        }
    })();
    document.fullscreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.documentElement.webkitRequestFullScreen;

    function requestFullscreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    }


    var videoMain = document.querySelector('.video__container');
    var noPlayVideo = function () {
        this.pause();
    };
    var onPlayVideo = function () {
        this.play();
    };

    var resizeVideo = function () {
        if (screenfull.enabled) {
            screenfull.request(this);
        }
    };

    var playVideo = function () {
        this.classList.add('video__container--full');
        var video = this.querySelector('video');
        video.play();
        videoMain.removeEventListener('click', playVideo);
        video.addEventListener('mouseover', onPlayVideo);
        video.addEventListener('mouseleave', noPlayVideo);
        video.addEventListener('click', resizeVideo);
    };

    videoMain.addEventListener('click', playVideo);
}






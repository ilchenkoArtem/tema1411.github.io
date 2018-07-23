// Управление анимацией
//Animate CSS + WayPoints javaScript Plugin
//Example: $(".element").animated("zoomInUp");
//Author URL: http://webdesign-mas
$(document).ready(function () {
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
                animatesFunction()
            })
        }
    };
    setTypeElement();
    window.onresize = function (ev) {
        windowWidth = window.innerWidth;
        console.log(windowWidth);
        setTypeElement();

    };
});
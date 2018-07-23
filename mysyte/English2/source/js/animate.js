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

    /*var animatesFunction = function () {
        $('button:not(:first-of-type)').animated('zoomInUp');
        $('.advantages__item, .dispatch__container').animated('rotateInDownRight');
        $('.form-item').animated('zoomIn');
        $('.step, .step__button-container, footer, .about .services, .advantages, .dispatch, .about__text, .about__video, .main-caption, .advantages__buttons, .h2 ').animated("slideInUp");
        $('.step__item--1, .step__item--4,.step__item--7, .step__item--9, .step__item--8,.services__price').animated("fadeInRight");
        $('.step__item--2, .step__item--5, .step__item--3, .step__item--6, .step__description, .service__program').animated("fadeInLeft");
    };
    var windowWidth = window.innerWidth;
    if (windowWidth >= 1040) {
        animatesFunction()
    }

    window.onresize = function (ev) {
        windowWidth = window.innerWidth;
        if (windowWidth >= 1040) {
            animatesFunction()
        }
    }
*/
});
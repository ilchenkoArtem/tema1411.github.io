// Управление анимацией
//Animate CSS + WayPoints javaScript Plugin
//Example: $(".element").animated("zoomInUp");
//Author URL: http://webdesign-master.ru
$(document).ready(function () {
    (function($) {
        $.fn.animated = function(inEffect) {
            $(this).each(function() {
                var ths = $(this);
                ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
                    if (dir === "down") {
                        ths.addClass(inEffect).css("opacity", "1");
                    };
                }, {
                    offset: "90%"
                });

            });
        };
    })(jQuery);
    $('button').animated('zoomInUp');
    $('.advantages__item, .dispatch__container, .advantages__buttons').animated('rotateInDownRight');
    $('.main-caption, .h2').animated('flip');
    $('.form-item').animated('zoomIn');
    $('.step, .step__button-container, footer, .services, .about, .advantages, .dispatch' ).animated("slideInUp");
    $('.step__item--1, .step__item--4,.step__item--7, .step__item--9, .step__item--8, .about__text,.services__price').animated("fadeInRight");
    $('.step__item--2, .step__item--5, .step__item--3, .step__item--6, .step__description, .about__video, .service__program').animated("fadeInLeft");
});
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
        $('.about, .assortment, .price, .payback, .components, .reviews, .advantages, .scheme, .foryou, .bottom-form, .footer').animated('fadeIn');
    };

    animatesFunction()
});
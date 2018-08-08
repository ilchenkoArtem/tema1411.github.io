var burgerElement = document.querySelectorAll('.burger');
var navContainerElement = $('.nav__container');
var navContainerBgElement = $('.nav__container-bg');
var navElement = $('.nav');
var burgerSecondaryPage = $('.burger-secondaryPage');
var controlMainPopup = function () {
    navContainerElement.toggleClass('nav__container--active');
    setTimeout(function () {
        if($('.header-index')) {
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

if ($('.header-index')) {
    yak('.header-index__container-items')
}
var burgerElement = document.querySelectorAll('.burger');
var navContainerElement = $('.nav__container');
var navContainerBgElement = $('.nav__container-bg');
var navElement = $('.nav');
var burgerSecondaryPage = $('.burger-secondaryPage');
var controlMainPopup = function () {
    navContainerElement.toggleClass('nav__container--active');
    setTimeout(function () {
        burgerSecondaryPage.toggleClass('burger-secondaryPage--disabled');
        navContainerBgElement.toggleClass('nav__container-bg--active');
        navElement.toggleClass('nav--active');
    },0.1)
};

var closePopup = function (e) {
    if (e.keyCode == 27) {
        navContainerElement.toggleClass('nav__container--active');
        setTimeout(function () {
            burgerSecondaryPage.toggleClass('burger-secondaryPage--disabled');
            navContainerBgElement.toggleClass('nav__container-bg--active');
            navElement.toggleClass('nav--active');
        }, 0.1);
        window.removeEventListener('keydown', closePopup)
    }
};
burgerElement.forEach(function (item) {
    item.addEventListener('click',controlMainPopup);
    window.addEventListener('keydown',closePopup)
});
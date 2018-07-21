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
        headerContainerElement.style.boxShadow = '0px 0px 50px 0px rgba(0,0,0,0.75)';
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

var setTypeElement = function () {
    if (windowWidth < 1024) {
        inputCheckBoxElement.forEach(function (item) {
            item.setAttribute('type', 'checkbox');
        })
    } else {
        inputCheckBoxElement.forEach(function (item) {
            item.setAttribute('type', 'radio')
        })
    }
};
setTypeElement();
window.onresize = function (ev) {
    windowWidth = window.innerWidth;
    console.log(windowWidth);
    setTypeElement();
};
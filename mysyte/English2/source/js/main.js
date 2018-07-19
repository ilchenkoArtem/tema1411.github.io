/*Поведние мобильного меню*/
var burgerElement = document.querySelector('.header__burger');
var mainNavElement = document.querySelector('.header__main-nav');
var mainNavElements = document.querySelector('.header__nav-elements a');
var headerBurgerElement = document.querySelector('.header__burger');


var onBurgerElementClick = function () {
    mainNavElement.classList.toggle('header__main-nav--active');
    headerBurgerElement.classList.toggle('header__burger--close')

};
burgerElement.addEventListener('click', onBurgerElementClick);
mainNavElements.addEventListener('click', onBurgerElementClick);

/*замена фона header*/
var headerContainerElement = document.querySelector('.header__container');
document.onscroll = function () {
    var heightHeaderContainerElement = headerContainerElement.clientHeight;
    console.log(heightHeaderContainerElement)
    var scrolledTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrolledTop)

    if (scrolledTop > heightHeaderContainerElement) {
        console.log('прошло')
        headerContainerElement.style.backgroundColor = '#ffffff'
    } else {
        headerContainerElement.style.backgroundColor = 'transparent'
    }
};

/* Работа label в формах */
var input = document.querySelectorAll('.input');
var onInputChange = function () {
    var valueInput = this.value;
    var label = this.nextElementSibling;
    if (valueInput !== "") {
        label.classList.add('label--active')
    } else  {
        label.classList.remove('label--active')
    }
}
var addListenerInput = function () {
    for (var i = 0; i < input.length; i++) {
        input[i].addEventListener('change', onInputChange)
    }
}

addListenerInput()

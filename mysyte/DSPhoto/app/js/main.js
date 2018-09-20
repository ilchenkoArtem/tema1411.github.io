//функция определяет колличество слаайдов в каждом блоке и заносит в массив
function quantityAllSliders(container) {
    var numberOfSlides = [];
    $(container).on("init", function (event, slick) {
        numberOfSlides.push(slick.slideCount);
        var sliderAll = document.querySelectorAll('.index__slider-all');
        sliderAll.forEach(function (item, index) {
            if (numberOfSlides[index] < 10) {
                item.textContent = '0' + numberOfSlides[index]
            } else {
                item.textContent = numberOfSlides[index]
            }
        })
    });
}

function currentSlide(parent, nameContainerSlide) {
    var containerSlide = document.querySelector(nameContainerSlide);
    var parentElement = document.querySelector(parent);
    var current = parentElement.querySelector('.index__slider-current');

    //определяем номер текущего слайдера
    function sliderCounter() {
        var slickCurrentSlide = $(nameContainerSlide).slick('slickCurrentSlide') + 1;
        //если номер слайдера меньше 10, то добавляем перед номером '0', если больше, то просто 0
        if (slickCurrentSlide < 10) {
            current.textContent = '0' + slickCurrentSlide;
        } else {
            current.textContent = slickCurrentSlide;
        }
    }

    sliderCounter();
    quantityAllSliders(nameContainerSlide);
    $(nameContainerSlide).on('afterChange', function () {
        sliderCounter()
    });
}

quantityAllSliders(".main-home__slide");
$('.main-home__slide').slick();
currentSlide('.main-home', '.main-home__slide');

//функция меняет цвет лого и счетчика взависимости от дата атрибута
function changeColorForElementsSlide(slickContainer) {
    $(slickContainer).on('afterChange ', function (event, slick, currentSlide, nextSlide) {
        var currentColour = $('.slick-active').attr('data-color');
        if (currentColour === 'white') {
            $('.main-home__logo-img').css({'fill': '#fff'});
            $('.index__slider-counter').css({'color': '#fff'})
        }else {
            $('.main-home__logo-img').css({'fill': '#000'});
            $('.index__slider-counter').css({'color': '#000'})
        }
    });
}
changeColorForElementsSlide('.main-home__slide');
//скролл главной галереи по колёсику мыши
function switchingСontrol(slickContainer) {
    $(slickContainer).bind('mousewheel DOMMouseScroll', function(event){
        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            $(slickContainer).slick ('slickPrev');
        }
        else {
            $(slickContainer).slick ('slickNext');
        }
    });
}

switchingСontrol('.main-home__slide');
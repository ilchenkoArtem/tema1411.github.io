'use strict';
$(document).ready(function(){
  $('.slide').slick({
    // autoplay: true,
    prevArrow: null,
    nextArrow: null,
    dots: true,
    arrows: false,
    fade: true,
    verticalSwiping: true
  });
});
//
$(document).ready(function(){
  $('.reviews__text-container').slick({
    prevArrow: null,
    nextArrow: null,
    arrows: false,
    fade: true,
    initialSlide: 2,
    asNavFor: '.reviews__autor-container'
  });
});

$(document).ready(function(){
  $('.reviews__autor-container').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    initialSlide: 2,
    focusOnSelect: true,
    asNavFor: '.reviews__text-container'
  });
});
//------------контроль меню----------------
$('.header__burger').click(function () {
  $('.header__burger').toggleClass('header__burger--close');
  $('.header__nav').toggleClass('header_nav--open');
  var onDocumentScroll = function () {
      $('.header__burger').removeClass('header__burger--close');
      $('.header__nav').removeClass('header_nav--open');
      $('document').unbind('scroll', onDocumentScroll);
  }

  var onHeaderNavClick =  function () {
      $('.header__burger').removeClass('header__burger--close');
      $('.header__nav').removeClass('header_nav--open');
  }
  $(document).scroll(onDocumentScroll)
  $('.header__nav').click(onHeaderNavClick);
})



//------------Плавный скролл----------------
var scrolling = function (links){
  $(document).ready(function () {
    var heigthHeader = $('.header_nav-fixed').height()
  	$(links).on("click", "a", function (event) {
  		event.preventDefault();
  		var id = $(this).attr('href'),
  			top = $(id).offset().top;
        console.log(top)
  		$('body,html').animate({
  			scrollTop: top - heigthHeader
  		}, 500);
  	});
  });
}
scrolling('.slide_container-link');
scrolling('.header__nav');
scrolling('.header')

//---- Отправка формы без перезагрузки



  var SAVE_URL = 'https://httpstat.us/200';
  var TIMEOUT_REQUEST = 10000;
  var SUCCESS_CODE = 200;
  var setupXHR = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.timeout = TIMEOUT_REQUEST;

    xhr.addEventListener('load', function () {
      var errorText;
      if (xhr.status === SUCCESS_CODE) {
        onLoad(xhr.response);
      } else {
        errorText = 'Cтатус ответа:' + xhr.status + ' ' + xhr.statusText;
        onError(errorText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Cтатус ответа:' + xhr.status + ' ' + xhr.statusText);
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    return xhr;
  };

  var loadData = function (onLoad, onError) {
    var xhr = setupXHR(onLoad, onError);
    xhr.open('GET', LOAD_URL);
    xhr.send();
  };

  var saveData = function (onLoad, onError, data) {
    var xhr = setupXHR(onLoad, onError);
    xhr.open('POST', SAVE_URL);
    xhr.send(data);
  };

  var backend = {
    'load': loadData,
    'save': saveData
  };

var form = document.querySelector('.order__form');
var onDeduceErrorText = function (error) {
  var formErrorElement = document.querySelector('.container-success');
  var submitPoppupElement = document.querySelector('.succes__popup');
  submitPoppupElement.textContent = error;
  formErrorElement.classList.remove('container-succes--hidden');
  setTimeout(function () {
    formErrorElement.classList.add('container-succes--hidden');
  }, 3000);
};

var onSubmitReset = function (evt) {
  var formErrorElement = document.querySelector('.container-success');
  var submitPoppupElement = document.querySelector('.succes__popup');
  submitPoppupElement.textContent = 'Ваш заказ принят';
  formErrorElement.classList.remove('container-succes--hidden');
  setTimeout(function () {
    formErrorElement.classList.add('container-succes--hidden');
  }, 3000);
  form.reset();
}
var onFormSubmit = function (evt) {
  window.backend.save(onSubmitReset, onDeduceErrorText,new FormData(form))
  evt.preventDefault();
}

form.addEventListener('submit', onFormSubmit);

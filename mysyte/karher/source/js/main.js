$(document).ready(function(){
  $('.slide').slick({
    autoplay: true,
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
    asNavFor: '.reviews__autor-container'
  });
});

$(document).ready(function(){
  $('.reviews__autor-container').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    focusOnSelect: true,

    asNavFor: '.reviews__text-container'
  });
});

// var swiper = new Swiper('.slide .swiper-container', {
//       pagination: {
//         el: '.slide .swiper-pagination',
//       },
//     });

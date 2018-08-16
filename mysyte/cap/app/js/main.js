$('.index__slider-container').slick({
    slidesToScroll: 1,
    infinite: false,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1151,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 831,
            settings: {
                slidesToShow: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
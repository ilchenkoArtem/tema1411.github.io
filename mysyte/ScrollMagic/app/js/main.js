window.addEventListener('load', function () {
    var controller = new ScrollMagic.Controller();
    var timeline = new TimelineLite();


    ///Анимация блок1
    var block1BackGround = document.querySelector('.block1__back-ground');
    console.log('​block1BackGround', block1BackGround);

    var block1ContainerImg = document.querySelector('.block1_container-img');
    console.log('​block1ContainerImg', block1ContainerImg);

    var block1FontGround = document.querySelector('.block1__font-ground');
    console.log('​block1FontGround', block1FontGround);

    var block1Img = document.querySelector('.block1__img');
    console.log('​block1Img', block1Img);

    var tween1 = TweenLite.from(block1BackGround, 0.5, {
        opacity: 0,
        height: 0
    });
    var tween2 = TweenLite.from(block1FontGround, 0.5, {
        width: 0,
        opacity: 0
    });

    var tween3 = TweenLite.from(block1Img, 0.1, {
        opacity: 0
    });

    var tween4 = TweenLite.to(block1FontGround, 0.7, {
        x: "100%"
    });

    timeline
        .add(tween1)
        .add(tween2)
        .add(tween3)
        .add(tween4);


    var scene = new ScrollMagic.Scene({
        triggerElement: '#trigger1'
    })
        .setTween(timeline) // trigger a TweenMax.to tween
        //.addIndicators({name: "indicator1"})
        .addTo(controller);

    // блок 4
    var animate2 = document.querySelector('#animate2');

    var widthWindow = window.innerHeight;
    console.log(widthWindow)
    var tween5 = TweenLite.to(animate2, 0.5, {
        y: widthWindow - 150,
        rotation: 360
    });


    var scene1 = new ScrollMagic.Scene({
        triggerElement: '#trigger2',
        duration: '100%'
    })
        .setTween(tween5) // trigger a TweenMax.to tween
        //.addIndicators({name: "indicator2"})
        .addTo(controller);

// cлайд слик
    $('.block2__container-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.block2__container-prev'
    });
    $('.block2__container-prev').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.block2__container-main',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
});













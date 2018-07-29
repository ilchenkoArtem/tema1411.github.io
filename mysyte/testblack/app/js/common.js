window.addEventListener('load', function () {



    // Custom JS



////////////////////////////// CHROME SMOOTH SCROLL ////////////////////////////


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

    var trigger1 = document.querySelector('#trigger1');

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
        triggerElement: trigger1
    })

        .setTween(timeline) // trigger a TweenMax.to tween
        .addIndicators({name: "indicator1"})
        .addTo(controller);

});
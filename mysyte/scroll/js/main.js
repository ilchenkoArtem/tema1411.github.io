document.addEventListener('load', function () {
    TweenMax.to(project0ImgElement, 4, {
        opacity: 1,
        delay: 1
    });

    var timeline = new TimelineLite()
        .from(project1ImgElement, 3, {
            opacity: 0,
            x: -200,
            ease: Power3.easeOut 
        })

        .from(project1TextElement, 1, {
            opacity: 0,
            y: 50
        });


    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({tweenChanges: true});
    
    scene.addTween(timeline);

})

    
   
    
 

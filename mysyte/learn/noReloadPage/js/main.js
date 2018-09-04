var lastClicked;

Barba.Dispatcher.on('linkClicked', function (el) {
    lastClicked = el
})

var ExpandTransition = Barba.BaseTransition.extend({
    start: function () {
        Promise
            .all([this.newContainerLoading, this.zoom()])
            .then(this.showNewPage.bind(this));
    },

    zoom: function () {
        var deferred = Barba.Utils.deferred();

        let tl = new TimelineMax();
        let cloned = lastClicked.cloneNode(true);
        let left = lastClicked.getBoundingClientRect().left;
        console.log(left)

        cloned.classList.add('cloned');
        cloned.style.left = left;
        this.oldContainer.appendChild(cloned);
        tl.set(cloned, {
            x: left
        })

        let widthWindow = document.documentElement.clientWidth;
        console.log(widthWindow)

        tl.to(cloned, 0.7, {
            x: 0,
            width: widthWindow,
            onComplete: function () {
                deferred.resolve();
            }
        })
        return deferred.promise;
    },

    showNewPage: function () {
        this.done();
    }
});

var BackTransition = Barba.BaseTransition.extend({
    start: function () {
        Promise
            .all([this.newContainerLoading, this.zoom()])
            .then(this.showNewPage.bind(this));
    },

    zoom: function () {
        var deferred = Barba.Utils.deferred();
        deferred.resolve();
        return deferred.promise;
    },

    showNewPage: function () {
        this.done();
    }
});

Barba.Pjax.getTransition = function () {
    var transitionObj = ExpandTransition;
    console.log(Barba.HistoryManager.prevStatus().namespace)
    if(Barba.HistoryManager.prevStatus().namespace === 'single') {
        transitionObj = BackTransition;
    }
    return transitionObj;
};

Barba.Pjax.start();
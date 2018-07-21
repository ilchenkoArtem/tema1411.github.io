   var  tab = document.querySelectorAll('.services__tabs');

    var addClass = function () {
        var  tab = document.querySelectorAll('.services__tabs');
        for(var i = 0; i < tab.length; i++) {
            if (tab[i].classList.contains('services__tabs--active')) {
                tab[i].classList.remove('services__tabs--active')
            }
        }
    };
    var addListener = function () {
        for (var i = 0; i < tab.length; i++) {
            tab[i].addEventListener('click', addClass)
        }
    };

   addListener();

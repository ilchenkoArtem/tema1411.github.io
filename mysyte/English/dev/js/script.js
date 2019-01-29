import jquery from '../libs/jquery/dist/jquery.min';
import waypoints from '../libs/waypoints/lib/jquery.waypoints.js';
(function () {
    $(window).on('load', function () {
        var videoLink = 'https://www.youtube.com/embed/Vzsuqp8Rbt4?';
        videoLink = videoLink + '?rel=0&autoplay ';

        /*Поведние мобильного меню*/
        var burgerElement = document.querySelector('.header__burger');
        var burgerIconElement = document.querySelector('.header__burger-ico');
        var mainNavElement = document.querySelector('.header__main-nav');
        var mainNavElements = document.querySelectorAll('.header__nav-elements a:not(.header__services)');

        var onBurgerElementClick = function () {
            burgerIconElement.classList.toggle('header__burger-ico--active');
            mainNavElement.classList.toggle('header__main-nav--active');
        };

        burgerElement.addEventListener('click', onBurgerElementClick);
        mainNavElements.forEach(function (item) {
            item.addEventListener('click', onBurgerElementClick);
        });

        /*замена фона header*/
        var headerContainerElement = document.querySelector('.header__container');
        document.onscroll = function () {
            var heightHeaderContainerElement = headerContainerElement.clientHeight;
            var scrolledTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrolledTop > heightHeaderContainerElement) {
                headerContainerElement.style.backgroundColor = '#ffffff';
                headerContainerElement.style.boxShadow = 'rgba(0, 0, 0, 0.25) 0px 0px 45px 0px';
            } else {
                headerContainerElement.style.backgroundColor = 'transparent';
                headerContainerElement.style.boxShadow = 'none';
            }
        };

        /* Работа label в формах */
        var input = document.querySelectorAll('.input');
        var onInputChange = function () {
            var valueInput = this.value;
            var label = this.nextElementSibling;
            if (valueInput !== "") {
                label.classList.add('label--active');
            } else {
                label.classList.remove('label--active');
            }
        };

        var addListenerInput = function () {
            for (var i = 0; i < input.length; i++) {
                input[i].addEventListener('change', onInputChange);
            }
        };
        addListenerInput();


        // -------------------плавный скрол

        var scrolling = function (links) {
            $(document).ready(function () {
                var heigthHeader = $('.header__container').height();
                $(links).on('click', 'a', function (event) {
                    event.preventDefault();
                    var id = $(this).attr('href'),
                        top = $(id).offset().top;
                    $('body,html').animate({
                        scrollTop: top - heigthHeader
                    }, 500);
                });
            });
        };
        scrolling('');

        /*-----Валидация форм----*/
        var inputForm = document.querySelectorAll('.form-item input');
        var testValid = function () {
            var validity = this.validity.valid;
            var label = this.nextElementSibling;
            console.log(this.getAttribute('placeholder'));
            if (!validity) {
                label.classList.add('label--error');
                this.style.borderBottomColor = 'red';
                this.style.color = 'red';
            } else {
                label.classList.remove('label--error');
                this.style.borderBottomColor = '#222';
                this.style.color = '#222';
            }
        };

        inputForm.forEach(function (it) {
            it.addEventListener('change', testValid);
        });

        var bodyElement = document.querySelector('body');

        var noScrollbodyElement = function () {
            bodyElement.style.overflow = 'hidden';
        };

        var onScrollbodyElement = function () {
            bodyElement.style.overflow = 'auto';
        };

        var popupElement = document.querySelector('.popup');
        var popupCloseElement = document.querySelector('.popup__close');
        var buttonEase = document.querySelectorAll('.button-ease');
        var popupBgElement = document.querySelector('.popup__background');
        var ESK_KEY_CODE = 27;
        var caption = document.querySelector('.popup__form-container h2');
        var inputNameElement = document.querySelector('#popup__name-services');


        var easeText = 'заполни форму и убедись<br>что английский это легко';

        var closePopup = function () {
            popupElement.classList.remove('popup-active');
            popupCloseElement.removeEventListener('click', onPopupCloseElementClick);
            popupBgElement.removeEventListener('click', onPopupCloseElementClick);
            window.removeEventListener('keydown', onWindowKey);
            onScrollbodyElement();
            inputNameElement.value = 'Получить бесплатный урок';
        };

        var openPopup = function () {
            noScrollbodyElement();
            popupElement.classList.add('popup-active');
            popupCloseElement.addEventListener('click', onPopupCloseElementClick);
            popupBgElement.addEventListener('click', onPopupCloseElementClick);
            window.addEventListener('keydown', onWindowKey);
        };
        var onPopupCloseElementClick = function () {
            closePopup();
        };

        var onWindowKey = function (evt) {
            if (evt.keyCode === ESK_KEY_CODE) {
                closePopup();
            }
        };

        var onButtonEaseClick = function () {
            caption.innerHTML = easeText;
            openPopup();
        };

        //аякс отправка формы
        $('.dispatch__form, .footer__form, .popup__form:not(#order_user-info)').on('submit', function (e) {
            e.preventDefault();
            var form = this;
            var data = $(this).serialize() + '&action=mailss';
            console.log(data)
            $.ajax({
                url: $(form).attr('action'),
                method: 'POST',
                data: data,
                success: function () {
                    var successForm = document.querySelector('.success__form');
                    successForm.classList.remove('success__form--disabled');
                    $('.mail_send').show();
                    $('.mail_error').hide();
                    var label = form.querySelectorAll('label');
                    setTimeout(function () {
                        successForm.classList.add('success__form--disabled');
                    }, 3000);
                    form.reset();
                    label.forEach(function (it) {
                        it.classList.remove('label--active');
                    });
                    $('.popup').removeClass('popup-active');
                    $('body').removeAttr('style')
                },
                error: function () {
                    var successForm = document.querySelector('.success__form');
                    var succesFormImg = document.querySelector('.success__form img');
                    successForm.classList.remove('success__form--disabled');
                    $('.mail_error').show();
                    $('.mail_send').hide();
                    setTimeout(function () {
                        successForm.classList.add('success__form--disabled');
                    }, 3000);
                    $('body').removeAttr('style')
                }
            });
        });
        //скрипты для главной страници
        if ($('.body--index').length !== 0) {


            //--------------попап видио ------------

            var aboutPlayElement = document.querySelector('.about__play');
            var aboutVideoContainer = document.querySelector('.about__video-container');
            var aboutVideoBackground = document.querySelector('.about__video--background');
            var youtebIframe = aboutVideoContainer.querySelector('iframe');
            var onWindowKeyVideo = function (evt) {
                if (evt.keyCode === ESK_KEY_CODE) {
                    closeVideo();
                }
            };

            var onAboutVideoBackgroundClick = function () {
                closeVideo();
            };

            var closeVideo = function () {
                onScrollbodyElement();
                youtebIframe.src = '';
                aboutVideoContainer.classList.add('about__video-container--close');
                window.removeEventListener('keydown', onWindowKeyVideo);
                aboutVideoBackground.removeEventListener('click', onAboutVideoBackgroundClick);
            };


            aboutPlayElement.onclick = function () {
                noScrollbodyElement();
                youtebIframe.src = videoLink;
                aboutVideoContainer.classList.remove('about__video-container--close');
                window.addEventListener('keydown', onWindowKeyVideo);
                aboutVideoBackground.addEventListener('click', onAboutVideoBackgroundClick);
            };
            //------


            buttonEase.forEach(function (it) {
                it.addEventListener('click', onButtonEaseClick);
            });


            popupCloseElement.addEventListener('click', onPopupCloseElementClick);
        }

        function closeOrderClickESC(evt) {
            if (evt.keyCode === ESK_KEY_CODE) {
                closeOrderPopup()
            }
        };

        function closeOrderPopup() {
            $('#popup_order, .order-loading, .order__liqpay').hide();
            $('#order_user-info').show();
            $('#popup_order .popup__close').off('click', closeOrderPopup);
            $('#popup_order .popup__background').off('click', closeOrderClickESC)

        }

        function openOrderPopup() {
            var cardLeson = $(this).parents('.tariff-item');
            $('.order_quantity-package').text(cardLeson.find('.tariff-item-title span').text());
            $('.order_price').text(cardLeson.find('.tariff-price_item').text());
            $('#order_user-info').attr('price', cardLeson.find('.tariff-price_item').text());
            $('#order_user-info').attr('product', cardLeson.find('.tariff-item-title').text());
            $('#popup_order').show();
            $('#popup_order .popup__close, #popup_order .popup__background').on('click', closeOrderPopup);
            $(window).on('keypress', closeOrderClickESC)
        }


        $('#order_user-info').on('submit', function (e) {
            e.preventDefault();
            var form = $(this).serialize();
            var price = '&price=' + $(this).attr('price');
            var product = '&product=' + $(this).attr('data-language') + '(' + $(this).attr('product') + ')';
            var action = '&action=getLiqPay';
            console.log(form + price + product + action);

            $.ajax({
                type: 'POST',
                url: ajaxurl,
                data: form + price + product + action,
                dataType: 'json',
                beforeSend: function () {
                    $('.order-loading_overflow, .order-loading').show();

                },
                success: function (data) {
                    console.log(data)
                    $('.order-loading_overflow, .order-loading, #order_user-info').hide();
                    $('.order__liqpay [name = data]').val(data.data);
                    $('.order__liqpay [name= signature]').val(data.signature);
                    $('.order__liqpay').show();
                },
                error: function (xhr, str) {
                    alert('Возникла ошибка: ' + xhr.responseCode);
                }
            });
        });


        $('.tariff-button').on('click', openOrderPopup);

        //загрузка постов аякс
        $('#true_loadmore').on('click', function (e) {
            e.preventDefault();
            $(this).text('Загружаю...'); // изменяем текст кнопки, вы также можете добавить прелоадер
            var data = {
                'action': 'loadmore',
                'query': currentPosts,
            };
            $.ajax({
                url: ajaxurl, // обработчик
                data: data, // данные
                type: 'POST', // тип запроса
                success: function (data) {
                    if (data) {
                        $('#true_loadmore').text('Загрузить ещё').before(data); // вставляем новые посты
                        currentPosts += 12; // увеличиваем номер страницы на единицу
                        if (currentPosts >= maxQuantityPosts) {
                            $("#true_loadmore").remove();
                        }
                    } else {
                        $('#true_loadmore').remove(); // если мы дошли до последней страницы постов, скроем кнопку

                    }
                },
                error: function () {
                    console.log('ошибка');
                }
            });
        });
    });

    // Управление анимацией
    //Animate CSS + WayPoints javaScript Plugin
    //Example: $(".element").animated("zoomInUp");
    //Author URL: http://webdesign-mas
    $(document).ready(function () {
        (function ($) {
            $.fn.animated = function (inEffect) {
                $(this).each(function () {
                    var ths = $(this);
                    ths.css("opacity", "0").addClass("animated").waypoint(function (dir) {
                        if (dir === "down") {
                            ths.addClass(inEffect).css("opacity", "1");
                        }
                    }, {
                        offset: "90%"
                    });

                });
            };
        })(jQuery);

        var animatesFunction = function () {
            $('button:not(:first-of-type)').animated('zoomInUp');
            $('.advantages__item').animated('rotateInDownRight');
            $('.form-item').animated('zoomIn');
            $('.step, .step__button-container, footer, .about .services, .advantages, .dispatch, .main-caption, .advantages__buttons, .h2, .dispatch__container ').animated("slideInUp");
            $('.step__item--1, .step__item--4,.step__item--7, .step__item--9, .step__item--8').animated("fadeInRight");
            $('.step__item--2, .step__item--5, .step__item--3, .step__item--6, .step__description').animated("fadeInLeft");


        };


        var inputCheckBoxElement = document.querySelectorAll('.services__radio');
        var windowWidth = window.innerWidth;
        var skypeElement = document.querySelector('#skype');
        var setTypeElement = function () {
            if (windowWidth < 1024) {
                inputCheckBoxElement.forEach(function (item) {
                    item.setAttribute('type', 'checkbox');
                    skypeElement.checked = null;
                })
            } else {
                inputCheckBoxElement.forEach(function (item) {
                    item.setAttribute('type', 'radio');
                    skypeElement.checked = 'checked';
                });
                animatesFunction();
                $('.service-decryption__title, .service-decryption__subtitle, .service-decryption__item, .tariff-title, .tariff-items, .service-decryption__title, .service-decryption__subtitle, .nav-blog, .last-news-container, .blog-article, .article__wrapper, .article__crumbs-item, .article__info, .addtoany_share_save_container, .article__other-article-title, .article__other-article').animated("slideInUp");

            }
        };
        setTypeElement();
        window.onresize = function (ev) {
            windowWidth = window.innerWidth;
            setTypeElement();

        };
    });
}());

//# sourceMappingURL=../map/js/script.min.js.map

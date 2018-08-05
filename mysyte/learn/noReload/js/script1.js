var wraper = document.querySelector(".button__to__slide");
var slides = document.querySelector(".body__slide");
var Allslide = slides.querySelectorAll(".slide");
var Allradio = wraper.querySelectorAll("input");
var radio1 = wraper.querySelector(".button_1");
var radio2 = wraper.querySelector(".button_2");
var radio3 = wraper.querySelector(".button_3");
var slide1 = document.querySelector(".slide1");
var slide2 = document.querySelector(".slide2");
var slide3 = document.querySelector(".slide3");
var body = document.querySelector("body");

radio1.addEventListener("click", function () {
    slide2.classList.remove("active");
    slide3.classList.remove("active");
    body.classList.remove("color2");
    body.classList.remove("color3");
    slide1.classList.add("active");
    body.classList.add("color1");
})

radio2.addEventListener("click", function () {
    slide1.classList.remove("active");
    slide3.classList.remove("active");
    body.classList.remove("color1");
    body.classList.remove("color3");
    slide2.classList.add("active");
    body.classList.add("color2");
})

radio3.addEventListener("click", function () {
    slide1.classList.remove("active");
    slide2.classList.remove("active");
    body.classList.remove("color1");
    body.classList.remove("color2");
    slide3.classList.add("active");
    body.classList.add("color3");
})



var buttom = document.querySelector(".form__modul-buttom");
var modal = document.querySelector(".modal2");
var close = document.querySelector(".close_button");
var login = document.querySelector("[name=name__modal]");
var email = modal.querySelector("[type=email]");
var text = modal.querySelector("textarea");
var form = modal.querySelector("form");
var storage = localStorage.getItem("login");
var overl = document.querySelector(".overley");

buttom.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal_visability");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal_visability");
    overl.classList.add("modal_visability");
    setTimeout(function () {
        if (storage) {
            login.value = storage;
            email.focus();
        } else {
            login.focus();
        }
    }, 100)
});

close.addEventListener("click", function (evt) {
    overl.classList.remove("modal_visability");
    modal.classList.remove("modal_visability");
    modal.classList.remove("moda-error");
});

form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value || !text.value) {
        evt.preventDefault();
        modal.classList.remove("moda-error");
        modal.offsetWidth = modal.offsetWidth;
        modal.classList.add("moda-error");
    } else {
        localStorage.setItem("login", login.value);
    }

});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (modal.classList.contains("modal_visability")) {
            modal.classList.remove("modal_visability");
            overl.classList.remove("modal_visability");
        }
    }
});

//////////////////////////////////////////
var body = document.querySelector('body');
var template = document.querySelector('template');
var catalog = document.querySelector('a[href="catalog.html"]')
console.log('​catalog', catalog);
var main = body.querySelector("main")

catalog.addEventListener('click', function (e) {
    e.preventDefault();
    var offerElement = template1.content.cloneNode(true);
    var main = body.querySelector("main");
    var footer = document.querySelector("footer");
    main.remove();
    body.insertBefore(offerElement, footer)
})


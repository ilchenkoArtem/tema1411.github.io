var caption = document.querySelectorAll(".mywork__container-img");
var discription = document.querySelectorAll(".mywork__description");
var menuNav = document.querySelector(".header__links");
var link = document.querySelectorAll(".main-nav__link");

if (discription) {
	for (var i = 0; i < discription.length; i++) {
		discription[i].classList.add("mywork__description--close");
	}
};

for (var i = 0; i < caption.length; i++) {
	caption[i].addEventListener("click", function () {
		this.nextElementSibling.classList.toggle("mywork__description--close")
	})
};

/*
for (var i = 0; i < link.length; i++) {
	link[i].addEventListener("click", function () {
		menuNav.classList.add("header__links--close")
	})
};*/

const menuOne = document.querySelector('.header__menu');

function addClassFunOne() {
	this.classList.toggle("clickheader__menu");
}
menuOne.addEventListener('click', addClassFunOne);

menuOne.addEventListener("click", function () {
	if (menuNav.classList.contains("header__links--close")) {
		menuNav.classList.remove("header__links--close")
	} else {
		menuNav.classList.add("header__links--close")
	}
})

/*Плавный скрол*/
$(document).ready(function () {
	$("#menu").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 500);
	});
});

$(document).ready(function () {
	$(".back-top").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 500);
	});
});


/*Возвращение на верх*/
jQuery(function (f) {
	var element = f('.back-top');
	f(window).scroll(function () {
		element['fade' + (f(this).scrollTop() > 200 ? 'In' : 'Out')](500);
	});
});

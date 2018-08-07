$(document).ready(function(){

	// Custom JS



////////////////////////////// CHROME SMOOTH SCROLL ////////////////////////////

try {
	$.browserSelector();
	if($("html").hasClass("chrome")) {
		$.smoothScroll();
	}
} catch(err) {

};

	//SCROLL TO ID

	$('.scroll-down').mPageScroll2id();


	/*$(".burger").click(function(){
		$(".burger-ico").toggleClass("active");
		$('.hidden-menu').toggleClass('open')
	})*/

	$(".burger, .burger-vert, .burger-black").click(function() {
		if ($(".hidden-menu").is(":visible")) {
			$(".hidden-menu").fadeOut(500);

		} else {
			$(".hidden-menu").fadeIn(500);
		};
	});

	$(".hidden-menu ul a").click(function() {
		$(".hidden-menu").fadeOut(500);
	});


});








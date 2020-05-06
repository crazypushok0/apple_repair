$(document).ready(function() {

	$('.header-main-item').hover(function(){
		$(this).children('.megamenu-item').stop(false , true).fadeIn(50);
		$(this).children('.header-main-link').addClass('active');


	},function(){
		$(this).children('.megamenu-item').stop(false , true).fadeOut(50);
		$(this).children('.header-main-link').removeClass('active');
	});

});



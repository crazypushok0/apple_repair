$(document).ready(function() {

	$('.header-main-item').hover(function(){
		$(this).children('.megamenu-item').stop(false , true).fadeIn(50);
		$(this).children('.header-main-link').addClass('active');


	},function(){
		$(this).children('.megamenu-item').stop(false , true).fadeOut(50);
		$(this).children('.header-main-link').removeClass('active');
	});


	$('.slider__inner').slick({
		arrows:true,
		dots:true,
		appendDots:$('.slider-dots'),
		appendArrows:$('.slider-arrows'),
		speed:600,
		autoplay:true,
		autoplaySpeed: 3000,
		prevArrow:'<button class="slick-prev"><img src="img/slider-banner/svg/fragments/left.svg" alt="" /></button>',
		nextArrow:'<button class="slick-next"><img src="img/slider-banner/svg/fragments/right.svg" alt="" /></button>',
	});
	$('.slider').hover(function(){
		$(this).children('.slider-arrows').stop(false , true).fadeIn(300);


	},function(){
		$(this).children('.slider-arrows').stop(false , true).fadeOut(300);
	});

});



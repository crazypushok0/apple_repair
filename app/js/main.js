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
		$(this).children('.slider-arrows').stop(false, true).fadeIn(200);
	},function(){
		$(this).children('.slider-arrows').stop(false, true).fadeOut(200);
	});

	$('.slick-arrow.slick-prev').hover(function(){
		$(this).children('img').addClass('animate__fadeInLeft');

	},function(){
		$(this).children('img').removeClass('animate__fadeInLeft');

	});
	$('.slick-arrow.slick-next').hover(function(){
		$('.slick-next').children('img').addClass('animate__fadeInRight');
		

	},function(){
		$('.slick-next').children('img').removeClass('animate__fadeInRight');

	});


	$('.repair .repair__category-btn').on('click', function(event) {
		var id = $(this).attr('data-device');
		var deviceName = $(this).attr('device-name');
		$('.repair').find('.repair__list').removeClass('active').hide();
		$('.repair').find('.repair__img-item').removeClass('active').hide();
		$('.repair .repair__category').find('.repair__category-btn').removeClass('active');
		$(this).addClass('active');
		$('#'+id).addClass('active').fadeIn();
		$('.'+id).addClass('active').fadeIn();
		$('.repair').find('.repair__title span').html(deviceName);
		return false;
	});


});



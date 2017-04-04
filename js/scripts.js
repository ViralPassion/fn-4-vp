jQuery(function( $ ) {
	'use strict';

	var innerHeight =  window.innerHeight;

	$('.hero-upper').css("height", innerHeight * 0.65 );
	$('.hero-lower').css("height", innerHeight * 0.35 );

	//  Language Chooser Pop up
	// ===============================

	$('.btn-lang-chooser').click(function() {
		$('.lang-chooser-container').addClass('visible');
	});
	$('.lang-chooser-container .close').click(function() {
		$('.lang-chooser-container').removeClass('visible');
	});



	// Services Items
	// ==========================
	$('.service-item-button').click(function() {
		// Close all tabs

		var $boxHeight1 = $(this).siblings('.accordion-item-content').height();

		if ($(this).parent().hasClass('open') ) {
			$(this).parent().removeClass('open');
		} else {
			$('.accordion-item').removeClass('open');
			$(this).parent().addClass('open');
		}

		var $boxHeight = $(this).siblings('.accordion-item-content').height();

		// console.log($(this).parent().scrollTop());
		// console.log($boxHeight1, $boxHeight);
		// console.log($(this).parent().hasClass('open'));
	});

	// On click accordion-item
	// stick it smoothly on top of the window
	$('.accordion-item').click(function() {
		var x = $(this).offset().top;
		var y = $(window).scrollTop();

		$('html, body').animate({
	        'scrollTop' : $(this).position().top
	    });

		console.log(x, y);
	});


	// After hero Text effect
	// =============================

	var offset = $('.after-hero').offset();
	var windowHeight = $(window).height();

	$(window).scroll(function() {
		var st = $(this).scrollTop();

		$('.after-hero .text-1').css("margin-left", - 20 + (st/ 8) );
		$('.after-hero .text-2').css("margin-left", - 10 + (st/ 12)  );
		$('.after-hero .text-3').css("margin-right", st  / 10 );
		$('.after-hero .line-1').css("right", 40 + st  / 10 );
		$('.after-hero .line-2').css("right", 18 + st  / 7 );

		console.log(innerHeight);

	});



	// Slider
	$('.slider').slick({
		arrows: true
	});
});

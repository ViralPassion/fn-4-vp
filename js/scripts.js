jQuery(function( $ ) {
	'use strict';


	// Calculate viewport height
	// and set hero height equal to inner viewport
	// =================================================
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

		if ($(this).parent().hasClass('open') ) {
			// Close accordion item
			$('.accordion-item').removeClass('open');
			console.log('ffr');

			// Remove position fixed
			$(this).removeClass('fixed');
		} else {
			$('.accordion-item').removeClass('open');
			$(this).parent().addClass('open');
		}

	});

	// On click accordion-item
	// stick it smoothly on top of the window
	$('.accordion-item').click(function() {

		// $('.accordion-item').removeClass('open');
		// $(this).addClass('open');

		var x = $(this).offset().top;
		var y = $(window).scrollTop();

		$('html, body').animate({
	        'scrollTop' : $(this).position().top
	    });

		// $(this).find('.service-item-button').addClass('fixed');
		// $(this).find('.accordion-item-content').css('margin-top', '56px');

		// console.log(x, y);
	});

	$(window).scroll(function() {
		var x = $('.accordion-item.open').offset().top;
		var y = $(window).scrollTop();
		var itemHeight = $('.accordion-item.open').height();

		console.log(x, y, itemHeight);

		// if ( x < y - itemHeight + 56) {
		// 	 $('.accordion-item.open .service-item-button').removeClass('fixed');
		// 	 $('.accordion-item.open .service-item-button').addClass('absolute');
		// }
		// if ( x < y - itemHeight) {
		// 	$('.accordion-item.open .service-item-button').removeClass('absolute');
		// }
		// if ( x < y - itemHeight) {
		// 	 $('.accordion-item.open .service-item-button').removeClass('fixed');
		// }
		// if ( x > y ) {
		// 	 $('.accordion-item.open .service-item-button').removeClass('fixed');
		// }
		//
		// if ($('.accordion-item').hasClass('open')) {
		// 	// $('.accordion-item.open .service-item-button').removeClass('fixed');
		//
		// }
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

	});



	// Slider
	$('.slider').slick({
		arrows: true
	});
});

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
	$('.service-item-button').click(function(e) {
		// Close all tabs

		if ($(this).parent().hasClass('open') ) {
			// Close accordion item
			$('.accordion-item').removeClass('open');

			// Remove position fixed
			$(this).removeClass('fixed');
		} else {
			// Close All Accordion Items
			$('.accordion-item').removeClass('open');

			// Open clicked Accordion Item
			$(this).parent().addClass('open');


		}

		setTimeout(function() {
				$(e.currentTarget).addClass('fixed');
				console.log('delay');
			},
			400
		);

	});

	// On click accordion-item
	// stick it smoothly on top of the window
	$('.accordion-item').click(function() {

		// var x = $(this).offset().top;
		// var y = $(window).scrollTop();

		$('html, body').animate({
	        'scrollTop' : $(this).position().top + 1
	    });

		console.log($('body').position().top) ;

	});

	$(window).scroll(function() {
		var x = $('.accordion-item.open').offset().top;
		var y = $(window).scrollTop();
		var itemHeight = $('.accordion-item.open').height();

		console.log(x, y, itemHeight);

		if ( x < y - itemHeight + 56) {
			 $('.accordion-item.open .service-item-button').removeClass('fixed');
			 $('.accordion-item.open .service-item-button').addClass('absolute');
		}
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

		if ($(window).width() > 992) {
			$('.after-hero .line-1').css("right", 300 + st  / 10 );
			$('.after-hero .line-2').css("right", 240 + st  / 7 );
		} else {
			$('.after-hero .line-1').css("right", 30 + st  / 10 );
			$('.after-hero .line-2').css("right", 18 + st  / 7 );
		}

		$('.after-hero .text-1').css("margin-left", - 20 + (st/ 8) );
		$('.after-hero .text-2').css("margin-left", - 10 + (st/ 12)  );
		$('.after-hero .text-3').css("margin-right", st  / 10 );

	});



	// Slider
	$('.slider').slick({
		arrows: true
	});
});

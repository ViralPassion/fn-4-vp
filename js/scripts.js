jQuery(function( $ ) {
	'use strict';


	// Calculate viewport height
	// and set hero height equal to inner viewport
	// =================================================
	var innerHeight =  window.innerHeight;

	$('.hero-upper').css("height", innerHeight * 0.65 );
	$('.hero-lower').css("height", innerHeight * 0.35 );


	// Sticky Header
	// ===============================

	$(window).scroll(function() {

		if ($(window).scrollTop() > 250) {
		    $('.header').addClass('fixed');
			setTimeout(function() {
					$('.header').addClass('open');
				},
				400
			);
		} else if ($(window).scrollTop() < 250) {
			$('.header').removeClass('open');
			setTimeout(function() {
					$('.header').removeClass('fixed');
				},
				400
			);
		}

	});

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

	if ( window.matchMedia("(max-width: 996px)").matches) {

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

				setTimeout(function() {
						$(e.currentTarget).addClass('fixed');
						console.log('delay');
					},
					400
				);

			}

		});

		// On click accordion-item
		// stick it smoothly on top of the window
		$('.accordion-item').click(function() {

			if ( $('.accordion-item').hasClass('open') ) {
				$('html, body').animate({
			        'scrollTop' : $(this).position().top + 1
			    });
			}

		});

		$(window).scroll(function() {
			if (!$('.accordion-item.open').length) return;

			var itemOffset = $('.accordion-item.open').offset();
			var y = $(window).scrollTop();
			var itemHeight = $('.accordion-item.open').height();

			// console.log(x, y, itemHeight);


			// When scrolling up and the bottom of the open iten reaches the top of the viewport
			// remove class 'fixed' and add 'absolute-bottom' to make the button disappear smoothly
			if ($('.accordion-item').hasClass('open') &&   itemOffset.top < y - itemHeight ) {
				$('.accordion-item.open .service-item-button').removeClass('fixed');
				$('.accordion-item.open .service-item-button').addClass('absolute-bottom');
			}

			// When item open and on scrolling down the top of this item is in viewport
			// remove 'fixed' and 'absolute' classes to let the button move freely with its item
			if ( $('.service-item-button').hasClass('fixed') &&  itemOffset.top > y ) {
				$('.service-item-button').removeClass('fixed');
				console.log('Now remove classe on scroll down');
			}

			// If item open and on scrolling up its button reaches the top of the viewport
			// add class 'fixed' to the button to remain visible.
			if ( $('.accordion-item').hasClass('open') &&  itemOffset.top < y ) {
				$('.accordion-item.open .service-item-button').addClass('fixed');
			}

			// When scrolling down and the bottom of the open item begins to be
			// visible at the top of the viewport, make the button 'fixed'
			if ( $('.accordion-item').hasClass('open') && $('.service-item-button').hasClass('absolute-bottom') &&  itemOffset.top > y - itemHeight ) {
				$('.accordion-item.open .service-item-button').removeClass('absolute-bottom');
				$('.accordion-item.open .service-item-button').addClass('fixed');
			}

		});

	} else {
		// -------------------
		//   min-width 996px
		// -------------------
		$('.accordion-item').addClass('open');
	}


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

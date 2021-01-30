(function ($) {

    'use strict';

	/*------------------------------------
		Mobile Menu
	--------------------------------------*/
	// $('.primary-menu').meanmenu({
	// 	meanMenuContainer: '.mobile-menu-area',
	// 	meanScreenWidth: "991",
	// 	meanRevealPosition: "right",
	// });

	/*-------------------------------------------
	    Sticky Header
	--------------------------------------------- */

	let win = $(window);
	let sticky_id = $(".header-area");
	win.on('scroll', function () {
		let scroll = win.scrollTop();
		if (scroll < 245) {
			sticky_id.removeClass("sticky-header");
		} else {
			sticky_id.addClass("sticky-header");
		}
	});


	/*------------------------------------
        Overlay Close
	--------------------------------------*/
	$(window).scroll(function () {
		if ($(this).scrollTop() !== 0) {
			$('#scrollUp').fadeIn();
		} else {
			$('#scrollUp').fadeOut();
		}
    });
    
	$('#scrollUp').on('click', function () {
		$("html, body").animate({scrollTop: 0}, 600);
		return false;
	});

	//  Main-Slider
	$('.main-slider').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		autoplay: true,
		autoplayTimeout:3000,
		autoplayHoverPause: true,
		autoplaySpeed: 1000,
		dots: true,
		animateOut: 'fadeOut',
	
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

	// Wow js/ Animate 
	new WOW().init();

	//  Project-Slider
	$('.project-slider').owlCarousel({
		loop:true,
		margin:0,
		autoplaySpeed: 1000,
		nav:true,
		autoplay: true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:3
			}
		}
	});

	// Video Popup
	$('.play-button').magnificPopup({
		type: 'iframe'
		// other options
	  });

	//  Blog-Slider
	$('.blog-slider').owlCarousel({
		loop:true,
		margin:0,
		autoplaySpeed: 1000,
		autoplayTimeout:3000,
		nav:true,
		autoplay: true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});


	//  Testimonial-Slider
	$('.testimonial-slider').owlCarousel({
		loop:true,
		margin:0,
		autoplaySpeed: 1000,
		autoplayTimeout:3500,
		nav:true,
		autoplay: true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

	//  Brand-Slider
	$('.brand-slider').owlCarousel({
		loop:true,
		margin:0,
		autoplaySpeed: 1000,
		autoplayTimeout:2000,
		nav:true,
		autoplay: true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:6
			}
		}
	});

	// Scroll-top-button
	$('.scroll-top-button').click(function(){
		$('html').animate({'scrollTop':'0px'},4000) ;
	});

	$(window).scroll(function(){

		var scroll = jQuery(window).scrollTop();

		if (scroll > 300) {
			$('.scroll-top-button').show();
		}else{
			$('.scroll-top-button').hide();
		}
	})

	// Custom Cursor 

	const Cursor = document.querySelector('.cursor');

	document.addEventListener('mousemove', e => {
		Cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px")
	})


})(jQuery);
 
		// autoplay: true,
		// autoplayTimeout:3000,
		// autoplayHoverPause: true,
		// autoplaySpeed: 1000,
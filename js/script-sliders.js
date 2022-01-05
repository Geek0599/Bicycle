//SLIDERS
if($('.slider__body').length>0){
	$('.slider__body').slick({
		//autoplay: true,
		//infifnite: false,
		dots: true,
		arrows: false,
		accessibility:false,
		slidesToShow:1,
		autoplay: true,
		autoplaySpeed: 5000,
		adaptiveHeight: true,
		nextArrow: '<button type="button" class="slick-next"></button>',
		prewArrow: '<button type="button" class="slick-prew"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {}
		}]
	});
}
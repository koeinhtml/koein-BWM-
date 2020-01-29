$(document).ready(function() {
	slidersInit();
	selectInit();
	mobMenu();
});

function slidersInit() {

	if ($('.js-latest-news-slider').length) {
		var mySwiper = new Swiper ('.js-latest-news-slider', {
			slidesPerView: 3,
			keyboard: {
		    enabled: true,
		  },
	    pagination: {
	      el: '.swiper-pagination',
	    },
	  })
	}

	if ($('.js-we-work-slider').length) {
		var mySwiper = new Swiper ('.js-we-work-slider', {
			slidesPerView: 3,
			keyboard: {
		    enabled: true,
		  },
	    pagination: {
	      el: '.swiper-pagination',
	    },
	  })
	}
}

function selectInit() {
	$('.js-example-basic-single').select2();
}

function mobMenu() {

	$(".js-menu-btn").on("click", function(e) {
		e.preventDefault();

		if ($(this).hasClass("close-menu")) {
			$(".js-mob-menu").removeClass("show");
			$(this).removeClass("close-menu");
		} else {
			$(".js-mob-menu").addClass("show");
			$(this).addClass("close-menu");
		}
		
	});
}
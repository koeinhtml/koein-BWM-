$(document).ready(function() {
	slidersInit();
	selectInit();
	mobMenu();
});

function slidersInit() {

	if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}

	if ($('.js-latest-news-slider').length) {
		var mySwiper = new Swiper ('.js-latest-news-slider', {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			keyboard: {
		    enabled: true,
		  },
		  autoplay: {
		    delay: 4500,
		    disableOnInteraction: false,
		  },
	    pagination: {
	      el: '.swiper-pagination',
	      clickable: true,
	    },
	    breakpoints: {

		    576: {
		      slidesPerView: 1,
		    },

		    767: {
		      slidesPerView: 2,
		    },

		    991: {
		      slidesPerView: 3,
		    }
		  }
	  })
	}

	if ($('.js-we-work-slider').length) {
		var mySwiper = new Swiper ('.js-we-work-slider', {
			slidesPerView: 1,
			loop: true,
			keyboard: {
		    enabled: true,
		  },
		  autoplay: {
		    delay: 4500,
		     disableOnInteraction: false,
		  },
	    pagination: {
	      el: '.swiper-pagination',
	      clickable: true,
	    },
	    breakpoints: {

		    576: {
		      slidesPerView: 3,
		    },

		    767: {
		      slidesPerView: 2,
		    },

		    991: {
		      slidesPerView: 3,
		    }
		  }
	  })
	}
}

function selectInit() {
	$('.js-example-basic-single').select2({
		width: 'resolve',
	});
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
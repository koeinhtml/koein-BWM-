$(document).ready(function() {
	slidersInit();
	selectInit();
	mobMenu();
	mobMenuInward();
	searchInward();
	popupInit();
	tooltipInit();
	rangeInputInit();
});



function slidersInit() {

	if (!String.prototype.startsWith) {
	  Object.defineProperty(String.prototype, 'startsWith', {
	    enumerable: false,
	    configurable: false,
	    writable: false,
	    value: function(searchString, position) {
	      position = position || 0;
	      return this.indexOf(searchString, position) === position;
	    }
	  });
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
		  longSwipes: false,
		  longSwipesRatio: 0.2,
	    pagination: {
	      el: '.swiper-pagination',
	      clickable: true,
	    },
	    breakpoints: {


		    576: {
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
		  longSwipes: false,
		  longSwipesRatio: 0.2,
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
	$('.js-select-single').select2({
		width: 'style',
	});
}

function mobMenu() {

	$('.js-menu-btn').on('click', function(e) {
		e.preventDefault();

		if ($(this).hasClass('close-menu')) {
			$('.js-mob-menu').removeClass('show');
			$(this).removeClass('close-menu');
		} else {
			$('.js-mob-menu').addClass('show');
			$(this).addClass('close-menu');
		}
		
	});
}


function mobMenuInward() {
	$('.js-btn-menu-inward').on('click', function(e) {
		e.preventDefault();
		$('.js-side-menu').toggleClass('show');
		
	});
}

function searchInward() {
	$('.js-search-inward').on('mouseover', function(e) {
		$('input').focus();
	});
}

function popupInit() {
	$('.js-popup-modal').magnificPopup({
		removalDelay: 500,
		callbacks: {
	    beforeOpen: function() {
	      this.st.mainClass = this.st.el.attr('data-effect');
	    }
	  },
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

}

function tooltipInit() {
	$('.js-tooltip').tooltipster({
	  
	  interactive: true,
	});
}

function rangeInputInit() {
	$( ".js-input-range").slider({
	  animate: "fast",
	  step: 1,
	  value: 3,
	  min: 0,
	  max: 5,
	});



	$(".js-input-range").each(function() {
		$(this).on( "slide", function( event, ui ) {
			$(this).find('.ui-slider-handle').html(ui.value);
		});
		
		$(this).find('.ui-slider-handle').on( 'mousemove', function( ) {
			var pos = $(this).attr('style');
			pos_percent = pos.search('%;');
			pos_left = pos.search(' ');
			pos = pos.substr(pos_left, pos_percent);
			pos = pos.substring(0, pos.length - 1)
			$(this).closest('.js-input-range').find('.left-bg').css("width", pos);
		});

	})

}
$(document).ready(function(){
	document.getElementById("mcw1").style.display = "none";
    document.getElementById("mcw2").style.display = "none";
    $( ".widget h4" ).click(
    function() {
      $(this).parent().toggleClass('active');
    }
  ); 
  var _originalSize = $(window).width() + $(window).height()
  $(window).resize(function(){
    if($(window).width() + $(window).height() != _originalSize){
      
      $(".ifr").css("height","50%");  
    }else{
      
      $(".ifr").css("height","100%");  
    }
  });
var $this = $(".panel-heading span.icon_minim");
     // window.alert(5 + 6);
     // $this.parents('.panel').find('.panel-body').slideUp();
        $this.addClass('panel-collapsed');
        $this.removeClass('ion-minus-round').addClass('ion-plus-round');

	$("#portfolio-contant-active").mixItUp();


	$("#testimonial-slider1").owlCarousel({
	    paginationSpeed : 500,      
	    singleItem:true,
	    autoPlay: 3000,
	});
	$("#testimonial-slider2").owlCarousel({
	    paginationSpeed : 500,      
	    singleItem:true,
	    autoPlay: 3000,
	});
		$("#testimonial-slider3").owlCarousel({
	    paginationSpeed : 500,      
	    singleItem:true,
	    autoPlay: 3000,
	});



	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});
  
    // $(".dropdown").hover(            
    //         function() {
    //             $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
    //             $(this).toggleClass('open');
                              
    //         },
    //         function() {
    //             $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
    //             $(this).toggleClass('open');
                           
    //         });

	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}


	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });
		
			var sliderMain = function() {
		
	  	$('#fh5co-hero .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	  	$('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());	
	  	$(window).resize(function(){
	  		$('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());	
	  	});

	};
	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	var sliderMain = function() {
		
	  	$('#fh5co-hero .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	  	$('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());	
	  	$(window).resize(function(){
	  		$('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());	
	  	});

	};
	var COLORS = [['006E00', '78E600'], ['68008C', '78E600'],
              ['006E00', '00BEFF'], ['033CD2', '00BEFF'],
              ['6E008C', '00BEFF'], ['A00000', 'FF7800'],
              ['033CD2', 'FF64D2'], ['6E008C', 'FF64D2'],
              ['6E008C', 'FF7800'], ['033CD2', 'FF7800'],
              ['006E00', 'FFD732'], ['6E008C', 'FFD732']];

var color = Math.floor((Math.random() * 12));
var logoID = color + 1;
if (color < 10) {
    logoID = "0" + logoID;
}

document.querySelector('#defaultIcon').href = 
    '/assets/favicon_' + logoID + '.png';

var h = document.querySelector('.logo').innerHTML;
h = h.replace(/033cd2/g, COLORS[color][0]);
h = h.replace(/78e600/g, COLORS[color][1]);
document.querySelector('.logo').innerHTML = h;

});



$('svg.radial-progress').each(function( index, value ) { 
    $(this).find($('circle.complete')).removeAttr( 'style' );
  });
  $(window).scroll(function(){
    $('svg.radial-progress').each(function( index, value ) { 
      // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
      if ( 
          $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
          $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
      ) {
          // Get percentage of progress
          percent = $(value).data('percentage');
          // Get radius of the svg's circle.complete
          radius = $(this).find($('circle.complete')).attr('r');
          // Get circumference (2πr)
          circumference = 2 * Math.PI * radius;
          // Get stroke-dashoffset value based on the percentage of the circumference
          strokeDashOffset = circumference - ((percent * circumference) / 100);
          // Transition progress for 1.25 seconds
          $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
      }
    });
  }).trigger('scroll');

  // Animation Text
  const text = document.querySelector(".sec-text");
	const textLoad = () => {
		setTimeout (() => {
			text.textContent= "Web Designer";
		},0);
		setTimeout (() => {
			text.textContent= "Wordpress Developer";
		},4000);
		setTimeout (() => {
			text.textContent= "Frelancher";
		},8000);
	}
	
	textLoad();
  setInterval(textLoad,12000);

      // typing text animation script
      var typed = new Typed(".typing", {
        strings: ["Wordpress Developer", "Website Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


     // Caurosal slider
     $('.team-slider').owlCarousel({
      loop: true,            
      nav: false,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 450,
      margin: 20,
      responsive: {
          0: {
              items: 1
          },
          768: {
              items: 2
          },
          991: {
              items: 3
          },
          1200: {
              items: 3
          },
          1920: {
              items: 3
          }
      }
  });
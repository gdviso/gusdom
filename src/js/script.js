//mobile menu toggle 
const menuToggle = () => {
  $('.menuToggle').click(function() {
    if(!$('.menuToggle').hasClass('close')){
      $('.menuToggle').addClass('close');
      $('.menu').removeClass('hideMenu').addClass('showMenu animated fadeIn');
    } else{
      	$('.menuToggle').removeClass('close');
      	$('.menu').removeClass('showMenu').addClass('hideMenu')
  		}
  });
}
// smooth scroll
const smooth = () => {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
}
//sticky nav
const sticky = () => {
	var stickyNavTop = $('.nav').offset().top;
 
	var stickyNav = () => {
	var scrollTop = $(window).scrollTop();
	      
	if (scrollTop > stickyNavTop) { 
	    $('.nav').addClass('sticky');
	} else {
	    $('.nav').removeClass('sticky'); 
	}
	}
	$(window).scroll( () => {
  		stickyNav();
	});
};
//doc ready
$(function() {
	menuToggle();
  	$('.logo').midnight();
  	smooth();
	new WOW().init();
	sticky();
});
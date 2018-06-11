$(document).ready(function(){
	resMenu = $('.navbar_ul');
	$('#menu-acces').on('click', function(e) {
		e.preventDefault();
		resMenu.slideToggle();
	});
	$(window).resize(function(){
		var window_width = $(this).width(); 
		if(window_width > 480 && resMenu.is(':hidden')) {
			resMenu.removeAttr('style');
		}
	}); 
	$('nav li').on('click', function(e) {                
		var window_width = $(window).width();
		if(window_width < 480 ) {
			resMenu.slideToggle(); 
		}
	});
	$( "#accordion" ).accordion({
		collapsible: true
	});
	$(".open").click(function(){
		$(".outer").fadeIn('slow');
	});
	$(".close").click(function(){
		$(".outer").fadeOut('slow');
	})
});


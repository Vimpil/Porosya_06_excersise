jQuery(document).ready(function($) {
	

// NAV menu panel control
	$("#sub_menu>li").mouseenter(
		function(){
			$(this).find('.box').addClass('active');	
			$(this).find('ul').removeClass('none');				
		}
	)
	$("#sub_menu>li, #sub_menu li ul").mouseleave(function() {
		/* Act on the event */
		$(this).find('.box').removeClass('active');	
			$(this).find('ul').addClass('none');	
	});
// END NAV menu panel control

});
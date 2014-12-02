$(document).ready(function() {
	// Click event to scroll to top
	$('.scrollToTop').click(function() {
		$('html, body').animate({
			scrollTop : 0
		}, 800);
		return false;
	});
	$('body').scrollspy({
		target : '.navbar-example'
	})
	$('[data-spy="scroll"]').each(function() {
		var $spy = $(this).scrollspy('refresh')
	})
});

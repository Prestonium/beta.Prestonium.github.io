$(document).ready(function() {
	// Click event to scroll to top
	$('.scrollToTop').click(function() {
		$('html, body').animate({
			scrollTop : 0
		}, 800);
		return false;
	});
});
$(document).ready(function() {
	// Click event to scroll to top
	$(".me").click(function() {
		$('html, body').animate({
			scrollTop : $("#me").offset().top
		}, 800);
	});
});
$(document).ready(function() {
	// Click event to scroll to top
	$(".ach").click(function() {
		$('html, body').animate({
			scrollTop : $("#ach").offset().top
		}, 800);
	});
});
$(document).ready(function() {
	// Click event to scroll to top
	$(".team").click(function() {
		$('html, body').animate({
			scrollTop : $("#team").offset().top
		}, 800);
	});
});
$('body').scrollspy({ target: '.navbar-example' })
$('[data-spy="scroll"]').each(function() {
	var $spy = $(this).scrollspy('refresh')
})

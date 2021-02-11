var j = jQuery.noConflict();

j(document).ready(function(){
	j(window).scroll(function () {
			if (j(this).scrollTop() > 40) {
				j("#back-to-top").fadeIn();
			} else {
				j("#back-to-top").fadeOut();
			}
		});
		// scroll body to 0px on click
		j("#back-to-top").click(function () {
			j("body,html").animate({
				scrollTop: 0
			}, 350, "linear");
			return false;
		});
});
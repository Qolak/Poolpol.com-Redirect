$(document).ready(function() {
	setContainerPos();
	$(window).resize(function(event) {
		setContainerPos();
	});
});

var setContainerPos = function()
{
	var winHeight = $(window).height();
	var containerHeight = $('.container').outerHeight();

	var topPos = (winHeight / 2) - (containerHeight / 2);

	$('.container').css('top', topPos + 'px');
}
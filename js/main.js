function simulateClick(element) {
	element.querySelector('.link').click();
}

$(document).ready(function() {
	// Article click start
	$('.card--clickable .link').on('click', function(event) {
		event.stopPropagation();
		console.log('clicked', this);
	});

	$('.card--clickable').on('click', function() {
		simulateClick(this);
	});
	// Article click end

	// Init audio
	var audio = document.querySelector('audio');
	audio.volume = 0.6;

	$('.figure__spot').on('click', function() {
		var spot = '.' + $(this).data('spot');
		$(spot).toggleClass('show');
		console.log(spot);
	});
});

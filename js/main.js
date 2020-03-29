function simulateClick(element) {
	element.querySelector('.card--clickable-target').click();
}

$(document).ready(function() {
	// Card click start
	$('.card--clickable .link').on('click', function(event) {
		event.stopPropagation();
		console.log('clicked', this);
	});

	$('.card--clickable').on('click', function() {
		simulateClick(this);
	});
	// Card click end

	// Init audio
	var audioElement = document.querySelector('.bubble');
	if (audioElement !== null) {
		audioElement.volume = 0.2;
	}

	$('.mute-audio').on('click', function() {
		event.preventDefault();
		audioElement.muted = !document.querySelector('.bubble').muted;
		$(this).toggleClass('muted');
	});

	$('.figure__spot').on('click', function() {
		var spot = '.' + $(this).data('spot');
		var audioSpark = document.querySelector('.chime');

		$(spot).toggleClass('show');
		audioSpark.play();

		if ($('.figure__spot.show').length / 2 === 10) {
			console.log('Felicitari, ai terminat jocul!');
		}
	});
});

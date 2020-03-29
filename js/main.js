function simulateClick(element) {
	element.querySelector('.card--clickable-target').click();
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
	var audioElement = document.querySelector('audio');
	if (audioElement !== null) {
		audioElement.volume = 0.2;
		// audioElement.pause();
	}
	// audio.muted = true;
	// audio.muted = !document.querySelector('audio').muted;

	$('.mute-audio').on('click', function() {
		event.preventDefault();
		// audio.muted = true;
		// audio.volume = 0.2;
		// audio.muted = false;
		$(this).toggleClass('muted');
		audioElement.muted = !document.querySelector('audio').muted;
		// audioElement.play();
	});

	$('.figure__spot').on('click', function() {
		var spot = '.' + $(this).data('spot');
		$(spot).toggleClass('show');
		console.log(spot);
	});
});

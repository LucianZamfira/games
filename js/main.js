function simulateClick(element) {
	element.querySelector('.card--clickable-target').click();
}

$(document).ready(function() {
	var actives = 0;
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

	$('.figure__spot').on('click', function(event) {
		event.stopPropagation();
	});

	$('.figure__spot').on('mouseup', function() {
		var spot = '.' + $(this).data('spot');
		var audioSpark = document.querySelector('.chime');

		$(spot).toggleClass('show');
		audioSpark.pause();
		audioSpark.currentTime = 0;
		audioSpark.play();

		actives = $('.figure__spot.show').length / 2;

		$('.qt').text(10 - actives);

		if (actives === 9) {
			$('.plural').text('ă');
			$('.singular').text('');
		} else if (actives === 10) {
			$('.headline-section').addClass('hide');
			$('body').addClass('youwon');
		} else {
			$('.plural').text('e');
			$('.singular').text('u');
		}
	});

	$('.figure__container').on('click', function() {
		var audioBoing = document.querySelector('.boing');
		audioBoing.pause();
		audioBoing.currentTime = 0;
		audioBoing.play();
	});
});

'use strict';
if ( $(window).width() > 960) {
	$(function() {
		$('.nonsense').balloon({ position: 'right', offsetX: 5, offsetY: 10 });
		$('.slideroo').balloon({
			tipSize: 12,
			position: 'top',
			showDuration: 10,
			hideDuration: 10,
			css: {
				border: 'solid 2px #917456',
				padding: '10px',
				fontSize: '80%',
				fontWeight: 'bold',
				lineHeight: '1.5',
				backgroundColor: '#FFFFFF',
				color: '#000000',
				opacity: '1.0',
				width: '200px',
				css: null
			}
		});
	});
} 
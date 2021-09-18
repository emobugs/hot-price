import '../scss/app.scss';

window.addEventListener('DOMContentLoaded', () => {
	// This block will be executed once the page is loaded and ready

	const prices = document.querySelectorAll('.price');

	prices.forEach((price) => {
		if (price.className.includes('hot')) {
			price.innerHTML += '🔥';
		}
	});
});

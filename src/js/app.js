import { hello } from './functions/hello.js';

window.addEventListener('DOMContentLoaded', () => {
	const burger = document.querySelector('.burger-menu');
	const nav = document.querySelector('.nav');

	burger.addEventListener('click', () => {
		if(!nav.classList.contains('nav--active')) {
			nav.classList.add('nav--active');
			burger.classList.add('burger--active');
		} else {
			nav.classList.remove('nav--active');
			burger.classList.remove('burger--active');
		}
	});
});
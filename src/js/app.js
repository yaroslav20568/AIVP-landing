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

	const contactModal = document.querySelector('.contact-modal');
	const partnerModal = document.querySelector('.partner-modal');

	const headerBtn = document.querySelector('.header__btn');
	const cooperationBtn = document.querySelector('.cooperation__btn');


	const openModal = (modal) => {
		modal.classList.add('modal--active')

		outsideClickModal(modal);

		escEnterModal(modal);
	};

	const closeModal = (modal) => {
		modal.classList.remove('modal--active')
	};

	const contactBtns = document.querySelectorAll('.btn--contact');
	const partnerBtns = document.querySelectorAll('.btn--partner');

	const outsideClickModal = (modal) => {
		modal.firstElementChild.addEventListener('click', () => {
			closeModal(modal);
		});
	};

	// const escEnterModal = (modal) => {
		// document.addEventListener('keyup', function(e){
		// 	if(e.keyCode === 27) {
		// 		closeModal(modal);
		// 	}
		// });
	// };

	contactBtns.forEach(contactBtn => {
		contactBtn.addEventListener('click', () => {
			openModal(contactModal);
		})
	});

	partnerBtns.forEach(partnerBtn => {
		partnerBtn.addEventListener('click', () => {
			openModal(partnerModal);
		})
	});

	
	const modalCloseBtns = document.querySelectorAll('.modal__close');

	modalCloseBtns.forEach(modalCloseBtn => {
		modalCloseBtn.addEventListener('click', () => {
			modalCloseBtn.parentElement.parentElement.parentElement.classList.remove('modal--active');
		});
	})
});
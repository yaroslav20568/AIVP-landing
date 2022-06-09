import { hello } from './functions/hello.js';

window.addEventListener('DOMContentLoaded', () => {
	// window.addEventListener('unload', () => {
	// 	document.documentElement.scrollTop = 0;
	// });


	/* COOKIES */
	function getCookie(name) {
		let matches = document.cookie.match(new RegExp(
			"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
		));
		
		return matches ? decodeURIComponent(matches[1]) : undefined;
	}

	if(!getCookie('site')) {
		setTimeout(() => {
			document.querySelector('.modal-cookies').classList.add('modal-cookies--active');
		}, 1000);
	}

	const modalCookiesBtn = document.querySelector('.modal-cookies__btn');
	
	modalCookiesBtn.addEventListener('click', () => {
		document.cookie = "site=AIVP; max-age=2592000";
		document.querySelector('.modal-cookies').classList.remove('modal-cookies--active');
	});
	/* COOKIES */

	/* BURGER */
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
	/* BURGER */

	/* MODALS */
	const contactModal = document.querySelector('.contact-modal');
	const partnerModal = document.querySelector('.partner-modal');

	const openModal = (modal) => {
		document.body.style.overflow = 'hidden';
		modal.classList.add('modal--active');

		outsideClickModal(modal);
		escEnterModal(modal);
	};

	const closeModal = (modal) => {
		document.body.style.overflow = 'auto';
		modal.classList.remove('modal--active');
	};

	const contactBtns = document.querySelectorAll('.btn--contact');
	const partnerBtns = document.querySelectorAll('.btn--partner');

	const outsideClickModal = (modal) => {
		modal.firstElementChild.addEventListener('click', () => {
			closeModal(modal);
		});
	};

	const escEnterModal = (modal) => {
		document.addEventListener('keyup', function(e){
			if(e.keyCode === 27) {
				closeModal(modal);
			}
		});
	};

	contactBtns.forEach(contactBtn => {
		contactBtn.addEventListener('click', () => {
			openModal(contactModal);
		});
	});

	partnerBtns.forEach(partnerBtn => {
		partnerBtn.addEventListener('click', () => {
			openModal(partnerModal);
		});
	});

	
	const modalCloseBtns = document.querySelectorAll('.modal__close');

	modalCloseBtns.forEach(modalCloseBtn => {
		modalCloseBtn.addEventListener('click', () => {
			document.body.style.overflow = 'auto';
			modalCloseBtn.parentElement.parentElement.parentElement.classList.remove('modal--active');
		});
	});
	/* MODALS */

	/* ANCHORS */
	const anchors = document.querySelectorAll('#anchor');
	const anchorsContent = document.querySelectorAll('#anchor-content');

	anchors.forEach((anchor, i) => {
		anchor.addEventListener('click', (e) => {
			e.preventDefault();

			const headerStyle = window.getComputedStyle(document.querySelector('.header'));
			const headerHeight = headerStyle.height.replace('px', '');

			const scrollToPosition = anchorsContent[i].getBoundingClientRect().top + document.documentElement.scrollTop - headerHeight;

			window.scrollTo({
				top: scrollToPosition,
				behavior: "smooth"
			});
		});
	});
	/* ANCHORS */
});
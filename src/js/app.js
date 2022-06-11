import { animations } from './functions/animations.js';

window.addEventListener('DOMContentLoaded', () => {
	// window.addEventListener('unload', () => {
	// 	document.documentElement.scrollTop = 0;
	// });

	/* SCROLL TOP TOP */
	const btnToTop = document.querySelector('.btn-to-top');

	btnToTop.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	});
	/* SCROLL TOP TOP */

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

	const burgerOpen = () => {
		nav.classList.add('nav--active');
		burger.classList.add('burger--active');
		document.body.style.overflow = 'hidden';
	};

	const burgerClose = () => {
		nav.classList.remove('nav--active');
		burger.classList.remove('burger--active');
		document.body.style.overflow = 'auto';
	};

	window.addEventListener('resize', () => {
		burgerClose();
	});

	burger.addEventListener('click', () => {
		if(!nav.classList.contains('nav--active')) {
			burgerOpen();
		} else {
			burgerClose();
		}
	});
	/* BURGER */

	/* MODALS */
	const contactModal = document.querySelector('.contact-modal');
	const partnerModal = document.querySelector('.partner-modal');

	const resetInputs = (inputs, message) => {
		console.log(message)
		inputs.forEach(input => {
			input.value = '';
			input.placeholder = input.placeholder.replace('*', '');
		});

		// message.textContent = 'Все поля должны быть заполнены';
		message.textContent = '';
	};

	const openModal = (modal) => {
		document.body.style.overflow = 'hidden';
		modal.classList.add('modal--active');

		outsideClickModal(modal);
		escEnterModal(modal);
	};

	const closeModal = (modal) => {
		const inputs = document.querySelectorAll(`.${modal.classList[0]} input[type="text"]`);
		const message = document.querySelector(`.${modal.classList[0]}__error-message`);
		resetInputs(inputs, message);

		document.body.style.overflow = 'auto';
		modal.classList.remove('modal--active');
	};

	const contactBtns = document.querySelectorAll('.btn--contact');
	const partnerBtns = document.querySelectorAll('.btn--partner');

	const outsideClickModal = (modal) => {
		modal.addEventListener('click', (e) => {
			if(e.target.parentElement === modal) {
				closeModal(modal);
			}
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
			const modal = modalCloseBtn.parentElement.parentElement.parentElement;
			closeModal(modal);
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

			burgerClose();

			history.pushState(null, null, anchor.href);
		});
	});
	/* ANCHORS */

	/* VALIDATION */
	const valdateForm = (modalName, formName, btnName, messageName, alertName) => {
		const inputs = document.querySelectorAll(`${modalName ? modalName : formName} input[type="text"]`);
		const modal = modalName && document.querySelector(modalName);
		const message = messageName && document.querySelector(messageName);
		const alert = alertName && document.querySelector(alertName);

		inputs.forEach(input => {
			input.addEventListener('input', () => {
				if(!input.value) {
					if(!input.placeholder.includes('*')) {
						input.placeholder = input.placeholder + '*';
					}

					message.textContent = 'Все поля со звездочкой “*” должны быть заполнены';
				} else {
					input.placeholder = input.placeholder.replace('*', '');
				}
			});
		});

		document.querySelector(btnName).addEventListener('click', (e) => {
			e.preventDefault();
			
			let i = 0;

			inputs.forEach(input => {
				if(!input.value){
					if(!input.placeholder.includes('*')) {
						input.placeholder = input.placeholder + '*';
					}

					message.textContent = 'Все поля со звездочкой “*” должны быть заполнены';
				} else {
					++i;
				}
			});

			if(i === inputs.length) {
				console.log('Форма отправлена');
				formName && resetInputs(inputs, message);
				modalName && closeModal(modal);
				
				setTimeout(() => {
					alert.style.display = 'block';
				
					setTimeout(() => {
						alert.style.display = 'none';
					}, 2000);
				}, 200);
			}
		});
	};

	valdateForm('.contact-modal', '', '.contact-modal__btn', '.contact-modal__error-message', '.modal__alert');
	valdateForm('.partner-modal', '', '.partner-modal__btn', '.partner-modal__error-message', '.modal__alert');
	valdateForm('', '.feedback__form', '.feedback-form__btn', '.feedback-form__error-message', '.feedback__alert');
	/* VALIDATION */

	/* ANIMATIONS */
	animations();
	/* ANIMATIONS */
});
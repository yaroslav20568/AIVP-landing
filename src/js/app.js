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

	const resetInputs = (inputs, message, inputMessages) => {
		console.log(message)
		inputs.forEach((input, i) => {
			input.value = '';
			input.placeholder = input.placeholder.replace('*', '');

			inputMessages[i].textContent = '';
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
		const inputMessages = document.querySelectorAll(`.${modal.classList[0]}__error-input`);
		resetInputs(inputs, message, inputMessages);

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

	const headerStyle = window.getComputedStyle(document.querySelector('.header'));
	const headerHeight = headerStyle.height.replace('px', '');

	anchors.forEach((anchor, i) => {
		anchor.addEventListener('click', (e) => {
			e.preventDefault();

			// const headerStyle = window.getComputedStyle(document.querySelector('.header'));
			// const headerHeight = headerStyle.height.replace('px', '');

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
	// let i = 0;
	let inputsIsValidate = [];

	const checkInput = (input) => {
		// const fioReg = /^[a-zA-Zа-яА-ЯёЁ]*([-][a-zA-Zа-яА-ЯёЁ]*)?\s[a-zA-Zа-яА-ЯёЁ]*\s[a-zA-Zа-яА-ЯёЁ]*$/;
		const fioReg = /^[a-zA-Zа-яА-ЯёЁ0-9 ]+$/;
		const companyReg = /^[a-zA-Zа-яА-ЯёЁ0-9 ]+$/;
		const emailReg = /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i;
		const phoneReg = /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/;
		const addinfoReg = /^[a-zA-Zа-яА-ЯёЁ0-9 ]+$/;
		let bool;

		if(fioReg.test(input.value) && input.name === 'fio') {
			if((input.value.length >= 6 && input.value.length <= 30)) {
				bool =  true;
				input.nextElementSibling.textContent = '';
				input.nextElementSibling.style.display = 'none';
			} else {
				input.nextElementSibling.textContent = 'Ввод от 6 до 30 символов';
				input.nextElementSibling.style.display = 'block';
			}
		} else if(companyReg.test(input.value) && input.name === 'company') {
			if((input.value.length >= 4 && input.value.length <= 20)) {
				bool =  true;
				input.nextElementSibling.textContent = '';
				input.nextElementSibling.style.display = 'none';
			} else {
				input.nextElementSibling.textContent = 'Ввод от 4 до 20 символов';
				input.nextElementSibling.style.display = 'block';
			}
		} else if(emailReg.test(input.value) && input.name === 'email') {
			bool =  true;
			input.nextElementSibling.textContent = '';
			input.nextElementSibling.style.display = 'none';
		} else if(phoneReg.test(input.value) && input.name === 'phone') {
			bool =  true;
			input.nextElementSibling.textContent = '';
			input.nextElementSibling.style.display = 'none';
		} else if(addinfoReg.test(input.value) && input.name === 'addinfo') {
			if((input.value.length >= 4 && input.value.length <= 30)) {
				bool =  true;
				input.nextElementSibling.textContent = '';
				input.nextElementSibling.style.display = 'none';
			} else {
				input.nextElementSibling.textContent = 'Ввод от 4 до 30 символов';
				input.nextElementSibling.style.display = 'block';
			}
		} else {
			bool = false;
			input.nextElementSibling.textContent = 'Некоректный ввод';
			input.nextElementSibling.style.display = 'block';
			
			if(input.name === 'fio') {
				input.nextElementSibling.textContent = 'Формат: Щука Игорь Юрьевич';
			} else if(input.name === 'company') {
				input.nextElementSibling.textContent = 'Формат: Интексофт';
			} else if(input.name === 'email') {
				input.nextElementSibling.textContent = 'Формат: ravlushevich.iarek@mail.ru';
			} else if(input.name === 'phone') {
				input.nextElementSibling.textContent = 'Формат: +375299865881';
			} else if(input.name === 'addinfo') {
				input.nextElementSibling.textContent = 'Формат: Компания существует 7 лет';
			}
		}
		// console.log(i);
		// return bool;
		return {'bool': bool, 'inputname': input.name};
	};

	const validateForm = (modalName, formName, btnName, messageName, alertName, inputMessageName) => {
		const inputs = document.querySelectorAll(`${modalName ? modalName : formName} input[type="text"]`);
		const modal = modalName && document.querySelector(modalName);
		const message = messageName && document.querySelector(messageName);
		const alert = alertName && document.querySelector(alertName);
		const inputMessages = inputMessageName && document.querySelectorAll(inputMessageName);

		let inputsIsValidate = [];

		inputs.forEach(input => {
			input.addEventListener('input', () => {
				if(!input.value) {
					if(!input.placeholder.includes('*')) {
						input.placeholder = input.placeholder + '*';

						if(inputsIsValidate.includes(input.name)) {
							const elemIndex = inputsIsValidate.findIndex(inputIsValidate => inputIsValidate === input.name);
							console.log('elemIndex: ' + elemIndex);
							inputsIsValidate = [...inputsIsValidate.slice(0, elemIndex), ...inputsIsValidate.slice(elemIndex + 1)]
							console.log(inputsIsValidate);
						}
					}

					message.textContent = 'Все поля со звездочкой “*” должны быть заполнены';
					message.style.display = 'block';
				} else {
					input.placeholder = input.placeholder.replace('*', '');
					const inputData = checkInput(input);
					if(inputData.bool) {
						if(!inputsIsValidate.includes(inputData.inputname)) {
							inputsIsValidate = [...inputsIsValidate, checkInput(input).inputname];
						}
						console.log(inputsIsValidate);
					} else {
						if(inputsIsValidate.includes(input.name)) {
							const elemIndex = inputsIsValidate.findIndex(inputIsValidate => inputIsValidate === input.name);
							console.log('elemIndex: ' + elemIndex);
							inputsIsValidate = [...inputsIsValidate.slice(0, elemIndex), ...inputsIsValidate.slice(elemIndex + 1)]
							console.log(inputsIsValidate);
						}
					}

					if(inputsIsValidate.length === inputs.length) {
						message.textContent = '';
					}
				}
			});
		});

		document.querySelector(btnName).addEventListener('click', (e) => {
			e.preventDefault();
			
			// let i = 0;

			inputs.forEach(input => {
				if(!input.value){
					if(!input.placeholder.includes('*')) {
						input.placeholder = input.placeholder + '*';
					}

					message.textContent = 'Все поля со звездочкой “*” должны быть заполнены';
					message.style.display = 'block';
				} else {
					// ++i;
				}
			});

			if(inputsIsValidate.length === inputs.length) {
				// console.log('Форма отправлена');
				inputsIsValidate = [];
				formName && resetInputs(inputs, message, inputMessages);
				modalName && closeModal(modal);
				// console.log(document.documentElement.scrollTop)
				// console.log(document.querySelector(alertName).getBoundingClientRect());
				// formName && window.scrollTo({
				// 	top: Number(document.documentElement.scrollTop),
				// 	behavior: "smooth"
				// });
				
				setTimeout(() => {
					alert.style.display = 'block';

					console.log(document.querySelector(alertName))
					formName && window.scrollTo({
						top: Number(document.querySelector(alertName).getBoundingClientRect().top + document.documentElement.scrollTop - headerHeight),
						behavior: "smooth"
					});
				
					setTimeout(() => {
						alert.style.display = 'none';

						formName && window.scrollTo({
							top: Number(document.querySelector(formName).parentElement.parentElement.getBoundingClientRect().top + document.documentElement.scrollTop - headerHeight),
							behavior: "smooth"
						});
					}, 2000);
				}, 200);
			}
		});
	};

	validateForm('.contact-modal', '', '.contact-modal__btn', '.contact-modal__error-message', '.modal__alert', '.contact-modal__error-input');
	validateForm('.partner-modal', '', '.partner-modal__btn', '.partner-modal__error-message', '.modal__alert', '.partner-modal__error-input');
	validateForm('', '.feedback__form', '.feedback-form__btn', '.feedback-form__error-message', '.feedback__alert', '.feedback-form__error-input');
	/* VALIDATION */

	/* ANIMATIONS */
	animations();
	/* ANIMATIONS */
});
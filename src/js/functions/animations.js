export const animations = () => {
	/* INTRO */
	let tlIntro = gsap.timeline({});

	tlIntro.add(gsap.from(".header", {duration: 1, opacity: 0}));
	tlIntro.add(gsap.from(".intro__title", {duration: 1, opacity: 0, y: -40}));
	tlIntro.add(gsap.from(".intro__subtitle", {duration: 1, opacity: 0, x: -40}));
	tlIntro.add(gsap.from(".intro__text", {duration: 1, opacity: 0, x: 40}));
	tlIntro.add(gsap.from(".intro__btn", {duration: 1, opacity: 0, y: 10}));


	// let tl = gsap.timeline({});
    // let splitText = new SplitText('.intro__title', {type: 'chars'});
    // let chars = splitText.chars;
    // tl.from(chars, {duration: 0.6, opacity: 0, x: -10, y: -10, z: -10, rotate: 30, stagger: 0.05});
	/* INTRO */

	/* MEDIA-SERVICE */
	gsap.registerPlugin(ScrollTrigger);

	gsap.to(".media-service__img", {
		scrollTrigger: {
			trigger: '.media-service__img',
			// toggleActions: "restart none none none",
			scrub: true,
			start: "top 80%",
			end: "top 0%",
			// //markers: true
		},
		rotation: 360,
		duration: 1
	});

	gsap.from(".media-service__title", {
		scrollTrigger: {
			trigger: '.media-service__title',
			// scrub: true,
			start: "top 50%",
			end: "top 0%",
			//markers: true
		},
		duration: 2,
		opacity: 0,
		x: -30
	});

	gsap.from(".media-service__info", {
		scrollTrigger: {
			trigger: '.media-service__info',
			// scrub: true,
			start: "top 50%",
			end: "top 0%",
			//markers: true
		},
		duration: 2,
		opacity: 0,
		x: 30
	});

	/* MEDIA-SERVICE */

	/* ADVANTAGES */
	gsap.from(".advantages__info", {
		scrollTrigger: {
			trigger: '.advantages__info',
			// scrub: true,
			start: "top 70%",
			end: "top 0%",
			//markers: true
		},
		duration: 1,
		opacity: 0,
		y: -20
	});

	const advantagesCards = document.querySelectorAll('.advantages__card');

	advantagesCards.forEach(advantagesCard => {
		gsap.from(advantagesCard, {
			scrollTrigger: {
				trigger: advantagesCard,
				// scrub: true,
				start: "top 70%",
				end: "top 0%",
				//markers: true
			},
			duration: 1,
			opacity: 0,
			y: 20
		});
	});
	/* ADVANTAGES */

	/* ADVANTAGES-OPERATION */
	gsap.from(".advantages-operation__title", {
		scrollTrigger: {
			trigger: '.advantages-operation__title',
			// scrub: true,
			start: "top 70%",
			end: "top 0%",
			//markers: true
		},
		duration: 1,
		opacity: 0,
		y: -20
	});

	const advantagesOperationItems = document.querySelectorAll('.advantages-operation__item');

	advantagesOperationItems.forEach(advatagesOperationItem => {
		gsap.from(advatagesOperationItem, {
			scrollTrigger: {
				trigger: advatagesOperationItem,
				// scrub: true,
				start: "top 70%",
				end: "top 0%",
				//markers: true
			},
			duration: 1,
			opacity: 0,
			y: 20
		});
	});
	/* ADVANTAGES-OPERATION */

	/* DEMO */
	gsap.from(".demo__title", {
		scrollTrigger: {
			trigger: '.demo__title',
			// scrub: true,
			start: "top 70%",
			end: "top 0%",
			//markers: true
		},
		duration: 1,
		opacity: 0,
		y: -20
	});

	gsap.from(".demo__img", {
		scrollTrigger: {
			trigger: '.demo__img',
			// scrub: true,
			start: "top 70%",
			end: "top 0%",
			//markers: true
		},
		duration: 1,
		opacity: 0,
		y: 20
	});

	gsap.from(".demo__text", {
		scrollTrigger: {
			trigger: '.demo__text',
			// scrub: true,
			start: "top 70%",
			end: "top 0%",
			//markers: true
		},
		duration: 1,
		opacity: 0,
		y: -20
	});
	
	gsap.from(".demo__btn", {
		scrollTrigger: {
			trigger: '.demo__btn',
			// scrub: true,
			start: "top 70%",
			end: "top 0%",
			//markers: true
		},
		duration: 1,
		opacity: 0,
		y: 20
	});
	
	/* DEMO */

	/* INFORMATION */
	let informationItems = document.querySelectorAll(".information__item");

	informationItems.forEach(informationItem => {
		gsap.from(informationItem, {
			scrollTrigger: {
				trigger: informationItem,
				// scrub: true,
				start: "top 70%",
				end: "top 0%",
				//markers: true
			},
			duration: 1,
			opacity: 0,
			y: 20
		});
	});
	/* INFORMATION */

	/* PLATFORM-COMPONENT */
	gsap.from(".platform-components__top", {
		scrollTrigger: {
			trigger: '.platform-components__top',
			// scrub: true,
			start: "top 70%",
			end: "top 0%",
			//markers: true
		},
		duration: 1,
		opacity: 0,
		y: 20
	});

	const componentItems = document.querySelectorAll('.component-item');

	componentItems.forEach(componentItem => {
		gsap.from(componentItem, {
			scrollTrigger: {
				trigger: componentItem,
				// scrub: true,
				start: "top 70%",
				end: "top 0%",
				//markers: true
			},
			duration: 1,
			opacity: 0,
			y: 20
		});
	});
	/* PLATFORM-COMPONENT */

	/* ARCHITECTURE */
	gsap.from(".architecture__img", {
		scrollTrigger: {
			trigger: '.architecture__img',
			// scrub: true,
			start: "top 70%",
			end: "top 0%",
			//markers: true
		},
		duration: 1,
		opacity: 0,
		y: -30
	});

	const architectureSteps = document.querySelectorAll('.architecture__step');

	architectureSteps.forEach(architectureStep => {
		gsap.from(architectureStep, {
			scrollTrigger: {
				trigger: architectureStep,
				// scrub: true,
				start: "top 70%",
				end: "top 0%",
				//markers: true
			},
			duration: 1,
			opacity: 0,
			y: 20
		});
	});
	/* ARCHITECTURE */

	/* COOPERATION */
	gsap.from(".cooperation__info", {
		scrollTrigger: {
			trigger: '.cooperation__info',
			// scrub: true,
			start: "top 70%",
			end: "top 0%",
			//markers: true
		},
		duration: 1,
		opacity: 0,
		y: -30
	});

	const cooperationItems = document.querySelectorAll('.cooperation__item');

	cooperationItems.forEach(cooperationItem => {
		gsap.from(cooperationItem, {
			scrollTrigger: {
				trigger: cooperationItem,
				// scrub: true,
				start: "top 70%",
				end: "top 0%",
				//markers: true
			},
			duration: 1,
			opacity: 0,
			y: 20
		});
	});

	gsap.from(".cooperation__wrapper-btn ", {
		scrollTrigger: {
			trigger: '.cooperation__wrapper-btn ',
			// scrub: true,
			start: "top 70%",
			end: "top 0%",
			//markers: true
		},
		duration: 1,
		opacity: 0,
		y: 20
	});
	/* COOPERATION */

	/* FEEDBACK */
	gsap.from(".feedback__info", {
		scrollTrigger: {
			trigger: '.feedback__info',
			// scrub: true,
			start: "top 70%",
			end: "top 0%",
			//markers: true
		},
		duration: 1,
		opacity: 0,
		y: -30
	});

	const feedbackInputs = document.querySelectorAll('.feedback-form__input');

	feedbackInputs.forEach(feedbackInput => {
		gsap.from(feedbackInput, {
			scrollTrigger: {
				trigger: feedbackInput,
				// scrub: true,
				start: "top 70%",
				end: "top 0%",
				//markers: true
			},
			duration: 1,
			opacity: 0,
			y: 20
		});
	});

	gsap.from(".feedback__wrapper-btn ", {
		scrollTrigger: {
			trigger: '.feedback__wrapper-btn ',
			// scrub: true,
			start: "top 70%",
			end: "top 0%",
			//markers: true
		},
		duration: 1,
		opacity: 0,
		y: 20
	});
	/* FEEDBACK */
};
// HAMBURG START
const Burger = document.querySelector('.burger');
const Backdrop = document.querySelector('.backdrop');
const Grey = document.querySelector('.greyfield');
const CloseBtn = document.querySelector('.menu-btn');

function MenuOpen(event) {
	event.preventDefault();

	Burger.classList.add('active');
	Backdrop.classList.add('is-open');

	Grey.addEventListener('click', MenuClose);
	CloseBtn.addEventListener('click', MenuClose);
}

function MenuClose(event) {
	event.preventDefault();

	Grey.removeEventListener('click', MenuClose);
	CloseBtn.removeEventListener('click', MenuClose);

	Burger.classList.remove('active');
	Backdrop.classList.remove('is-open');
}

Burger.addEventListener('click', MenuOpen);

// HAMBURG END

//SCROLLMENU START


document.addEventListener('DOMContentLoaded' , () => {
	const onScroll = () => {

		const header = document.querySelector('.header');

		let prevScroll = window.pageYOffset;
		let currentScroll;

		window.addEventListener('scroll' , () => {

			currentScroll = window.pageYOffset;
			
			const headerHidden = () => header.classList.contains('header_hidden')
				
				if (currentScroll > prevScroll && !headerHidden()) {
					header.classList.add('header_hidden');
				}
				if (currentScroll < prevScroll && headerHidden()) {
					header.classList.remove('header_hidden')
				}
				prevScroll = currentScroll;
		})
	}
	onScroll();
})

//SCROLLMENU END
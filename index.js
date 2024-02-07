// HAMBURG START
// const Burger = document.querySelector('.burger');
// const Backdrop = document.querySelector('.backdrop');
// const Grey = document.querySelector('.greyfield');
// const CloseBtn = document.querySelector('.menu-btn');

// function MenuOpen(event) {
// 	event.preventDefault();

// 	Burger.classList.add('active');
// 	Backdrop.classList.add('is-open');

// 	Grey.addEventListener('click', MenuClose);
// 	CloseBtn.addEventListener('click', MenuClose);
// }

// function MenuClose(event) {
// 	event.preventDefault();

// 	Grey.removeEventListener('click', MenuClose);
// 	CloseBtn.removeEventListener('click', MenuClose);

// 	Burger.classList.remove('active');
// 	Backdrop.classList.remove('is-open');
// }

// Burger.addEventListener('click', MenuOpen);

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

//FORM
const TOKEN = '6928321854:AAEg424YNG1sOJwcwyCVnEaWQjMXyAKePOY';
const CHAT_ID = '-1002088725739';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const success = document.getElementById('success');

document.getElementById('tg').addEventListener('submit', function (e) {
    e.preventDefault();

    let message = `<b>Заявка с сайта</b>\n`;
    message += `Отправитель: <b>${this.name.value}</b>\n`;
    message += `Номер телефона: ${this.tel.value}\n`;
    message += `<b>Вопрос:</b> ${this.message.value}\n`;

    axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        this.name.value = '';
        this.tel.value = '';
        this.message.value = '';
        success.innerHTML = 'Сообщение отправлено';
        success.style.display = 'block';
		
    })
    .catch((err) => {
        console.log(err);
    }) 
    .finally(() => {
        console.log('End');
    })
})

//FORM

//DIFFICULTY

//- header 3
//- hero 1
//- about 1
//- services 1
//- consultForm 2
//- feedBack 2
//- footer 1
// res = 11

//DIFFICULTY
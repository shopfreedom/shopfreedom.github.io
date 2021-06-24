
let button1 = document.querySelector('.button1')
let button2 = document.querySelector('.button2')
let button3 = document.querySelector('.button3')

let bodyShop = document.querySelector('.bodyShop')
let textOnline = document.querySelector('.text-serverOnline')
let donate = document.querySelector('.donate')
let footer = document.querySelector('.footer')
// Цикл для h2, rubStatus, imgStatus
let h2 = document.querySelectorAll('h2')
let rubStatus = document.querySelectorAll('.rub_status')
let imgStatus = document.querySelectorAll('.img_status')
function Cikl() {
	for (let j=0; j<h2.length; j++) {
		h2[j].style.color = '#1dcc4b'
	}
	for (let e=0; e<rubStatus.length; e++) {
		rubStatus[e].style.color = '#54ffff'
	}
	for (let u=0; u<imgStatus.length; u++) {
		imgStatus[u].style.backgroundColor = '#c21ade'
	}
}

// Кодим для темной темы
function black() { 
	button1.innerHTML = button2.innerHTML
	bodyShop.style.backgroundColor = 'black'
	textOnline.style.backgroundColor = 'rgb(210 45 216 / 50%)'
	donate.style.backgroundColor = 'rgb(195 35 194 / 70%)'
	footer.style.background = 'linear-gradient(to top, #d62424, #da2ccd)'
	// Отведение курсора от "ВКонтакте"
	vk.onmouseout = () => {
		site_vk.style.color = "yellow"
		vk.style.backgroundColor = "rgb(195 35 194 / 10%)"
		vk.style.transform = "none"
	}
	// Цикл для H2 (статусы, валюты, ключи)
	// Цикл для rubStatus
	Cikl()
}
function mouse1() {
	black()
}
function mouse3() {
	black()
} 

// Кодим для светлой темы
function mouse2() {
	button1.innerHTML = button3.innerHTML
} 
  
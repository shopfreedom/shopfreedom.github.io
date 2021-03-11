let descriptAuto = [
	{text: 'Ford Mustang', image: 'https://avatars.mds.yandex.net/get-zen_doc/169683/pub_5ad387e94bf161b9d896f603_5ad388e0d7bf21f72935aaae/scale_1200'},
	{text: 'Corvette Stingray', image: 'https://avatars.mds.yandex.net/get-zen_doc/57035/pub_5ad387e94bf161b9d896f603_5ad388e0256d5c208b332793/scale_1200'},
	{text: 'Audi R8', image: 'https://avatars.mds.yandex.net/get-zen_doc/224467/pub_5ad387e94bf161b9d896f603_5ad388e1c3321b731d2462c7/scale_2400'},
	{text: 'AutoMobile', image: 'https://avatars.mds.yandex.net/get-zen_doc/18497/pub_5ad387e94bf161b9d896f603_5ad388dca936f4899b1a4cd9/scale_1200'}
]
let knopka = document.querySelector('.button')
let nameAuto = document.querySelector('.nameAuto')
let imgAuto = document.querySelector('.imgAuto') 
let numAuto = 0	

knopka.onclick = () => {
	nameAuto.textContent = descriptAuto[numAuto].text
	imgAuto.src = descriptAuto[numAuto].image
	numAuto++
	if(numAuto >= descriptAuto.length) 
	numAuto = 0
}
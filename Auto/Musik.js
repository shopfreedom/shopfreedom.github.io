// let time = document.querySelector(".time");      // Берём аудио дорожку
// let btnPlay = document.querySelector(".play");   // Берём кнопку проигрывания
// let btnPause = document.querySelector(".pause"); // Берём кнопку паузы
// let btnPrev = document.querySelector(".prev");   // Берём кнопку переключения предыдущего трека
// let btnNext = document.querySelector(".next");   // Берём кнопку переключение следующего трека

let audio = document.querySelector("#audio");    // Берём элемент audio
let leftMusik = document.querySelector('.leftMusik') // переключение назад
let centerMusik = document.querySelector('.centerMusik') // запись или остановка
let rightMusik = document.querySelector('.rightMusik') // переключение вперед
// let audio = document.querySelector('.audio')

let playlist = [ // Аудиозаписи для странички
	'Calvin, DAVA, MIA BOYKA - Пикник.mp3',
	'Cvetocek7 - Этой ночью я умру.mp3',
	'GONE.Fludd - САХАРНЫЙ ЧЕЛОВЕК (PROD. BY SWIFTNESS2H).mp3',
	'MIA BOYKA - АУФ.mp3',
	'NILETTO - Молодым.mp3',
	'Sasha Stone - До безумия.mp3',
	'adioss.mp3',
	'Перфе, Tenderlybae - Не верю.mp3',
	'Dabro - Юность (EDscore Radio Remix) (promodj.com).mp3',
	'Клава Кока feat. Niletto - Краш (Hardphol Remix) (promodj.com).mp3',
	'Gayo_-_Nejna_Remix_.mp3',
	'Миша Марвин & Ханна - Французский Поцелуй (RASEVAN Remix) (www.hotplayer.ru).mp3',
	'Jawsh 685 & Jason Derulo - Savage Love (Laxed - Siren Beat) (Vadim Adamov & Hardphol Remix)(Radio Edit) (promodj.com).mp3',
	'Korel - Кис-кис.mp3',
	'Shawn Mendes, Camila Cabello - Señorita (Rakurs & Major Extended Remix) (promodj.com).mp3',
	'Егор Крид, The Limba - Coco LEau (Lavrushkin & Sasha First Radio mix) (promodj.com).mp3',
	'Ava Max - Salt (Amice Remix) (promodj.com).mp3',
	'Big Baby Tape - Trap Luv (Rakurs & Major Extended Remix) (promodj.com).mp3',
	'Black Eyed Peas, Ozuna & J Rey Soul - MAMACITA (Amice Remix) (promodj.com).mp3'
]
let treck; // Переменная с индексом трека
 
// Событие перед загрузкой страницы
window.onload = function() {
    treck = 0; // Присваиваем переменной ноль
}

function switchTreck (numTreck) {
    // Меняем значение атрибута src
    audio.src = 'Musik/' + playlist[numTreck];
    // Назначаем время песни ноль
    audio.currentTime = 0;
    // Включаем песню
    audio.play();
}

centerMusik.onclick = function() {
    if (audio.paused == true) {
    audio.play();
    }
    else{
    audio.pause();
    }
}

leftMusik.onclick = function() {
    // Проверяем что переменная treck больше нуля
    if (treck > 0) {
        treck--; // Если верно, то уменьшаем переменную на один
        switchTreck(treck); // Меняем песню.
    } else { // Иначе
        treck = playlist.length-1; // Присваиваем три
        switchTreck(treck); // Меняем песню
    }
};

rightMusik.onclick = function() {
    // Проверяем что переменная treck больше трёх
    if (treck < playlist.length-1) { // Если да, то
        treck++; // Увеличиваем её на один
        switchTreck(treck); // Меняем песню 
    } else { // Иначе
        treck = 0; // Присваиваем ей ноль
        switchTreck(treck); // Меняем песню
    }
};

// centerMusik.addEventListener("click", function() {
//     audio.play(); // Запуск песни
//     // Запуск интервала 
//     audioPlay = setInterval(function() {
//         // Получаем значение на какой секунде песня
//         let audioTime = Math.round(audio.currentTime);
//         // Получаем всё время песни
//         let audioLength = Math.round(audio.duration)
//         // Назначаем ширину элементу time
//         time.style.width = (audioTime * 100) / audioLength + '%';
//         // Сравниваем, на какой секунде сейчас трек и всего сколько времени длится
//         // И проверяем что переменная treck меньше четырёх
//         if (audioTime == audioLength && treck < playlist.length-1) {
//             treck++; // То Увеличиваем переменную 
//             switchTreck(treck); // Меняем трек
//         // Иначе проверяем тоже самое, но переменная treck больше или равна четырём
//         } else if (audioTime == audioLength && treck >= playlist.length-1) {
//             treck = 0; // То присваиваем treck ноль
//             switchTreck(treck); // Меняем трек
//         }
//     }, 10)
// });

// centerMusik.addEventListener("click", function() {
//     audio.pause(); // Останавливает песню
//     clearInterval(audioPlay) // Останавливает интервал
// });
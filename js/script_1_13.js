'use strict';

if (4 == 4) {
	console.log("Ok!")
} else {
	console.log('Error');
}

if (4 == 6) {
	console.log("Ok!")
} else {
	console.log('Error');
}

if (1) {
	console.log("Ok!")
} else {
	console.log('Error');
}

const num = 50;
if (num < 49) {
	console.log('Error');
}	else if (num > 100) {
	console.log('Много');
}	else{
		console.log('Ok!');
}

//ТЕРНАРНЫЙ ОПЕРАТОР!!!
(num === 50) ? console.log('Ok!') : console.log('Error');

4 + 4 //Бинарный оператор
+'4' //Унарный оператор работает только с одной строкой


const num = 50;
switch (num) {   //Только строгое сооответствие нельзя использовать больше или равно
	case 49:
		console.log('Неверно');
		break;
	case 100:
		console.log('Неверно');
		break;
	case 50:
		console.log('В точку');
		break;
	default:
		console.log('Не в этот раз');
		break;
}





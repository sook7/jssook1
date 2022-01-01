"use strict";

//alert('Hello');

//const result = confirm('Are you here?');
//console.log(result);

/* const answer = prompt('Вам есть 18?','18');
console.log(answer); //получаем ответ
console.log(typeof(answer)); // typeof позволяет определить тип данных */

// ВСЯ ИНФОРМАЦИЯ КОТОРАЯ ПРИХОДИТ ОТ ПОЛЬЗОВАТЕЛЯ - БУДЕТ В ВИДЕСТРОК!!!

/* const answer = +prompt('Вам есть 18?','врамва'); // динамическая типизация
console.log(answer); // NaN - не число, если вводятся симовлы
console.log(typeof(answer)); // но typeof все равно определяет как числовое значение переменной

const answer_1 = +prompt('Прибавим 5?','7');
console.log(answer_1 + 5);

const answer_2 = prompt('Прибавим 5 к символам?','7');
console.log(answer_2 + 5); //вывод данных: пар5
console.log(typeof(answer_2)); //string */

const answer = [];
answer[0] = prompt('Имя', '');
answer[1] = prompt('Фамилия', '');
answer[5] = prompt('Возраст', '');

// document.write(answer); //выводит все значения на страницу в тело <body>
console.log(typeof(answer)); //object 
console.log(typeof(null)); // object официально признаная ошибка

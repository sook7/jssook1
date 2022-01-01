"use strict";
let number = 4.6;
console.log(number/0); //Infinity - бесконечность
console.log(-number/0); //-Infinity - минус бесконечность
console.log('string'*9); //NaN - не число

const persone = '5'; //строка
const persone = 'Alex'; //строка
const bool = false;

console.log(something); //ошибка срочного типа, мы не можем сослаться на не существующий объект

let und;
console.log(und); // undefined - пустое значение , ничем не заполнено

//ОБЪКТ СОДЕРЖИТ СВОЙСТВА, ИЛИ СВОЙСТВА ОПИСАННЫ ОПРЕДЕЛЕННЫМИ ДАННЫМИ!!!
const obj = {  //объкт с методами
    name: 'Jone',    //это свойства объекта
    age: '25',
    isMarried: false
}

console.log(obj.name);
console.log(obj['name']);

//МАССИВ ЯВЛЯЕТСЯ ЭТО ЧАСТНЫЙ СЛУЧАЙ ОБЪЕКТА!!!
//МАССИВ ЯВЛЯЕТСЯ ЯВЛЯЮТСЯ КОМПЛЕКСНЫМИ ТИПАМИ ДАННЫХ И ВКЛЮЧАЮТ ЛЮБЫЕ ДРУГИЕ ТИПЫ ДАННЫХ!!!

//            0             1        2      3        4    5 
let arr = ['plun.png', 'orange.jpg', 6, 'apple.bmp', {}, []]
console.log(arr[2]);

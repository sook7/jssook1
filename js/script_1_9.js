"use strict";

console.log('arr' + ' - object');
console.log(4 + ' - object');
console.log(4 + + ' - object'); // NaN - не число,
console.log(4 + + '5'); //Унарный плюс


let incr = 10,
	 decr = 10;
//ПОСТРИКСНАЯ
incr++; //Оператор инкримента, т.е. увеличение на единицу
decr--; //Оператор дикримента, т.е. уменишение на единицу
console.log(incr);
console.log(decr);
console.log(incr++);  // = 10 ПОСТРИКСНАЯ форма вначале возращает старое значение
console.log(decr--);  // = 10 ПОСТРИКСНАЯ форма вначале возращает старое значение


let incr1 = 10,
	 decr1 = 10;
//ПРЕФИКСНАЯ
++incr1; //Оператор инкримента, т.е. увеличение на единицу
--decr1; //Оператор дикримента, т.е. уменишение на единицу
console.log(incr1);
console.log(decr1);
console.log(++incr1);  // = 11 ПРЕФИКСНАЯ форма возращает значение расчета
console.log(--decr1);  // = 9 ПРЕФИКСНАЯ форма возращает значение расчета


console.log(5%2);  //остаток деления

console.log(2*2 == 8);   //присваивание
console.log(2*2 == '8');   //присваивание
console.log(2*2 === '8');   //строгое сравнение
console.log(2*2 === 8);   //строгое сравнение

const isChecked = true,
		isClose   = true;
console.log(isChecked && isClose); //оперетор И 

const isChecked = true,
		isClose   = false;
console.log(isChecked && isClose);

const isChecked = true,
		isClose   = false;
console.log(isChecked || isClose);  //оперетор ИЛИ 

const isChecked = true,
		isClose   = false;
console.log(isChecked || !isClose);  //оперетор: ! - обратного значения или отрицания

console.log(2 + 2 * 2 === 8);   //строгое сравнение
console.log(2 + 2 * 2 != 8);   //6 не равно 8
console.log(2 + 2 * 2 !== 6);   //6 не равно 6
console.log(2 + 2 * 2 !== '6');   //6 равно 6



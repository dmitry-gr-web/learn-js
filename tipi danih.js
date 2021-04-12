"use strict";

// Простые типы данных
// числа 1 2 3
// Строики string name записуются в кавычках ""
// Логический тип Boolean true false 
// 
// null  не существует
// undefined существует без значения
// Symbol
// BigInt отображает большие числа

// Объекты
// Массивы []
// Функции
// ОбЪекты даты
// Регулярные выражения
// Ошибки

//Числа
let number = 4;
console.log(4 / 0); // получили бесконечность infinity
console.log('string' * 9); // получили NaN - не число

//Строка
const persone = `alex`; // '5' - тоже строка так как в кавычках

//Логический тип данных
const bool = true; //false/true

// Null
// console.log(something); //не получается вывести something так как его не существует

// Undefined
let und;
console.log(und); // pustaya korobka віводим но в ней ничего нет


//Object
const obj = {
    name: 'Sin sobaki', //kluch - znachenie  name - sin sobaki
    age: 25,
    isMarried: false
};
console.log(obj.name); //obj.name - обращение к name или console.log(obj["name"]);

//Massive
let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp']; //Massivi sozdani dlya raspolozhenie elementov po poryadku
//tolko znachenie, kluchi eto numeracia 0-4
console.log(arr[2]); // нумерация начинается с 0, результатом консоль лог будет orange.jpg
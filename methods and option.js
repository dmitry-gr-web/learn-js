"use strict";

const str = 'test';
const arr = [1, 2, 4]; // =3 kolichestvo elementov vnutri massiva

console.log(arr.length); //length dlina stroki



// const str = 'test';
// const arr = [1, 2, 4]; // =3 kolichestvo elementov vnutri massiva

// console.log(str[2]); //length dlina stroki = S
console.log(str.toUpperCase()); // sdelat TEXT bolshimi
console.log(str.toLowerCase());


let fruit = 'Some fruit';

console.log(fruit.indexOf('fruit')); //poisk pod stroki

const logg = 'hello world';

console.log(logg.slice(6, 10)); // = worl 6-nachalo virezki 10- konec

console.log(logg.substring(6, 10)); // tozhe samoe tolko nelza pisat -6 naprimer

console.log(logg.substr(6, 5)); // 5 = skolko simvolov virezat


const numm = 12.2;
console.log(Math.round(numm)); //okruglenie

const test = '12.2px';
// console.log(parseInt(test)); //sdelat so stroki chisllo i bez px
console.log(parseFloat(test)); //vernut desyatichniy variant bez px
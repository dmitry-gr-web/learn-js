"use strict";
// console.log('arr' + ' - object');

// console.log(5 + ' - object');

// console.log(5 + +'5'); // unarniy plus pered 5 chtobi sdelat so stroki chislo


// let incr = 10,
//     dcr = 10;

// incr++; //uvelichenie na 1 operetor incrimenta, ++ posle postfiksnaya forma zapisi
// dcr--; // umenshenie na 1 operator decrimenta
// console.log(incr);
// console.log(dcr);

// let incr = 10,
//     dcr = 10;

// ++incr; //uvelichenie na 1 operetor incrimenta
// --dcr; // umenshenie na 1 operator decrimenta, -- do prefiksnaya
// console.log(incr);
// console.log(dcr);


// let incr = 10,
//     dcr = 10;


// console.log(incr++); //postfiksnaya forma snachala vozvrashaet staroe znachenie
// console.log(dcr--); // rezyltat 10

let incr = 10, // = prisvaivanie
    dcr = 10;


console.log(++incr);
console.log(--dcr); // rezyltat 11, 9

console.log(5 % 2); //%poluchenie ostatka =1


console.log(2 * 4 == 8); // == sravnenie po znacheniu  != - ne raven
console.log(2 * 4 === 8); // === sravninie po tipu dannih !== - strogo ne raven


// const isChecked = true,
//     isClose = false;
// console.log(isChecked && isClose); //&& operatorr i

// const isChecked = true,
//     isClose = false;
// console.log(isChecked || isClose); // ||- operator ili

const isChecked = false,
    isClose = false;
console.log(isChecked || !isClose); // !-operator otricaniya, menyaet pravdu na lozh i naoborot
//rezyltat = true
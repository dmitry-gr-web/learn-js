"use strict";
let num = 20; //global peremenaya
function showFirstMessage(text) {
    console.log(text);
    num = 10; // let num = 20; //local peremenaya
    console.log(num);
}

showFirstMessage('hello');
console.log(num);

function calc(a, b) {
    return (a + b);
}
console.log(calc(4, 3));
console.log(calc(5, 6));

function ret() {
    let num = 50;


    //// code

    return num; // vozvrashaem rezultat num
} // sozdaetsa do nachala vipolneniya skripta

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log('hello');
};
logger(); // funkcia sozdaetsa kogda do nee dohodit potok cherez peremenuy


// const calculator = (a, b) => a + b; strelochnaya functcia

const calculator = (a, b) => {
    console.log('1');
    return a + b;
};
calculator();
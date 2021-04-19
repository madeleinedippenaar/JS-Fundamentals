// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Madeleine");
// console.log(23);

// let firstName = "Bob";
// console.log(firstName);

// // Variable name conventions //
// let jonas_matilda = "JM";
// let $function = 27;

// let person = "jonas";
// let PI = 3.1415;

// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);

// // Data Types //
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 100);
// console.log(typeof "madeleine");

// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);
// year = 1993;
// console.log(typeof year);

// console.log(typeof null);

// // let, const and var
// let age = 28;
// age = 29;

// const birthYear = 1993;
// // birthYear  = 1992;
// // const job;

// var job = "programmer";
// job = "teacher";

// lastName = "Dippenaar";
// console.log(lastName);

// Basic Operators

//Math Operators
// const now = 2037;
// const ageMadeleine = now - 1993;
// console.log(ageMadeleine);

// const ageRodney = now - 1988;
// console.log(ageRodney, ageMadeleine);

// console.log(ageMadeleine * 2, ageMadeleine / 10, 2 ** 3);
// //2 ** 3 means 2 to the power of 3 = 2 * 2 *2

// const firstName = "Madeleine";
// const lastName = "Dippenaar";
// console.log(firstName + " " + lastName);

// //Assignment Operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1 = 101
// x--; // x = x - 1 = 100
// x--;
// console.log(x);

// //Comparison Operators
// console.log(ageMadeleine > ageRodney); // >, <, >=, <=
// console.log(ageRodney >= 18);

// const isFullAge = ageRodney >= 18;

// console.log(now - 1993 > now - 1988);

// //Operator Presedence
// const now = 2037;
// const ageMadeleine = now - 1993;
// const ageRodney = now - 1988;
// console.log(now - 1993 > now - 1988);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageMadeleine + ageRodney) / 2;
// console.log(ageMadeleine, ageRodney, averageAge);

//Strings and Template Literals

// const firstName = 'Madeleine';
// const job = 'student';
// const birthYear = 1993;
// const currentYear = 2021;

// const madeleine = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' year old ' + job + '!';
// console.log(madeleine);

// const madeleineNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}!`;
// console.log(madeleineNew);

// console.log(`just a regular string`);

// console.log(`string
// with
// multiple
// lines`);

// If/Else statements and making decisions 
const age = 15;

if(age >= 18) {
    console.log('Sarah can start driving license 🥰');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young, wait another ${yearsLeft} years`);
}

const birthYear = 2001;
let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century)

// Type conversion and coercion

//Type conversion 
const inputYear = "1993";
console.log(Number(inputYear) + 18);
console.log(Number(inputYear));
console.log(String(450));

//Type coercion
console.log("I am " + 28 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "3");
console.log("23" > "15");

let n = '1' + 1;
n = n - 1;
console.log(n);
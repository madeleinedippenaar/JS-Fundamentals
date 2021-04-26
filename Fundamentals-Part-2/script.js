'use strict';

///////////////////////////////////////
// Activating Strict Mode

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriverLicense = true;
// if(hasDriversLicense) console.log("I can drive!");

// const interface = "Audio";
// const private = 1;

///////////////////////////////////////
// Functions

function logger() {
    console.log("My name is Madeleine");
}

//calling, running or invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
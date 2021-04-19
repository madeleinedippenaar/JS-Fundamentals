// Assignment 1 Values and Variables //
// let country = "United States of America";
// let continent = "North America";
let population = 300;
// console.log(country);
// console.log(continent);
// console.log(population);

// Assignment 2 Data Types
// let isIsland = false;
// let language;

// console.log(typeof country);
// console.log(typeof continent);
// console.log(typeof population);
// console.log(typeof isIsland);
// console.log(typeof language);

// Assignment 3 let, var and const
const country = "United States of America";
const continent = "North America";
const isIsland = false;
let language = "English";

// Assignment 4 Basic Operators
console.log(population / 2);
population++;
console.log(population);
let finlandPopulation = 6;
console.log(population > finlandPopulation);
let averagePopulation = 33;
console.log(population < averagePopulation);
// const countryDescription =
//   country +
//   " is in " +
//   continent +
//   " and it's " +
//   population +
//   " people speak " +
//   language;
// console.log(countryDescription);



// Assignment 5 Template Literals
const countryDescription = `${country} is in ${continent} and it's ${population} million people speak ${language}`;
console.log(countryDescription);

//Assignment 6 Taking Decisions: if / else Statements
if(population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33000000 - population} million below average`);
}

//Assignment 7 Type Conversion and Coercion
// 1.4
// 2.617
// 3.23
// 4.false
// 5.1143

// Assignment 8 Equality Operators: == vs. ===
const numNeighbors = prompt("How many neighbor countries does your country have?");

if(numNeighbors === 1) {
    console.log("Only 1 border!");
} else if(numNeighbors > 1) {
    console.log("More than 1 border");
} else {
    console.log("No borders");
}


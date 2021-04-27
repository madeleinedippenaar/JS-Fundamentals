///////////////////////////////////////
// Coding Assignment 1 Functions

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and it's capital city is ${capitalCity}`;
}

const descUnitedStates = describeCountry('United States of America', 300, 'Washington D.C');
const descEngland = describeCountry("England", 55, "London");
const descSweden = describeCountry("Sweden", 10, "Stockholm")

console.log(descUnitedStates);
console.log(descEngland);
console.log(descSweden);

///////////////////////////////////////
// Coding Assignment 2 Function declaration and expressions

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const populationUS = percentageOfWorld1(300);
const populationEngland = percentageOfWorld1(55);
const populationSweden = percentageOfWorld1(10);

console.log(populationUS);
console.log(populationEngland);
console.log(populationSweden);

const percentageOfWorld2 = function(population) {
    return (population / 7900) * 100;
}
const populationUS1 = percentageOfWorld2(300);
const populationEngland1 = percentageOfWorld2(55);
const populationSweden1 = percentageOfWorld2(10);

console.log(populationUS);
console.log(populationEngland);
console.log(populationSweden);
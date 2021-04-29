///////////////////////////////////////
// Coding Assignment 1 Functions

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and it's capital city is ${capitalCity}`;
}

const descUnitedStates = describeCountry('United States of America', 300, 'Washington D.C');
const descEngland = describeCountry("England", 55, "London");
const descSweden = describeCountry("Sweden", 10, "Stockholm")

// console.log(descUnitedStates);
// console.log(descEngland);
// console.log(descSweden);

///////////////////////////////////////
// Coding Assignment 2 Function declaration and expressions

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const populationUS1 = percentageOfWorld1(300);
const populationEngland1 = percentageOfWorld1(55);
const populationSweden1 = percentageOfWorld1(10);

// console.log(populationUS1);
// console.log(populationEngland1);
// console.log(populationSweden1);

const percentageOfWorld2 = function(population) {
    return (population / 7900) * 100;
}
const populationUS2 = percentageOfWorld2(300);
const populationEngland2 = percentageOfWorld2(55);
const populationSweden2 = percentageOfWorld2(10);

// console.log(populationUS2);
// console.log(populationEngland2);
// console.log(populationSweden2);

///////////////////////////////////////
// Coding Assignment 3 Arrow Functions

const percentageOfWorld3 = population => {
    return ((population / 7900) * 100).toFixed(2);
}

const populationUS3 = percentageOfWorld3(300);
const populationEngland3 = percentageOfWorld3(55);
const populationSweden3 = percentageOfWorld3(10);

// console.log(populationUS3);
// console.log(populationEngland3);
// console.log(populationSweden3);

///////////////////////////////////////
// Coding Assignment 4 functions calling other functions 

const describePopulation = (country, population) => {
    const percentage = percentageOfWorld3(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world`;
}

// console.log(describePopulation('Portugal', 10));
// console.log(describePopulation('China', 1441));
// console.log(describePopulation('USA', 332));

///////////////////////////////////////
// Coding Assignment 5 introduction to Arrays

const population = [42, 125, 23, 2] // Uganda, Japan, Taiwan, Qatar
console.log(population.length === 4);

const percentages = [percentageOfWorld3(population[0]), percentageOfWorld3(population[1]),percentageOfWorld3(population[2]), percentageOfWorld3(population[population.length -1])];

console.log(percentages);

///////////////////////////////////////
// Coding Assignment 6 Basic Array Operations (models)

const neighbors = ['Australia', 'Poland', 'France'];
neighbors.push('Utopia');
console.log(neighbors);
neighbors.pop();
console.log(neighbors);

if(!neighbors.includes('Germany')) {
    console.log('Probably not a Central European Country :D');
}

neighbors[neighbors.indexOf('Sweden')] = 'Republic of Sweden';

console.log(neighbors)

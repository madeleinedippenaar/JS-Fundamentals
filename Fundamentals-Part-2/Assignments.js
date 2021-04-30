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
// console.log(population.length === 4);

const percentages = [percentageOfWorld3(population[0]), percentageOfWorld3(population[1]),percentageOfWorld3(population[2]), percentageOfWorld3(population[population.length -1])];
// console.log('---ARRAY PERCENTAGe---');
// console.log(percentages);

///////////////////////////////////////
// Coding Assignment 6 Basic Array Operations (models)

const neighbors = ['Australia', 'Poland', 'France'];
neighbors.push('Utopia');
// console.log(neighbors);
neighbors.pop();
// console.log(neighbors);

if(!neighbors.includes('Germany')) {
    // console.log('Probably not a Central European Country :D');
}

neighbors[neighbors.indexOf('Sweden')] = 'Republic of Sweden';

// console.log(neighbors)

///////////////////////////////////////
// Coding Assignment 7 Introduction to Objects & Coding Assignment 9 Object Methods

const myCountry = {
    country: 'United States of America',
    capital: 'Washington D.C',
    language: 'English',
    population: 300,
    neighbors: ['Canada', 'Mexico'],
    describe: function() {
        return `${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbors.length} neighboring countries, and a capital called ${this.capital}`
    },
    checkIsland: function() {
        this.isIsland = this.neighbors.length === 0 ? true : false;
    }
};

// console.log(myCountry.describe());
// console.log(myCountry);

///////////////////////////////////////
// Coding Assignment 8 Dot vs. Bracket Notation

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbors.length} neighboring countries, and a capital called ${myCountry.capital}`);

myCountry.population += 2;
// console.log(myCountry.population);
myCountry['population'] -= 2;
// console.log(myCountry.population);

///////////////////////////////////////
// Coding Assingment 10 the for loop

for(let person = 1; person <= 50; person++) {
    // console.log(`Vote number ${person} is currently voting`);
}

///////////////////////////////////////
// Coding Assingment 11 Looping Arrays, Breaking and Continuing

const population1 = [42, 125, 23, 2]
const percentages2 = [];

// for(let i = 0; i < population1.length; i++) {
//     //one way to do it
//     // percentages2.push(((population1[i] / 7900) * 100).toFixed(2));
//     //second way to do it
//     const perc = percentageOfWorld3(population[i]);
//     percentages2.push(perc);
// }
// console.log('---LOOPING ARRAYS---')
// console.log(percentages2);

///////////////////////////////////////
// Coding Assingment 12 Looping Backwards and Loops in Loops

const listOfNeighbors = [
    ['Canada', 'Mexico'],
    ['Spain'], 
    ['Norway', 'Sweden', 'Russia']
];
console.log(listOfNeighbors);

for(let i = 0; i < listOfNeighbors.length; i++){
    for(let y = 0; y < listOfNeighbors[i].length; y++){
        console.log(`Neighbor: ${listOfNeighbors[i][y]}`);
    }
}

// Coding Assingment 13 The while Loop
const percentages3 = [];
let i = 0;
while (i < population1.length) {
    const perc = percentageOfWorld3(population[i]);
        percentages3.push(perc);
        i++;
}
console.log(percentages3);




///////////////////////////////////////
// Coding Challenge 1 Functions

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and it's capital city is ${capitalCity}`;
}

const descUnitedStates = describeCountry('United States of America', 300, 'Washington D.C');
const descEngland = describeCountry("England", 55, "London");
const descSweden = describeCountry("Sweden", 10, "Stockholm")

console.log(descUnitedStates);
console.log(descEngland);
console.log(descSweden);
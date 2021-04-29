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
// logger();
// logger();
// logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

///////////////////////////////////////
// Function Declarations and Expressions


// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

// const age1= calcAge1(1993);

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// const age2 = calcAge2(1993);

// console.log(age1, age2);

///////////////////////////////////////
// Arrow Function

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1993)
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirment = 65 - age;
//     // return retirment;
//     return `${firstName} retires in ${retirment} years`;
// }
// console.log(yearsUntilRetirement(1993, "Madeleine"));
// console.log(yearsUntilRetirement(1979, "Bob"));

///////////////////////////////////////
// functions calling other functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
  }

//   console.log(fruitProcessor(2,3)); 

  ///////////////////////////////////////
// FUNCTIONS REVIEW

// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }

const yearsUntilRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirment = 65 - age;
    if(retirment > 0) {
        console.log(`${firstName} retires in ${retirment} years`);
        return retirment;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }
}

// console.log(yearsUntilRetirement(1993, 'Madeleine'));
// console.log(yearsUntilRetirement(1960, 'Mike'));

  ///////////////////////////////////////
// Introduction to Arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

const y = new Array(1991, 1992, 1993, 2020);
// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length -1]);

friends[2] = 'Jay';
// console.log(friends);

const firstName = "Madeleine";

// const madeleine = [firstName, "Dippenaar", 2037 - 1993, "Student", friends];
// console.log(madeleine);
// console.log(madeleine.length);

// Exercise
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2019, 2018];

//This is not how you calculate the age with an array
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length -1]);
// console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length -1])];

// console.log(ages);

  ///////////////////////////////////////
// Basic Array Models (Methods)

const friends2 = ['Michael', 'Steven', 'Peter'];

//Adding elements with methods
const newLength = friends2.push('Jay');
// console.log(friends2);
// console.log(newLength);
friends2.unshift('John');
// console.log(friends2);

//Removing elements with methods
friends2.pop();
const popped = friends2.pop();
// console.log(friends2);
// console.log(popped);

friends2.shift();
// console.log(friends2);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend named Steven');
}

  ///////////////////////////////////////
// Introduction to Objects

// const madeleine = {
//     firstName: 'Madeleine',
//     lastName: 'Dippenaar',
//     age: 2037-1993,
//     job: 'Student',
//     friends: ['Steven', 'Jacob', 'Jonas']
// };

// console.log(madeleine);

  ///////////////////////////////////////
// Dot versus bracket notation

// const madeleine = {
//     firstName: 'Madeleine',
//     lastName: 'Dippenaar',
//     age: 2037-1993,
//     job: 'Student',
//     friends: ['Steven', 'Jacob', 'Jonas']
// };

// console.log(madeleine.lastName);
// console.log(madeleine['lastName']);

// const nameKey = 'Name';
// console.log(madeleine['first' + nameKey]);
// console.log(madeleine['last' + nameKey]);

//You cannot concatinate with dot in this way
// console.log(madeleine.'last' + nameKey);

// const interestedIn = prompt('What do you want to know about Madeleine? Choose between firstName, lastName, age, job, and friends')

// if(madeleine[interestedIn]) {
//     console.log(madeleine[interestedIn]);
// }else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
// }

// madeleine.location = 'United States';
// madeleine['twitter'] = '@madeleinedipps'
// console.log(madeleine);

//Challenge
// console.log(`${madeleine.firstName} has ${madeleine.friends.length} friends, ${madeleine.friends[0]} is her best friend`);

  ///////////////////////////////////////
// Object Methods

const madeleine = {
    firstName: 'Madeleine',
    lastName: 'Dippenaar',
    birthYear: 1993,
    job: 'Student',
    friends: ['Steven', 'Jacob', 'Jonas'],
    hasDriversLicense: false,
    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }
    // calcAge: function() {
    //     // console.log(this);
    //     return 2037 - this.birthYear
    // }
    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and she has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`
    }
};

console.log(madeleine.calcAge());
console.log(madeleine.age);
console.log(madeleine.age);
console.log(madeleine.age);
// console.log(madeleine['calcAge'](1995));

//Challenge
console.log(madeleine.getSummary());



'use strict';
//function constructors do not work with arrow functions
const Person = function(firstName, birthYear) {
    //instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    //never  create a method inside a constructor func.
    // this.calcAge = function() {
    //     console.log(2021 - this.birthYear);
    // };
};

const maddy = new Person('Madeleine', 1993);
console.log(maddy);

// 1. New {} is created
// 2. Function is called, this keyword is the new empty object.
// 3. Object is linked to prototype
// 4. Function automatically returns object

const jonas = new Person('Jonas', 1991);
const jack = new Person('Jack', 1975);
console.log(jonas, jack);
const jay = 'Jay';
console.log(maddy instanceof Person);
console.log(jay instanceof Person);

//////////////////////////////////
///////////PROTOTYPES////////////////
console.log(Person.prototype);

Person.prototype.calcAge = function() {
        console.log(2021 - this.birthYear);
};

maddy.calcAge();
jonas.calcAge();
jack.calcAge();

console.log(maddy.__proto__);
console.log(Person.prototype.isPrototypeOf(maddy));

Person.prototype.species = 'Homo Sapiens';
console.log(maddy, jonas);
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

Person.hey = function() {
    console.log('Hey there 🥳');
    console.log(this);
};
Person.hey();
//cannot inherit
// jonas.hey();
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

///////////////////////////////////
//////Prototypal Inheritance on built-in objects
console.log('----Prototypal Inheritance on built-in objects');

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
//object.prototype is the top of the chain
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [5, 6,7,99,4,3,5,7,8,];
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function() {
    return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);


/////////////////////
///CODING CHALLENGE 1

const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going ${this.speed} km/h`);
};

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
console.log(bmw);

const mercedes = new Car('Mercedes', 95);
console.log(mercedes);

bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();

//////////////////////////
/////ES6 CLASSES/////////////
console.log('-----CLASSES');

// class expression
const PersonCL1 = class {
};
//class declaration
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    };
    //instance methods
    calcAge() {
        console.log(2021 - this.birthYear)
    };
    get age() {
        return 2037 - this.birthYear;
    };
    // set fullName(name) {
    //     console.log(name);
    //     if(name.includes(' ')) this._fullName = name;
    //     else alert(`${name} is not a full name`);
    // }

    // get fullName() {
    //     return this._fullName;
    // }

    //static methods
    static hey() {
        console.log('Hey there 🥳');
    }
};

const jessica = new PersonCl('Jessica Davis', 1998);
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function() {
    console.log(`Hey ${this.firstName}!!`);
};

jessica.greet();

//1. classes are not hoisted
//2. classes are first-class citizes
//3. classes are executed in strict mode

const walter = new PersonCl('Walter', 1965);
PersonCl.hey();

////////SETTERS AND GETTERS
console.log('-----SETTERS AND GETTERS');

const account = {
    owner: 'Madeleine',
    movements: [200, 530, 120, 300],
    get latest() {
        return this.movements.slice(-1).pop();
    },
    set latest(move) {
        this.movements.push(move);
    },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);
console.log(jessica.age);

///////////////////////////////////
/////OBJECT.CREATE
const PersonProto = {
    calcAge() {
        console.log(2021 - this.birthYear)
    },
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__);

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1979);
sarah.calcAge();
console.log(sarah);

//////////coding challenge 2

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    };
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going ${this.speed} km/h`);
    };
    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going ${this.speed} km/h`);
    };
    get speedUS() {
        return this.speed / 1.6
    };
    set speedUS(speed) {
        this.speed = this.speed * 1.6;
    };
};

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);



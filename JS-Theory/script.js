'use strict';

///////////////////////////////////////
// Scoping in Practice
// function calcAge(birthYear) {
//     const age = 2021 - birthYear;
//     console.log(firstName);
//     function printAge() {
//         let output = `${firstName} is ${age} born in ${birthYear}`;
//         console.log(output);

//         if(birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;

//             //creating NEW variable with same name as outer scopes variable 
//             const firstName = 'Steven';

//             //reassigning outer scopes variable
//             output = 'NEW OUTPUT';

//             const str = `Oh and you're a millenial ${firstName}`;
//             console.log(str);
//             function add (a, b) {
//                 return a + b;
//             }

//         }
//         console.log(millenial); // shows that var is not block scoped. accessible
//         // console.log(add(2,3)); // can only be accessed with strict mode off. this shows functions are block scoped in ES6///
//         console.log(output); // manipulated an existing variable inside of a child scope, inside of an inner scope
//     }
//     // printAge();
//     // return age;
// }

// const firstName = 'Madeleine'
// // calcAge(1993);

// ///////////////////////////////////////
// // Hoisting and TDZ in Practice

// //variables
// // console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Madeleine';
// let job = 'Student';
// const year = 1993;

//functions

// console.log(addDec(1,2));
// console.log(addExpress(1,2));
// console.log(addArrow);
// console.log(addArrow(1,2));

function addDec(a,b) {
    return a + b;
}
const  addExpress = function(a, b) {
    return a + a;
}
var  addArrow = (a,b) => a + b;

//example for hoisting and TDZ
// if(!numberProducts) {
//     console.log(numberProducts);
//     deleteShoppingCart();
// }



// let numberProducts = 10;


function deleteShoppingCart() {
    console.log('all products deleted');
}

var x = 1;
let y = 2;
const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

///////////////////////////////////////
// The this Keyword in Practice

// console.log(this);

function calcAge(birthYear) {
    console.log(2021 - birthYear);
    console.log(this);
}
// calcAge(1993);

const calAgeArrow = birthYear => {
    console.log(2021 - birthYear);   
    console.log(this);
};
// calAgeArrow(1993);

// const madeleine = {
//     year: 1993,
//     calAge: function() {
//         console.log(this);
//         console.log(2021 - this.year);
//     }
// }
// madeleine.calAge();

//method borrowing
// const matilda = {
//     year: 2017,
// }

// matilda.calAge = madeleine.calAge;
// matilda.calAge();

// const f = madeleine.calAge;
// f();

///////////////////////////////////////
// Regular Functions vs. Arrow Functions
const madeleine = {
    firstName: 'Madeleine',
    year: 1993,
    calAge: function() {
        console.log(this);
        console.log(2021 - this.year);

        //solution 1
        // const self = this;
        // const isMillenial = function() {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        //     // console.log(this.year >= 1981 && this.year <= 1996);
        // };

        //solution 2
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        // const isMillenial = function() {
        //     console.log(this);
        //     console.log(this.year >= 1981 && this.year <= 1996);
        //     // console.log(this.year >= 1981 && this.year <= 1996);
        // };
        isMillenial();
    },
    // greet = () => console.log(`hey ${this.firstName}`)
};

// madeleine.greet();
// madeleine.calAge();

//arugments keyword
// const addExpression = function(a,b) {
//     console.log(arguments);
//     return a + b;
// }
// addExpression(1,1);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

///////////////////////////////////////
// Objects vs. primitives

let age = 30;
let oldAge = age;
age = 31;

// console.log(oldAge);

const me = {
    name: 'madeleine',
    age: 28
}

const friend = me;
friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me:', me);

//primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

// console.log(lastName, oldLastName);

//reference types 
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27
};

// it does not create a new object, just another variable in the stack that holds a reference to the original object. same memory address
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
// console.log('Before marriage:', jessica);
// console.log('After:', marriedJessica);

//copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['mom', 'sister', 'dad']
};
//this creates a copy where you can manipulate the property values. only creates a shallow copy, not a deep clone i.e arrays as properties
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
// console.log(jessica2);
// console.log(jessicaCopy);
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('john');
// console.log(jessica2);
// console.log(jessicaCopy);





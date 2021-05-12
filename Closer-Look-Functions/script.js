'use strict';

//////////////////DEFAULT PARAMETERS
console.log('------DEFAULT PARAMETERS-------');

const bookings = [];

const createBooking = function(flightNum, 
    numPassengers = 1, 
    price = 199 * numPassengers) {
    //ES5 way
    // numPassengers = numPassengers || 1;
    // price = price || 199;
    //ES6 way you add the = 1 or = whatever in the parameters
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking("LH123", 4)
createBooking('LH123', undefined, 1000);

////////HOW PASSING ARGUMENTS WORKS: VALUE VERSUS REFERENCE///////
console.log('------HOW PASSING ARGUMENTS WORKS------');

const flight = 'LH234';
const maddy = {
    name: 'Madeleine Dippenaar',
    passport: 456789
};
const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Ms. ' + passenger.name;

    if(passenger.passport === 456789) {
        // alert('CHECK IN') //commented out to stop prompting
    } else {
        // alert('WRONG PASSPORT')//commented out to stop prompting
    }
}

// checkIn(flight, maddy);
// console.log(flight);
// console.log(maddy);

/// IS THE SAME AS DOING
const flightNum = flight;
const passenger = maddy;

///passing a primitve value in an argument is creating a copy, versus a reference type like an object which points to the same data to be manipulate. strings are primitive.

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 100000);
};

newPassport(maddy);
checkIn(flight, maddy);
console.log(maddy);

/// the above changed the object in the original which causes issues. returns checked in and then after wrong passport

/////FIRST CLASS AND HIGHER-ORDER FUNCTIONS///////

console.log('---FIRST CLASS AND HIGHER-ORDER FUNCTIONS---');
////SEE NOTES YOU WROTE DOWN, NOT ANY PRACTICE IN THIS SECTION

/////FUNCTIONS ACCEPTING CALLBACK FUNCTIONS///////
console.log('---FUNCTIONS ACCEPTING CALLBACK FUNCTIONS---');

const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}
const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}
//HIGHER ORDER FUNCTION, TAKES IN A FUNCTION
const transformer = function(str, fn) {
    console.log(`original string: ${str}`);
    console.log(`transformed string: ${fn(str)}`);

    console.log(`transformed by: ${fn.name}`);
}

//the function being passed into transformed is called the callback function
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const highFive = function() {
    console.log('👏🏻');
}

//JS USES CALLBACKS ALL THE TIME
//the callback function is called the event handler which in this case is the highFive function, and addEventListened is higher order function
document.body.addEventListener('click', highFive);

//the highFive is the callback on this forEach loop
['Madeleine', 'Jonas', 'Martha', 'Adam'].forEach(highFive);

//callback functions allow us to create abstractions
//abstraction means we hide the detail of some code implimentation because we dont reall need to know about all the detail. allows us to think about problems at a higher level.

/////FUNCTIONS RETURNING FUNCTIONS///////
console.log('---FUNCTIONS RETURNING FUNCTIONS---');

const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}
const greeterHey = greet('Hey');
greeterHey('Madeleine');
greeterHey('Jonas');

//this works as well
greet('HELLO!!')('MADELEINE!!');

//trying to rewrite the first function as an arrow function 

const greetArrow = greeting => name =>  console.log(`${greeting} ${name}`); 

greetArrow('SUP')('SHIANNE');

/////THE CALL AND APPLY METHODS///////
console.log('---THE CALL AND APPLY METHODS---');

const united = {
    airline: 'United',
    code: 'UI',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.code}${flightNum}`);
        this.bookings.push({flight: ` ${this.code}${flightNum}`, name})
    },
};

united.book(239, 'Madeleine Dippenaar');
united.book(635, 'John Smith');
console.log(united);

const eurowings = {
    airline: 'Eurowings',
    code: 'EW',
    bookings: [],
};

const book = united.book;
//does not work!
// book(23, 'Sarah Williams');

//call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(united, '239', 'Mary Cooper');
console.log(united);

const swiss = {
    airline: 'Swiss Airlines',
    code: 'SA',
    bookings: [],
}

book.call(swiss, 455, 'Dalton Fross');
console.log(swiss);

//apply method
const flightData = [347, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);
//APPLY IS NOT REALLY USED A LOT IN MODERN JS

//USE SPREAD AND CALL TO SPREAD OUT THE ARGUMENTS IS MORE MODERN JS 
book.call(swiss, ...flightData);
console.log(swiss);

/////THE BIND METHOD///////
console.log('---THE BIND METHOD---');
//book.call(eurowings, 23, 'Sarah Williams');

//this sets this keyword in stone
const bookEW =book.bind(eurowings);
const bookUA = book.bind(united);
const bookSA = book.bind(swiss);
bookEW(455, 'Steven Williams')
console.log(eurowings);

//this sets argument in stone
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Martina Fallen');
bookEW23('Madeleine Dippenaar');

//with event listeners 
united.planes = 300;
united.buyPlane = function() {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};
// united.buyPlane();
// united.buyPlane();
// united.buyPlane();

//this will set the this keyword in an event handler so it will point point the this keyword to the element
document.querySelector('.buy').addEventListener('click', united.buyPlane.bind(united));

//partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1,200));
const addSalesTax = addTax.bind(null, 0.06); 
//the above is the same as whats written below
// addSalesTax = value => value + value * 0.06
console.log(addSalesTax(145));
//order of arguments are important!!!!

//same function as above with returns, functions within functions without binding
const addTaxRate = function(rate) {
    return function(value) {
        return value + value * rate;
    }
}
const addSales = addTaxRate(0.06);
console.log(addSales(100));

//CODING CHALENGE 1
console.log('------coding challenge 1---------');
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        //get answer
        const answer = Number(prompt(`${this.question}\n ${this.options.join('\n')}\n(Write option number)`));
        console.log(answer);
        //register / update answers with short circuiting
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

       this.displayResults();
       this.displayResults('string');
    },
    displayResults(type = 'array') {
        if(type === 'array') {
            console.log(this.answers);
        } else if(type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    }
};
// poll.registerNewAnswer();
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));



//// IIFE IMMEDIATELY INVOKED FUNCTION EXPRESSIONS//////
console.log('-----IIFE IMMEDIATELY INVOKED FUNCTION EXPRESSIONS--------');

///not the way to do it, you can always run this again if you called the function 
const runOnce = function() {
    console.log('this will never run again');
}
runOnce();

//how to run an IIFE
(function() {
    console.log('this will never run again');
});
//the above will log the text to the console once. 
(() => console.log('this will ALSO never run again'))();

//why was this invented? functions create scopes. cant access variables inside of functions because of scoping. global scope does not have access to funcion scopes. all data defined inside a scope is private/encapsulated.

//more a pattern not a feature. IIFE are not really used anymore, you can just create a block like below

// {
//     const isPrivate = 23;
//     var notPrivate = 45;
// }

////CLOSURES AND MORE CLOSURES//////
console.log('-------CLOSURES AND MORE CLOSURES-----');

const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();
booker();
booker();
booker();

//see notes you wrote down.

console.dir(booker);


///example 1 for closures
let f;
const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
    }
}
const h = function() {
    const b = 8;
    f = function() {
        console.log(b * 2);
    }
}

g();
f();
console.dir(f);
//re-assigning f function
h();
f();
console.dir(f);

//example 2 of closures///
const boardPassengers = function(n, wait) {
    const perGroup = n/3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000)


    console.log(`Will start boarding in ${wait} seconds`);
};

// const perGroup = 1000;
boardPassengers(180, 3);

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/
//how i did it
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.body.onclick = changeColor;
    function changeColor() {
        header.style.color = 'blue';
    }
})();

//how jonas did it 
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click', function() {
        header.style.color = 'blue';
    });
})();
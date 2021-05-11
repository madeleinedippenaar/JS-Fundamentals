'use strict';


  /////////Destructuring Arrays
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({
    starterIndex = 1, 
    mainIndex = 0, 
    time = "20:00", 
    address}) {
    // console.log(`Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivere to ${address} at ${time}`);
  },
  orderPasta(ing1, ing2, ing3) {
    // console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    // console.log(mainIngredient);
    // console.log(otherIngredients);
  }
};
const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

const [x,y,z] = arr;

// console.log(x,y,z);
// console.log(arr);

//temporary variable in the middle to switch the array values in destructuring 
let [main, ,second] = restaurant.categories; //
// console.log(main,second);

// const temp = main;
// main = second;
// second = temp;
// console.log(main, second);

[main, second] = [second, main]
// console.log(main, second);

// console.log(restaurant.order(2,0));

//receive two return values from a function with destructuring 
const [starter, mainCourse] = restaurant.order(2,0);
// console.log(starter, mainCourse);

const nested = [2,4, [5,6]];

//desturcting an array inside another array (nested)
// const [i, ,j] = nested;
// console.log(i,j);
const [i, ,[j,k]] = nested;
// console.log(i,j,k);

//default values
const [p=1,q=1,r=1] = [8,9];
// console.log(p,q,r);

//////////////////
//Destructuring Objects

const {name, openingHours, categories} = restaurant;

// console.log(name, openingHours, categories);
//how you can rename your properties whe destructuring an object
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags);

//default values
// const { menu = [], starterMenu: starters=[]} = restaurant;
// console.log(menu, starters);

////////Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

//cant do this to destructure, expecting a value after =
//  {a,b} = obj;
//wrapping it will resolve 
({ a, b } = obj);
// console.log(a,b);

//nested objects///

const {fri: {open: o, close: c}} = openingHours;
// console.log(o, c);
restaurant.orderDelivery({
  address: '2911 Chamberlain Ave',
  starterIndex: 1
})

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

///////////////The Spread Operator

const array = [7, 8, 9];

const badNewAray = [1,2, array[0], array[1], array[2]];
// console.log(badNewAray);

const newArray = [1,2, ...array];
// console.log(newArray);

// console.log(...newArray);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);
// spread operator takes all elements out of an array and it also doesnt create new variables, can only use it in places where we would write values seperated by commas.

//copy array 
const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

//joing two arrays or more
const menuJoin = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menuJoin);

//iterables are things like all arrays, strings, maps or sets. but not objects 

const str = "Madeleine";
const letters = [...str, ' ', 'E.'];
// console.log(letters);
// console.log(...str);
// cannot use it in a literal template
// console.log(`${...str} Dippenaar`);

///REAL WORLD EXAMPLE
// const ingredients = [
// prompt('Let\'s make pasta! Ingredient 1?'), 
// prompt("Ingredient 2?"), 
// prompt("Ingredient 3?")];

// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Mama Mia'}
// console.log(newRestaurant);

///CREATED A COPY TO CHANGE A PROPERTY
const restaurantCopy = {...restaurant};
restaurantCopy.name = "Ristorante Roma";
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

/////////Rest pattern
//destructuring//
//spread because on right side of operator 
// const spreadArray = [1,2 ...[3, 4]];

//rest because on left sign on operator 
const [m, d, ...others] = [1, 2, 3, 4, 5];
// console.log(m, d, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);

//Objects and rest patterns
const { sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);
//functions //
const add = function(...numbers) {
  let sum = 0;
  for(let i = 0; i < numbers.length; i++)
    sum += numbers[i];
    // console.log(sum);
};
// add(2,3);
// add(5,3, 7, 2);
// add(8,2,5,3,2,1,4);

const xVar = [23, 5, 7];
// add(...xVar);

// restaurant.orderPizza('Mushrooms', 'Onion', "olives", 'Spinach');
// restaurant.orderPizza('Mushrooms');

/////////////////////
// Short Circuiting (&& and || )

//use any data type
//return any data type
//short circuiting or short-circuit evaluation 
// console.log(3 || 'Madeleine');
// console.log('' || "Madeleine");
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guest1 =restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

const guests2 = restaurant.numGuests || 10
// console.log(guests2);

// console.log("------------ AND ----------");

// console.log(0 && 'Madeleine');
// console.log(7 && 'Madeleine');
// console.log('Hello' && 23 && null && 'Madeleine');

//Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('Mushrooms', 'Spinach');
};

// restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'Olives');

/////////////////////
//the mullush coalescing operator(??)

//nullish values: null or undefined. (not 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

//////////////////////
// the for of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i+1}: ${el}`);
};
// console.log([...menu.entries()]);


////optional chaining (?.)

// if(restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// with optional chaining 
//only if the property before the question mark exists will a value return, otherswise its undefined, which gets rid of the error
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours.mon.open);
// console.log(restaurant.openingHours?.mon?.open);

///real world example

const days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  // console.log(`On ${day} we open at ${open}`);
}
//methods and optional chaining 
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist');
//arrays and optional chaining 
const users = [{name: 'Madeleine', email: 'hello@maddy.io'}];
// const users = [];

// console.log(users[0]?.name ?? 'user array empty');
//writing the above is the short winded way to write what is below
if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');

//looping objects: object kets, values and entries//////////////////////////////////////////////////

//property NAMES
const properties = Object.keys(openingHours);
// console.log(properties);

let openStr = `we are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `
}
// console.log(openStr);

//property VALUES
const values = Object.values(openingHours);
// console.log(values);

//property ENTRIES
const entry = Object.entries(openingHours);
// console.log(entry);

for(const [key, {open, close}] of entry) {
  // console.log(`On ${key} we open at ${open} and close at ${close}`);
}

//////////sets/////////

//a collection of unique values, no duplicates
const ordersSet = new Set([
'Pasta', 
'Pizza', 
'Pizza', 
'Risotto', 
'Pasta', 
'Pizza']);
// console.log(ordersSet);
// console.log(new Set('Madeleine'));

//sets use size and not length
// console.log(ordersSet.size);
//has method similar to includes in arrays
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
//only one GB gets added, second one gets ignored
console.log(ordersSet);
//delete elemts, deleting risotto
ordersSet.delete('Risotto');
// console.log(ordersSet);
//cannot get any data out of a set. all values are unique and order does not matter, no point in retrieving, only need to know if a value is in a set or not, which is why has method exists
// ordersSet.clear(); //you can clear the whole set
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

//big use case for sets to remove duplicate values of arrays EXAMPLE

const staff = ['waiter', 'chef', 'waiter', 'manager','chef', 'waiter'];
const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(['waiter', 'chef', 'waiter', 'manager','chef', 'waiter']).size
// );
// console.log(new Set('madeleinedippenaar').size);

////////////MAPS///////////////
console.log('---------MAPS-------------');
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23).set(true, 'We are open').set(false, 'We are closed');
//data types matter!!!
// console.log(rest.get('name'));
// console.log(rest.get(true));

const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
//delete with key
// console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
const arr1 = [1,2];
rest.set(arr1, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr1));

////////////maps iteration////////

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'try again']
]);

// console.log(question);

//convert object to map
// console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

//maps are also itterables 

//quiz app
// console.log(question.get('question'));
for (const [key,value] of question) {
  if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
};
// const answer = Number(prompt('Your answer'));
const answer = 3;
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));


//convert map to array
// console.log([...question]);
///////////////////
/////WORKING WITH STRINGS
////////////////////////////
console.log('-------working with strings-------');
const airline = 'TAP Air Portugal';
// const plane = 'A320';
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);
// console.log(airline.length);
// console.log('B737'.length);

// //strings have methods
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// //these methods always return a new string
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ')+1));
// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

const checkMiddleSeat = function(seat) {
  //b and e are middle seats
  const s = seat.slice(-1);
  if(s === 'B' || s === 'E') {
    console.log('You got the middle seat');
  }else {
    console.log('You got lucky!');
  }
};

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');
//////////string part 2

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//correcting CAPITALIZATION ERRORS
const passenger = 'mAdDs'; //Madds
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//comparing emails
const email = 'hello@maddy.io';
const loginEmail = '  Hello@Maddy.Io \n' ;
const lowerEmail = loginEmail.toLowerCase();
const trimmer = lowerEmail.trim();
console.log(trimmer);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

////replacing

const priceGB = '288,97£'
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Board door 23!';
console.log(announcement.replace('door', 'gate'));
//replaced both doors with gate, replace method is case sensitive
console.log(announcement.replace(/door/g, 'gate'));

//booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if(plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new Airbus Family');
}

//practice exercise
const checkBaggage = function(items) {
  const baggage = items.toLowerCase();
  if(baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
}

checkBaggage('I have a laptop, some Food, and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');


//////split and join
console.log('a+very+nice+string'.split('+'));
console.log('Madeleine Dipenaar'.split(' '));

const [firstName, lastName] = 'Madeleine Dipenaar'.split(' ');
console.log(firstName, lastName);

const newName = ['Ms.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name) {
  const names = name.split(' ');
  const namesUpper = [];
  for(const n of names) {

    //namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
}

capitalizeName('jessica ann smith davis');
capitalizeName('madeleine elizabeth dippenaar');

//padding a string
const message = 'Go to gate 23';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Maddy'.padStart(25, '+').padEnd(35, '+'));

//real world example
const maskCreditCard = function(number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
  
}

console.log(maskCreditCard(329823409823));
console.log(maskCreditCard('32982345345345409823'));

///Repeat method
const message2 = 'Bad weather.... All Departures Delayed... '
console.log(message2.repeat(5));

const planesInLine = function(n) {
  console.log(`there are ${n} planes in line ${'✈️'.repeat(n)}`);
}

planesInLine(5);
planesInLine(2);
planesInLine(10);

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

console.log(flights.split('+'));
const getCode = str => str.slice(0,3).toUpperCase();

for(const flight of flights.split('+')) {
 const [type, from, to, time] = flight.split(';');
 const output = `${type.startsWith('_Delayed') ? "🛑" : ''}${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(45);
 console.log(output);
}
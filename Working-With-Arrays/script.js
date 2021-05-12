'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//FUNCTIONALITY
const displayMovements = function(movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function(move, i) {
    const type = move > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${move}</div>
  </div>`;
  containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//SLICE METHOD
let arr = ['a', 'b', 'c', 'd', 'e'] ;

console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(...arr);

//SPLICE METHOD
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1,2);
console.log(arr);

//REVERSE
arr = ['a', 'b', 'c', 'd', 'e'] ;
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(...arr2);

//CONCAT

const letters = arr.concat(arr2);
console.log(letters);
//you can also do it with a spread operator which does not mutate the original arrays
console.log(...arr, ...arr2);

//JOIN METHOD

console.log(letters.join('-'));
console.log(letters);

console.log('------FOREACH EACH LOOP-----');

const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];

//using a for of loop
console.log('------for of loop-------');
// for (const movement of movements) {
    for ( const [i, movement] of movements2.entries()) {
    if(movement > 0) {
        console.log(`Movement ${i +1}.You deposited ${movement}`);
    } else {
        console.log(`Movement ${i +1}. You withdrew ${Math.abs(movement)}`);
    }
}
console.log('-----FOREACH-------');
//using the foreach method
movements2.forEach(function(movement, i, array) {
    if(movement > 0) {
        console.log(`Movement ${i+1}. You deposited ${movement}`);
    } else {
        console.log(`Movement ${i+1}. You withdrew ${Math.abs(movement)}`);
    };
});
// 0: function(200)
// 1: function(450)
// 2: function(-400)
// 3: function(3000)
// 4: function(-650)
// 5: funciont(-130)
// 6: function(70)
// 7: function(1300)

console.log('------FOREACH WITH MAPS AND SETS-----');

//MAPS
const currencies2 = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);

  currencies2.forEach(function(value, key, map) {
      console.log(`${key}: ${value}`);
  })

  //SETS

const currenciesUnique = new Set(['USD', 'GPB', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, _value, map) {
    console.log(`${_value}: ${value}`);
})
//key is the same as the value on a set, because sets do not have keys, they are unique values

//array coding challenge 1
//§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3] § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

//HOW I DID IT
const juliaData = [3,5,2,12,7];
const kateData = [4,1,15,8,3];

console.log(juliaData.slice(1,3));
const checkDogs = function(data1, data2) {
  const noCats = data1.slice(1,3);
  const newDogData = noCats.concat(data2);
  newDogData.forEach(function(age, i) {
    if(age >= 3 ) {
      console.log(`Dog number ${i +1} is an adult, and is ${age} years old!`);
    }else {
      console.log(`Dog number ${i +1} is still a puppy! 🐶`);
    }
  })
};
checkDogs(juliaData, kateData);

//HOW JONAS DID IT
const checkDogs2 = function(dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0,1);
  dogsJuliaCorrected.splice(-2);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  dogs.forEach(function(dog, i) {
    if(dog >= 3) {
      console.log(`Dog number ${i +1} is an adult, and is ${dog} years old!`);
    } else {
      console.log(`Dog number ${i +1} is still a puppy! 🐶`);
    }
  })
}
checkDogs2([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
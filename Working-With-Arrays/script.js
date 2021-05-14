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
    <div class="movements__value">${move}€</div>
  </div>`;
  containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//printing the total balance 
const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce((accum, cur) => accum + cur, 0);
  acc
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function(acc) {
  const incomes = acc.movements.filter(move => move > 0).reduce((accum, move) => accum + move, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements.filter(move => move < 0).reduce((accum, move) => accum + move, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements.filter(move => move > 0).map(deposit => (deposit * acc.interestRate) /100).filter((int, i, array) => {
    return int >= 1;
  })
  .reduce((accum, move) => accum + move, 0);
  labelSumInterest.textContent = `${interest}€`;
};
//creating usernames
const createUsernames = function(accs) {
  accs.forEach(function(acc) {
    acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
  });
};
createUsernames(accounts);

const updateUI = function(acc) {
      //display movements
      displayMovements(acc.movements);
      //display balance
      calcDisplayBalance(acc);
      //display summary
      calcDisplaySummary(acc);
}

/////EVENT HANDLERS
let currentAccount;

btnLogin.addEventListener('click', function(e) {
  e.preventDefault();
  //prevent form from submitting
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount);
  if(currentAccount?.pin === Number(inputLoginPin.value)) {
    //display UI and welcome message
    labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
    //clar input fields 
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    //UPDATE UI
    updateUI(currentAccount);
  };
});

//transferring money from one account to another 
btnTransfer.addEventListener('click', function(e) {
e.preventDefault();
const amount = Number(inputTransferAmount.value)
const receiverAccount = accounts.find(acc => acc.username === inputTransferTo.value);
inputTransferAmount.value = inputTransferTo.value = '';

if(amount > 0 && 
  currentAccount.balance >= amount && 
  receiverAccount &&
  receiverAccount?.username !== currentAccount.username) {
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    //update ui 
    updateUI(currentAccount);
}
});
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
    };
  });
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
    };
  });
};
checkDogs2([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
////////////////////////////////////

const eurToUsd = 1.1;
//mapping is more modern for functional programming
// const movementsUSD = movements.map(function(move) {
//   return move * eurToUsd;
// });
//arrow function one liner
const movementsUSD = movements.map(move => move * eurToUsd);
console.log(movements);
console.log(movementsUSD);


//doing the above with a for of loop to show different philosophy. 
const movementsUSDfor = [];
for(const move of movements2) {
  movementsUSDfor.push(move * eurToUsd);
};
console.log(movementsUSDfor);

const movementsDescriptions = movements2.map((mov, i) => 
   `Movement ${i+1}. You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
)
console.log(movementsDescriptions);

/////////////////////////FILTERS METHOD
console.log('---------FILTERS METHOD------------');

const deposits = movements2.filter(function(move) {
  return move > 0;
});
console.log(deposits);
const withdrawals = movements2.filter(function(move) {
  return move < 0;
});
console.log(withdrawals);

//for of loop is not made for functional coding, the filter allows chaining methods and functional modern programming
const depositsfor = [];
for (const move of movements2) {
  if (move > 0) {
    depositsfor.push(move);
  };
};
console.log(depositsfor);

///////////////////REDUCE
console.log('-------REDUCE---------');
console.log(movements2);

//accumulator is like a snowball
// const balance = movements2.reduce(function(accum, cur, i, arr) {
//   console.log(`Iteration ${i}: ${accum}`);
//   return accum + cur;
// }, 0);
// console.log(balance);
const balance = movements2.reduce((accum, cur) => accum + cur, 0);
console.log(balance);

//for loop can start to become not practice. avoids an extra variable.
let balance2 = 0;
for (const move of movements2) {
  balance2 += move;
};
console.log(balance2);

//maximum value of movements array 
const max = movements2.reduce((accum, move) => {
  if (accum > move) {
    return accum;
  } else {
    return move;
  }
}, movements2[0]);
console.log(max);
////////////////coding challenge 2

const calcHumanAverage = function(ages) {
  const dogToHuman = ages.map(age => age <= 2 ? 2* age : 16 + age * 4);
  console.log(dogToHuman);
  const HumanLessThan = dogToHuman.filter(function(age){
    return age >= 18;
  });
  const averageAge = HumanLessThan.reduce(function(accum, age) {
    return accum + age;
  }, 0) / HumanLessThan.length;
  return averageAge;
};
const avg1 = calcHumanAverage([5,2,4,1,15,8,3]);
const avg2 = calcHumanAverage([16,6,10,5,6,1,4]);
console.log(avg1, avg2);

///////////
//PIPELINE
const totalDepositsUSD = movements.filter(move => move > 0)
.map((move, i , array)  =>{
  //  console.log(array);
   return move * eurToUsd
})
// .map(move  => move * eurToUsd)
.reduce((accum, move) => accum + move, 0);

console.log(totalDepositsUSD);

////////////////////////////////////////////
console.log('------CODING CHALLENGE 3-----------');

const humanAverage2 = ages => ages.map(age => (age <= 2 ? 2* age : 16 + age * 4)).filter(age => age >= 18).reduce((accum, age, i, arr) => accum + age / arr.length, 0);

const avg3 = humanAverage2([5,2,4,1,15,8,3]);
const avg4 = humanAverage2([16,6,10,5,6,1,4]);
console.log(avg3);
console.log(avg4);

////////THE FIND METHOD
console.log('----the find method----');

const firstWithdrawal = movements2.find(move => move < 0);
console.log(firstWithdrawal); 

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);


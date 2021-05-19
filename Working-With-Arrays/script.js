'use strict';


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

///////////////SOME AND EVERY METHODS
console.log('--------some and every------');

//SOME
//includes checks for equality
console.log(movements.includes(-130));

//some checks a condition
console.log(movements.some(move => move === -130));
const anyDeposits = movements.some(move => move > 0);
 console.log(anyDeposits);

 //EVERY
 console.log(account4.movements.every(move => move > 0));
 // seperate callback

const depo = move => move > 0;
console.log(movements.some(depo));
console.log(movements.every(depo));
console.log(movements.filter(depo));

//FLAT AND FLATMAP
console.log('---FLAT AND FLATMAP----');

const ar = [1,2,3, [4,5,6], 7,8];
console.log(ar.flat());

const arrDeep = [1,[2,3], [[4,5],6], 7,8];
console.log(arrDeep.flat(2));


//calculating OVERALL BALANCE FOR ALL ACCOUNTS USING FLAT
const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);

const overallBalance = allMovements.reduce((accum, move) => accum + move, 0);
console.log(overallBalance);

//CHAINING which looks better and follows better coding practice
const overall2 = accounts.map(acc => acc.movements).flat().reduce((accum, move) => accum + move, 0);
console.log(overall2);

//FLATMAP
const overallFlapMap = accounts.flatMap(acc => acc.movements).reduce((accum, move) => accum + move, 0);
console.log(overallFlapMap);


/////sorting arrays
console.log('---SORTING ARRAYS---');
 const owners = ['Madeleine', 'Jonas', 'Zach', 'Adam'];
 console.log(owners.sort());
 //sorts it alphabetically and mutates original array

 //with numbers
 console.log(movements);
 
 //return < 0, a before b (keep order)
 //return > 0, b before a (switch order)

 ///ASCENDING
//  movements.sort((a, b) => {
//     if(a > b) return 1;
//     if(b > a) return -1;
//  });
//  console.log(movements);
movements.sort((a, b) => a - b);
console.log(movements);

 //DESCENDING
//  movements.sort((a, b) => {
//   if(a > b) return -1;
//   if(b > a) return 1;
// });
// console.log(movements);
movements.sort((a, b) => b - a);
console.log(movements);

//////////////MORE WAYS OF CREATING AND FILLING ARRAYS
console.log('----FILLING AND CREATING ARRAYS');
const x = new Array(7);
console.log(x);

// console.log(x.map(() => 5));

//fill method
// x.fill(1);
x.fill(1, 3, 5);
console.log(x);

const demoArr = [1,2,3,4,5,6,7];
demoArr.fill(23, 2, 6);
console.log(demoArr);

//array.from method

const y = Array.from({length: 7}, () => 1);
console.log(y);
const z = Array.from({length: 7}, (curr, i) => i+1);
console.log(z);

labelBalance.addEventListener('click', function() {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'),el => Number(el.textContent.replace('€', '')));


  console.log(movementsUI);
});

//MORE PRACTICE
//1
console.log("-----MORE ARRAY PRACTICE----");

const bankDepositSum = accounts.flatMap(acc => acc.movements).filter(move => move > 0).reduce((sum, curr) => sum + curr, 0);
console.log(bankDepositSum);

//2
// const numDeposits1000 = accounts.flatMap(acc => acc.movements).filter(move => move > 1000).length;

//you can use reduce to count something in an array
const numDeposits1000 = accounts.flatMap(acc => acc.movements).reduce((count, cur) => (cur >=1000 ? count + 1 : count),0)
console.log(numDeposits1000);

let ex = 10;
console.log(ex++);

//3
const { depos, withd } = accounts.flatMap(acc => acc.movements).reduce((sums, curr) => {
  curr > 0 ? sums.depos += curr : sums.withd += curr;
  return sums;
}, {depos: 0, withd: 0});

console.log(depos, withd);

//4
// this is a nice title
//This Is a Nice Title

const convertTitleCase = function(title) {
  const exeptions = ['an', 'a', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];
  const titleCase = title.toLowerCase().split(' ').map(word => exeptions.includes(word)  ? word : word[0].toUpperCase() + word.slice(1)).join(' ');
  return titleCase;
}

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('this is another title with an EXAMPLE'));

//coding challenge 4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//1
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

//2
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarahDog);
console.log(`Sarahs dog is eating too ${sarahDog.curFood > sarahDog.recFood ? 'much' : 'little'} `);

//3
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

//4
console.log(`${ownersEatTooMuch.join(' and ')} dog's eat too much`);
console.log(`${ownersEatTooLittle.join(' and ')} dog's eat too little`);

//5
console.log(dogs.some(dog => dog.curFood === dog.recFood));

//6
// current > (recommended * 0.90) && current < (recommended * 1.10)

const foodOkay = dog => dog.curFood > dog.recFood * 0.90 && dog.curFood < dog.recFood * 1.10;

console.log(dogs.some(foodOkay));

//7
console.log(dogs.filter(foodOkay));

//8
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
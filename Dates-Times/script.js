// 'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2021-05-14T23:36:17.929Z',
    '2021-05-17T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions
const formatMovementDate = function(date, locale) {
    const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

    const daysPassed = calcDaysPassed(new Date(), date);
    console.log(daysPassed);

    if (daysPassed === 0) return "Today";
    if (daysPassed === 1) return "Yesterday";
    if (daysPassed <= 7) return `${daysPassed} days ago`;
    else {
        // const day = `${date.getDate()}`.padStart(2, 0);
        // const month = `${date.getMonth() + 1}`.padStart(2, 0);
        // const year = date.getFullYear();
        // return `${day}/${month}/${year}`;
        return new Intl.DateTimeFormat(locale).format(date);
    };
    
};

const formatCur = function(value, locale, currency) {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency
    }).format(value);
}


const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale)

    const formattedMovement = formatCur(mov, acc.locale, acc.currency);
    
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMovement}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(out, acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function() {
    const tick = function() {
        const min = String(Math.trunc(time / 60)).padStart(2,0);
        const sec = String(time % 60).padStart(2,0);
    // in each call, print the remaining time to the UI
    labelTimer.textContent = `${min}:${sec}`;

    //when time 0, top timer and log out user
    if(time === 0) {
        clearInterval(timer);
        labelWelcome.textContent = `Log in to get started`;
        containerApp.style.opacity = 0;
    }
        //decrease 1 second
        time--;
    };
    //set time to 5 mins
    let time = 120;

    //call time timer every second
    tick();
    const timer = setInterval(tick, 1000);
    return timer;
};
///////////////////////////////////////
// Event handlers
let currentAccount, timer;

//FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;


btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //create current date
    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2,0);
    // const minutes = `${now.getMinutes()}`.padStart(2,0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minutes}`;
//day/month/year
    const now = new Date();
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
    }

    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    /// timer
    if(timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
    //reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(+inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function() {// Add movement
    currentAccount.movements.push(amount);

    //add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

        //reset timer
        clearInterval(timer);
        timer = startLogOutTimer();
    },2500)
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

console.log(23 === 23.0 );

//Base 10 -- 0 to 9
// Base 2 -- 0 1
console.log(0.1 + 0.2);

//cannot do realy precise scienfific or financial calculations using JS


//To concert a string into a number there are a few ways you can accomplish this 
//1
console.log(Number('233'));

//2 the easier way is using a plus sign before the string.
console.log(+'233');

//PARSING. You can parse a number from a string. If you use parseInt it convers a string to an integer.
console.log(Number.parseInt('300px'));
console.log(parseInt('455'));

//working with binary 
console.log(Number.parseInt('20px', 2)); // this results in NaN

//PARSEFLOAT
console.log(Number.parseFloat('455.55rem')); // parsefloat allows for decimals
console.log(Number.parseInt('455.55rem')); // here you do not get the decimals

//NaN
console.log(Number.isNaN(45)); //falsey value
console.log(Number.isNaN(+'ex450')); // truthy value

console.log(Number.isFinite(23));
console.log(Number.isFinite(+'es560'));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger('Hello'));
console.log(Number.isInteger(+'45'));
////////////////////MATH AND ROUNDING
console.log('-----MATH AND ROUNDING----------');
console.log(Math.sqrt(25));
//another way to find the square root
console.log(25 ** (1 / 2));
//calculate a cubic root 
console.log(8 ** (1 / 3));
//maximum value of a couple of values, also does type coersion, but not parsing
console.log(Math.max(5,19,55,4,300,'500'));
//min value
console.log(Math.min(4,3,500,9,65));
//calculate raduis of a circle with 10px
console.log(Math.PI * Number.parseFloat('10px') ** 2);
//random integer generating
console.log(Math.trunc(Math.random() * 6) +1);
const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10,20));
//Rounding integers
console.log(Math.trunc(23.5467));
console.log(Math.round(23.5467));
console.log(Math.ceil(23.5467));
console.log(Math.floor(23.5467));

//rounding decimals
//tofixed will always return a string not a number
console.log((2.7).toFixed(0));

//the remainder operator
console.log(5 % 2);
console.log(8 % 3);

// is a number even?
console.log(6 % 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(76));

//how remainder works Nth time
// labelBalance.addEventListener('click', function(){
//     [...document.querySelectorAll('.movements__row')].forEach(function(row, i) {
//         if ( i % 2 === 0) row.style.backgroundColor = 'orangered';
//         if ( i % 3 === 0) row.style.backgroundColor = 'blue';
//     });
// });

//working with big int
console.log(2 ** 53 -1);

//BIG INT CAN STORE LARGE NUMBERS
console.log(38579873948573498573984753984759834n);
console.log(BigInt(34895734987534987543987539847439875));

//operations
console.log(10000n + 10000n);
console.log(3453453583n * 329402490549583905834n);
//you cannot big big ints with regular numbers
const huge = 3409573095735n;
const num = 45;
console.log(huge * BigInt(num));

//comaprison and plus operator are exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(20n == 20);

//divisions
console.log( 10n / 3n);
console.log(10 / 3);

//CREATING DATES 
console.log('--CREATING DATES---');
//create a date
// const now = new Date();
// console.log(now);

// console.log(new Date('Mon May 17 2021 19:33:03'));
// console.log(new Date('December 24, 2021'));

// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 33, 15, 23, 5));

// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

//working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142274980000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);

/////OPERATIONS WITH DATES
console.log(Number(future));
console.log(+future);

const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 03, 24));
console.log(days1);

/////////internationalizing numbers

const newNum = 56775.56

const options = {
    style: 'currency',
    unit: 'mile-per-hour',
    currency: 'EUR',
    // useGrouping: false
}

console.log('US:      ', new Intl.NumberFormat('en-US', options).format(newNum));
console.log('US:      ', new Intl.NumberFormat('de-DE', options).format(newNum));
console.log('US:      ', new Intl.NumberFormat('ar-SY', options).format(newNum));
console.log(navigator.language, new Intl.NumberFormat(navigator.language, options).format(newNum));

/////TIMERS
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),2000, ...ingredients);
console.log('waiting......');

if(ingredients.includes('spinach')) clearTimeout(pizzaTimer);

//set interval
// setInterval(function() {
//     const now = new Date();
//     console.log(now);
// },1000);
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
  const displayMovements = function(movements, sort = false) {
    containerMovements.innerHTML = '';
    //sorting 
    const moves = sort ? movements.slice().sort((a,b) => a - b) : movements;
  
    moves.forEach(function(move, i) {
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
  
  //closing an account
  btnClose.addEventListener('click', function(e) {
    e.preventDefault();
    //checks to make sure current account matches the account being deleted
    if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
      //finds the index of the current account
      const index = accounts.findIndex(acc => acc.username === currentAccount.username);
      console.log(index);
      //delete account
      accounts.splice(index,1);
      //hide ui
      containerApp.style.opacity = 0;
    };
    inputCloseUsername.value = inputClosePin.value = '';
  });
  
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
  
  // requesting a loan
  btnLoan.addEventListener('click', function(e) {
    e.preventDefault();
    const amount = Number(inputLoanAmount.value);
    if(amount > 0 && currentAccount.movements.some(move => move >= amount * 0.1)) {
      //add movement
      currentAccount.movements.push(amount);
  
      //update UI 
      updateUI(currentAccount);
    };
    inputLoanAmount.value = ''; 
  });
  let sorted = false;
  btnSort.addEventListener('click', function(e) {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
  })
  
  
  
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
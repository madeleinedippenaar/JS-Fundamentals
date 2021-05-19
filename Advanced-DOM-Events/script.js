'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//smooth scroll 
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e) {
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);
    console.log(e.target.getBoundingClientRect());

    //scrolling
    // window.scrollTo(
    // s1coords.left + window.pageXOffset, 
    // s1coords.top + window.pageYOffset);

    // window.scrollTo({
    //     left: s1coords.left + window.pageXOffset, 
    //     top: s1coords.top + window.pageYOffset,
    //     behavior: 'smooth'
    // });

    section1.scrollIntoView({
        behavior: 'smooth'
    });
});

//PAGE NAVIGATION
// document.querySelectorAll('.nav__link').forEach(function(el) {
//     el.addEventListener('click', function(e) {
//         e.preventDefault();
//         const id = this.getAttribute('href');
//         document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//     });
// });

//1. Add event listener to common parent element
//2. determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function(e) {
    e.preventDefault();
    //matching strategy
    if(e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    };
});
////////////////
//LECTURE/////////
// console.log(document.documentElement);

//adding cookie message
const header = document.querySelector('.header');

const message = document.createElement('div');
message.classList.add('cookie-message')
// message.textContent = "We use cookies for improved functionality and analytics.";
message.innerHTML = "We use cookies for improved functionality and analytics. <button class='btn btn--close--cookie'>Got it!</button>";

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);

//Delete Elements 
document.querySelector('.btn--close--cookie').addEventListener('click', function() {
    message.remove();
})
//attributes, styles and classes


message.style.backgroundColor = '#37383d';
message.style.width = '120%';
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height,10) + 30 + 'px';

//change a CASS property in JS
// document.documentElement.style.setProperty('--color-primary', 'orangered');

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = "beautiful minimalist logo";
logo.setAttribute('company', 'Bankist');
console.log(logo.getAttribute('src'));

//classes
// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();

// const h1 = document.querySelector('h1');

// const alertH1 = function(e) {
//     alert('EventListener: Great! You are reading the heading');

//     h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);


// h1.onmouseenter = function(e) {
//     alert('Onmouseenter: Great! You are reading the heading')
// };

///EVENT PROPAGATION

// random number generator
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
// console.log(randomColor(0, 255));

// document.querySelector('.nav__link').addEventListener('click', function(e) {
//     this.style.backgroundColor = randomColor();
//     e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function(e) {
//     this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav').addEventListener('click', function(e) {
//     this.style.backgroundColor = randomColor();
// });

////TRAVERSING

const h1 = document.querySelector('h1');

//going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'white';

//going upwards: parents
// console.log(h1.parentNode);
// h1.closest('.header').style.background = 'var(--gradient-secondary)';

//going sideways : siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function(el){
//     if(el !== h1) el.style.transform = 'scale(0.5)'
// });

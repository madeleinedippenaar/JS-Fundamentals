// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// const calcTempAmplitutde = function(temps) {
//     let max = temps[0];
//     let min = temps[0];

//     for(let i = 0; i <= temps.length; i++) {
//         const currentTempt = temps[i];
//         if(typeof currentTempt !== "number") continue;
//         if(currentTempt > max) max = currentTempt;
//         if(currentTempt < min) min = currentTempt;
//     };
//     console.log(max, min);
//     return max - min
// };

// const amplitude = calcTempAmplitutde(temperatures);
// console.log(amplitude);

// const calcTempAmplitude = function (temps) {
//     let max = temps[0];
//     let min = temps[0];
  
//     for (let i = 0; i < temps.length; i++) {
//       const curTemp = temps[i];
//       if (typeof curTemp !== 'number') continue;
//       if (curTemp > max) max = curTemp;
//       if (curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max - min;
//   };
//   const amplitude = calcTempAmplitude(temperatures);
//   console.log(amplitude);

// const x = 23;
// if (x === 23) console.log(23);

// const calcAge = birthYear => 2037 - birthYear;

// console.log(calcAge(1993));

// const useKelvin = function () {
//     const measurement = {
//         type: "temp",
//         unit: "celsius",
//         // value: Number(prompt("Degress Celcius:"))
//     }
//     const kelvin = measurement.value + 273
//     return kelvin;
// }

// console.log(useKelvin());

// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."
// Your tasks:
// 1. Createafunction'printForecast'whichtakesinanarray'arr'andlogsa string like the above to the console. Try it with both test datasets.
// 2. Usetheproblem-solvingframework:Understandtheproblemandbreakitup into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data2:[12,5,-5,0,4]

// -array transformed to String, seperated by three dots. 
// the numbers are coming from the array
// -where are the 1 days 2 days 3 days numbers coming from? x days? current index plus 1?

// 1. convering the array into a String.
// string needs to contain day (index plus one )
// add celcius and three dots between
const data1 = [17, 21, 23]
const data2 = [12,5,-5,0,4]
const printForecast = function(arr) {
    let str = '';
    for(let i = 0; i < arr.length; i++) {
        str += `${arr[i]}oC in ${i + 1} days ...`;
    }
    console.log('... ' + str);
}

printForecast(data1);

// const convertToString = arr.map(String);
// for(let i = 0; i < convertToString.length; i++) {
//     console.log(convertToString);
// }
// for(let i = 1; i < arr.length +1; i++) {
//     console.log(i);
// }

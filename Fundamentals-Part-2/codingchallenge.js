// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
// Your tasks:
// 1. Createanarrowfunction'calcAverage'tocalculatetheaverageof3scores
// 2. Usethefunctiontocalculatetheaverageforbothteams
// 3. Createafunction'checkWinner'thattakestheaveragescoreofeachteam
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
// 4. Usethe'checkWinner'functiontodeterminethewinnerforbothData1and Data 2
// 5. Ignoredrawsthistime
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

const dolphinScore = calcAverage(85,54,41);
const koalaScore = calcAverage(23, 34, 27)

const checkWinner = (dolphinAverage, koalaAverage) => {
    if(dolphinAverage >= 2 * koalaAverage) {
        console.log(`Dolphins win (${dolphinAverage} vs. ${koalaAverage})`);
    }else if(koalaAverage >= 2 * dolphinAverage) {
        console.log(`Koalas win (${koalaAverage} vs. ${dolphinAverage})`);
    }else {
        console.log('No winner');
    }
}

// checkWinner(dolphinScore, koalaScore);

// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// Your tasks:
// 1. Writeafunction'calcTip'thattakesanybillvalueasaninputandreturns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
// 2. Andnowlet'susearrays!Socreateanarray'bills'containingthetestdata below
// 3. Createanarray'tips'containingthetipvalueforeachbill,calculatedfrom the function you created before
// 4. Bonus:Createanarray'total'containingthetotalvalues,sothebill+tip Test data: 125, 555 and 44

const calcTip = bill => {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}
// console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length -1])];

// console.log(tips);

const total = [(bills[0] + calcTip(bills[0])), (bills[1], calcTip(bills[1])), (bills[2] + calcTip(bills[bills.length -1]))];

// console.log(total);
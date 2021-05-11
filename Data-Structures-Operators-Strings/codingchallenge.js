// // Coding Challenge #1
// // We're building a football betting app (soccer for my American friends 😅)!
// // Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
// // Your tasks:
// // 1. Createoneplayerarrayforeachteam(variables'players1'and 'players2')
// // 2. Thefirstplayerinanyplayerarrayisthegoalkeeperandtheothersarefield players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// // 3. Createanarray'allPlayers'containingallplayersofbothteams(22 players)
// // 4. Duringthegame,BayernMunich(team1)used3substituteplayers.Socreatea new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// // 5. Basedonthegame.oddsobject,createonevariableforeachodd(called 'team1', 'draw' and 'team2')
// // 6. Writeafunction('printGoals')thatreceivesanarbitrarynumberofplayer names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// // 7. Theteamwiththeloweroddismorelikelytowin.Printtotheconsolewhich team is more likely to win, without using an if/else statement or the ternary operator.
// // Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

const game = {
    team1: 'Bayern Munich', team2: 'Borrussia Dortmund', players: [
    [
        'Neuer',
          'Pavard',
          'Martinez',
          'Alaba',
          'Davies',
          'Kimmich',
          'Goretzka',
          'Coman',
          'Muller',
          'Gnarby',
          'Lewandowski',
    ], [
          'Burki',
          'Schulz',
          'Hummels',
          'Akanji',
          'Hakimi',
          'Weigl',
          'Witsel',
          'Hazard',
          'Brandt',
          'Sancho',
          'Gotze',
    ], ],
      score: '4:0',
      scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
      'Hummels'],
      date: 'Nov 9th, 2037',
      odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    }, };

const [players1, players2] = game.players;
// console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

const printGoals = function(...players) {
    console.log(`${players.length} goals were scored`);
}
// printGoals(...game.scored);
// console.log(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

//coding challenge 2
for (const [i, el] of game.scored.entries()) {
    // console.log(`Goal ${i +1}: ${el}`);
}

const odds = Object.values(game.odds);
let average = 0;
for ( const odd of odds)
    average += odd;
    average /= odds.length;
    // console.log(average);

for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    // console.log(`Odd of ${teamStr} ${odd}`);
}


// Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
 //////code challenge 3

 const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
  ]);
//1
  const events = [...new Set(gameEvents.values())];
  console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

//4
//HOW I DID IT
for(const [key, el] of gameEvents) {
    if(key < 45) {
        console.log(`[FIRST HALF]${key}: ${el}`);
    }else if (key >= 45) {
        console.log(`[SECOND HALF]${key}: ${el}`);
    };
};

//OTHER WAY
for (const [key, el] of gameEvents) {
    const half = key <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF]: ${key}: ${el}`);
}

////coding chalenge 4

////////LOOK THIS OVER AGAIN HARD TIME UNDERSTANDING
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    console.log(text);
    const rows = text.split('\n')
    console.log(rows);
    for (const [i, row] of rows.entries()) {
     const [first, second] = row.toLowerCase().trim().split('_');
     const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`
     console.log(`${output.padEnd(20)}${'✅'.repeat(i +1)}`);
    };
});
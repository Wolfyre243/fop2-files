/* 
    Section A 
    Question 2c
    Name: Angie Wu En Qi
    Admin No: p2322993
    Class: DIT1B04

*/
/* 
  TODO: Fill up the code for Section A Question 2c.
*/

/* TODO: part i */
const games = new Map([
  ["Job Simulator", 18.5],
  ["Beat Saber", 26.0],
  ["Blade & Socery", 18.5],
]);

const games2 = new Map([
  ["Window Cleaner", 10.5],
  ["Virtual Fighter", 14.5],
]);
function addGame(map, newGame, gamePrice) {
  /* TODO: part ii   */
  map.set(newGame, gamePrice);
}

function countGame(map) {
  /* TODO: part iii;  */
  return map.size;
}

function displayGame(map) {
  /* TODO : iv;  */
  // map.forEach((value, key) => {
  //   console.log(`${key}: ${value}`);
  // });
}

function mergeGames(game1, game2) {
  let merge = new Map([...game1, ...game2]);

  console.log(merge);
  /* TODO: part v */
}

// Test Case
/* addGame */
console.log("Add Games into games map");
addGame(games, "Guilty Gear", 52.9);
addGame(games, "Tekken8", 97.9);

/* countGame */
let noOfGame = countGame(games);
console.log("Number of games bought: " + noOfGame);

/* displayGame */
console.log("Games game list :");
displayGame(games);

/* mergeGames */
const games3 = mergeGames(games, games2);

/* display Games 3 */
console.log("Games games3 list after merge :");
displayGame(games3);

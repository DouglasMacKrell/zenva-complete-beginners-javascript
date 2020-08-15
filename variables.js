let maxHealth = 100;
let currentHealth = 50;
currentHealth = maxHealth;

let isGameOver = false;
isGameOver = true;

// const let var
// var is a variable
// let is scope based variable
// const variable who cannot be changed

if (true) {
  var isGameOver = false;
  let isNotGameOver = true;
}

console.log(isGameOver) // undefined - no code break
console.log(isNotGameOver) // reference error - breaks code
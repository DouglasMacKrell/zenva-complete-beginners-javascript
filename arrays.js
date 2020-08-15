let inventory = ["shirt", "axe", "bread"];
// inventory = ["water", "pants"]

let shirt = inventory[0]; // "shirt"
inventory[2] = "cheese";

let length = inventory.length; // 3
let shirtLength = inventory[0].length; // 5

inventory.push("water"); // ["shirt", "axe", "cheese", "water"]
let water = inventory.pop();

//  Matrix (multidimensional array) [array of arrays]

var levels = [
    [1.1, 1.2, 1.3],
    [2.1, 2.2, 2.3, 2.4],
    [3.1, 3.2]
]

var firstWorld = levels[0] // [1.1, 1.2, 1.3]

var firstLevel = levels[0][1]  // 1.2

firstLevel[0][1] = 1.4 // change element in subarray

levels[1].pop
levels[2].push(3.3)
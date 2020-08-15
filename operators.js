// Assignment
var health = 100;
health = 50;

// Arithmetic + - / * % **

health = health + 10; // 60
health = health % 50; // 10

health = health ** 2; // 100

// +=  -=  *=  /=

health -= 20; // health = health - 20

// ++  --
health++; // 81

health = health + 1;

health += 1;

// Conditional  <  <=  >  >=  ==  !=  ===

let num1 = 5;
let num2 = 10;

let result = num1 > num2; // false
let result2 = num1 != num2; // true

let str1 = "hello";
let str2 = "world";

let result3 = str1 == str2; // false

// Logical ||  &&  !

result3 = !result3; // true

result = num1 > num2 && str1 == str2; // false

result = num1 < num2 || str1 == str2; // true


// Ternary  ? :

result = num1 > num2 ? num1 : num2; // num2

let lives = 1

let isGameOver = lives == 0 ? true : false

// let isGameOver = !(lives > 0);

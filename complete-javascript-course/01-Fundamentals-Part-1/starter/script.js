/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(true);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;
//const job;

var job = "programmer";
job = "teacher";

lastName = "Nowacki";
console.log(lastName);


// Math operators
const now = 2037;
const ageFrederic = now - 1992;
const agePaulina = now - 2020;
console.log(ageFrederic, agePaulina);

console.log(ageFrederic * 2, ageFrederic / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Frederic";
const lastName = "Nowacki";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x -1 = 99
console.log(x);

// Comparison operators
console.log(ageFrederic > agePaulina); // >, <, >=, <=
console.log(agePaulina >= 18);

const isFullAge = agePaulina >= 18;
console.log(now - 1991 > now - 2018);


const now = 2037;
const ageFrederic = now - 1991;
const agePaulina = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageFrederic + agePaulina) / 2;
console.log(ageFrederic, agePaulina);

const firstName = "Frederic";
const job = "Analyst";
const birthYear = 1992;
const year = 2037;

const frederic =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";

console.log(frederic);

const fredericNew = `I'm ${firstName}, a ${year - birthYear} years ols ${job}!`;

console.log(fredericNew);

console.log(`Just a regular string.`);
console.log("String with \n multiple \n lines");
console.log(`String
multiple
lines`);
*/

const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license🚗");
} else {
  const yearLeft = 18 - age;
  console.log(`Sarah is too young. Wait for another ${yearLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

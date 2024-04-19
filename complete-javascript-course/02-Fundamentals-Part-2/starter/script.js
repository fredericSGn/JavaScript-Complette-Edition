"use strict";
/*
/// Functions
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive :D`);
hasDriversLicense ? console.log(`I can't Drive`) : "";

//const interface = `Audio`;
//const private = 534;
//const if = 23;

function logger() {
  console.log(`My name is Frederic`);
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

function fruitMixer(grapes, watermelon) {
  const drink = `Drink of ${grapes} grapes and ${watermelon} watermelon.`;
  return drink;
}

console.log(fruitMixer(3, 10));

const drink1 = fruitMixer(4, 5);

console.log(drink1);

/// Functions Declarations vs. Expressions

//Function Declaration (Hoisting) Można wezwać funkcje zanim się ją zdeklaruje

const age1 = calcAge1(1992);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

console.log(age1);

//Function Expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1992);
console.log(age1, age2);

/// Arrow Function

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1992);

console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1992, "Frederic"));
console.log(yearsUntilRetirement(1980, "Alex"));

/// Function calling other functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

/// Reviewing Functions

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} hast already retired!🎉`);
    return -1;
  }
};
console.log(yearsUntilRetirement(1992, "Frederic"));
console.log(yearsUntilRetirement(1950, "Michel"));

/// Challenge 1.
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
console.log(scoreDolphins);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas}).`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No one wins..`);
  }
};
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(324, 111);
*/
///Arrays
const friend1 = `Michel`;
const friend2 = `Steven`;
const friend3 = `Peter`;

const friends = ["Michel", " Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2009, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";

console.log(friends);
//friends = ["Bob", "Alice"];

const firstName = `Frederic`;
const frederic = [firstName, `Nowacki`, 2037 - 1992, `analyst`, friends];
console.log(frederic.length);

//Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1992, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);

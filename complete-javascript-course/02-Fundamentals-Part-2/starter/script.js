/* "use strict";

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
*/
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

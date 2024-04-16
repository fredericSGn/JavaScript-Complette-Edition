/* "use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive :D`);
hasDriversLicense ? console.log(`I can't Drive`) : "";
*/
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

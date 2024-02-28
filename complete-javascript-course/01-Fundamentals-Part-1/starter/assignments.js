/* 
//Values and Variables
let country = "Poland";
let continent = "Europe";
let population = 130;

let isIsland = false;
const language = "polisch";

// Data Types
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

// Basic Operators
let halfPop = population / 2;
console.log(halfPop);
halfPop++;
console.log(halfPop);

console.log(6 < halfPop);

let averagePop = 33;

console.log(averagePop < population);

const description =
  country +
  " is in " +
  continent +
  "," +
  " and its " +
  population +
  " million people speak " +
  language;

console.log(description);

// Strings and Templates Literals
const descriptionNew = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;

console.log(descriptionNew);

// Taking Decisions: if / else Statements
if (population > averagePop) {
  console.log(
    `${country}'s population is ${
      averagePop - population
    } million below average`
  );
}

// Type Conversion and Coercion
console.log("9" - "5"); // -> 4
console.log("19" - "13" + "17"); // -> '617'
console.log("19" - "13" + 17); // -> 23
console.log("123" < 57); // -> false
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> 1143


//Equality Operators: == vs. ===
const numNeighbours = prompt(
  "How many neighbour contries does your contry have?"
);

const numNeighbours = Number(
  prompt("How many neighbour countries does your contry have?")
);

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}

//Logical Operators
const engCountry = true;
const lessThan50 = true;
const isIsland = false;

if (engCountry && lessThan50 && !isIsland) {
  console.log("Welcome on board!");
} else {
  console.log("Good luck next time...");
}

// The switch Statement
const language = "polish";
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("Most number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
    break;
}
*/

// The Conditional(Ternary) Operator
const polandPopulation = 32;
const country = "Poland";
polandPopulation > 33
  ? console.log(`Portugal's population is above average`)
  : console.log(`Portugal's population is below average`);

console.log(
  `${country}'s population is ${
    polandPopulation > 33 ? "above" : "below"
  } average`
);

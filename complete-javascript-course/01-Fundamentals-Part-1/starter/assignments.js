/* //Values and Variables

let country = "Poland";
let continent = "Europe";
let population = 130;

let isIsland = false;
const language = "polisch";

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

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

const descriptionNew = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;

console.log(descriptionNew);

if (population > averagePop) {
  console.log(
    `${country}'s population is ${
      averagePop - population
    } million below average`
  );
}
 */
console.log("9" - "5"); // -> 4
console.log("19" - "13" + "17"); // -> '617'
console.log("19" - "13" + 17); // -> 23
console.log("123" < 57); // -> 123
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> ?

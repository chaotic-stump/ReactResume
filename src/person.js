// person.js
// named export isAdult(18) - true if adult, otherwise false
// named export canDrink(18) - true if 21 and over, otherwise false

const isAdult = (age) => age >= 18;
const canDrink = (age) => age >= 21;

export { isAdult, canDrink };
// arguments object - no longer bound

const add = (a, b) => {
  // console.log(arguments);
  return a + b;
};
console.log(add(56, 1));
//RefError: Arguments is not defined, works in ES5, not here

// this keyword - no longer bound
  // this refers to items in that object
const user = {
  name: 'Sean',
  cities: ['Castaic', 'Arlington', 'Rexburg'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
  nums: [1,2,3,4], 
  multiplyBy: 2,
  multiply() {
    return this.nums.map((num) => num * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
'use strict';

// arguments object - no longer bound

var add = function add(a, b) {
  // console.log(arguments);
  return a + b;
};
console.log(add(56, 1));
//RefError: Arguments is not defined, works in ES5, not here

// this keyword - no longer bound
// this refers to items in that object
var user = {
  name: 'Sean',
  cities: ['Castaic', 'Arlington', 'Rexburg'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
  }
};

console.log(user.printPlacesLived());

// Challenge area

var multiplier = {
  nums: [1, 2, 3, 4],
  multiplyBy: 2,
  multiply: function multiply() {
    var _this2 = this;

    return this.nums.map(function (num) {
      return num * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());

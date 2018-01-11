'use strict';

// Let and Const vs Var

var nameVar = 'Sean';
nameVar = 'Mike';
console.log('nameVar', nameVar);

// Let
var nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

// Const
var nameConst = 'Frank';
console.log('nameConst', nameConst);

// Returns a RefError
// function getPetName() {
//   var petName = 'Hal';
//   return petName;
// }

// getPetName();
// console.log(petName);

// Block level scoping
var fullName = 'Jen Parker';
var firstName = void 0;

if (fullName) {
  var _firstName = fullName.split(' ')[0];
  console.log(_firstName);
}

// scoped outside of function
console.log(firstName);

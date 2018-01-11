// Let and Const vs Var

var nameVar = 'Sean';
nameVar = 'Mike';
console.log('nameVar', nameVar);

// Let
let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

// Const
const nameConst = 'Frank';
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
let firstName;

if(fullName) {
  let firstName = fullName.split(' ')[0];
  console.log(firstName);
}

// scoped outside of function
console.log(firstName);
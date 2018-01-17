
class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    // return 'Hi. I am ' + this.name + '!';
    return `Hi. I am ${this.name}! I am ${this.age} year(s) old.`
  }
  getDescription () {
    return `${this.name} is ${this.age} year(s) old.`
  }
};

const me = new Person('Sean Parker', 30);
console.log(me.getGreeting());

const other = new Person('Seth Jameson', 34);
console.log(other.getDescription());

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

// sub class through inheritance
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasHomeLocation() {
    return !!this.homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if(this.hasHomeLocation()) {
      greeting += ` I'm visiting from ${this.homeLocation}`
    }
    
    return greeting;
  }
}
  

const me = new Traveler('Sean Parker', 30, "Covington");
console.log(me.getGreeting());

const other = new Student('Seth Jameson', 34, 'Communication');
console.log(other.getDescription());
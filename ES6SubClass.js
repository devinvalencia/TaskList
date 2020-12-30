// ** Sub Class ES6 **

class Person {
  constructor(firstName) {
    this.firstName = firstName;
  }

  greeting() {
    return `Welcome to hell ${this.firstName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName) {
    super(firstName); 
    // Calls the parent class parameter, required for extended class
    this.lastName = lastName;
  }
}

let jon = new Customer('Devin', 'Valencia');
console.log(jon);

// methods defined in sub can't be accessed but super
// methods defined in super CAN be accessed by sub

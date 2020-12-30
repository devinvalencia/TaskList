// **** ES6 ******

class Object {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  funcName() {
    return `Hello There ${this.firstName}`;
  }

  static funcName2() {
    // Method that is available to all objects by calling class, NOT the instantiated obj
    // Stand alone method
    return 0;
  }

}
// just like java!! thank the gods.
// No types, use constructor keyword, no need to put keyword function before function name

//

// **** OLD ES5 WAY ******

// ****** Method 1 **********
var prototypeMethods = {
  greeting: function() {
    return `Hello there ${this.firstname} ${this.greeting.lastname}`;
  },
  getsMarried: function(newLastName) {
    this.lastname = newLastName;
  }
} 
// Obj literal w. props that are defined as a functions using instiantiated object props (ex. first & last name)

var mary = Object.create(prototypeMethods); 
// Creates obj w. access to methods defined from obj in parameters, which by defination is considered a prototype since the methods that this new created object has access to are outside its defination

mary.firstname = 'Mary';
mary.lastname = 'Wills';
mary.age = 30;

mary.getsMarried('Valencia');
console.log(mary);

// ****** Method 2 (Better) **********
var Devin = Object.create(prototypeMethods, {
  firstName: {value: 'Devin'},
  lastname: {value: 'V'},
  age: {value: 36}
});
// Variable uses Object.create to pass in methods but also define object properties as objects. (protoName, {}). Within brackets define property, then value of the property must also be an obj with keyword value:

console.log(Devin);
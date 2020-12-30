//Object.prototype - All obj inherit properties and method from protos, object literals inheritting from this object

// Object.prototype > yourObj.prototype > instance of obj, any obj can access funcs and props from both

// Prototypes should contain methods and properties that every instance of the object will use or can use

// Whereas objects should contain values that might be unique to that instance

// Java Class = Prototype + Constructor definations since JS doesnt have classes

function Person(firstName, lastName, dob) {
  this.fistName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
} //Object Constructor defined

Person.prototype.getAge = function() {
  var diff = Date.now() - this.birthday.getTime();
  var ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear()-1970);
} // Proto defined

var obj1 = new Person('Devin','Valencia','10/03/1990');
console.log(obj1);



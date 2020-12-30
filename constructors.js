// **** OLD ES5 WAY ******

const human = {
  name: 'Devin',
  age: 30
} // Object Literal, not an object

// Props & funcs of a constructor need a this.varName otherwise its just an object literal

// Constructor
function Person(x, dob) {
  this.name = x;
  this.birthday = new Date(dob);
  this.getAge = function() {
    var diff = Date.now() - this.birthday.getTime();
    var ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear()-1970);
  }
} // Says THIS object property called name is brad

var obj1 = new Person('Devin', '10/03/1990'); // Actual object
console.log(obj1);

function test() {
  return 0;
}

console.log(test());
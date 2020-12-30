// **** OLD ES5 WAY ******

// Want to have one object inherit from another (outside the base ones that all objs inherit by default)

function Google(){ // Passing to House
  this.area = "temp";
}

Google.prototype.message = function() {
  return "Hello Vevin";
} // Proto funcs have to be invoked, not ran when obj instantiated

function House(name) {
  this.name = name;
  Google.call(this); 
  // Part 1, call constructor in other constructor
}

House.prototype = Object.create(Google.prototype); 
// Part 2, setup inheritence

House.prototype.constructor = House; 
// Part 3, Set constructor back to original not new inherited one

// Can overwrite inheritted prop or func
House.prototype.message = function() {
  return 'Goodbye';
};

var obj1 = new House('Devin');

console.log(obj1);
console.log(obj1.message);


alert("Hello World!");
console.log("Everything okay, no worry!");
//---------------------------------------

// Variables
var a;
let b;
const email = "somebody@js.learn";

/* Not suitable
var 2name;
var for;
var first last name; 
*/

/* ES6 2015
const -> cannot be changed
let -> like var  */

//---------------------------------------

//Primitive types

//undefined
var u;

//null
var n = null;

//string
var name = "John";
console.log(typeof name);

//number
var age = 33;

//boolean
var p = true;

//Reference Types - Objects

//Arrays
var cars = ["Volvo, BMW, Mercedes"];

//Object
var person = {
  name: "John",
  age: 33,
};

//Functions
var isAlive = function () {
  return 0;
};
console.log(typeof isAlive);

//---------------------------------------

//Operators

//Aritmetic

var result;
const x = 60;
const y = 12;
let z = 7;
let t = 9;
result = x + y;
result = x - y;
result = x * y;
result = x / y;
result = x % y;
result = x % z;

result = z++; //use z=7 and increase from 7 to 8
result = ++z; //increase from 8 to 9 and use z=9
result = z--; //use z=9 and decrease from 9 to 8
result = --z; //decrease from 8 to 7 and use z=7 */

//Assignment

result = x; //60
result += x; //120
result -= x; //60
result *= x; //3600
result /= x; //60
result %= x; //0

// Comparison

z = 9;
t = "9";
result = z == t; //true
result = z === t; //false
result = x != y; //true
result = z != t; //false

result = z > t; //false
result = z < t; //false
result = z >= t; //true
result = z <= t; //true

// Logical

result = z > t && x > y; // false

// || Or
result = z > t || x > y; // true

// ! Not
result = !(z > t); // true

console.log(result);
console.log(typeof result);

//----------------------------------------------

//Date Objects

var d = new Date();
console.log(d);

// set methods
d.setFullYear(2016);
d.setMonth(6);
d.setDate(15); // 4->Friday

//get methods
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDay()); // 0->Sunday
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());

//----------------------------------------------

//String methods

const firstName = "John";
const lastName = "Doe";

var fullName = firstName + " " + lastName;

// String concat
fullName = firstName.concat(" ", lastName);

// String length
var length = firstName.length;
console.log(length); // 5

// String uppercase - lowercase
var upper = fullName.toUpperCase();
console.log(upper); // JOHN DOE

var lower = fullName.toLowerCase();
console.log(lower); // john doe

// String indexOf
var idx = fullName.indexOf("d");
console.log(idx); // 6

// String substring & slice
var substrng = fullName.substring(0, 3);
console.log(substrng); //Joh

var slc = fullName.slice(3);
console.log(slc); //n Doe

// String replace
var replace = fullName.replace("John", "Jane");
console.log(replace); //Jane Doe

console.log(fullName);
console.log(typeof fullName); //string

//----------------------------------------------

// Number Methods

var num = 10;
num = "10"; // Number
num = Number("10"); // NaN
num = isNaN("10x"); // true

// parseInt parseFloat
num = 3.142732;
num = parseInt(num); // 3
num = parseFloat(num); // 3.142732

// toPrecision
num = 3.142732;
num = num.toPrecision(4); // 3.143

// toFixed
num = 3.142732;
num = num.toFixed(4); // 3.1427

// Math methods
num = Math.PI;
num = Math.round(2.8); //3
num = Math.ceil(3.1); //4
num = Math.floor(4.9); //4
num = Math.sqrt(16); //4
num = Math.pow(2, 4); // 2^4=16
num = Math.abs(-4); //4
num = Math.min(32, 54, 12, 74, 3, 8, 13); //3
num = Math.max(32, 54, 12, 74, 3, 8, 13); //74
num = Math.round(Math.random() * 100); //between 0-1 *100 and round are helper

console.log(num);
console.log(typeof num);

//----------------------------------------------

//Arrays

var countries = ["Germany", "France", "UK", "USA"];

console.log(countries);
console.log(typeof countries);
console.log(countries.length);

var numbers = [1, 2, 3, 4, 5];

var mixed = ["USA", 15, null, undefined, ["John", 2023]];
console.log(mixed[4][0]);
console.log(typeof mixed);
console.log(mixed.length);

mixed[7] = 7;
console.log(mixed);

mixed.push("last"); //adds last
console.log(mixed);

mixed.unshift("first"); //adds first
console.log(mixed);

mixed.pop(); //removes last
console.log(mixed);

mixed.shift(); //removes first
console.log(mixed);

// reverse
mixed.reverse();
console.log(mixed);

// sort
mixed.sort();
console.log(mixed);

// concat
var combine = countries.concat(mixed);
console.log(combine);

//----------------------------------------------

// If Else Conditions

var driver = "John";
var age = "33";
var driverLicense = false;

if (driver === "John") {
  console.log("I'm John");
}

if (driverLicense === true) {
  console.log("I can drive");
} else {
  console.log("I cannot drive");
}

if (age > 18) {
  if (driverLicense === true) {
    console.log("You're eligible to drive");
  } else {
    console.log("You don't have a driver license");
  }
} else {
  console.log("You'cannot drive");
}

//----------------------------------------------

// Switch-Case Statements

let category = "coffee";
switch (category) {
  case "coffee":
    console.log("Your coffee is ready");
    break;
  case "coffeemilk":
    console.log("Your coffeemilk is ready");
    break;
  default:
    console.log("Selection is not available");
}

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}
console.log("Today is " + day);

//----------------------------------------------

// Loops for, while, do-while

//While loops
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
} //0-9

// Do-While loops
i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);
{
  console.log("ends");
} //0-9

// For loops
for (let i = 0; i < 10; i++) {
  if (i == 2) {
    console.log(i + " = two");
    continue;
  }
  if (i == 5) {
    console.log(i + " = five");
    break;
  }
  console.log(i);
}

// For For loops
for (let i = 10; i > 0; i--) {
  console.log("i = " + i);
  for (let j = 0; j < 5; j++) {
    console.log("j = " + j);
  }
}

//----------------------------------------------

// Template Literals

fullName = "John Doe";
const city = "New Amsterdam";
const birthYear = 1988;

let info = `My name is ${fullName}. I'm living in ${city} and ${
  2022 - birthYear >= 18 ? "above 18" : "below 18"
} old years.`;
console.log(info);

// Object Literals
let val;

let people = {
  firstname: "John",
  lastName: "Doe",
  age: 32,
  hobbies: ["travelling", "reading"],
  address: {
    street: "6th",
    city: "Brooklyn",
  },
  getBirthYear: function () {
    return 2022 - this.age;
  },
};

val = people.hobbies[1];
val = people.address.street;
val = people.getBirthYear();

console.log(val);
console.log(typeof val);

//----------------------------------------------

// Arrays and Objects with loops

cars = ["BMW", "Mercedes", "Audi"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// for-in
for (let i in cars) {
  console.log(`index: ${i}, value: ${cars[i]}`);
}
console.log(typeof cars);

// forEach
cars.forEach(function (item) {
  console.log(item);
});

let family = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
  },
];

family.forEach(function (item) {
  console.log(item.firstName);
});

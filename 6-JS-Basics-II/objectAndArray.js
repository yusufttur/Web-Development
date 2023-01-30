/* 
Primitive data types
- String
- Boolean
- Number 
*/

var age = 20;
var age1 = age;
console.log(`age: ${age} age1: ${age1}`);

age = 30;
console.log(`age: ${age} age1: ${age1}`);
/* 
Reference data types
- Functions
- Arrays
- Objects
 */

var info = {
    name: "Jane",
    age: 32
}

console.log(`name: ${info.name} age: ${info.age}`);

var info1 = info;
info1.name = "Jennifer"
info1.age = 40;

console.log(`name: ${info.name} age: ${info.age}`);//name: Jennifer age: 40
console.log(`name: ${info1.name} age: ${info1.age}`);//name: Jennifer age: 40


// Objects : {property: value (variable)} -> can be also object, function or array
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 34,
    gender: "male"
};

console.log(person); //{firstName: 'John', lastName: 'Doe', age: 34, gender: 'male'}
console.log(typeof person);//object
console.log(person.firstName);//John
console.log(typeof person.firstName);//string
console.log(`age: ${person.age}`);//age: 34
console.log(person["age"]);//34

var car = {
    brand: "BMW",
    model: 2018,
    color: "blue",
    engine: {
        power: "140ps",
        volume: 1.8,
        type: "petrolium"
    }
}
console.log(car);//{brand: 'BMW', model: 2018, color: 'blue', engine: {…}}
console.log(car.engine.power);//140ps
console.log(car.engine["power"]);//140ps
console.log(`power: ${car.engine.power}`);//power: 140ps

//Arrays is a type of object
var mixed = [10.5, 10, 0, , -2, true, "Apple",
    ["red", "blue"],
    { country: "USA", state: "California" }];

console.log(mixed);//(9) [10.5, 10, 0, empty, -2, true, 'Apple', Array(2), {…}]
console.log(mixed[7][1]);//blue
console.log(mixed[8].country);//USA
console.log(mixed[8]["state"]);//California
console.log(mixed[9]);//undefined

console.log(typeof mixed);//object
console.log(typeof mixed.length);//number

//for
for (let i = 0; i < mixed.length; i++) {
    console.log(mixed[i]);
}
//forEach
mixed.forEach(element => {
    console.log(element);
});
a = [1,2,3,4,5,6,7,8,9,10];
b = [20,30,40,50,60,70,80,90,100,110];

console.log(a);
console.log(b);

d = [...a]//a
console.log(d);

c = [...a, ...b];// a+b
console.log(c);

str = "Hello";
console.log([...str]);

arr = [1,2,3];

function sum(a,b,c){
return a+b+c;
}

console.log(sum(...arr)); //6
console.log(sum(arr[0], arr[1], arr[2])); //6

// Using spread opeartor with objects
const person = {
    name: "John",
    age: 30,
    city: "Miami"
}
const person2 = {...person, email: "test@example.com"};
console.log(person2);



//array methods

//toString()
const fruits = ["Banana", "Orange", "Apple", "Mango", "Peach"];
console.log(fruits);
console.log(fruits.toString());

//join()
console.log(fruits.join(' | '));

//pop()
console.log(fruits.pop());//Peach

//push
console.log(fruits.push("Peach"));

//shift()
shiftFruits = fruits.shift();
console.log(shiftFruits);

//unshift()
unshiftFruits = fruits.unshift("Watermelon");
console.log(unshiftFruits)// returns length of array

//concat()
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
console.log(arr1.concat(arr2));

//splice()
fruits.splice(2, 0, "Lemon", "Kiwi");//add after 2 items, no removal
console.log(fruits);
fruits.splice(2, 2);//no addition, remove 2 items after 2
console.log(fruits);

//slice()
console.log(fruits.slice(1, 3));//Orange, Apple
/* 
The slice() method returns selected elements in an array, as a new array.
The slice() method selects from a given start, up to a (not inclusive) given end.
The slice() method does not change the original array. 
*/

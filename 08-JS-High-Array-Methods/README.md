# JavaScript High Array Methods

This repository is a collection of examples for JavaScript array methods such as filter, find, findIndex, every, some, sort, includes, map, reduce, and reduce in groups.
## filter()
The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.
```
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter((number) => number > 3);
console.log(filteredNumbers); // [4, 5]
```
## find()
The `find()` method returns the value of the first element in the array that satisfies the provided testing function.
```
const numbers = [1, 2, 3, 4, 5];
const foundNumber = numbers.find((number) => number > 3);
console.log(foundNumber); // 4
```
## findIndex()
The `findIndex()` method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1.
```
const numbers = [1, 2, 3, 4, 5];
const foundIndex = numbers.findIndex((number) => number > 3);
console.log(foundIndex); // 3
```
## every()
The `every()` method tests whether all elements in the array pass the provided testing function. It returns a Boolean value.
```
const numbers = [1, 2, 3, 4, 5];
const allNumbersAreGreaterThanZero = numbers.every((number) => number > 0);
console.log(allNumbersAreGreaterThanZero); // true
```
## some()
The `some()` method tests whether at least one element in the array passes the provided testing function. It returns a Boolean value.
```
const numbers = [1, 2, 3, 4, 5];
const atLeastOneNumberIsGreaterThanThree = numbers.some((number) => number > 3);
console.log(atLeastOneNumberIsGreaterThanThree); // true
```
## sort()
The `sort()` method sorts the elements of an array in place and returns the sorted array.
```
const fruits = ["apple", "banana", "cherry"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "cherry"]
```
## includes()
The `includes()` method determines whether an array includes a certain value among its entries, returning a Boolean value.
```
const fruits = ["apple", "banana", "cherry"];
const includesBanana = fruits.includes("banana");
console.log(includesBanana); // true
```
## map()
The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.
```array.map(function(currentValue, index, arr), thisValue)```

* `function(currentValue, index, arr)` - Required. A function to be called for each element in the array. The function can take three arguments:
* `currentValue` - The current element being processed in the array.
* `index` - The index of the current element being processed in the array.
* `arr` - The array map() was called upon.
* `thisValue` - Optional. A value to be passed to the function to be used as its this value.
```
const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map(num => num * num);
console.log(squareNumbers); // [1, 4, 9, 16, 25]
```
* In the above example, we use map() to create a new array with the squared values of each element in `numbers`.

## reduce()
* `reduce()` is a method that applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. The original array is not modified.
```array.reduce(function(accumulator, currentValue, index, arr), initialValue)```
* `function(accumulator, currentValue, index, arr)` - Required. A function to be called for each element in the array. The function can take four arguments:
* `accumulator` - The accumulator accumulates the callback's return values. It is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
* `currentValue` - The current element being processed in the array.
* `index` - Optional. The index of the current element being processed in the array.
* `arr` - Optional. The array reduce() was called upon.
* `initialValue` - Optional. A value to be passed to the function as the initial value of the accumulator. If no initial value is supplied, the first element in the array will be used as the initial accumulator value, and iteration will start at the second element.
```
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // 15
```
* In the above example, we use `reduce()` to calculate the sum of all elements in `numbers`.

## reduce() in Groups

`reduce()` in groups is a variation of `reduce()` that groups the elements of an array based on a key and reduces the values of each group to a single value. The original array is not modified.
```array.reduce(function(accumulator, currentValue, index, arr), {})```
* `function(accumulator, currentValue, index, arr)` - Required. A function to be called for each element in the array. The function can take four arguments:
* `accumulator` - The accumulator accumulates the callback's return values. It is an object that groups the array elements by a specified key.
* `currentValue` - The current element being processed in the array.
* `index` - Optional. The index of the current element being processed in the array.
* `arr` - Optional. The array reduce() was called upon.
```
const numbers = [1, 2, 3, 4, 5, 6];
const groups = numbers.reduce((acc, number) => {
  const groupKey = number % 2 === 0 ? 'even' : 'odd';
  if (!acc[groupKey]) {
    acc[groupKey] = [];
  }
  acc[groupKey].push(number);
  return acc;
}, {});
```
* In this example, we initialize the accumulator as an empty object `{}`. For each number in the array, we calculate the group key (even or odd) and check if it exists in the accumulator object. If it doesn't, we create a new empty array for that group key. Finally, we push the number to the appropriate group array.

After this operation, the `groups` object would look like this:
```
{
  even: [2, 4, 6],
  odd: [1, 3, 5],
}
```
## Conclusion
JavaScript array methods like ilter, find, findindex, every, some, sortincludes, map, reduce and reduce in groups are powerful tools that allow us to manipulate and transform data in arrays easily. By understanding these methods, we can write more concise and readable code.

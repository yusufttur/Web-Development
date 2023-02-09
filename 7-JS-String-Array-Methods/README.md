# Javascript String and Array Methods

## Scope of variables
* In JavaScript, there are three main scopes for variables: `global`, `function`, and `block`.

- Global variables are declared outside of any function and are accessible from anywhere in your code. 
- Function scoped variables are declared within a function and are only accessible within that function. 
- Block scoped variables are declared using the let or const keywords within a block of code and are only accessible within that block.

## String methods
* In terms of string methods, JavaScript has many built-in functions to manipulate strings, including:

- `length` returns the length of a string
- `slice` returns a portion of a string
- `substring` returns a portion of a string
- `replace` replaces a portion of a string with a new string
- `replaceAll` replaces all occurrences of a string with a new string
- `toUppercase` converts a string to uppercase
- `toLowerCase` converts a string to lowercase
- `concat` concatenates two or more strings
- `trim` removes whitespace from the beginning and end of a string
- `charAt` returns the character at a specified index
- `indexOf` returns the first index of a specified string or character
- `split` splits a string into an array of substrings

## Arrays and spread operators
* In JavaScript, arrays are ordered collections of values. They can contain any data type, including other arrays. There are several built-in methods for arrays, including:

- `toString` returns a string representation of an array
- `join` concatenates all elements of an array into a single string
- `pop` removes the last element from an array and returns it
- `push` adds one or more elements to the end of an array
- `shift` removes the first element from an array and returns it
- `unshift` adds one or more elements to the beginning of an array
- `concat` concatenates two or more arrays
- `splice` adds or removes elements from an array
- `slice` returns a portion of an array

* The spread operator (`...`) allows you to expand an array or object into individual elements or properties. This can be useful for creating a new array based on an existing one, copying arrays or objects, or passing individual elements of an array as arguments to a function.

## Arrow functions
* Arrow functions are a concise syntax for writing anonymous functions (functions without a name). They are useful for short, simple functions and for working with higher-order functions (functions that take other functions as arguments). Arrow functions have a few key differences from traditional function expressions:

- They use the `=> `syntax instead of the `function` keyword
- They do not have their own `this` value and instead inherit the `this` value of their surrounding context
- They do not have an `arguments` object and instead accept their parameters as a comma-separated list

* Here is an example of an arrow function that takes two parameters and returns their sum: 

```const sum = (a, b) => a + b;```

## Authors
* [**Yusuf Tür**](https://github.com/yusufttur)

// string

//length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length);//26

//slice()
let fruits = "Apple, Banana, Kiwi";
console.log(fruits.slice(7, 13));//Banana
console.log(fruits.slice(-12, -6));//Banana

//substring()
console.log(fruits.substring(7, 13));//Banana

//substr()
console.log(fruits.substr(7, 6));//Banana

//replace()
let visit = "Please visit Microsoft!";
console.log(visit.replace("Microsoft", "W3Schools"));

/* 
Note
The replace() method does not change the string it is called on.
The replace() method returns a new string.
The replace() method replaces only the first match
If you want to replace all matches, use a regular expression with the /g flag set. See examples below. 
*/

let visit2 = "Please visit Microsoft and Microsoft!";
//Please visit W3Schools!
console.log(visit2.replace("Microsoft", "W3Schools"));
//Please visit W3Schools and Microsoft!
console.log(visit2.replace(/Microsoft/g, "W3Schools"));
//Please visit W3Schools and W3Schools!

//replaceAll() -- ES2021 feature
console.log(visit2.replaceAll("Microsoft", "W3Schools"));
//Please visit W3Schools and W3Schools!


//toUpperCase() & toLowerCase()
let text1 = "Hello World!";
console.log(text1.toUpperCase());
console.log(text1.toLowerCase());

//concat()
let text1a = "Hello";
let text2a = "World";
console.log(text1a.concat(" ", text2a));

/* 
Note
All string methods return a new string. They don't modify the original string.
Formally said:
Strings are immutable: Strings cannot be changed, only replaced. 
*/

//trim()
let text1b = "      Hello World!      ";
console.log(text1b.trim());

//trimStart()
console.log(text1b.trimStart());

//trimEnd()
console.log(text1b.trimEnd());

//charAt()
console.log(text1.charAt(0));//H

//indexOf()
console.log(text1.indexOf("o",5))//7

//split()
console.log(text1.split(" "));//(2) ['Hello', 'World!']

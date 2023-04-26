const slug = require('slugify');
const _ = require('lodash');

const fullName = 'John Doe';
console.log(fullName);
console.log(slug(fullName));

console.log(_.last([1, 2, 3]));
console.log(_.reverse([1, 2, 3]));

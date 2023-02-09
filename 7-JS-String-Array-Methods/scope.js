// Scope
//Global
var a = 1;
let b = 2;
const c = 3;

//Function
function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log("Function scope: ", a, b, c);
}

test();

//Block
if (true) {
  let a = 10; // var -> let
  let b = 20;
  const c = 30;
  console.log("Block scope: ", a, b, c);
}

console.log("Global scope: ", a, b, c);

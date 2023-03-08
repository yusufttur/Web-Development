function sayHello(firstName){
    console.log("Hello " + firstName);
}
sayHello("John");

const sayHello2= (firstName) =>{
    console.log("Hello " + firstName);
}
sayHello2("Jane");

//?
const sayHello3 = (firstName) => 1;
sayHello3("noname");

x = () => {return "Hello"};
console.log(x());
// const sum = (num1, num2) => {
//   return num1 + num2;
// };

// const display = (process) => {
//   setTimeout(() => {
//     console.log(process);
//   }, 2000);
// };

// console.log(sum(3, 5));
// display(sum(4, 6));

// ----------------------------

// function login(callBack) {
//   setTimeout(() => {
//     console.log('login is successful');
//     callBack();
//   }, 2000);
// }

// function list() {
//   setTimeout(() => {
//     console.log('items are listed');
//   }, 1000);
// }

// login(list);

// ----------------------------

// function printFirstName(firstName, callBack) {
//   setTimeout(() => {
//     console.log(firstName);
//     callBack();
//   }, 2000);
// }

// function printLastName() {
//   setTimeout(() => {
//     console.log('Doe');
//   }, 1000);
// }

// printFirstName('John', printLastName);

// ----------------------------

const todos = [
  { title: 'todo1', description: 'review the topic' },
  { title: 'todo2', description: 'do exercise' },
  { title: 'todo3', description: 'do homework' },
];

function todoList() {
  setTimeout(() => {
    todos.forEach((item) => {
      console.log(item);
    });
  }, 2000);
}

function newTodo(todo, callBack) {
  setTimeout(() => {
    todos.push(todo);
    callBack();
  }, 3000);
}

newTodo(
  {
    title: 'todo4',
    description: 'new todo',
  },
  todoList
);

//-------------------------------------------------

// callback

// [].filter((item) => {
//   item.id == '1234';
// });

// function sum(num1, num2) {
//   return num1 + num2;
// }

const firstFunction = (nextFunction) => {
  setTimeout(() => {
    console.log('first function is called');
    nextFunction();
  }, 3000);
};

const secondFunction = () => {
  setTimeout(() => {
    console.log('second function is called');
  }, 2000);
};

firstFunction(secondFunction);

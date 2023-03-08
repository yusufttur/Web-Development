// const todos = [
//   { title: 'todo1', description: 'review the topic' },
//   { title: 'todo2', description: 'do exercise' },
//   { title: 'todo3', description: 'do homework' },
// ];

// function todoList() {
//   setTimeout(() => {
//     todos.forEach((item) => {
//       console.log(item);
//     });
//   }, 2000);
// }

// function newTodo(todo) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       todos.push(todo);
//         const error = false;
//         if (!error) {
//           resolve();
//         } else {
//           reject('Error!');
//         }
//     }, 3000);
//   });
// }

// newTodo({
//   title: 'todo4',
//   description: 'new todo',
// })
//   .then((response) => {
//     todoList();
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// ----------------------------

const isLoggedIn = true;

const promise1 = () => {
  const result = new Promise((resolve, reject) => {
    if (isLoggedIn) {
      resolve('Login successful.');
    } else {
      reject('Login failed!');
    }
  });
  return result;
};

const hasArticle = false;

const promise2 = () => {
  const result = new Promise((resolve, reject) => {
    if (hasArticle) {
      resolve('Yes, it has.');
    } else {
      reject('No, not available.');
    }
  });
  return result;
};

promise1()
  .then((result) => {
    console.log(result);
    promise2()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });

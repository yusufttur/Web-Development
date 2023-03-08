# JavaScript Callbacks, Promises, Async/Await, and Fetch

JavaScript is a popular language that is used for both front-end and back-end web development. It has many features that make it versatile, but some of the most important ones are callbacks, promises, async/await, and fetch. In this guide, we'll explain what each of these features is and how you can use them in your JavaScript code.

## Callbacks

A callback function is a function that is passed as an argument to another function and is executed after some operation is completed. Callbacks are often used in asynchronous programming, where the program needs to wait for some task to complete before moving on to the next one. Here's an example of a simple callback function:

```function callbackFunction() {
  console.log("Callback function has been called");
}

function performSomeTask(callback) {
  console.log("Performing some task");
  callback();
}

performSomeTask(callbackFunction);
```

In this example, the `performSomeTask` function takes a callback function as an argument and calls it after it has performed some task. When you run this code, you should see the following output:

```Performing some task
Callback function has been called
```

## Promises

Promises are a newer feature in JavaScript that are designed to make asynchronous programming easier and more intuitive. A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and allows you to attach callbacks to it that will be called when the operation is complete. Here's an example of how you can use promises to perform an asynchronous task:

```function performAsyncTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Async task completed");
    }, 2000);
  });
}

performAsyncTask()
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

In this example, the `performAsyncTask` function returns a promise that will be resolved after 2 seconds. The `.then()` method is called when the promise is resolved, and the `.catch()` method is called if the promise is rejected. When you run this code, you should see the following output:

```
Async task completed
```

## Async/Await

Async/await is a newer feature in JavaScript that is built on top of promises and provides a cleaner syntax for working with asynchronous code. Async/await allows you to write asynchronous code that looks like synchronous code, which can make it easier to read and understand. Here's an example of how you can use async/await to perform an asynchronous task:

```async function performAsyncTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Async task completed");
    }, 2000);
  });
}

async function run() {
  try {
    const result = await performAsyncTask();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

run();
```

In this example, the `performAsyncTask` function returns a promise just like in the previous example, but this time we use the `async` keyword to mark the function as asynchronous. We then use the `await` keyword to wait for the promise to be resolved before continuing with the rest of the code. When you run this code, you should see the following output:

```
Async task completed
```

## Fetch

Fetch is a newer feature in JavaScript that provides a modern way to make HTTP requests. Fetch is built on top of promises and provides a cleaner syntax for making HTTP requests compared to older methods like XMLHttpRequest. Here's an example of how you can use fetch to make an HTTP request:

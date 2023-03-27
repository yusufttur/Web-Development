# Introduction:

Axios is a popular JavaScript library used for making HTTP requests from the browser or Node.js. It provides a simple and consistent API for handling asynchronous requests and responses with a promise-based approach.

## Getting started:

To use Axios, you will need to install it using a package manager such as npm or yarn. Once installed, you can import it into your project and start making HTTP requests.

## Making requests:

Axios provides several methods for making HTTP requests, including GET, POST, PUT, PATCH, and DELETE. Here are some examples:

GET request:

```
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => console.log(response.data))
  .catch(error => console.error(error))
```

POST request:

```
axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'New post',
    body: 'This is a new post',
    userId: 1
  })
  .then(response => console.log(response.data))
  .catch(error => console.error(error))

```

PUT request:

```
axios.put('https://jsonplaceholder.typicode.com/posts/1', {
    title: 'Updated post',
    body: 'This post has been updated',
    userId: 1
  })
  .then(response => console.log(response.data))
  .catch(error => console.error(error))

```

DELETE request:

```
axios.delete('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => console.log(response.data))
  .catch(error => console.error(error))

```

### Handling responses:

Axios returns a promise that resolves with the response data. You can handle the response using the .then() and .catch() methods. The response object contains information such as the status code, headers, and data.

### Configuring Axios:

Axios allows you to configure default settings for all requests, such as the base URL, headers, and timeout. You can also create multiple instances with different configurations. Here's an example:

```
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Authorization': 'Bearer ' + token
  },
  timeout: 1000
});

instance.get('/posts')
  .then(response => console.log(response.data))
  .catch(error => console.error(error))
```

### Conclusion:

Axios is a powerful and flexible library for making HTTP requests. With its easy-to-use API and promise-based approach, it's a popular choice for front-end and back-end developers alike.

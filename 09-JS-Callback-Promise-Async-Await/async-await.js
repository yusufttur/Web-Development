const data = [];
const state = false;

const dataLoader = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = [
        {
          id: '88f24bea-3825-4237-a0d1-efb6b92d37a4',
          firstName: 'Sam',
          lastName: 'Hughes',
        },
        {
          id: '2a35032d-e02b-4508-b3b5-6393aff75a53',
          firstName: 'Terri',
          lastName: 'Bishop',
        },
      ];
      data.push(users);

      if (state) {
        resolve();
      } else {
        reject('Error: Data could not be loaded.');
      }
    }, 3000);
  });
};

const dataPrinter = () => {
  setTimeout(() => {
    data.forEach((i) => console.log(i));
  }, 2000);
};

function processFlow() {
  dataLoader();
  console.log(data);
  dataPrinter();
}

processFlow();

//---------------------------------------------------------

// required promise to use async await

const isLoggedIn = true;
const loginPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isLoggedIn) {
        resolve({ username: 'John Doe', email: 'test@example.com' });
      } else {
        reject('Login failed');
      }
    }, 3000);
  });
};

const hasArticle = false;
const articlePromise = () => {
  const result = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (hasArticle) {
        resolve({ name: 'Artificial Intelligence', id: '1a2b3c' });
      } else {
        reject('No article found.');
      }
    }, 2000);
  });
  return result;
};

//how a promise is queued?
// await => wait until promise finished

// async function process() {}

const process = async () => {
  await loginPromise()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });

  await articlePromise()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });

  console.log('Process finished');
};

process();

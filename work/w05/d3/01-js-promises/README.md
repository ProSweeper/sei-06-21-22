<img src="https://i.imgur.com/PMyzlb1.png">

# JavaScript Promises

## Learning Objectives

| Students Will Be Able To: |
|---|
| Describe the Use Case for Promises |
| Create a Promise |
| Run code when a Promise resolves |
| Run code when a Promise is rejected |
| Chain Promises |
| Seed a Database |

## Road Map

1. Setup
2. The Use Case of Promises
3. What's a Promise?
4. Making Promises
5. Resolving Promises
6. Rejecting Promises
7. Chaining Promises
8. Example - Seeding a Database

## Setup

Open your mongoose-movies project and create a file named `seed.js`:

- `cd ~/code/mongoose-movies`
- `touch seed.js`

Lastly, open VS Code:

- `code .`
- Open a terminal session (`control + backtick`)
- There's no need to start the server for now

## The Use Case of Promises

[Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) provide another way to handle _asynchronous_ operations.

**❓ Take a minute to answer the following:**

1. What functions/methods have we used that execute _asynchronously_?
2. What "mechanism" have we used that enables code to be run after an asynchronous operation is complete?

**Promises** provide an alternative to _callbacks_ as a way to work with asynchronous code execution.

Functions/methods that implement asynchronous operations must be written to either:
	
- Accept a callback
- Return a promise
- Or do both (Mongoose queries are an example of this)

## What's a Promise?

A [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) is a special JavaScript object.

An asynchronous function/method designed to work with promises will return a promise instead of accepting a callback function. For example, we've been querying with Mongoose models using the callback approach:

```js
Movie.find({}, function(err, movies) {...});
```

But, Mongoose queries will return a "thenable" that we can work with just like promises if we don't provide a callback function:

```js
const queryPromise = Movie.find({});
```

> Note that usually we will chain the `.then` method onto the `find()` method, but the above syntax more clearly demonstrates the point that a promise is being returned when calling `find()`.

A promise represents the eventual completion, or failure, of the asynchronous operation performed by the function/method that returned the promise.

Although we more commonly use promises returned by methods like `find()` above, we can better learn about promises in general by creating our own...

## Making Promises

In the **seed.js** file, let's make a promise using the `Promise` class:

```js
const p = new Promise();
```

Saving and running in terminal:

```sh
$ node seed
```
Will generate an error because a function argument must be passed in...

Let's give `new Promise()` a callback function that has two parameters as an argument:

```js
const p = new Promise(function(resolve, reject) {
  console.log(resolve, reject);
});
console.log(p);
```

**Observations:**

- The callback function (known as the _executor_) is immediately called by the Promise class' constructor method.
- When the callback is called, it will be passed two functions as args for the `resolve` and `reject` parameters.
- The promise created is an object with an initial state of `<pending>`.

A promise is always in one of three states:

- `pending`: Initial state, neither fulfilled nor rejected.
- `fulfilled`: The async operation completed successfully.
- `rejected`: The async operation failed.

Once a promise has been settled, i.e., it's no longer _pending_, its state will never change again.

## Resolving Promises

So, how does a promise become `fulfilled`?

By calling the `resolve` function...

```js
const p = new Promise(function(resolve, reject) {
  let value = 42;
  resolve(value);
});
```

The promise, `p`, has been _resolved_ with the value `42` and is not in the state of `fulfilled`.

Note that promises can only be resolved with a single value/thing, however it can be anything such as an object, etc.

### Obtaining the Resolved Value from a Promise

How do we get the value of a resolved promise?

By calling the promise's `then` method...

```js
const p = new Promise(function(resolve, reject) {
  const value = 42;
  resolve(value);
});

p.then(function(result) {
  console.log(result);
});
```

The `then` method will execute the provided callback as soon as the promise is resolved. BTW, you can call `then` multiple times to access the value of a resolved promise.

### Let's Make the Promise Asynchronous

So far our code is synchronous, to make it a bit more interesting, we can use a `setTimeout` to make it resolve asynchronously:

```js
const p = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('Timed out!');
  }, 2000);
});

p.then(function(result) {
  console.log(result);
});
```

Nice, we've seen how the `resolve` function fulfills a promise.

I bet you know what the `reject` function does...

## Rejecting Promises

Now let's call the `reject` function instead of `resolve`:

```js
const p = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject('Something went wrong!');
  }, 2000);
});
```

After 2 seconds, we'll see a `UnhandledPromiseRejectionWarning: ...` error.

Reading the error more closely reveals that we need a `.catch()` to handle the promise rejection...  

### Handling Rejected Promises

Let's chain on a `catch` method call:

```js
p.then(function(result) {
  console.log(result);
}).catch(function(err) {
  console.log(err);
});
```

That's better!

In summary...

<img src="https://i.imgur.com/B0nzUpC.png">

### ❓ Promises - Review Questions

1. **As a way of working with asynchronous operations, promises provide an alternative to _________ functions.**

2. **What three states can a promise be in?**

3. **What method do we call on a promise to obtain its resolved value?**

## Chaining Promises

Do you remember having to nest callback functions?

It can get ugly...

<img src="https://i.imgur.com/Zyq5zZU.png">

The advantage of promises is that they "flatten" the async flow and thus avoid the so-called **pyramid of doom**.

Note that by chaining one `.then` after another we can keep the code "flat" and don't create the pyramid of doom caused by nested callback functions:

```js
p
.then(function(result) {
  console.log(result);
  return 42;
})
.then(function(result) {
  console.log(result);
  return 'Done!'
})
.then(function(result) {
  console.log(result);
});
```

Note that although we are returning primitive values from the callback functions, the `.then` method **always** returns a promise that resolves to the value we returned.

Let's see what happens if we return promises instead of primitives...

First we need a cool asynchronous function that returns a promise:

```js
function asyncAdd(a, b, delay) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(a + b);
    }, delay);
  });
}
```

As you can see, the above function returns a promise that resolves to the result of adding two numbers after a delay (ms).

Here's some code that demonstrates promise chaining:

```js
asyncAdd(5, 10, 2000)
.then(function(sum) {
  console.log(sum);
  return asyncAdd(sum, 100, 1000);
})
.then(function(sum) {
  console.log(sum);
  return asyncAdd(sum, 1000, 2000);
})
.then(function(sum) {
  console.log(sum);
});
```

Note that when the `then` callback returns a promise, the next `then` is called when _that_ promise resolves.

Nice, we've made our own promises, resolved them, and chained them!

More commonly though, we'll be using/consuming promises returned by libraries such as Mongoose...

## Example - Seeding a Database

**Seeding** a database is the process of populating a database with some initial data.

Use cases for seeding a database include:

- Creating an initial _admin_ user
- To provide data for lookup tables/collections. For example, in a inventory app for a grocery store, you might seed a _departments_ table/collection with values like `Deli`, `Dairy`, `Bakery`, `Meat & Seafood`, etc.

Note the the process of seeding a database is not part of the application(s) that use the database and is executed separately.

At the top of **seed.js**, let's connect to the database, require the Models and load the `data` module:

```js
// seed.js (a utility to seed/initialize the database)

// Uncomment the next line if using a .env to hold the db connection string
// require('dotenv').config();

// Connect to the db
require('./config/database');

const Movie = require('./models/movie');
const Performer = require('./models/performer');

// For better organization, the see data is being stored in a separate data.js module
const data = require('./data');
```

<details>
  <summary>Touch that data.js and copy the content from the data.js that's in this dropdown</summary>

```js
exports.performers = [
  {name: 'Natalie Portman', born: '06-09-1981'},
  {name: 'Kevin Bacon', born: '07-08-1958'},
  {name: 'Tom Cruise', born: '07-03-1962'},
  {name: 'Brad Pitt', born: '12-18-1963'},
  {name: 'Emma Watson', born: '04-15-1990'},
  {name: 'Carrie Fisher', born: '10-21-1956'},
  {name: 'Mark Hamill', born: '09-25-1951'},
  {name: 'Harrison Ford', born: '07-13-1942'},
  {name: 'Jodie Foster', born: '11-19-1962'},
  {name: 'Matthew McConaughey', born: '11-04-1969'},
  {name: 'James Woods', born: '04-18-1947'},
  {name: 'Anne Hathaway', born: '11-12-1982'},
  {name: 'Bill Murray', born: '09-21-1950'},
  {name: 'Chevy Chase', born: '10-08-1943'},
  {name: 'Rami Malek', born: '05-12-1981'}
];

exports.movies = [
  {title: 'Contact', releaseYear: 1997, mpaaRating: 'PG', nowShowing: false},
  {title: 'Star Wars - A New Hope', releaseYear: 1977, mpaaRating: 'PG', nowShowing: false,
    reviews: [{content: 'The one that started it all!', rating: 5}]
  },
  {title: 'Interstellar', releaseYear: 2014, mpaaRating: 'PG-13', nowShowing: true,
    reviews: [{content: 'A fantastic sci-fi mind blower!', rating: 5}]
  },
  {title: 'Caddyshack', releaseYear: 1980, mpaaRating: 'R', nowShowing: false,
    reviews: [{content: 'Low-budget senseless comedy', rating: 4}, {content: 'Should not be the classic it is.', rating: 2}]
  },
  {title: 'Bohemian Rhapsody', releaseYear: 2018, mpaaRating: 'PG-13', nowShowing: true}
];
```

</details>

To avoid duplicates when seeding a database, we first need to delete all data from the collections we'll be inserting data into.

The following code deletes all movie documents and correctly ends the program:

```js
// Just a query object as an arg, no callback!
Movie.deleteMany({})
// The cb provided to the .then does not use the error-first signature
// use .catch instead to deal with errors
.then(function(results) {
  // results will be whatever the promise
  // returned by the deleteMany method resolves to
  console.log(results);
  // process.exit() immediately exits a Node program
  process.exit();
});
```

Be sure to review the comments included with the code above to better understand how to use promises with Mongoose.

Running `node seed` will result in the `results` object being logged out.

### Deleting `movies` & `performers` in Sequence (Serially)

The following code will delete the performers after the movies are deleted and then exit the program:

```js
Movie.deleteMany({})
.then(function(results) {
  console.log('Deleted movies: ', results);
  // Now let's delete the performers and return the "promise"
  return Performer.deleteMany({});
})
.then(function(results) {
  console.log('Deleted performers:', results);
  process.exit();
})
``` 

The above works, but there's a more performant approach... 

### Performing Asynchronous Operations in Parallel

There's nothing wrong with the code as written - it works.

However, the code first waits for the database to finish deleting the movies before it begins to delete the performers.

Because they are not dependent upon each other, it would be more efficient to perform both operations **simultaneously** - the static [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) method can make this happen!

`Promise.all` accepts an array of promises and returns a **single** promise in their place:

```js
// Save the promises (or call right in the array if feeling frisky)
const p1 = Movie.deleteMany({});
const p2 = Performer.deleteMany({});
// Promise.all will return a single promise that resolves
// only after all of the array's promises resolve
Promise.all([p1, p2])
.then(function(results) {
  console.log(results);
})
// Yes we can!
.then(process.exit);
```

The above code now removes documents from the _movies_ & _performers_ collections in **parallel**!

### Let's Seed Some Data!

Finally, let's create some data - beginning with performers:

```js
...

Promise.all([p1, p2])
.then(function(results) {
  console.log(results);
  return Performer.create(data.performers);
})
.then(function(performers) {
  console.log(performers);
})
.then(process.exit);
```
	
Try it out!

Now it's your turn...

#### 💪 You Do:

- `data.movies` contains an array of movie data.

- Add the code that will create the _movie_ documents.

- Click the 🌶️ when you've finished.

Spinning up the server and browsing to `localhost:3000` verifies the data is looking sweet!

Although using the app to assign performers to a movie's `cast` property is fun, let's take a look at how you might do it in **seed.js**.  

### Associating `movies` & `performers` When Seeding

**Important:** You should never refer to an actual `_id` when seeding!

For example, **don't** write code like:

```js
// Don't do this in a seed 
Movie.findById('5c609ac7641fdd63f6b8b71d')
.then(...)
```

<details>
  <summary><strong>❓ Why not?</strong></summary>
  <p>Because the _ids change each time the seed module is executed.</p>
</details> 

Instead, we could query for documents based on properties other than their `_id`.

For example, let's say we want to assign the performer, **Mark Hamill**, to **Star Wars - A New Hope**...

We'll review as we type this:

```js
// insert the following before the .then(process.exit)
.then(function(movies) {
  return Promise.all([
    Performer.findOne({name: 'Mark Hamill'}),
    Movie.findOne({title: 'Star Wars - A New Hope'})
  ]);
})
.then(function(results) {  // one day we'll destructure this!
  const mark = results[0];
  const starWars = results[1];
  starWars.cast.push(mark);
  return starWars.save();
})
.then(process.exit);
```

Check it out in the app - congrats!

On to the lab...

## References

- [MDN - Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)



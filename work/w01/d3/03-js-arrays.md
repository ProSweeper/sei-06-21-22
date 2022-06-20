<img src="https://i.imgur.com/DEsPVNw.png" height="400">

# Intro to JavaScript Arrays

## Learning Objectives

| Students Will Be Able To: |
|---|
| Describe the Use Case for Arrays |
| Create Arrays Using Literal Syntax and the Array Class |
| Access the Elements in an Array |
| Add an Element to the Front or End of an Array |
| Remove an Element from the Front or End of an Array |
| Add/Remove Elements to/from Anywhere in the Array  |
| Iterate Over All of the Elements in an Array |
| Copy All or Some of an Array |
| Create a Single String from an Array |

## Road Map

1. The Use Case (What & Why) of Arrays
2. Creating Arrays
3. Accessing Elements in an Array
4. Adding Elements to an Array
5. Removing Elements from an Array
6. Iterating Over the Elements
7. Making Copies of an Array
8. Create a String from an Array
9. Essential Questions
10. Further Study

## Setup

Create a new HTML/CSS/JS Repl in [replit.com](https://replit.com/) and name it **JS Arrays**

## 1. The Use Case (What & Why) of Arrays

### What are Arrays?

- Arrays are an extremely popular data structure used store an ordered "list" of data.
- Arrays can contain zero or more items called - **elements** (not to be confused with HTML elements).
- Each element in an array can hold any data type including objects, functions, even other arrays.
- Although we often may refer to Arrays as a **data type**, they are actually a subtype of the JS Object, i.e., Arrays are Objects in JS.
- It is a best practice to name array variables plurally, e.g.,<br> `let colors = ['red', 'green', 'blue'];`

### Why use Arrays?

- Arrays are the data structure of choice for holding ordered lists of data.
- Without data structures like arrays (and data types like objects), we'd have to store each piece of data in separate variables resulting is lots of messy code.

## 2. Creating Arrays

There are two ways to create an array...

```js
// using a Class/Constructor Function (less common syntax)
let nums = new Array(2, 4, 18);

// using Array Literal syntax (recommended best practice)
let nums = [2, 4, 18];
```

The best practice is to use the _Array Literal_ syntax because it's more concise and the Class approach behaves differently if you pass only one argument.

### Creating Arrays - Exercise (1 min)

- Create an array consisting of three of your favorite movies (strings) and assign it to a variable named `movies`.

## 3. Accessing Elements in an Array

We access elements in an array using **square bracket notation**, passing in the "index" (position) of the element you want to access:

```js
let movies = ['Caddyshack', 'Interstellar', 'Scarface'];
let firstMovie = movies[0];  // 'Caddyshack'
```

Note that indexes are integer numbers where `0` is used to access the first element.

To access the last element in an array we need to know how many elements the array has and subtract `1` - this is where the [length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length) property comes in handy:

```js
let lastMovie = movies[movies.length - 1];  // 'Scarface'
```

> Since when is `0` the first item in anything?  Since computer science came along! Internally, programs prefer to think in terms of "offsets" in memory. Thus, we access the first item using an offset of zero - arrays are "zero-based" in JS.

## 4. Adding Elements to an Array

We can add elements to the **end** of an array using the [push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) method:

```js
movies.push('Trading Places', 'Antitrust');
```

Yes, we can add more than one element can be added at a time.

We can also add to the **front** of an array with [unshift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift):

```js
movies.unshift('Star Wars');
```

## 5. Removing Elements from an Array

We can remove a single element from the **end** of an array using the [pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) method:

```js
let movie = movies.pop();
```

We can also remove from the **front** of an array with `shift`:

```js
movie = movies.shift();
```

The `pop` and `shift` methods only remove one element at a time and don't take any arguments.

### Remembering `unshift` & `shift`

Because of their names, `push` & `pop` are easy to remember.

However, `unshift` & `shift` are are not so clear.

Maybe this will help you remember:

```
The "longer" named methods do the same thing (add to an array)
unshift -> [...] <- push

The "shorter" named ones remove
shift <- [...] -> pop
```

### Add/Remove Elements to/from Anywhere in the Array

The [Array.prototype.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) method is capable of adding and/or removing any number of elements to/from an array with a single line of code!

`splice` has a syntax of: `array.splice(start, deleteCount, newItem1, newItem2...)`

Examples of adding/removing elements with `splice`:

```js
movies => [ 'Caddyshack', 'Interstellar', 'Scarface', 'Trading Places' ]
let removedMovies = movies.splice(3, 1, 'Spaceballs', 'Alien');
movies => [ 'Caddyshack', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien' ]
removedMovies = movies.splice(0, 3);
movies => [ 'Spaceballs', 'Alien' ]
removedMovies = movies.splice(1, 0, 'The Sting');
removedMovies => []
movies => [ 'Spaceballs', 'The Sting', 'Alien' ]
```

The `splice` method always returns an array containing the removed elements (an empty array if no elements were removed).

## 6. Iterating Over All of the Elements in an Array

### Using the `forEach` Iterator Method

Although a `for` loop can be used to iterate over an array, if you know you want to iterate over **all** of the elements in an array, the [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) iterator method is a better approach:

```js
movies.forEach(function(movie) {
  console.log(movie);
});
```

Try it out. As you can see, the `forEach` method calls the function provided as an argument **once for each element** in the array.
	
When the `forEach` method invokes the function for each element, it will pass in the current element as the first argument and its index as a second argument, for example:

```js
movies.forEach(function(movie, idx) {
  console.log(idx + ') ' + movie);
});
```

> Note that it's a good practice to name the parameter that accepts each element as the singular of the array, or simply the first letter of the array variable (`movie` or `m` for the example above).

### Using a `for...of` Loop

ES2015 provides the `for...of` loop for iterating over the elements of arrays and other iterables such as strings:

```js
for (let movie of movies) {
  if (movie === 'The Last Airbender') break;
  console.log(movie);
}
``` 

Whereas the `forEach` method will always iterate over all of the elements, the `for...of` loop can be exited using the [break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) statement.

## 7. Making Copies of an Array

There are multiple ways to copy an array.

The approach you use depends upon whether you need to copy just some or the entire array.

Let's take a look...

### Copy All or Some of an Array

We can use the [Array.prototype.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) method to create a copy of all, **or part**, of an array.

The `slice` method always returns a new array and does not mutate (change) the source array.

`slice` has a syntax of: `array.slice(startIndex, [endIndex])`

Unlike `splice`, the 2nd argument in `slice` represents the ending index (but does not include that index). 

Example:

```js
let movies = [ 'Spaceballs', 'The Sting', 'Alien' ];
let lastTwoMovies = movies.slice(1, 3); // ['The Sting, 'Alien']
```

### Copy All of an Array

ES2015 gave us a cool new way to copy an entire array using `...` ([spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)).

Example:

```js
let movies = [ 'Spaceballs', 'The Sting', 'Alien' ];
let moviesCopy = [...movies];
```
> All of the elements in the `movies` arrays will be "spread" within the new array.

### Copy All of an Array & Insert Additional Element(s)

Here's how you can copy and insert additional elements simultaneously using the spread syntax:

```js
let movies = [ 'Spaceballs', 'The Sting', 'Alien' ];
let moreMovies = ['Interstellar', ...movies, 'Contact'];
```

## 8. Create a Single String from an Array

An array method that may come in handy is `join` which creates a single string from all of the elements in an array:

```js
let movieStr = movies.join();  // movieStr will be 'Spaceballs,The Sting,Alien'
```
	
As you can see, by default, the movie strings were delimited by a comma. However, we can pass `join` whatever string we want to use as the delimiter/separator:

```js
movieStr = movies.join(' --- ');  // movieStr will be 'Spaceballs --- The Sting --- Alien'
```
	
## 9. Essential Questions

1. **In your own words, what's an array?**

2. **What will be the value of the variable `color`:**

	```js
	const colors = ['red', 'green', 'blue'];
	let color = colors[1];
	```

3. **What's the best method to use to iterate through an entire array?**

4. **What method is used to copy a certain number of elements into a new array?**

## 10. Further Study

Because arrays are such a useful data structure, developers should know what methods are available and what they do...

### Array Iterator Methods

Array iterator methods that, not surprisingly, iterate over the elements in an array.

They are extremely useful and we will be covering them in a later lesson. Check [here](https://gist.github.com/jim-clark/843ebb5288d90da6b0dfd9eecd134b7c) for a preview.

### Other Useful Methods (Non-Iterating)

Other useful methods to know about:

- [includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) / [lastIndexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)
- [reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
- [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [fill](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)

## References

[MDN - JavaScript Arrays
](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)


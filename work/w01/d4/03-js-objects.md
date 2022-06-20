<img src="https://i.imgur.com/DEsPVNw.png" height="400">

# Intro to JavaScript Objects

## Learning Objectives

| Students Will Be Able To: |
|---|
| Describe the Use Case for Objects |
| Create Objects Using Object Literal Syntax |
| Add a Property to an Existing Object |
| Modify the Value of a Property |
| Explain When to Use Dot or Square Bracket Notation |
| Delete a Property |
| Iterate Over an Object's Properties |
| Use Property Shorthand Syntax |
| Identify when a Property is a Method |
| Describe How a Variable References an Object |

## Road Map

1. Setup
2. The What and Why of Objects
3. Creating Objects
4. Properties - Review Questions
5. Adding Properties to an Existing Object - Dot Notation
6. Adding/Updating Properties - Practice
7. Accessing Properties with Square Bracket Notation
8. Square Bracket Notation - Practice
9. Checking if an Object has a Property
10. Deleting a Property
11. Iterating Over an Object's Properties
12. Property Shorthand Syntax
13. Properties Known as Methods
14. How Variables Hold Values or Reference Objects
15. Essential Questions
16. Further Study

## 1. Setup

Create a new HTML/CSS/JS Repl at [https://replit.com/](https://replit.com/) and name it something like "JS Objects".

## 2. The What and Why of Objects

### What Are Objects?

- **Objects** are the most common data structure in [Object Oriented Programming (OOP)](https://en.wikipedia.org/wiki/Object-oriented_programming).

- In JavaScript, an **object** is an instance of the **Object** class/data type, or one of its subtypes (Date, Function, RegExp, etc.).

- In JavaScript, an object might look like this....

  ```js
  {
    key1: 'value 1',
    key2: 2
  }
  ```

- **Objects** are simply a collection of zero or more **properties** separated by a comma.

- So what's a _property_? A _property_ consists of a **key: value** pair, where the:
	- **key** is a _string_ or _symbol_ (other types will be coerced into strings), and the
	- **value** is any JS expression (code that evaluates to a single value or object).

### Why Objects?

- In OOP, we often model the purpose of our application using real-world objects.

- The following is just a small example of what is modeled using objects:
	- The browser window and the elements it visualizes are all represented in memory as JS objects.
	- Those elements and most of their properties, including their styling, are represented as JS objects.
	- Data submitted from the browser will be accessed on the backend server as objects.
	- Data retrieved from a database will be stored in objects.

- Now does it make sense why it's called **Object Oriented Programming**?

## 3. Creating Objects

- There are three different ways we can create objects:
	1. By using _Object Literal Notation_ (also called an Object Initializer)
	2. By invoking a _Class_ (also known as a *Constructor Function*)
	3. By using the `Object.create` method

- Today, we're going to focus on using _Object Literals_ to create objects.

- Next week, we'll learn how _Classes_ are used.

- Using `Object.create` is not very common and won't be used during SEI, but as always, you're encouraged to research it.

### Creating Objects using Object Literal Notation

- Now let's create an object by using **Object Literal notation**, also known as an [Object Initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer):
	
	```js
	const game = {};
	console.log(typeof game); // "object"
	```

- As you can see, _Object Literal notation_ consists of a set of opening  and closing curly braces, `{}`.

- We just used curly braces to create an empty `game` object.<br>**We consider it to be an empty object because it contains no _________?**

- Let's change the code so that `game` has a property:

	```js
	const game = {title: 'Guess the Number!'};
	console.log(game);
	```

- Stylistically, defining an object with a single property or a couple of "short" properties on a single line of code like this<br>`let point = {x: 10, y: -5};` isn't a problem (unless it is with your boss).<br>**It's all about maintaining readability.**

- Properties are separated by commas:

	```js
	const game = {
	  title: 'Guess the Number!',
	  biggestNum: 100
	};
	```

- Syntactically, [a trailing comma](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas) is permitted after the last property:

	```js
	const game = {
	  title: 'Guess the Number!',
	  biggestNum: 100,  // trailing comma
	};
	```

## 4. ❓ Properties - Review Questions

Considering the following object:

```js
const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
};
```
	
Answer the following questions:
1. **How many properties does `game` contain?**
2. **What are the keys (AKA property names)?**
3. **What are the property values of `game`?**
4. **What are the data types of the keys?**

## 5. Adding Properties to an Existing Object Using Dot Notation

- There are two different syntaxes available to access, add or modify an object's properties:
	- **Dot notation**, and
	- **Square Bracket notation**

- We'll discuss why there are two syntaxes in a bit, for now, let's use _dot notation_ to add another property to the `game` object:
	
	```js
	game.smallestNum = 0;
	```

- Using the _assignment operator_, if a property doesn't exist, it is created, otherwise it's updated.

## 6. 💪 Adding/Updating Properties - Practice (2 min)

Using dot notation on the `game` object:
- Add a property with a key of `numGuesses` set to a value of `0`.
- Update the `smallestNum` property's value to be `1`.

## 7. Accessing Properties with Square Bracket Notation

- The other way to access, add, update and delete properties is by using **square bracket notation**.

- We use _square bracket notation_ instead of _dot notation_ when at the time you're writing the code, you don't know which property needs to be accessed.

- In other words, we use _square brackets_ to access properties _dynamically_ during runtime.

> Less common is to have to resort to using _square brackets_ to access properties when the key name contains a space.

- _Square bracket notation_ has the following syntax:

	```js
	someObject[<any JS expression>]
	```
	
- The `<any JS expression>` can be anything that evaluates to a single "value" - even function calls!

- For example, assume we have an object `words` with "categories" of words:

	```js
	const words = {
	  animals: ['fox', 'zebra', 'bear', 'turkey'],
	  colors: ['purple', 'orange', 'green'],
	  // ...other categories
	};
	```
- Now, the program can use a `selectedCategory` variable to access the array of words:

	```js
  let selectedCategory = "animals";
  
  const wordList1 = words[selectedCategory];  // [ 'fox', 'zebra', 'bear', 'turkey' ]
  const wordList2 = words.selectedCategory;   // undefined
	```
	
- Again, we use square bracket notation to access properties dynamically during runtime.

## 8. 💪 Square Bracket Notation - Practice

- Consider an object that represents a catalog of items where:
	- Each property in the object represents an item for sale
	- The _key_ of each property represents the item's SKU (Stock Keeping Unit - a retail store's unique ID for an item)
	- The _value_ of the property represents the price of the item

- Take a couple of minutes to create another object named `catalog` that includes a few items - but don't delete `game` from the Repl. Again, each item is a _property_ with it's _key_ set to a unique alphanumeric string (a SKU) and its value to a number representing its price.

- Note: If you want to include special characters in the key, just be sure to use quotes.

- Now let's code a price lookup:

	```js
	let sku = '';
	while (sku !== 'quit') {
	  sku = prompt('Enter SKU or "quit" to exit: ');
	  let price = catalog[sku];
	  if (sku !== 'quit') alert(`The price of ${sku} is ${price}`);
	}
	```

- That string in the `alert` is called a **template literal** and is delimited using back-tick characters (it's above the _tab_ key). One of its benefits is that we can use _string interpolation_ to embed the results of JS expressions right into the string using the `${<exp>}` syntax!

## 9. Checking if an Object has a Property

- Notice that if we enter a non-existing SKU (key), we are alerted a price of `undefined`.

- Unlike when we try to access an undeclared variable, we don't receive an error when we access a property that doesn't exist. Instead, `undefined` is returned - nice!

- However, we can't rely on a value of `undefined` to check if a property exists because maybe a property legitimately has a value of `undefined`.

- Instead, we can use the `in` operator...

- Let's tweak the code to use the `in` operator to check if the user has entered a valid key (SKU):

	```js
	let sku = '';
	while (sku !== 'quit') {
	  sku = prompt('Enter SKU or "quit" to exit: ');
	  if (sku in catalog) {
	    let price = catalog[sku];
	    alert(`The price of ${sku} is ${price}`);
	  } else if (sku !== 'quit') {
	    alert('Invalid SKU - try again');
	  }
	}
	```

- Nice!

## 10. Deleting a Property

- To completely remove a property from an object, we use the `delete` operator:

  ```js
  const geniuses = {
    Einstein: true,
    MrBean: false,
    Newton: true,
    Snooki: true
  };

  // see ya!
  delete geniuses.MrBean;
  ```

- **Try it out!** Use the `delete` operator to remove one of the items from your `catalog` object.

## 11. Iterating Over an Object's Properties

- Before continuing to work with the `game` object, comment out the price lookup code...

- We often need to iterate over an object's properties.

- We can iterate over the _keys_ of the properties using a `for...in` loop:

	```js
	for (let key in game) {
	  console.log(`The value of the ${key} property is ${game[key]}`);
	}
	```

- Note that `for...in` loops include all [enumerable properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) in the _prototype chain_ (inherited properties) - not just its own properties that live on the object itself.

- We'll learn how objects can inherit properties next week.

- There's a couple of nifty ES2017 methods that can be used to iterate over an object's **own**  keys and/or values:
	- [Object.keys(obj)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
	- [Object.values(obj)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values)
	- [Object.entries(obj)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

- Although cutting edge, these _static_ methods have already been implemented in all modern browsers.

- Again, we'll learn what a _static method_ is next week.

- Each of those methods mentioned returns an array that we can iterate over, for example:

	```js
	Object.values(game).forEach(function(val) {
	  console.log(val);
	});
	```

> Note: The ECMAScript specification does not dictate how properties should be ordered, however, all browsers currently iterate over them in the order they are defined/added.

## 12. Property Shorthand Syntax

- It's a common scenario to want to pass the values of variables as properties (having the same name as the variable) in an object:

	```js
	const latitude = getLat('Disneyland');
	const longitude = getLng('Disneyland');
	
	const location = {
	  name: 'Disneyland',
	  latitude: latitude,
	  longitude: longitude
	};
	```

- ES2015 strikes again...

- Thanks to ES2015's **Property Shorthand** syntax, we can now do this

	```js
	const latitude = getLat('Disneyland');
	const longitude = getLng('Disneyland');
	
	const location = {
	  name: 'Disneyland',
	  latitude,
	  longitude
	};
	```

- The variable name determines the name of the property.

## 13. Properties Known as Methods

- When a property holds a function, we commonly refer to it as a **method** of the object.

- Let's add a `play` _method_ to the `game` object:

  ```js
  game.play = function() {
    const rndNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1) + this.smallestNum);
    this.secretNum = rndNum;
  }
  ```

- Try it out in the console by calling `game.play()` and then checking the value of `game.secretNum` a few times.

- What's with the `this`?

- The `this` keyword represents the "execution context" of a function.

- In this case, `this` is set by JavaScript to be the object the method is called on.

- We will have a dedicated lesson on `this` next week.

- **IMPORTANT:** Due to how `this` is set within _arrow functions_, it's best to avoid using them as methods in objects.

## 14. How Variables Hold Values or Reference Objects

- As you know, variables are slots in memory that hold a value.

- All non-object data types are known as primitive, or value, types because they hold a single value. Picture a table in memory like this:
	
	```
	SCOPE TABLE            var | value/ref
	                      -----------------
	let x = 25        -->   x  |  25
	var msg = 'hello' -->  msg | 'hello'
	const y = x       -->   y  |  25
	```
	
- But objects are complex/reference types because they can hold multiple pieces of data...

- Objects, including Arrays, Functions, etc. are stored in a separate part of memory known as the _heap_. A variable for an object has as its value a "reference" (think pointer):

	```
	SCOPE TABLE             var | value/ref
	                       -----------------
	let x = 25         -->   x  |  25
	var msg = 'hello'  -->  msg | 'hello'        HEAP 
	const obj = {a: 1} -->  obj |  ref1   --->  {a: 1} <--|
	let arr = [1,2]    -->  arr |  ref2   --->  [1,2]     |
	let obj2 = obj     -->  obj2|  ref1   -----------------
	```

- Similarly, the elements of an array and the properties of an object hold their values in the same way:

  ```
  SCOPE TABLE             var   | value/ref
                          -----------------
  let x = 25         -->   x    |  25
  var msg = 'hello'  -->  msg   | 'hello'        HEAP 
  const obj = {a: 1} -->  obj   |  ref1   --->  {a: 1} <--|
  let arr = [1,2]    -->  arr   |  ref2   --->  [1,2]     |
  let obj2 = obj     -->  obj2  |  ref1   -----------------
  obj.b = 2          -->  obj.b |  2              ^
  obj.c = arr        -->  obj.c |  ref2   --------|
  ```

- Now this makes sense:

	```js
	const arr1 = [];
	const arr2 = [];
	const arr3 = arr1;
	arr1 === arr2  // false!
	arr3 === arr1 // true!
	```

## 15. ❓ Essential Questions

1. **An object is a collection of zero or more ___________.**

2. **Properties are _____ : ______ pairs.**

3. **Is it more efficient to access properties via dot or square bracket notation?**

4. **What type of `for` loop is used to iterate over the keys of an object?**

5. **Is the following valid code?**

	```js
	const name = prompt('Enter your name: ');
	const age = prompt('Enter your age: ');
	const person = {name, age};
	```

## 16. Further Study

- [getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) and [setter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set) properties allow you to treat methods like regular properties that you can access without invoking and set using the assignment operator (`=`).

- [Computed Property Name syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names) allows for an expression to determine the key name inside of an object literal - just like using square bracket notation on an existing object.



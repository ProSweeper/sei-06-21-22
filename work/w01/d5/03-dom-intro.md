<img src="https://i.imgur.com/ijRQ97Z.jpg" width="300">

# Intro to the DOM


## Learning Objectives

| Students Will Be Able To: |
|---|
| Use DevTools to Explore the DOM |
| Select a Single Element in the DOM |
| Select Multiple Elements in the DOM |
| Change the Content of an Element |
| Change the Style of an Element |
| Manipulate the Attributes of an Element |
| Manipulate the Classes of an Element |
| Iterate Over a Collection of Elements |

## Road Map

- What's the DOM?
- Setup
- Using DevTools to Explore the DOM
- Selecting DOM Elements
- Selecting a Single Element by its `id`
- Selecting a Single Element Using a CSS Selector
- Changing the Content of an Element
- Changing the Style of an Element
- Attributes of an Element
- Attributes of an Element - Classes
- Selecting Multiple Elements
- Iterating Over a Collection of Elements
- Further Study

## What's the DOM

The [DOM (Document Object Model)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) is the in-memory data structure that represents the browser's web document.

<img src="https://i.imgur.com/W9ahTXh.png">

As you can see, it's a tree-like data structure with the top (root) being the `document` object.

<details>	
  <summary><strong>❓ What JS data type would each of those nodes be?</strong></summary>
  <p><strong>Nodes most certainly will be <code>JS objects</code> with properties used to get/set information about themselves, accessing their children, etc.</strong></p>
</details>

If we type `document` in DevTool's console, we'll see the HTML-centric representation of the document, however, we want to explore the JavaScript data structure that is the DOM.  We can do this by typing `dir(document)` in console and exploring the objects and properties of the DOM.

The DOM's application programming interface ([API](https://en.wikipedia.org/wiki/Application_programming_interface)) enables developers to make the UI dynamic by using JavaScript to:

-  Add/remove elements to/from the document
-  Change the content of elements
-  Change the style properties of elements
-  Animate elements
-  Listen for events on elements

## Setup

1. If you'd like to save this lesson's practice code within the class repo, move into your class repo (tip: use your `repo` alias created on day 1)
  
    > Note:  You may create the `dom-practice` project folder within your `~/code` folder instead by moving into it and skipping to step 4 below.
2. Sync the repo with GA's repo:  `git pull upstream main`
  
    > Note: If you receive an error due to unsaved/committed changes, one solution is to run `git stash` to temporarily store your changes, then pull again, then run `git stash pop` to bring back your changes.
3. Move to today's directory within the class repo: `cd work/w01/d4`
4. Create a directory named `dom-practice`:  `mkdir dom-practice`
5. Move into the new directory: `cd dom-practice`
6. Create an `index.html` file:  `touch index.html`
7. Open the directory in VS Code: `code .`
8. Open `index.html` in the editor and use `! [tab]` to create the HTML boilerplate.
9. Create a `js` directory and touch a `js/main.js` file
10. Add a `<script>` tag to include `main.js` in the `<head>`:

	```html
	<head>
	  ...
	  <title>DOM Practice</title>
	  <script defer src="js/main.js"></script>
	</head>
	```
	> The `defer` attribute ensures the DOM is ready before the script executes.
11. Finally, let's add an `<h1>` inside of the `<body>` as follows:

	```html
	...
	<body>
	  <h1 id="title" class="main-title">DOM Practice</h1>
	  
	</body>
	</html>
	```
	> Note: It's a best practice to use double quotes and kebob-casing in HTML.

## Using DevTools to Explore the DOM

- Use the **open in browser** VS Code extension to open the `index.html`   file in the browser by right-clicking and selecting `Open in default browser` or by using the keyboard shortcut `option-b`.

- After `index.html` is opened in Chrome, use the keyboard shortcut of `option-command-i` to open Chrome's DevTools.

- Click on the **Elements** tab to browse the HTML hierarchy of the DOM.

- Let's try out the DevTools by clicking on the `h1` element and using the **Styles** panel to add a CSS property of `color: red;`

	<img src="https://i.imgur.com/RAvgNl0.png">

- Look closely after the closing `</h1>` tag - you see that _`== $0`_?

- That tells us that Chrome has created a variable named `$0` that represents the `<h1>` element in the DOM!

- Click on the **Console** tab and let's explore the properties on the `$0` element/object by typing `dir($0)`.

- You are now able to explore the `<h1>` element's DOM object - referred to as a **node**.

- Now try typing this in: `$0.style.backgroundColor = 'yellow'`

- Now that's what I call a DOM!

## Selecting DOM Elements

Developers make web pages dynamic by manipulating the DOM using JavaScript.

For example, in a To-Do app, a user typically types the new to-do into an `<input>` and clicks a `<button>` - then a JavaScript function would run and perform the following:

  1. Access the text entered into the `<input>` element
  2. Create a new element, e.g. an `<li>`, and set its content to that text
  3. Append the new element to the appropriate parent element, e.g., the `<ul>`
  4. Finally, for a better user experience (UX), "reset" the input by clearing out the current text

Note that steps 1, 3 & 4 requires the JS to access existing elements - let's look at how we select those elements in the DOM next...

## Selecting a Single Element by its `id`

The `getElementById` method is the most efficient way to select a DOM element if it has an `id` assigned to it (using the `id` attribute).

```js
const titleEl = document.getElementById('title');
console.log(titleEl);
```

> Note: When using `getElementById`, be sure not to preface the name of the id with `#`, e.g., `document.getElementById('#title');` will not work!

If you wish to explore the element's JS object representation (the DOM), use `console.dir()` instead of `console.log()`.

Cool, but how do we select a single element without an `id`...

## Selecting a Single Element Using a CSS Selector

The `querySelector(selector)` method is the go to method for selecting a single element using the power of CSS3's selectors, just like how you saw CSS3 selectors were used to select elements for styling!

<details>	
  <summary><strong>❓ What selector would be used to select a <code>&lt;section&gt;</code> element with a class of <code>main</code>?</strong></summary>
  <p><strong><code>section.main</code></strong></p>
</details>

`querySelector()` can be called on the `document` object, as well as elements themselves (handy for selecting an element nested within another).

The **selector** argument is a string that follows the rules of regular CSS3 selectors.

Knowing that the selector provided to `querySelector(selector)` follows the rules of CSS3 selectors, **how could we use it instead of `getElementById()` to select our `<h1>` element by its `id`?**

If the CSS selector provided to `querySelector()` matches multiple elements, it returns the **"first"** matching element, however, it's best to avoid this scenario.

If no matching node is found, `null` is returned.

### 💪 Practice (3 mins)

1. In `index.html`, add a `<p>` tag below the `<h1>` and give it a `class` of `cool`, then...

2. Add some content inside of the `<p>` tag - try typing `lorem [tab]` to emit (using _emmet_) random _lorem ipsum_ text.

3. Use `document.querySelector()` to select the `<p>` element with a class of `cool` and assign it to a variable named `pEl`.

4. Verify that the `<p>` element was selected by logging out `pEl`.

## Changing the Content of an Element

Now that we're able to select an element of our choosing, let's see how we can change the content of that element...

Inspecting the properties of a DOM element in the console reveals a couple of properties that we can use to read and set its content:

- [innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) - Used to retrieve/set content as HTML
- [textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) - Used to retrieve/set content as plain text

Let's check out changing the content of the `<p>` element by assigning the string **`Comments for <strong>Today</strong>`** first to `textContent`, then to `innerHTML`.

So, as you saw, if you want to include HTML in the content, use `innerHTML`.

The power of `innerHTML` may not be obvious, but consider the string can be as complex as you want - containing multiple elements with attributes, etc.

However, using `textContent` is more efficient if just setting text.

> Note:  There is also newer property, [innerText](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText), that can be used instead of `textContent` - the primary difference between the two is that `textContent` returns all text content regardless of styling, whereas, `innerText` takes styling into consideration.  For example, `innerText` will not return text that has been hidden using CSS.

## Changing the Style of an Element

DOM elements have a `style` property that can be used to set CSS styling!

Check out the CSS properties in the console.

<details>	
  <summary><strong>❓ What naming convention is used for CSS properties in the DOM?</strong></summary>
  <p><strong>lowerCamelCasing</strong></p>
</details>

<details>	
  <summary><strong>❓ What naming convention is used for CSS properties in CSS?</strong></summary>
  <p><strong>kebob-casing</strong></p>
</details>

<details>	
  <summary><strong>❓ Why can't kebob-casing be used for the DOM as well?</strong></summary>
  <p><strong>The hyphen would be interpreted as a minus sign by JS</strong></p>
</details>


This is how we can set the `text-align` CSS property of our title `<h1>`:

```js
const titleEl = document.getElementById('title');
titleEl.style.textAlign = 'center';
```

### 💪 **Practice (1 min)**

- Change the `color` of the `<p>` element to a color of your choosing.

## Attributes of an element

You may need to get, set, or check if an element has a certain **attribute**.

Here are a few of the methods that the [Element API](https://developer.mozilla.org/en-US/docs/Web/API/element) (Application Programming Interface) has for working with an element's attributes:

- `getAttribute(name)`
- `setAttribute(name, value)`
- `hasAttribute(name)`

### 💪 Practice - Attributes (5 mins)

1. In `index.html`, add an `<a>` element to `index.html` with content of "Visit Google" but **without an `href` attribute**.

2. Reload the page and verify that the link does not work (in fact, it probably doesn't even look like a link).

3. In the JS, write the line of code that will add an `href` attribute that will make the link navigate to "https://www.google.com".

> Hint: Which of the attribute methods above looks tasty?

## Attributes of an Element - Classes

Technically, you could use those attribute methods above to work with an element's classes.

However, the `classList` property offers a better approach. It's an object with the following methods pertaining to classes:

- `add(className, className, ...)` 
- `remove(className, className, ...)`
- `toggle(className)`
- `contains(className)`
- `replace(oldClass, newClass)`

### ❓ Review Questions

1. **If we want to change the text (no HTML) inside of a `<div>`, what property should we assign to?**

2. **How many DOM elements are returned by the `querySelector` method?**

3. **What DOM element property is used to style a DOM element using JS?**

## Selecting Multiple Elements

Before we checkout selecting multiple elements, let's add the following HTML below the existing `<p>` element.

VS Code includes [Emmet](https://docs.emmet.io/abbreviations/syntax/), which is a great tool for quickly generating markup. Type the following to generate most of the desired markup below:
<br>`ul#comments>li.comment{comment}*3`

```html
<ul id="comments">
  <li class="comment">first comment</li>
  <li class="comment">second comment</li>
  <li class="comment">third comment</li>
</ul>
```

The following methods _can_ be used to select multiple elements:

- `getElementsByTagName(namesString)`
- `getElementsByClassName(namesString)`

The above methods return a **live** [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection).

Although it's pretty cool that the returned list is automatically updated to include/exclude DOM elements as the DOM changes, the above methods are not as flexible as the `querySelectorAll` method...

Like `querySelector()`, the `querySelectorAll(selector)` method uses the power of CSS3 selectors to specify which DOM elements we want returned.

Of course, like the name says, it selects **all** DOM elements that match the provided selector.

By itself, `querySelectorAll` actually provides all the DOM selection power a web dev needs!

### 💪 Practice - Selecting Multiple Elements (2 mins)

1. Use `document.querySelectorAll()` to select all of the elements with a class of `comment` and assign them to a variable named `commentEls`.

2. `console.log(commentEls)` to verify it worked. 

## DOM Selection Summary

In summary, use the following to help you decide which method to use to select DOM elements:

- **`getElementById`**: Use when you need to select a single element that has an `id` assigned to it.

- **`querySelector`**: Use when you need to select a single element that **does not** have an `id`.

- **`querySelectorAll`**: Use when you need to select multiple elements.

## Iterating Over a Collection of Elements

`querySelectorAll` returns an array-like object called a [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList).

There are three approaches we can use to iterate over the elements in a NodeList:

1. A regular **`for`** loop:  This works, but it's not as readable or elegant...

2. The **`forEach`** method:  A good option when you want to iterate through **all** elements or need to access the **index** of the iteration.

3. A **`for...of`** loop:  Elegant and allows early exit of the loop with the `break` statement, however, does not have access to an **index** (although you could track indexes manually by initializing a separate variable before the loop and incrementing it within the loop).

Let's type this `for...of` loop in the console to log each element:

```js
for(let commentEl of commentEls) {
  console.log(commentEl);
}
```

### 💪 **Practice - Iterating and Updating Styling (3 mins)**

- Add a `for...of` loop to `main.js` that changes the font size all of the `<li>` comment elements to `30px`.

- Hint: You must use a string like `'30px'` (just the number `30` or the string of `'30'` will not work). 

## ❓ Essential Questions

1. **What method is the most efficient for selecting an element that has an `id`?**

2. **If we want to assign content to an element that includes HTML, what property on the DOM element would we assign to?**

3. **If we want to assign plain text (no embedded HTML), whats property on the DOM element would we assign to?**

4. **Which property on DOM elements is used to set the CSS styling for that element?**

## Further Study

### Turning `NodeList` & `HTMLCollection` Array-Like Objects Into Actual Arrays

As discussed in the lesson, methods designed to return a collection of DOM elements return "array-like" objects that have a `forEach` method, but don't contain other useful methods that full-fledged arrays have.

If you would need to hold your DOM elements in an actual array, either of the following two approaches will do the trick...

#### `Array.from()` Method

Here's how you can use the [Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) static method to convert an iterable, such as a NodeList, into an actual array:

```js
const itemEls = Array.from(document.querySelectorAll('.item'));
```

Now, `itemEls` would be an actual array with all array methods available.

For example, here's how you could find the index of a clicked DOM element in the array:

```js
const itemEls = Array.from(document.querySelectorAll('.item'));
const containerEl = document.querySelector('section');

containerEl.addEventListener('click', handleClick);

function handleClick(evt) {
  const indexOfClickedItem = itemEls.indexOf(evt.target);
  console.log(indexOfClickedItem);
}
```

#### Spread Syntax

Another way to convert a NodeList or HTMLCollection into an array is by using the [Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) within an array literal:

```js
const itemEls = [...document.querySelectorAll('.item')];
```

## References

- [Locating DOM Elements using Selectors](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)

- [Intro to the DOM on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

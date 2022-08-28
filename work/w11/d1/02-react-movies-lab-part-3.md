<img src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80">

# React Movies Lab - Part 3

## Intro

For this lab, you will continue working in your existing `react-movies` project on CodeSandbox.

Part 3 of the lab will focus on the `<ActorsListPage>` component.

Here is a link to an example of the final app, but the design and styling is up to you!

[React Movies Demo](https://2i5en.csb.app/) (try not to peek at the code)


## Exercises

1. Using the imported `movies` array, render a list of all the actors from each movie in the `<ActorsListPage>`:
	- Be aware that certain actors appear in multiple movies, but there should be **NO DUPLICATES** on this list. See the Hints below for ideas.
	- Each actor should be rendered as an `<ActorCard>` component that displays the actors name with some sort of background image - checkout how easy it is to use images provided by [Lorem Picsum](https://picsum.photos/).
	
## Hints

JavaScript has a special kind of object called a [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set).

Sets are like arrays, except that every value in the set must be unique - if you try adding a duplicate, it's ignored!

It's very easy to create a set from an array and an array from a set.

When creating a set from an array, duplicate values will be ignored, for example:

```js
const numsArray = [1, 2, 3, 2, 3, 3];

// Create a set from the numsArray
const numsSet = new Set(numsArray);
console.log(numsSet) //-> {1, 2, 3}
```

Finally, here's how easy it is to create an array from a set:
```js
// Create an array from a set
const uniqueNumsArray = Array.from(numsSet);
console.log(uniqueNumsArray) //-> [1, 2, 3]
```

#### Bonus

Create an `<ActorDetailPage>` that renders the name of the actor and a list of movies that the actor appeared in!

## Deliverable

#### This is the final version of `react-movies` (parts 1 thru 3 combined), so once finished used the deliverable submittal link to submit your assignment.

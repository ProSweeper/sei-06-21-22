<img src="https://i.imgur.com/u8uvaan.jpg">

# React Appointment Tracker Lab

## Intro

For this lab, you will be creating an appointment management system that will persist your data using localStorage!

## Setup

You will need to create a new React CodeSandbox project named `react-appointments`.

### Local Storage

We use [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to store/remember data for an app in the browser.

All data in localStorage is stored as strings.  However, using the the power of `JSON.stringify()`, we are able to convert any type of data (arrays, objects, etc.) to a string before storing in localStorage.  Then, we can use `JSON.parse()` to convert a string retrieved from localStorage back to its original data type.

Example:

```js
const people = [{name: "Chris"}, {name: "Jesse"}, {name: "Stephen"}, {name: "Drew"}]

// Adding to localStorage
localStorage.setItem('people', JSON.stringify(people));

// Getting from localStorage
const peopleFromStorage = JSON.parse(localStorage.getItem('people'));
```

## Requirements

  - AAU, when the page first loads, I want to see my list of appointments, or a message saying "You have no appointments yet".
  - AAU, I want to be able to add an appointment to my list.
    - Each appointment should have at least three properties - `title`, `date`, and `duration`.
  - AAU, I want to be able to refresh the page and still see my list of appointments.
    - This is where localStorage comes in!
    - You will need to update your array of appointments in localStorage each time a new appointment is added.
  - AAU, I want to be able to delete an appointment from my list.

## Deliverable?

#### This lab is not a deliverable.

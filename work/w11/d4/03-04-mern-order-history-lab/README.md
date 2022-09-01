<img src="https://i.imgur.com/pUDd9Pv.jpg">

# MERN-Stack Lab

## Intro

SEI CAFE has only one page-level component remaining to code: `<OrderHistoryPage>`

You have the know how to finish SEI CAFE, right here, right now!

## Setup

- `cd ~/code/sei-cafe-codealong`

- Sync with the starter code in the repo as usual:  `git fetch --all` then `git reset --hard origin/main`

## Starter Code

The starter code includes a partially coded `<OrderHistoryPage>` that correctly renders the left-hand pane:

<img src="https://i.imgur.com/9dIUV6V.png">

## Exercise

Code the `<OrderHistoryPage>` such that it looks (as close as possible) and functions like [the deployed SEI CAFE](https://sei-cafe.herokuapp.com/orders):

<img src="https://i.imgur.com/Evv6VCx.png">

Use the above wireframe/component hierarchy and the deployed app as a guide to implement the following user stories...

### AAU, I want to see a list of summary information for each of my prior orders.

You're basically being asked to implement the **index** functionality for the **orders** resource, .i.e., fetch and render all orders for the logged in user.

> This is a user-centric application, please be sure to render the orders that belong to the logged in user only. 

### AAU, I want to view the details of a previous order when I click on its summary information.

This functionality is similar to the selected category functionality we coded in `<NewOrderPage>`.

> Implementing this user story will be gravy - we already finished coding `<OrderDetail>` and used it in `<NewOrderPage>`. It includes the logic to render an unpaid order (cart in the `<NewOrderPage>`) and a paid order for you in `<OrderHistoryPage>`. 

## Hints

- The code we've written together has taught you everything you need to know - be sure to examine the starter code because it provides similar code for everything you need to do.

- Refer to the models for the property names (including virtuals) being rendered. Some data might need to be formatted to match the wireframe.

- Follow the flow when implementing features:
    ```
                                        Order Model
                                             ⇵
    UI → API Module → Server Route → Controller Action
     ⬑ ⟵ ⟵ ⟵ ⟵ ⟵ ⟵ ⟵ ⟵ ⟵ ⟵ JSON Data ↲
    ```

- An `activeOrder` (selected order) functionality is like an `activeCat` (selected category) functionality.

- Don't prioritize the CSS early on. However, examining the CSS of other components will help when the time comes to polish things up.

- Use the Elements tab of Chrome DevTools to inspect the DOM elements being rendered by [the deployed SEI CAFE](https://sei-cafe.herokuapp.com/orders).  Copying and pasting the DOM elements rendered will provide a fantastic starting point for each new component's JSX!

  <img src="https://i.imgur.com/QYrCawZ.png">

### This lab is not a deliverable!

## Have Fun!!!
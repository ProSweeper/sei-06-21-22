# SEI Week 4 Quiz

## For this quiz, please slack your instructors the answers, in numbered order. Do not include the questions. For example:
    
```
1. Ashton Kutcher played Chewbacca
2. Yolo
```
<br>

## Full-Stack Development

### (1) What two parts/components of an HTTP Request are used to match routes defined in Express and many other web frameworks?

#### Solution

```
The HTTP Method/Verb and the Path/Endpoint
```

### (2) What two HTML elements are used in web pages to send HTTP Requests to a web server?

#### Solution

```
<a></a> and <form></form> Elements
```

<br>

## Routing

For the below questions on routing (#3 thru #6), assume the following:

- The data resource we're CRUDing is `puppies`.
- The puppies router was mounted in server.js using `app.use('/puppies', puppiesRouter);` 
- A controller was required in routes/puppies.js as `puppiesCtrl`.

### (3) Finish defining the following route for the `index` functionality:

```js
router._________________;
```

#### Solution

```js
router.get('/', puppiesCtrl.index);
```


### (4) Finish defining the following route for the `create` functionality:

```js
router._________________;
```

#### Solution

```js
router.post('/', puppiesCtrl.create);
```

### (5) Finish defining the following route for the `delete` functionality:

```js
router._________________;
```

#### Solution

```js
router.delete('/:id', puppiesCtrl.delete);
```

### (6) What's the problem with how the following routes are being defined?


```js
router.get('/:id', puppiesCtrl.show);
router.get('/new', puppiesCtrl.new);
```

#### Solution

```
Need to define the new route before the show route.
The new route can never be matched because a "GET /puppies/new" request will always match the show route.
```

<br>

## Route Parameters

Assuming the following route defined:

```js
router.get('/:id', puppiesCtrl.show);
```

and the following hyperlink on a page:

```html
<a href="/puppies/123">Spot</a>
```

### (7) Finish the line of code below that would assign the value of the route parameter ("123") to the `pupId` variable in the following controller function?

```js
function show(req, res) {
  const pupId = ______________;
  ...
}
```

#### Solution

```js
function show(req, res) {
  const pupId = req.params.id;
  ...
}
```

<br>

## Middleware

### (8) What is the name of the middleware we need to install and mount in server.js used to change a POST request into a DELETE or PUT request?

#### Solution

```
method-override (methodOverride is also acceptable)
```

<br>

## HTML & EJS Views

### (9) Write a line of HTML that when clicked, would result in a list of all puppies being displayed?

#### Solution

```html
<a href="/puppies">View All Puppies</a>  <!-- "View All Puppies" can be anything -->
```

### (10) What would you replace the `???` below with to link to the show page for each puppy using its `id` and following RESTful routing?

```html
<% puppies.forEach(function(pup) { %>
  <a href="???"><%= pup.name %></a>
<%> }); %>
```

#### Solution

```html
<% puppies.forEach(function(pup) { %>
  <a href="/puppies/<%= pup.id %>"><%= pup.name %></a>
<%> }); %>
```
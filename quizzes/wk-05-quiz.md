# SEI Week 5 Quiz

## For this quiz, please slack your instructors the answers, in numbered order. Do not include the questions. For example:
    
```
1. Ashton Kutcher played Chewbacca
2. Yolo
```
<br>

## RESTful Routing

**For questions #1 thru #4, please identify the proper route (HTTP Method & Path) assuming a `Post --< Comment` data relationship...**

### (1) Create a comment for a post.

#### Solution

```
POST /posts/:id/comments
```

### (2) Display a single post.

#### Solution

```
GET /posts/:id
```

### (3) Delete a comment.

#### Solution

```
DELETE /comments/:id
```

### (4) See a form used to edit a post.

#### Solution

```
GET /posts/:id/edit
```

## Mongoose

### (5) What is the best Mongoose Model query method to use if you need to find a single document and you have its '_id'?

#### Solution

```
findById()
```

### (6) What is the best Mongoose Model query method to use if you need all documents that meet a certain criteria?

#### Solution

```
find()
```

### (7) When defining a Mongoose schema, what data type do we use for a property that needs to reference another document?

#### Solution

```
ObjectId
```

### (8) Assuming we're implementing a data relationship of `User --< Order` - should we use embedding or referencing?

#### Solution

```
Referencing.

Note: We don't want to bloat the user document, plus, having orders in its own collection makes it easier for a business to query for, and analyze orders.
```

## Javascript Promises

### (9) Promises are an alternative to __________ functions when working with asynchronous operations.

#### Solution

```
callback
```

### (10) A promise object has a __________ method used to obtain the resolved value.

#### Solution

```
then()
```

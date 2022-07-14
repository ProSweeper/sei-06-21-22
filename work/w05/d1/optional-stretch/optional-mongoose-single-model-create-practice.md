<img src="https://i.imgur.com/cD5R8OG.png" width="600px;display:inline-block;margin:auto">


# Mongoose - Single Model "Create" Practice

## Intro

In the upcoming _Mongoose - Referencing Related Data_ lesson, we'll learn how to implement a many-to-many data relationship using referencing.

The lesson will build upon the mongoose-movies app by implementing the following relationship:

`Movie >---< Performer`

As you will learn in the lesson, implementing many-to-many relationships is about **associating existing data**, that is, when a movie and performer are associated, both documents need to already exist in the database.

This is unlike adding an additional one-to-many relationship where the new child/many document/sub-document would always have to be created because it would not have already existed.

So, because a many-to-many relationship requires both documents to already exist in order to create the association, the app must implement functionality to create those data resources independent from one another.  In other words, functionality has to exist to create both Movies and Performers independent of each other.

Creating _movies_ was the first major piece of functionality we added to mongoose-movies.  However, mongoose-movies now needs functionality to similarly create _performers_ - and this provides an opportunity for repetition!

## Setup

Before beginning to work on this practice assignment, please do the following to prevent conflict with the next Mongoose "Movies" code-along:

1. Move into your `~/code` folder:  `cd ~/code`

2. Copy your current `mongoose-movies` project to a new project for this exercise: `cp -r mongoose-movies mongoose-movies-practice-exercise`

3. Move into the new project folder:  `cd mongoose-movies-practice-exercise`

4. Open in VS Code:  `code .`

5. Change your MongoDB connection string to use a new database, for example, if using an Atlas connection string, change name of the database between the last `/` and the `?` from:

    ```
    ...mongodb.net/mongoose-movies?...
    ```
    to
    ```
    ...mongodb.net/mongoose-movies-practice-exercise?...
    ```

6. After starting up the app, be sure to enter a couple of movies before beginning this exercise...

## Implement Create Performer Functionality

### Stub up the Modules and View Folder

A new data resource, such as _performers_, typically has a dedicated set of modules, etc.

Create the following for the new _performers_ resource:

- Model (empty module)
- Router (module exporting a router object)
- Controller (empty module)
- A dedicated folder for its views

Then, require and mount the new router in server.js to the path of `/` - **not** `/performers` because as a nested/related resource, not all routes will begin with `performers`.

### Create the `Performer` Model

Create and export a `Performer` Model with the following two properties:

| Property Name | Data Type | Validations |
|---|---|---|
| `name` | `String` | Should be required and unique |
| `born` | `Date` | none |

Don't forget to add the **timestamps** option.

### UI Wireframe

The following screenshot shows the:

1. New "ADD PERFORMER" navigation link added to `views/partials/header.ejs`
2. The rendered `views/performers/new.ejs`.

<img src="https://i.imgur.com/Yi6ZiI4.png">

### Two Requests to Create

Don't forget that this will be a two-request process:

1. Display the **Add Performer** page with the form for inputing a performer's data.
2. Handle the form's submission to create the performer and redirect back to **Add Performer** page.

### You Got This!

Here's the flow we've now followed several times when adding functionality to the app:

1. Identify the "proper" Route (Method + Path)
2. Create the UI that will send the request matching that route.
3. Define the route on the server and map it to the proper controller action (index, show, new, create, etc.).
4. Stub up and export the controller action.
5. Code the controller action and `res.render` a view in the case of a GET request, or `res.redirect` if data was changed.  Code the view if it does not exist.

### Stretch Bonus

Note that there is a message of "Please first ensure that the Performer is not in the dropdown" followed by a dropdown that displays all existing performers in the database.

Because M:M relationships need to "reuse" existing data, this message and dropdown can help prevent users from entering duplicate performers.



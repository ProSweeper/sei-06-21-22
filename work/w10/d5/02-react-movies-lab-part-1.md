<img src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80">

# React Movies - Part 1

## Intro

Following along with what you did today in the MERN-Stack Infrastructure - Part 2 lesson, you will be creating your own `react-movies` application!

You will need to create a new React CodeSandbox project named `react-movies`.

This application will provide a movie & actor list.

The data for the movies and actors will be provided to you.

Here is a link to an example of the final product, but feel free to style the page to your liking! (try not to peek at the code):

[React Movies Demo](https://2i5en.csb.app/)

## Exercises

1. Start by creating skeleton page-level components for each page of the application plus a navbar:
	- `<LoginPage>`
	- `<MoviesListPage>`
	- `<MovieDetailPage>`
	- `<ActorListPage>`
	- `<NavBar>`

2. Set up a `user` state variable in `<App>` that will keep track of the user.  The `user` state should be initialed to `null` (no user) and updated to a string when the user "logs in".

3. Code `<LoginPage>` so that when a username is submitted, the `user` state in `<App>` is updated to the username causing a re-render...

4. Code `<App>` to conditionally render as follows:

    | `user` state has a value?  | `path` in `<Route>` Component | Component to Render |
    |---|---|---|
    | No | `path="/"`| `<LoginPage>`|
    | Yes | All Paths | `<NavBar>`|
    | Yes | `path="/"`| `<MoviesListPage>`|
    | Yes | `path="/movies/:movieName"`| `<MovieDetailPage>`|
    | Yes | `path="/actors"` | `<ActorsListPage>`|

5. Code the `<NavBar>` so that it renders whenever a user exists and displays a `<Link>` for accessing the `<MoviesListPage>` & `<ActorsListPage>` as well as the user's username entered.

## Deliverable

At this point in the application, you should be able to "login" and see your username displayed on the page, as well as having the basic navigation of your site setup.

#### The final version of `react-movies` (parts 1 thru 3 combined) will be a deliverable, so do each part and don't fall behind.

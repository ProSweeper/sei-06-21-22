<img src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80">

# React Movies - Part 2

## Intro

For this lab, you will continue working in your existing `react-movies` project on CodeSandbox.

Part 2 of the lab will focus on the Movie Index & Detail Pages.

Here is a link to an example of the final product, but feel free to style the page to your liking! (try not to peek at the code)

[React Movies Demo](https://2i5en.csb.app/)


## Exercises

1. Create a file in the `src` folder called `data.js`, then copy/paste the data found at the bottom of this README into that file. 
    - **Do not change any of the data in `data.js`**
    - You can then import the data in App.js, or wherever you need it (your path may be different):
        ```js
        import { movies } from "../../data.js";
        ```

2. Using the imported `movies` array, render the list of movies in the `<MoviesListPage>` component:
	- Each movie should be rendered as a `<MovieCard>` component.
	- Each `<MovieCard>` should display the movie's poster as the background, the name of the movie & its release date.

3. Create a `<MovieDetailPage>` component that renders the details of a movie when the user clicks on a movie rendered by `<MoviesListPage>`:
	- Use the `useParams` hook from React Router to access the `movieName` route parameter defined in the `<Route>`.
	- The detail page should display all relevant information about a single movie:
		- `title`
		- `releaseDate`
		- `posterPath` (as an `<img>`)
		- `cast` (use the `Array.prototype.join method`)

**Again, the design choices & styling is up to you!**

## Data

```js
export const movies = [
  {
    "posterPath": "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
    "releaseDate": "2020-12-16",
    "title": "Wonder Woman 1984",
    "cast": [
      "Gal Gadot",
      "Pedro Pascal",
      "Chris Pine",
      "Kristen Wiig",
      "Robin Wright"
    ]
  },
  {
    "posterPath": "https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
    "releaseDate": "2019-03-29",
    "title": "Shazam!",
    "cast": [
      "Zachary Levi",
      "Asher Angel",
      "Jack Grazer",
      "Mark Strong",
      "Grace Fulton"
    ]
  },
  {
    "posterPath": "https://image.tmdb.org/t/p/w500/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg",
    "releaseDate": "2018-12-07",
    "title": "Aquaman",
    "cast": [
      "Jason Momoa",
      "Amber Heard",
      "Patrick Wilson",
      "Nicole Kidman",
      "Willem Dafoe"
    ]
  },
  {
    "posterPath": "https://image.tmdb.org/t/p/w500/eifGNCSDuxJeS1loAXil5bIGgvC.jpg",
    "releaseDate": "2017-11-15",
    "title": "Justice League",
    "cast": [
      "Gal Gadot",
      "Ben Affleck",
      "Henry Cavill",
      "Jason Momoa",
      "Ray Fisher"
    ]
  },
  {
    "posterPath": "https://image.tmdb.org/t/p/w500/gfJGlDaHuWimErCr5Ql0I8x9QSy.jpg",
    "releaseDate": "2017-05-30",
    "title": "Wonder Woman",
    "cast": [
      "Gal Gadot",
      "Pedro Pascal",
      "Chris Pine",
      "Kristen Wiig",
      "Robin Wright"
    ]
  },
  {
    "posterPath": "https://image.tmdb.org/t/p/w500/xFw9RXKZDvevAGocgBK0zteto4U.jpg",
    "releaseDate": "2016-08-03",
    "title": "Suicide Squad",
    "cast": [
      "Jared Leto",
      "Margot Robbie",
      "Will Smith",
      "Cara Delevigne",
      "Pete Davidson"
    ]
  },
  {
    "posterPath": "https://image.tmdb.org/t/p/w500/5UsK3grJvtQrtzEgqNlDljJW96w.jpg",
    "releaseDate": "2016-03-23",
    "title": "Batman v Superman: Dawn of Justice",
    "cast": [
      "Gal Gadot",
      "Ben Affleck",
      "Henry Cavill",
      "Amy Adams",
      "Jesse Eisenberg"
    ]
  },
  {
    "posterPath": "https://image.tmdb.org/t/p/w500/7rIPjn5TUK04O25ZkMyHrGNPgLx.jpg",
    "releaseDate": "2013-06-12",
    "title": "Man of Steel",
    "cast": [
      "Henry Cavill",
      "Amy Adams",
      "Michael Shannon",
      "Kevin Costner",
      "Russell Crowe"
    ]
  },
  {
    "posterPath": "https://image.tmdb.org/t/p/w500/vzvKcPQ4o7TjWeGIn0aGC9FeVNu.jpg",
    "releaseDate": "2012-07-16",
    "title": "The Dark Knight Rises",
    "cast": [
      "Christian Bale",
      "Anne Hathaway",
      "Tom Hardy",
      "Gary Oldman",
      "Joseph Gordon-Levitt"
    ]
  },
  {
    "posterPath": "https://image.tmdb.org/t/p/w500/fj21HwUprqjjwTdkKC1XZurRSpV.jpg",
    "releaseDate": "2011-06-16",
    "title": "Green Lantern",
    "cast": [
      "Ryan Reynolds",
      "Blake Lively",
      "Mark Strong",
      "Peter Sarsgaard",
      "Taika Waititi"
    ]
  },
  {
    "posterPath": "https://image.tmdb.org/t/p/w500/1MpWjcCn8M0763QDoxcN0gXrc5q.jpg",
    "releaseDate": "2010-06-18",
    "title": "Jonah Hex",
    "cast": [
      "Josh Brolin",
      "Megan Fox",
      "John Malkovich",
      "Michael Fassbender",
      "Will Arnett"
    ]
  },
  {
    "posterPath": "https://image.tmdb.org/t/p/w500/aZvOkdo203bm1kpcY0A0Tn074ER.jpg",
    "releaseDate": "2009-03-05",
    "title": "Watchmen",
    "cast": [
      "Regina King",
      "Jeremy Irons",
      "Tim Nelson",
      "Don Johnson",
      "Jean Smart"
    ]
  },
  {
    "posterPath": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "releaseDate": "2008-07-16",
    "title": "The Dark Knight",
    "cast": [
      "Christian Bale",
      "Gary Oldman",
      "Heath Ledger",
      "Michael Caine",
      "Morgan Freeman"
    ]
  },
  {
    "posterPath": "https://image.tmdb.org/t/p/w500/qIegbn6DSUYmggfwxOBNOVS35q.jpg",
    "releaseDate": "2006-06-28",
    "title": "Superman Returns",
    "cast": [
      "Brandon Routh",
      "Kate Bosworth",
      "Kevin Spacey",
      "James Marsden",
      "Parker Posey"
    ]
  },
  {
    "posterPath": "https://image.tmdb.org/t/p/w500/1P3ZyEq02wcTMd3iE4ebtLvncvH.jpg",
    "releaseDate": "2005-06-10",
    "title": "Batman Begins",
    "cast": [
      "Christian Bale",
      "Cillian Murphy",
      "Katie Holmes",
      "Michael Caine",
      "Liam Neeson"
    ]
  },
  {
    "posterPath": "https://image.tmdb.org/t/p/w500/pvnPgukFyEKgCzyOxyLiwyZ8T1C.jpg",
    "releaseDate": "2004-07-22",
    "title": "Catwoman",
    "cast": [
      "Halle Berry",
      "Sharon Stone",
      "Benjamin Trott",
      "Frances Conroy",
      "Lambert Wilson"
    ]
  },
  {
    "posterPath": "https://image.tmdb.org/t/p/w500/hbH8oXJZPwcYxaa1JrUMq4ogg7G.jpg",
    "releaseDate": "1997-08-15",
    "title": "Steel",
    "cast": [
      "Chad Connell",
      "Jason Wishnowski",
      "Daryl Dorge",
      "Logan Creran",
      "Mimi Kuzyk"
    ]
  },
  {
    "posterPath": "https://image.tmdb.org/t/p/w500/bsg0mrxUKyJoL4oSGP5mlhEsqp.jpg",
    "releaseDate": "1997-06-20",
    "title": "Batman & Robin",
    "cast": [
      "George Clooney",
      "Chris O'Donnell",
      "Uma Thurman",
      "Alicia Silverstone",
    ]
  }
];
```

## Deliverable

#### The final version of `react-movies` (parts 1 thru 3 combined) will be a deliverable, so do each part and don't fall behind.

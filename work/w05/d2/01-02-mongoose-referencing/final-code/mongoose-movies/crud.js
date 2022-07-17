// Load the "secrets" in the .env file
require('dotenv').config();
// Connect to the MongoDB database
require('./config/database');

const Movie = require('./models/movie');
const Performer = require('./models/performer');

let movies, performers, movie, performer;

Movie.find({}, function(err, movieDocs) {
  movies = movieDocs;
});


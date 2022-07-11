const Movie = require('../models/movie');

module.exports = {
  new: newMovie,
  create,
  index
};

function index(req, res) {
  Movie.find({}, function(err, movies) {
    if (err) return res.redirect('/');
    res.render('movies/index', { movies });
  });
}

function create(req, res) {
  // convert nowShowing's checkbox of undefined or "on" to a boolean
  req.body.nowShowing = !!req.body.nowShowing;
  // remove leading and trailing spaces
  req.body.cast = req.body.cast.trim();
  if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  const movie = new Movie(req.body);
  movie.save(function(err) {
    // one way to handle errors
    if (err) return res.redirect('/movies/new');
    console.log(movie);
    res.redirect('/movies');
  });
}

function newMovie(req, res) {
  res.render('movies/new');
}
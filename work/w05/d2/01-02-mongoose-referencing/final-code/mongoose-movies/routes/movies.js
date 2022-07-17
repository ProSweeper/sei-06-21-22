var express = require('express');
var router = express.Router();
var moviesCtrl = require('../controllers/movies');

// All routes start with "/movies"

// GET /movies (display all movies)
router.get('/', moviesCtrl.index);
// GET /movies/new (display a form for entering a new movie)
router.get('/new', moviesCtrl.new);
// GET /movies/:id (display a "detail/show" page for a single movie)
router.get('/:id', moviesCtrl.show);
// POST /movies (handle the new form being submitted)
router.post('/', moviesCtrl.create);

module.exports = router;

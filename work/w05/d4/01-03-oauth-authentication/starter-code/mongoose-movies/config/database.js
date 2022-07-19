const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movies');

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});
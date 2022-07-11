const mongoose = require('mongoose');
// shortcut variable
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  releaseYear: {
    type: Number,
    default: function() {
      return new Date().getFullYear()
    },
    min: 1927
  },
  mpaaRating: {
    type: String,
    enum: ['G', 'PG', 'PG13', 'R']
  },
  cast: [String],
  nowShowing: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Movie', movieSchema);


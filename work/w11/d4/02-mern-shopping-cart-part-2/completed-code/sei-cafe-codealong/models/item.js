const mongoose = require('mongoose');

// Ensure that the Category model is loaded in Mongoose
require('./category');

// We want to re-use the itemSchema
const itemSchema = require('./itemSchema');

module.exports = mongoose.model('Item', itemSchema);
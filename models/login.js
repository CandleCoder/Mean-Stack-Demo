var mongoose = require('mongoose');

// Create the Database Schema.
var LoginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  repo: {
    type: String,
    required: true
  }
});

// Export the model.
module.exports = mongoose.model('login', LoginSchema);
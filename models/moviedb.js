
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  name: {type: String, required: true},
  synop: String,
  favActor: String,
  rating: { type: Number, min: 0, max: 5}
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

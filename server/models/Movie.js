const { Schema, model } = require("mongoose");

// make a movie schema with the properties of
const movieSchema = new Schema({
  // movieTitle
  movieTitle: {
    type: String,
    required: true,
  },
  // description
  description: {
    type: String,
  },
  // image
  image: {
    type: String,
  },
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;

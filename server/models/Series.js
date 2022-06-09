const { Schema, model } = require("mongoose");
// make a series schema with the properties of
const seriesSchema = new Schema({
  // seriesTitle
  seriesTitle: {
    type: String,
    required: true,
  },
  // description
  description: {
    type: String,
  },
  // seasonNumber
  seasonNumber: {
    type: String,
  },
  // episodeNumber
  episodeNumber: {
    type: String,
  },
  // image
  image: {
    type: String,
  },
});

const Series = mongoose.model("Series", seriesSchema);
module.exports = Series;

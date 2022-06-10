const { default: mongoose } = require("mongoose");
const { Schema } = require("mongoose");
const watchItemSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
  },
  summary: {
    type: String,
  },
  season: {
    type: String,
  },
  episode: {
    type: String,
  },
  mediaType: {
    type: Boolean,
    required: true,
  },
  IMDbId: {
    type: String,
    required: true,
  },
  isWatched: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const WatchItem = mongoose.model("WatchItem", watchItemSchema);
module.exports = WatchItem;

const mongoose = require("mongoose");

const artistSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;

const mongoose = require("mongoose");
const releasesSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
    image: {
      type: String,
      required: false,
    },
    artist: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
      ref: "Artist",
    },
  },
  {
    timestamps: true,
  }
);
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
  facebook: {
    type: String,
    required: false,
  },
  spotify: {
    type: String,
    required: false,
  },
  bandcamp: {
    type: String,
    required: false,
  },
  instagram: {
    type: String,
    required: false,
  },
  youtube: {
    type: String,
    required: false,
  },
  releases: [releasesSchema],
});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;

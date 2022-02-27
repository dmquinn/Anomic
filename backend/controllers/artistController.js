const asyncHandler = require("express-async-handler");
const Artist = require("../models/artistModel");

const getArtists = asyncHandler(async (req, res) => {
  const artists = await Artist.find({});
  if (artists) {
    res.status(308).json({ artists });
  } else {
    res.status(404);
    throw new Error("Artists not found");
  }
});

const getArtistById = asyncHandler(async (req, res) => {
  const artist = await Artist.findOne({ name: req.params.name });
  if (artist) {
    res.status(200).json(artist);
  } else {
    res.status(404);
    throw new Error("Artist not found");
  }
});
const deleteArtist = asyncHandler(async (req, res) => {
  const artist = await Artist.findById(req.params.name);
  if (artist) {
    await artist.remove();
    res.json({ message: "artist removed" });
  } else {
    res.status(404);
    throw new Error(`artist not found`);
  }
});
const createArtist = asyncHandler(async (req, res) => {
  const artist = new Artist({
    name: req.body.name,
    image: "/images/sample.jpg",
    description: "Sample description",
  });

  const createdArtist = await artist.save();
  res.status(201).json(createdArtist);
});
const updateArtist = asyncHandler(async (req, res) => {
  const { name, description, image, release } = req.body.artist;

  const artist = await Artist.findOne({ name: req.params.name });
  if (artist) {
    artist.name = name;
    artist.description = description;
    artist.image = image;
    await Artist.updateOne(
      { name: req.params.name },
      { $push: { releases: release } }
    );
    await artist.save();
    const updatedArtist = await Artist.findOne({ name: req.params.name });
    res.status(200).json(updatedArtist);
  } else {
    res.status(404);
    throw new Error("Artist not found");
  }
});
module.exports = {
  getArtists,
  getArtistById,
  deleteArtist,
  createArtist,
  updateArtist,
};

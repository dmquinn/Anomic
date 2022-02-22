const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const users = require("./data/users");
const artists = require("./data/artists");
const User = require("./models/userModel");
const Artist = require("./models/artistModel");

const connectDB = require("./config/db");

connectDB();

const importData = async () => {
  try {
    await Artist.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;
    const sampleArtists = artists.map((artist) => {
      return { ...artist, user: adminUser };
    });
    await Artist.insertMany(sampleArtists);

    console.log("data imported");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await Artist.deleteMany();
    await User.deleteMany();

    console.log("data destroyed");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}

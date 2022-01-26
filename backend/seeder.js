import dotenv from "dotenv";
import { map } from "./data/artists";
import Artist from "./models/artistModel";

import connectDB from "./config/db";
dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Artist.deleteMany();

    const sampleArtists = map((artist) => {
      return { ...artist };
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

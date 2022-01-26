import { Schema, model } from "mongoose";

const artistSchema = Schema(
  {
    name: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    description: {
      type: String,
      required: true,
    },

    images: {
      type: [String],
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Artist = model("Artist", artistSchema);

export default Artist;

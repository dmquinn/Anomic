const express = require("express");
const router = express.Router();
const {
  getArtists,
  getArtistById,
  deleteArtist,
  updateArtist,
  createArtist,
} = require("../controllers/artistController");
const { protect, admin } = require("../middleware/authMiddleware.js");

router.route("/").get(getArtists).post(protect, admin, createArtist);
router
  .route("/:name")
  .get(getArtistById)
  .delete(protect, admin, deleteArtist)
  .put(protect, admin, updateArtist);

module.exports = router;

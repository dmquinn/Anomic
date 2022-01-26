const express = require("express");
const router = express.Router();
const {
  getArtists,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
  createProductReview,
  getTopArtists,
} = require("../controllers/productController");
const { protect, admin } = require("../middleware/authMiddleware.js");

router.route("/").get(getArtists).post(protect, admin, createProduct);
router.route("/:id/reviews").post(protect, createProductReview);
router.get("/top", getTopArtists);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

module.exports = router;

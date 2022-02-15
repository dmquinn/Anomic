const express = require("express");
const router = express.Router();
const { authUser, getUserById } = require("../controllers/userController.js");
const { protect, admin } = require("../middleware/authMiddleware.js");

router.route("/").get(protect, admin);
router.post("/login", authUser);
router.route("/profile");
router.route("/:id").get(protect, admin, getUserById);

module.exports = router;

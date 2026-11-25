const express = require("express");
const router = express.Router();
const upload = require("../config/multer");

const protect = require("../middleware/authMiddleware");

const {
    getProfile,
    updateProfile,
    uploadResume
} = require("../controllers/profileController");

// Get Logged-in User Profile
router.get("/profile", protect, getProfile);

// Update Logged-in User Profile
router.put("/profile", protect, updateProfile);
router.post(
    "/profile/upload",
    protect,
    upload.single("resume"),
    uploadResume
);

module.exports = router;
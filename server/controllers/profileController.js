const User = require("../models/User");

// Get Profile
const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Update Profile
const updateProfile = async (req, res) => {
    try {

        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        user.name = req.body.name || user.name;
        user.college = req.body.college || user.college;
        user.branch = req.body.branch || user.branch;
        user.graduationYear = req.body.graduationYear || user.graduationYear;
        user.skills = req.body.skills || user.skills;
        user.certifications = req.body.certifications || user.certifications;

        const updatedUser = await user.save();

        res.status(200).json({
            message: "Profile Updated Successfully",
            user: updatedUser
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
const uploadResume = async (req, res) => {

    try {

        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        user.resume = req.file.filename;

        await user.save();

        res.status(200).json({
            message: "Resume Uploaded Successfully",
            filename: req.file.filename
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    getProfile,
    updateProfile,
    uploadResume
};
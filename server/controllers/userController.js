const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const registerUser = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        if (!name || name.trim().length < 2) {
            return res.status(400).json({
                message: "Please enter a valid name (at least 2 characters)"
            });
        }

        if (!email || !emailRegex.test(email)) {
            return res.status(400).json({
                message: "Please enter a valid email address"
            });
        }

        if (!password || password.length < 6) {
            return res.status(400).json({
                message: "Password must be at least 6 characters long"
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "An account with this email already exists. Please sign in instead."
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name: name.trim(),
            email: email.toLowerCase(),
            password: hashedPassword
        });

        res.status(201).json({
            success: true,
            message: "Account created successfully! Welcome to Career Compass.",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

const loginUser = async (req, res) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please enter both email and password"
            });
        }

        const user = await User.findOne({ email: email.toLowerCase() });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "No account found with this email. Please check your email or create an account."
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Incorrect password. Please try again or use the 'Forgot password' link."
            });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "30d" }
        );

        res.status(200).json({
            success: true,
            message: "Login successful. Welcome back!",
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                college: user.college || "",
                branch: user.branch || "",
                graduationYear: user.graduationYear || null
            }
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Something went wrong. Please try again."
        });

    }
};

const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            user
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
};

module.exports = {
    registerUser,
    loginUser,
    getMe
};
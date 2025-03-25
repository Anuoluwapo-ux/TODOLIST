import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"

export const authController = {
    register: async (req, res) => {
        try {
            const { firstName, lastName, email, password } = req.body;

            const user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ message: "This user already exist." });
            }

            const hashPassword = await bcrypt.hash(password, 10)

            const newUser = new User({
                firstName,
                lastName,
                email,
                password: hashPassword
            })

            await newUser.save();

            return res.status(201).json({ message: "User registered successfully", user: newUser })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            if (!email)
                return res.status(400).json({ message: 'please enter your email.' })

            if (!password)
                return res.status(400).json({ message: 'please enter your password.' })

            const user = await User.findOne({ email })
            if (!user)
                return res.status(400).json({ message: 'this email does not exist.' });

            const confirmPassword = await bcrypt.compare(password, user.password)

            if (!confirmPassword)
                return res.status(400).json({ message: 'incorrect password.' });

            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)

            user.password = undefined;

            return res.status(200).json({ message: 'sign in successfully.', token, user })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },
    logout: async (req, res) => {
        try {
            res.cookie("jwt", "", { maxAge: 0 })
            res.status(200).json({ message: "logged out successfully" })
        } catch (error) {
            console.log("error in logout controller", error.message);
            return res.status(500).json({ error: "internal server error" });
        }
    }
}
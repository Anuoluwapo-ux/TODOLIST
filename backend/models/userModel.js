import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        max: 10,
        min: 3
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        max: 10,
        min: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        max: 300,
        min: 3
    },
    password: {
        type: String,
        required: true,
        max: 500,
        min: 6
    },
}, { timestamps: true, })

const User = mongoose.model("User", UserSchema)

export default User;
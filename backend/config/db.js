import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const mongoDB = await mongoose.connect(process.env.MONGODB)
        console.log(`DataBase connected successfully on: ${mongoDB.connection.host}`);
    } catch (error) {
        console.log(error.message);
    }
}
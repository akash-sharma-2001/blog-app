import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("mongodb database connected"))
        await mongoose.connect(`${process.env.MONGODB_URI}/blog_app_db`)
    } catch (error) {
        console.log(error.message)
    }
}

export default connectDB;
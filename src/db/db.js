import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// First method to connect databse through Mongodb (making function then calling it in index.js)
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`mongodb+srv://tyr:tyr007@cluster0.gr9fz.mongodb.net/${DB_NAME}`)
        console.log(`\n Connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB
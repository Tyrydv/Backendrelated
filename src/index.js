import dotenv from "dotenv";
import connectDB from "./db/db.js";
import express from "express";
const app = express();

dotenv.config({path:'./env'})


connectDB()

.then(()=>{
    app.listen(process.env.PORT|| 8000),()=>{
        console.log('server is running at port ')
    }
})
.catch((err)=>{
    console.log("Mongodb connection failed",err);
})


// 2econd method to connect database through Mongodb
// ; (async () => {
//     try {
//         await mongoose.connect(`mongodb+srv://tyr:tyr007@cluster0.gr9fz.mongodb.net/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("error:",error);
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log('App is runnig on the port of ${process.env.PORT}');
//         })
//     }
//     catch (error) {
//         console.error("ERROR: ", error)
//         throw error;
//     }
// })() calling it imm
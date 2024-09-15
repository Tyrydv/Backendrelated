import dotenv from "dotenv";
import connectDB from "./db/db.js";

dotenv.config({path:'./env'})


connectDB()


/*
; (async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("error:",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log('App is runnig on the port of ${process.env.PORT}');
        })
    }
    catch (error) {
        console.error("ERROR: ", error)
        throw error;
    }
})()*/
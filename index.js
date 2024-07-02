import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import route from './routes/userRoute.js'
import morgan from 'morgan'
import cors from 'cors'

const app = express()
app.use(bodyParser.json())
dotenv.config()

app.use(morgan("dev"));
app.use(cors())


const PORT =  process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL
console.log(MONGOURL);


mongoose.connect(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Database is Connected Sucssessfully...");
    app.listen(PORT, () => {
        console.log(`Server is runnning on the port ${PORT}....`);
    })
}).catch((error) => console.log(error));

app.use("/api/user", route);
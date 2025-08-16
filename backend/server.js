import express from "express";
import dotenv from "dotenv";
import dbConnection from "./config/db.js";

const app = express();

dotenv.config({
    path: "./.env"
})


const port = process.env.PORT || 8001;

app.get('/', (req, res) => {
    res.send("Hello this is task manager!")
})


dbConnection().then(() => {

    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`)
    })

}).catch((error) => {
    
    console.error('Database connection failed: ', error);
})
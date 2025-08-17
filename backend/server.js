import express from "express";
import dotenv from "dotenv";
import dbConnection from "./config/db.js";
import userRoutes from "./routes/userRoute.js";

const app = express();

dotenv.config({
    path: "./.env"
})


// Router
app.post("/api/v1/user", userRoutes);

app.get('/', (req, res) => {
    res.send("Hello this is task manager!")
})


const port = process.env.PORT || 8001;

dbConnection().then(() => {

    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`)
    })

}).catch((error) => {
    
    console.error('Database connection failed: ', error);
})
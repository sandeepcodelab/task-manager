import express from "express";
import dotenv from "dotenv";
import dbConnection from "./config/db.js";
import cookieParser from "cookie-parser";

// Router
import userRoutes from "./routes/userRoute.js";


const app = express();

dotenv.config({
    path: "./.env"
})


// Comman middleware
app.use(express.json());
app.use(cookieParser());

// Router
app.use("/api/v1/user", userRoutes);

app.get('/', (req, res) => {
    res.send("Hello this is task manager!")
})


const port = process.env.PORT || 8001;

dbConnection().then(() => {

    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`)
    })

}).catch((error) => {
    
    console.error('Database connection failed: ', error);
})
import mongoose from "mongoose";

const dbConnection = async() => {
    try {

        const dbConn = await mongoose.connect(`${process.env.DB_URI}/${process.env.DB_NAME}`);

        console.log('Database connected successfully! DB host: ', dbConn.connection.host);
        
    } catch (error) {

        console.error('Database connection failed: ', error.message);
        process.exit(1);
    }
}


export default dbConnection;
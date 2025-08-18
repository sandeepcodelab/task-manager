import jwt from "jsonwebtoken";
import User from "../models/userModel.js";


const verifyJWT = async(req, res, next) => {

    const token = req.cookies.accessToken || req.header("Authorization")?.replace("Bearer ", "")

    if(!token){
        return res.status(401).json({message: "Unauthorized"})
    }


    try {
        
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN);
        const user = await User.findById(decodedToken.id).select("-password -refreshToken");

        if(!user){
            return res.status(401).json({message: "Unauthorized"})
        }

        req.user = user;
        
        next();

    } catch (error) {
        return res.status(401).json({ message: error?.message || "Invalid access token" });
    }
}

export default verifyJWT;
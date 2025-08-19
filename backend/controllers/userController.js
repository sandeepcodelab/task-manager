import User from "../models/userModel.js";


const generateAccessAndRefreshToken = async(userId) => {
    try {
        const user = await User.findById(userId);
    
        if(!user){
            throw new Error("User not found!");
        }
        
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken
        await user.save({validateBeforeSave: false})
        return {accessToken, refreshToken}

    } catch (error) {
        throw new Error("Somthing went wrong while generating access and refresh tokens");
    }
}


const registerUser = async(req, res) => {
    try {

        if(!req.body){
            return res.status(400).json({
                success: false, 
                message: "Request body cannot be empty."
            });    
        }

        const{name, email, password} = req.body

        if ([name, email, password].some((field) => !field || field.trim() === "")) {
            return res.status(400).json({
                success: false, 
                message: "Name, email and password fields are required."
            });
        }

        const regEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;
        
        if(!regEmail.test(email)){
            return res.status(400).json({
                success: false, 
                message: "Invalid email id."
            });
        }

        const checkUser = await User.findOne({email})
        
        if(checkUser){
            return res.status(400).json({
                success: false, 
                message: "User already exists."
            });
        }

        const user = await User.create({
            name,
            email: email,
            password
        })

        const registeredUser = await User.findById(user._id).select("-password -refreshToken")

        return res.status(201).json({
            success: true,
            message: "New user created successfully.",
            user: registeredUser
        })

    } catch (error) {
        console.log("register: ", error)
        return res.status(500).json({
            success: false,
            message: "Something went wrong while creating a user."
        })
    }
}


const loginUser = async(req, res) => {
    try {
        
        if(!req.body){
            return res.status(400).json({
                success: false, 
                message: "Request body cannot be empty."
            });    
        }

        const{email, password} = req.body

        if(!email || !password){
            return res.status(400).json({
                success: false, 
                message: "email and password required."
            });
        }
        
        // Check email
        const regEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;
        
        if(!regEmail.test(email)){
            return res.status(400).json({
                success: false, 
                message: "Invalid email id."
            });
        }

        // Check user
        const user = await User.findOne({email})

        if(!user){
            return res.status(404).json({
                success: false, 
                message: "User not found."
            });
        }
        
        const checkPassword = user.isPasswordCorrect(password)
        
        if(!checkPassword){
            return res.status(400).json({
                success: false, 
                message: "Invalid credentials."
            });
        }

        const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id)

        const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

        const options = {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production"
        }

        return res.status(200)
                .cookie("accessToken", accessToken, options)
                .cookie("refreshToken", refreshToken, options)
                .json({
                    success: true,
                    message: "User logged in successfully.",
                    loggedInUser: {loggedInUser, accessToken, refreshToken}
                })

    } catch (error) {
        console.log("login: ", error)
        return res.status(500).json({
            success: false,
            message: "Something went wrong while user login."
        })
    }
}


export { 
    registerUser,
    loginUser
}
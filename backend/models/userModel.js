import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true,

        },
        refreshToken: {
            type: String,
        },
    },
    {timestamps: true}
)


// Password bcrypt
userSchema.pre("save", async function(next){
    
    if(!this.isModified("password")) return next();

        this.password = await bcrypt.hash(this.password, 10);

    next()
})

//Check password
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

// Generate access and refresh token
userSchema.methods.generateAccessToken = function() {

    return jwt.sign({
                id: this._id,
                name: this.name,
                email: this.email
            }, 
            process.env.ACCESS_TOKEN,
            { expiresIn: process.env.ACCESS_TOKEN_EXPIRY });
}

userSchema.methods.generateRefreshToken = function() {

    return jwt.sign({
                id: this._id
            }, 
            process.env.REFRESH_TOKEN,
            { expiresIn: process.env.REFRESH_TOKEN_EXPIRY });
}


const User = mongoose.model('User', userSchema);

export default User
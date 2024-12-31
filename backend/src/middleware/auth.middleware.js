import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt

if(!token){
    return res.status(401).json({msg: "Please login to access this route."}) 
}
const decoded =jwt.verify(token,process.env.JWT_SECRET)

if(!decoded){
    return res.status(401).json({message: "Please login to access this route."});
}

const user = await User.findById(decoded.userId).select("-password");

if(!user){
    return res.status(401).json({message: "User not found."});
}
req.user = user
next()
    } catch (error) {
        console.log("Error in protecrRoute middleware:", error.message)
        res.status(500).json({message:"internal server error"});
    }
}
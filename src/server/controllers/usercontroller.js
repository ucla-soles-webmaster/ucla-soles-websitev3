import express from "express";
import UserSchema from "../models/user.js";

const userRouter = express.Router();

userRouter.post('/', async (req, res) => {
    console.log("Request body:", req.body); // Debugging
    try{
        const {name, email, picture, major, gradDate, admin} = req.body
        if(!email){
            return res.status(400)
                .json({message: "Email is required"});
        }
        // Check if user already exists
        let user = await UserSchema.findOne({ email });
        if (user) {
            // If the user exists but major/gradDate are missing, update the record
            if (!user.major || !user.gradDate) {
                user.major = major || user.major;
                user.gradDate = gradDate || user.gradDate;
                await user.save();
            }
            return res.status(200).json({ message: "User exists", user });
        }

        const newUser = new UserSchema({
            name, email, picture, major, gradDate, admin: admin || false
        })

        const savedUser = await newUser.save();
        return res.status(201).json({ message: 'User registered successfully', user:savedUser});
    }
    catch (error) {
        return res.status(500).json({ message: 'An error occurred', error: error.message });
    }
});

export default userRouter;

// const index = (req, res, next) => {
//     User.find().then(response => {
//         res.json({
//             response
//         })
//     })
//     .catch(error => {
//         res.json({
//             message:"an error occured"
//         })
//     })

// }


// const store = (req, res, next) => {
//     let user = new User ({
//         studentname: req.body.name,
//         username: req.body.username,
//         email: req.body.email,
//         password: req.body.password,
//         // Admin: req.body.Admin
//     })

//     user.save().then(response => {
//         res.json({
//             message: "User Added"
//         })
//     })
//     .catch(error => {
//         res.json({
//             message: "an error occured"
//         })
//     })
// }

//module.exports = {index,store}
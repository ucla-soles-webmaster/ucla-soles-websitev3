import express from "express";
import UserSchema from "../models/user.js";
//const User = require('../models/user')

const userRouter = express.Router();

userRouter.post('/', async (req, res) => {
    try{
        const {name, username, email, admin} = req.body
        if(!username || !admin){
            res.status(400)
                .json({message: "username and password required."});
        }
        const newUser = new UserSchema({
            name, username, email, admin
        })

        const savedUser = await newUser.save();
        res.status(201).json({ message: 'User registered successfully', user:savedUser});
    }
    catch (error) {
        res.status(500).json({ message: 'An error occurred', error: error.message });
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
//const mongoose = require('mongoose')
import mongoose from 'mongoose';
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name:{
        type : String
    },
    username:{
        type: String
    },
    email:{
        type: String
    },
    // password:{
    //     type: String
    // }
    admin:{
        type: Boolean
    }

})

const User = mongoose.model('users', UserSchema)
export default User

//module.exports = User

// username
// name
// email
// password
// Admin

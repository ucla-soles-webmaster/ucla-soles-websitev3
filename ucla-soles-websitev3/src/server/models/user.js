const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    studentname:{
        type : String
    },
    username:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    }
    // Admin:{
    //     type: Boolean
    // }

})

const User = mongoose.model('User', UserSchema)
module.exports = User

// username
// name
// email
// password
// Admin

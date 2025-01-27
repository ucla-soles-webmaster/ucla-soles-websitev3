import mongoose from 'mongoose';
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name:{
        type : String
    },
    email:{
        type: String
    },
    picture:{
        type: String
    },
    major:{
        type: String
    },
    gradDate:{
        type: String
    },
    admin:{
        type: Boolean
    }
})

const User = mongoose.model('users', UserSchema)
export default User
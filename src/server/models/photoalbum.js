import mongoose from 'mongoose';
const Schema = mongoose.Schema

const PhotoAlbumSchema = new Schema({
    image:{
        type : String
    },
    text:{
        type: String
    }
})

const PhotoAlbum = mongoose.model('photoalbum', PhotoAlbumSchema)
export default User
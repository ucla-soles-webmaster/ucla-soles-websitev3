import mongoose from 'mongoose';

const merchSchema = new mongoose.Schema({
    name: String,
    cost: String,
    count: Number,
    imageUrl: String,
    stockStatus: String,
    urlExt: String
});

export default mongoose.model('Merch', merchSchema);

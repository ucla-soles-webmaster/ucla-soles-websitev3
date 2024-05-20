import mongoose from 'mongoose';

const merchSchema = new mongoose.Schema({
    name: { type: String, required: true },
    cost: { type: String, required: true },
    count_L: { type: String }, // Using String as per your database
    count_M: { type: String }, // Using String as per your database
    count_S: { type: String }, // Using String as per your database
    count_XL: { type: String }, // Using String as per your database
    count_XXL: { type: String }, // Using String as per your database
    count: { type: String }, // Using String as per your database
    imageUrl: { type: String, required: true },
    stockStatus: { type: String, required: true },
    urlExt: { type: String, required: true }
});

export default mongoose.model('Merch', merchSchema, 'merch');

import express from 'express';
import MerchSchema from '../models/merch.js';

const merchRouter = express.Router();

// List all merchandise items
merchRouter.get('/', async (req, res) => {
    try {
        const items = await MerchSchema.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
});

// Add a new merchandise item
merchRouter.post('/', async (req, res) => {
    try {
        const { name, cost, count, imageUrl, stockStatus, urlExt } = req.body;
        const newItem = new MerchSchema({
            name,
            cost,
            count,
            imageUrl,
            stockStatus,
            urlExt
        });

        const savedItem = await newItem.save();
        res.status(201).json({ message: 'Merchandise added successfully', item: savedItem });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
});

// Update an item's count
merchRouter.patch('/update/:id', async (req, res) => {
    try {
        const { count } = req.body;
        const updatedItem = await MerchSchema.findByIdAndUpdate(req.params.id, { $set: { count } }, { new: true });
        res.status(200).json({ message: 'Updated successfully', item: updatedItem });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
});

export default merchRouter;

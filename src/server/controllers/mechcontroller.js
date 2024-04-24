/*
//Still editing

loginRouter.get('/info', async (request, response) => {
    const user = await User.findOne({ username: request.user });
    response.json(user);
});
boardRouter.get('/getBoard', async (req,res) => {
    try {
        const {boardId} = req.query;
        const board = await Board.findById(boardId)
            .populate('items')
            .select('bookTitle bookAuthor bookCover username userId items publicVisibility');
        if(!board){
            return res.status(404).json({ message: 'Board not found' });
        }
        res.json(board);
    }
    catch(error){
        res.status(500).json({ message: 'Error fetching board', error: error.message });
    }
}); */


import express from 'express';
import MerchSchema from '../models/merch.js';

const merchRouter = express.Router();

// List all merchandise items
merchRouter.get('/getItems', async (req, res) => {
    try {
        const items = await MerchSchema.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
});

// Add a new merchandise item
merchRouter.post('/addItem', async (req, res) => {
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

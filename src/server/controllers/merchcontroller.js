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
import Merch from '../models/merch.js'; // Ensure the correct path to your schema

const merchRouter = express.Router();

// List all merchandise items
merchRouter.get('/getItems', async (req, res) => {
    try {
        console.log("Fetching all merchandise items");
        const items = await Merch.find();
        console.log("Items fetched:", items);
        res.status(200).json(items);
    } catch (error) {
        console.error("Error fetching items:", error);
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
});

// Add a new merchandise item
merchRouter.post('/addItem', async (req, res) => {
    try {
        const { name, cost, count_L, count_M, count_S, count_XL, count_XXL, count, imageUrl, stockStatus, urlExt } = req.body;
        const newItem = new Merch({
            name,
            cost,
            count_L,
            count_M,
            count_S,
            count_XL,
            count_XXL,
            count,
            imageUrl,
            stockStatus,
            urlExt
        });

        const savedItem = await newItem.save();
        console.log("New item added:", savedItem);
        res.status(201).json({ message: 'Merchandise added successfully', item: savedItem });
    } catch (error) {
        console.error("Error adding item:", error);
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
});

// Update an item's count
merchRouter.patch('/update/:id', async (req, res) => {
    try {
        const updateFields = req.body; // Assume the body contains the fields to be updated
        const updatedItem = await Merch.findByIdAndUpdate(req.params.id, { $set: updateFields }, { new: true });
        console.log("Item updated:", updatedItem);
        res.status(200).json({ message: 'Updated successfully', item: updatedItem });
    } catch (error) {
        console.error("Error updating item:", error);
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
});

export default merchRouter;

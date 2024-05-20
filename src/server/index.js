import express from "express";
import mongoose from 'mongoose';
import cors from "cors";

import { PORT, mongodbURL } from "./config.js";
import userRouter from "./controllers/usercontroller.js";
import merchRouter from "./controllers/merchcontroller.js"; // Correct file path

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

mongoose.connect(mongodbURL)
    .then(() => {
        console.log('Connected to DB');
    }).catch((error) => {
        console.error('Error connecting to DB:', error);
    });

// Default route for testing server status
app.get('/', (req, res) => {
    res.status(200).send('Server is running');
});

// Route mounting
app.use('/register', userRouter);
app.use('/merch', merchRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`App listening to port: ${PORT}`);
});

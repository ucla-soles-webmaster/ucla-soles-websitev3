import express from "express";
import mongoose from 'mongoose';
import cors from "cors";

import { PORT, mongodbURL } from "./config.js";
import userRouter from "./controllers/usercontroller.js";
import merchRouter from "./controllers/mechcontroller.js";

const app = express();

mongoose.connect(mongodbURL)
    .then(() => {
        console.log('Connected to DB');
        app.get('/', (request, response) => {
            console.log(request)
            return response.status(250).send()
        });
    }).catch((error) => {
        console.log(error);
    });

app.use(cors());
app.use(express.json());
app.use('/register', userRouter);
app.use('/merch', merchRouter);

app.listen(PORT, () => {
    console.log(`App listening to port: ${PORT}`)
});
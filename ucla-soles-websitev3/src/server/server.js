


const express = require('express');



const mongoose = require('mongoose');

 
// Create a new Express.js instance

const app = express();

 

// Set up middleware

app.use(express.json());

 

// Connect to the MongoDB database

mongoose.connect('mongodb://localhost/myapp', {

  useNewUrlParser: true,

  useUnifiedTopology: true,

});

 

// Define a schema for our data

const itemSchema = new mongoose.Schema({

  name: String,

  description: String,

});

 

// Define a model based on the schema

const Item = mongoose.model('Item', itemSchema);

 

// Define routes

app.get('/items', async (req, res) => {

  const items = await Item.find();

  res.json(items);

});

 

app.post('/items', async (req, res) => {

  const item = new Item(req.body);

  await item.save();

  res.json(item);

});

 

// Start the server

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

  console.log(`Server listening on port ${PORT}`);

});
 
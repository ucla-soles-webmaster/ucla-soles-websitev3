const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const userRoute = require('./routes/userRoute')


const uri = 'mongodb+srv://ucla-soles:ucla-soles@uclawebmaster.icdi46x.mongodb.net/?retryWrites=true&w=majority';
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
    try {
        await mongoose.connect(uri, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        const User = require('./models/user'); // Adjust the path accordingly

        const testUser = new User({
            studentname: 'Test Student',
            username: 'testuser',
            email: 'test@example.com',
            password: 'testpassword',
        });

        await testUser.save();
        console.log("Test user added to the database!");

    } finally {
        await mongoose.disconnect();
    }
}

run().catch(console.dir);

// username
// name
// email
// password
// Admin


//test bank
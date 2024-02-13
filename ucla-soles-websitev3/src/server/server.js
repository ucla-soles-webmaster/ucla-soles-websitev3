const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const userRoute = require('./routes/userRoute')

mongoose.connect('mongodb+srv://ucla-soles:ucla-soles@uclawebmaster.icdi46x.mongodb.net/?retryWrites=true&w=majority')
const db = mongoose.connection

db.on('error', (err) =>{
    console.log(err)
})

db.once('open',() =>{
    console.log('Database Connection :)')
})

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("server running :)")
})

app.use('/api/user', userRoute)

// username
// name
// email
// password
// Admin


//test bank
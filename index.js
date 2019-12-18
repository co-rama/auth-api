const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

//Import routes
const authRoute = require('./routes/auth');

// Middleware
app.use(express.json());


// DB connection
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, (err) => {
    if(err){
        console.log('Error connecting to the DB')
    }else{
        console.log('Connected to DB');
    }
})

// Route middleware
app.use('/api/user', authRoute);



app.listen('3000', () => {
    console.log("Server up and running");
})
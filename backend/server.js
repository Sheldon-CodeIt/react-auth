const mongoose = require('mongoose')
const dotenv = require('dotenv')
const express = require('express');
const cors = require('cors');

const app = express();


mongoose.set('strictQuery', true);


// Configuring the localhost PORT
dotenv.config({ path: './config.env' });
const PORT = process.env.PORT;


// connection to the database
require('./db/conn.js')


app.use(cors())
app.use(express.json())
// creating the middleware

const middleware = (req, res, next) =>{
    console.log("This is middleware");
    next();
}


// Routes
app.use(require('./routes/auth'));



app.get('/', (req, res) => {
    res.send("Welcome to Server!");
})


app.get('/about', middleware, (req, res)=>{
    res.send("This is about!");
})


app.listen(PORT, () =>{
    console.log(`server is running at port ${PORT}`);
})

const dotenv = require('dotenv')
const express = require('express');


const app = express();
app.use(express.json())


// Configuring the localhost PORT
dotenv.config({ path: './config.env' });
const PORT = process.env.PORT;


// connection to the database
require('./db/conn.js')


// creating the middleware

const middleware = (req, res, next) =>{
    console.log("This is middleware");
    next();
}


// Routes

app.get('/', (req, res) => {
    res.send("Welcome to Server!");
})


app.get('/about', middleware, (req, res)=>{
    res.send("This is about!");
})


app.listen(PORT, () =>{
    console.log(`server is running at port ${PORT}`);
})

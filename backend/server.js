const dotenv = require('dotenv')
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });
const PORT = process.env.PORT;

app.use(express.json())

// creating the middleware

const middleware = (req, res, next) =>{
    console.log("This is middleware");
    next();
}

app.get('/', (req, res) => {
    res.send("Welcome to Server!");
})


app.get('/about', middleware, (req, res)=>{
    res.send("This is about!");
})
app.listen(PORT, () =>{
    console.log(`server is running at port ${PORT}`);
})

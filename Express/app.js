
const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 3333;

// middleware
let myfun = (req, res,next) => {
    if((req.query.age) >= 18){
        next();
    }else{
        res.send("Sorry, you are not allowed to...");
    }
    
}

app.use(express.json());
app.use(morgan('dev'));
app.get('/',myfun,(req,res) => {
    res.send('Welcome to Express.js');
}
);

app.post('/',(req,res) => {
    res.send('post Method');
});

app.listen(port, () => {
    console.log('Server is running on port http://localhost:3333');
});
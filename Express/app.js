
const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 3333;
// const path = require('path');

// middleware
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

const productRoutes = require('./routes/product.routes');
app.use('/products' , productRoutes);

const userRoutes = require('./routes/user.routes');
app.use('/user' , userRoutes);

app.listen(port, () => {
    console.log('Server is running on port http://localhost:3333'); 
});  
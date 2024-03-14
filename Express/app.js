require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const port = process.env.PORT;
const mongoose = require('mongoose');
// const path = require('path');

async function main() {
    await mongoose.connect( process.env.MONGO_DB_URL);
    // await mongoose.connect('mongodb://127.0.0.1:27017/akshay');
}
main()
 .then(()=> console.log('DB is connected...'))
 .catch(err => console.log(err));

// middleware
app.use(express.json());
app.use(morgan('dev'));

// const productRoutes = require('./routes/product.routes');
// app.use('/products' , productRoutes);

// const userRoutes = require('./routes/task.routes');
// app.use('/task' , userRoutes);

const userRoutes = require('./routes/user.routes');
app.use('/api/user' , userRoutes);

const prod1Routes = require('./routes/prod1.routes');
app.use('/api/prod1' , prod1Routes);


app.listen(port, () => {
    console.log('Server is running on port http://localhost:3333'); 
});  
const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 3333;
// const products = require('./public/product.json');

app.use(express.json());
app.use(morgan('dev'));

app.post('/products', (req, res)=> {
    // console.log(req.body);
    const product = req.body;
    products.push(product);
    res.status(201).json({message: ' product added successfully'})
});

app.get('/products', (req, res)=> {
    res.status(200).json(products);
});     

// app.get('/products/singal-product', (req, res)=> {
    // const id = +req.query.id;
app.get('/products/:id', (req, res)=> {
    const id = +req.params.id;
    let product = products.find((item)=> item.id === id);
    res.status(200).json(product);
});

// replace singal product
app.put('/products/replace-product',(req, res)=> {
    const id = +req.query.id;
    let productIndex = products.findIndex((item)=> item.id === id);
    let product = products[productIndex];
    product.splice(productIndex, 1,{...req.body});
    res.status(200).json({message: 'product added successfully....'});
});

// update singal product
app.patch('/products/update-product',(req, res)=> {
    const id = +req.query.id;
    let productIndex = products.findIndex((item)=> item.id === id);
    let product = products[productIndex];
    let item = product.splice(productIndex, 1,{ ...product, ...req.body});
   
    res.status(200).json({message: 'product update successfully....'});
});


// delete singal product
app.delete('/products/delete-product',(req, res)=> {
    const id = +req.query.id;
    let productIndex = products.findIndex((item)=> item.id === id);
    let product = products[productIndex];
    let item = product.splice(productIndex, 1);
   
    res.status(200).json({message: 'product update successfully....'});
});

app.listen(port, () => {
    console.log('Server is running on port http://localhost:3333'); 
});
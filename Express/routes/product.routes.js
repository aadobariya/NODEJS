const express = require('express');
const productRoutes = express.Router();
const { addProduct,
    deleteProduct,
    getAllProducts,
    getProduct,
    repalceProduct,
    updateProduct   
 } = require('../controller/product.controller');

// create product 
productRoutes.post('/', addProduct);

// get all products 
productRoutes.get('/', getAllProducts);   

// get single product
productRoutes.get('/singal-product', getProduct );

// replace single product
productRoutes.put('/replace-product', repalceProduct );

// update single product
productRoutes.patch('/update-product', updateProduct );

// delete single product
productRoutes.delete('/delete-product',deleteProduct);

module.exports = productRoutes;
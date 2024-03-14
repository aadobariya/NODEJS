const express = require('express');
const prod1Routes = express.Router();

const {addProd1, 
    getAllProd1s,
    getProd1, 
    updateProd1, 
    deleteProd1 
}= require('../controller/prod1.controller');

prod1Routes.post('/add-prod', verifyToken, addProd1);
prod1Routes.get('/get-all-prod', verifyToken, getAllProd1s);
prod1Routes.get('/get-prod', verifyToken, getProd1);
prod1Routes.put('/update-prod', verifyToken, updateProd1);
prod1Routes.delete('/delete-prod', verifyToken, deleteProd1);

module.exports = prod1Routes;
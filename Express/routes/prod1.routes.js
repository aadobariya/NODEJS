const express = require('express');
const prod1Routes = express.Router();

const {addProd1, 
    getAllProd1s,
    getProd1, 
    updateProd1, 
    deleteProd1 
}= require('../controller/prod1.controller');

prod1Routes.post('/add-prod', addProd1);
prod1Routes.get('/get-all-prod', getAllProd1s);
prod1Routes.get('/get-prod', getProd1);
prod1Routes.put('/update-prod', updateProd1);
prod1Routes.delete('/delete-prod', deleteProd1);

module.exports = prod1Routes;
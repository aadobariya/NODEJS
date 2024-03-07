const express = require('express');
const userRoutes = express.Router();
const { adduser,
    deleteuser,
    getAllusers,
    getuser,
    repalceuser,
    updateuser   
 } = require('../controller/task.controller');

// create user 
userRoutes.post('/', adduser);

// get all users 
userRoutes.get('/', getAllusers);   

// get single user
userRoutes.get('/singal-user', getuser );

// replace single user
userRoutes.put('/replace-user', repalceuser );

// update single user
userRoutes.patch('/update-user', updateuser );

// delete single user
userRoutes.delete('/delete-user',deleteuser);

module.exports = userRoutes;
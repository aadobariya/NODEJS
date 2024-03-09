const express = require('express');
const userRoutes = express.Router();
const { verifyToken } = require('../helpers/verifyToken');
const {addUser,
    registerUser,
    loginUser, 
    getAllUsers, 
    getUser, 
    updateUser, 
    deleteUser
} = require('../controller/user.controller');


// userRoutes.post('/add-user', addUser);
userRoutes.post('/register-user', registerUser);
userRoutes.post('/login-user', loginUser);
userRoutes.get('/get-all-user', verifyToken, getAllUsers);
userRoutes.get('/get-user', verifyToken, getUser);
userRoutes.put('/update-user', verifyToken, updateUser);
userRoutes.delete('/delete-user', verifyToken, deleteUser);

module.exports = userRoutes;
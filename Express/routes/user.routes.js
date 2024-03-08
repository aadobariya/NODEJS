const express = require('express');
const userRoutes = express.Router();
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
// userRoutes.get('/get-all-user', getAllUsers);
// userRoutes.get('/get-user', getUser);
// userRoutes.put('/update-user', updateUser);
// userRoutes.delete('/delete-user', deleteUser);

module.exports = userRoutes;
const express = require('express');
const userRoutes = express.Router();
const { verifyToken } = require('../helpers/verifyToken')

const {registerUser,
       loginUser,
       getAllUsers,
       getuser,
       updateuser,
       deleteUser,
       addNewUser
 } = require('../controller/user.controller');

userRoutes.post('/register-user', registerUser);
userRoutes.post('/login-user',loginUser);
userRoutes.get('/get-all-users', verifyToken, getAllUsers);
userRoutes.get('/get-user', verifyToken, getuser);
userRoutes.put('/update-user', verifyToken, updateuser);
userRoutes.delete('/delete-user', verifyToken, deleteUser);
userRoutes.post('/add-user', upload.single('profileImage'), addNewUser);

module.exports = userRoutes;
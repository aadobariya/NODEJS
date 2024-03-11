const User = require('../model/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req,res) => {
    try {
        const {firstName, lastName,  email, password, age} =req.body;
        let user = await User.findOne({email: email, isDelete: false});
        if(user){
            return res.status(400).json({ message: 'user is already registered....'});
        }
        let hashPassword = await bcrypt.hash(password,10);
        user = await User.create({
            firstName,
            lastName,
            email,
            password: hashPassword,
            age
        });
        user.save();
        res.status(201).json({user: user,message:'New user is Added'})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal server Error'});
    }
}


exports.loginUser = async (req,res) => {
    try {
        let user = await User.findOne({email: req.body.email, isDelete: false});
        if(!user){
            return res.status(400).json({ message: 'user is noy found'});
        }
        let chaekpassword = await bcrypt.compare(req.body.password, user.password);
        if(!chaekpassword){
            return res.status(400).json({ message: 'password is not match...'});
        }
        let token = jwt.sign({ userId: user._id},'SkillQode');
        res.status(200).json({ token, message:" Login Successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal server Error'});
    }
}


// exports.addUser = async (req, res) => {
//     try {
//         const {firstName, lastName, email, password, age} =req.body;
//         // console.log(req.body);
//         let hashPassword = await bcrypt.hash(password,10);
//         // console.log(hashPassword);
//         let newUser = await User.create({
//             firstName,
//             lastName,
//             email,
//             password: hashPassword,
//             age
//         });
//         ;
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message:'Internal server Error'});
//     }
// };

exports.getAllUsers = async (req, res) => {
    try {
        let users = await User.find({ isDelete: false });
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal server Error'});
    }
};

exports.getUser= async (req, res) => {
    try {
        let userId = req.user._id;
        let user = await User.findOne({_id:userId, isDelete:false});
        if(!user){
            return res.status(404).json({message:'User not found'});
        }
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal server Error'});
    }
};

exports.updateUser = async (req, res) => {
    try {
        let userId = req.user._id;
        let user = await User.findById(userId);
        if(!user){
            return res.status(404).json({message:'User not found'});
        }
        user = await User.findByIdAndUpdate(user._id, {$set: {...req.body} },{ new: true });
        // user = await User.findByOneAndUpdate({_id:user._id}, { $set: {...req.body} },{ new: true });
        res.status(200).json({user, message:'User updated successfully'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal server Error'});
    }
};


exports.deleteUser = async (req, res) => {
    try {
        let userId = req.user._id;
        let user = await User.findById(userId);
        if(!user){
            return res.status(404).json({message:'User not found'});
        }
        // user = await User.findByIdAndDelete(user._id);
        user = await User.findOneAndUpdate({_id:user._id}, {isDelete:true}, {new:true});
        res.status(200).json({user, message:'User Deleted successfully'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal server Error'});
    }
};
const Prod1 = require('../model/prod1.model');
const bcrypt = require('bcrypt');

exports.addProd1 = async (req,res)=>{
    try {
        const {title, description, price, category} = req.body;
        let newProd1 = await Prod1.create({
            title, 
            description, 
            price, 
            category
        });
        newProd1.save();
        res.status(201).json({prod1: newProd1,message:'Product added successfully'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal server Error'});
    }
};

exports.getAllProd1s = async (req, res) => {
    try {
        let prod1s = await Prod1.find({ isDelete: false });
        res.status(200).json(prod1s);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal server Error'});
    }
};

exports.getProd1= async (req, res) => {
    try {
        let prod1Id = req.query.prod1Id;
        let prod1 = await Prod1.findOne({_id:prod1Id, isDelete:false});
        if(!prod1){
            return res.status(404).json({message:'product not found'});
        }
        res.status(200).json(prod1);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal server Error'});
    }
};

exports.updateProd1 = async (req, res) => {
    try {
        let prod1Id = req.query.prod1Id;
        let prod1 = await Prod1.findById(prod1Id);
        if(!prod1){
            return res.status(404).json({message:'Product not found'});
        }
        prod1= await Prod1.findByIdAndUpdate(prod1._id, {$set: {...req.body} },{ new: true });
   
        res.status(200).json({prod1, message:'Product updated successfully'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal server Error'});
    }
};


exports.deleteProd1 = async (req, res) => {
    try {
        let prod1Id = req.query.prod1Id;
        let prod1 = await Prod1.findById(prod1Id);
        if(!prod1){
            return res.status(404).json({message:`Product not found`});
        }
  
        prod1 = await Prod1.findOneAndUpdate({_id:prod1._id}, {isDelete:true}, {new:true});
        res.status(200).json({prod1, message:'Product Deleted successfully'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal server Error'});
    }
};
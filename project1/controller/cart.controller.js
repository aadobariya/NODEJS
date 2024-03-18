const Cart = require('../model/cart.model');

exports.addToCart = async (req, res) => {
    try {
        let cartItems = await Cart.findOne({
            user : req.user._id,
            cartItem : req.body.cartItem,
            isDelete: false
        });
        console.log(cartItems);
        if(cartItems){
            return res.json({message: 'cart already exist...'});
        }
        cartItems = await Cart.create({
            user: req.user._id,
            ...req.body
        });
        cartItems.save();
        res.json({cartItems ,message: 'cart added..'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'internel server error'});
    }
};

exports.getAllCart = async (req, res) => {
    try {
        let carts = await Cart.find({user: req.user._id,isDelete: false});
        res.status(200).json({carts});
    } catch (error) {
        console.log(error);
        res.status(500).json({meassge:'internel server error'});
    }
};

exports.getCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({_id: req.query.cartId, isDelete: false});
        if('!cart'){
            return res.status(404).json({meassge: 'cart not found'});
        }
        res.status(200).json(cart);
    } catch (error) {
        console.log(error);
        res.status(500).json({meassge: 'internal server error'});
    }
};
const Cart = require('../model/cart.model');
const order = require('../model/order.model');


exports.newOrder = async (req, res) => {
    try {
       let cartItems = await cart.find({user: req.user._id, isDelete: false}).populate('cartItem');
       let orderItems = cartItems.map(item => ({
            product: item.cartItem._id,
            quantity : item.quantity,
            price: item.cartItem.price
       }));
       let totalPrice = orderItems.reduce((total,item) => total + (item.price * item.quantity),0);
       let newOrder = await order.create({
        user: req.user._id,
        items: orderItems,
        totalPrice: totalPrice
       });
       newOrder.save();
       await Cart.updateMany({ user : req.user._id},{ $set:{isDelete: false}});
       res.status(201).json( {order: newOrder, messageg: 'Order updated successfully'}); 
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'internel server error'});
    }
};

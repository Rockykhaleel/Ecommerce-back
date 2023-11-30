const mongoose= require('mongoose');
const { Schema } = mongoose;

let CartSchema= new mongoose.Schema({
    products:[{
        type: Schema.Types.ObjectId,
        ref: 'Product', 
        required: true
    }],
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required:true,
    },
})

//export Model
const Cart = mongoose.model("Carts", CartSchema);
module.exports = Cart;
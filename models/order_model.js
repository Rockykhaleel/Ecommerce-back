const mongoose= require('mongoose');
const { Schema } = mongoose;

let OrderSchema= new mongoose.Schema({
    amount:{
        type:String,
        required:true,
        max:100
    },
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
const Order = mongoose.model("Orders", OrderSchema);
module.exports = Order;
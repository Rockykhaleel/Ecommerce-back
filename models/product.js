const mongoose= require('mongoose');
const { Schema } = mongoose;

let ProductSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        max:100
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    category_id:{
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required:true,
    },
    image:{
        type:String,
        required:true
    },
})

//export Model
const Product = mongoose.model("Products", ProductSchema);
module.exports = Product;
const mongoose= require('mongoose');
const Products= mongoose.model('Products');
const upload = require('../routes/image_route');

module.exports={
    addProduct:async (req,res)=>{
        const { name, price,quantity,category_id } = req.body;
        const newProduct = new Products({
            name,price,quantity,category_id,
            image: req.file.path, // Add this line to save the image path
          });
          try {
            const resp = await newProduct.save();
            res.status(201).send({ message: "New Product Added", resp });
          } catch (error) {
            res.status(500).send({ message: "Some Internal Server Error" });
          }
        
    },
    updateProduct:async(req,res)=>{
        const {id}=req.params;
        try {
            const resp=await Products.findByIdAndUpdate(id,req.body);
            res.status(200).json({
                message:'User Updated successfully',
                data:resp
            })
        } catch (error) {
            res.status(500).json({
                message:error.message
            })
        }
    },
    getProductById: async (req,res)=>{
        const {id}=req.params;
        try {
            const user=await Products.findById(id);
            res.status(200).json({
                message:'User fetched successfully',
                data:user
            })
        } catch (error) {
            res.status(500).json({
                message:error.message
            })
        }
    },
    getProductByCategory: async (req,res)=>{
        const {id}=req.params;
        try {
            const user=await Products.find({ category_id: id });
            res.status(200).json({
                message:'User fetched successfully',
                data:user
            })
        } catch (error) {
            res.status(500).json({
                message:error.message
            })
        }
    },
    deleteProduct:async (req,res)=>{
        const {id}=req.params;
        try {
            const user=await Products.findByIdAndDelete(id);
            res.status(200).json({
                message:'User deleted successfully',
                data:user
            })
        } catch (error) {
            res.status(500).json({
                message:error.message
            })
        }
    },
    getAllProducts:async (req,res)=>{
        try {
            const product=await Products.find();//fetch data from Database
            res.status(200).json({
                message:'Users fetched successfully',
                data:product
            })
        } catch (error) {
            res.status(500).json({
                message:error.message
            })
        }
    }
}
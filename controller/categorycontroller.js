const mongoose= require('mongoose');
//const Category= mongoose.model('Categories');
const Category = require("../models/category_model");

module.exports={
    addCategory:async (req,res)=>{
        const { name, decs } = req.body;
        const newCategories = new Category({
            name, decs
          });
          try {
            const resp = await newCategories.save();
            res.status(201).send({ message: "New Category Added", resp });
          } catch (error) {
            res.status(500).send({ message: "Some Internal Server Error" });
          }
    },
    updateCategory:async(req,res)=>{
        const {id}=req.params;
        try {
            const resp=await Category.findByIdAndUpdate(id,req.body);
            res.status(200).json({
                message:'Category Updated successfully',
                data:resp
            })
        } catch (error) {
            res.status(500).json({
                message:error.message
            })
        }
    },
    deleteCategory: async (req, res) => {
        const { id } = req.params;
        console.log(id);
        try {
            const category = await Category.findByIdAndDelete(id);
            res.status(200).json({
                message: 'Category deleted successfully',
                data: category
            });
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    getAllCategory:async (req,res)=>{
        try {
            const product=await Category.find();//fetch data from Database
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
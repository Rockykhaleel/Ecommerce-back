const mongoose= require('mongoose');
const Orders = require("../models/order_model");

module.exports={

    addOrder: async (req, res) => {
        const { amount, products, user } = req.body;
        const newOrder = new Order({ amount, products, user });
        try {
            const resp = await newOrder.save();
            res.status(201).send({ message: "New Order Added", resp });
        } catch (error) {
            res.status(500).send({ message: "Some Internal Server Error" });
        }
    },
    

    getOrdersByUserId:async (req,res)=>{
        try {
            const userId = req.params.userId; // or req.body.userId
            const docs = await Orders.find({ user: userId });
            res.status(200).send(docs);
        } catch (error) {
            res.status(500).send({message:"Error Occured",error:error})
        }
    },
    showallorder:async (req,res)=>{
        try {
            const docs=await Orders.find();
            res.status(200).send(docs);
        } catch (error) {
            res.status(500).send({message:"Error Occured",error:error})
        }
    }
}
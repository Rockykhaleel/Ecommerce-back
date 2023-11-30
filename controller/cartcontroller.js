const mongoose = require('mongoose');
const Carts = require("../models/cart_model");

module.exports = {
    addproducttocart: async (req, res) => {
        const { products, user } = req.body;
        const newCart = new Carts({ products, user });
        try {
            const resp = await newCart.save();
            res.status(201).send({ message: "New Cart item Added", resp });
        } catch (error) {
            res.status(500).send({ message: "Some Internal Server Error" });
        }
    },
    updatecart: async (req, res) => {
        const { id } = req.params;
        try {
            const resp = await Carts.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: 'Cart Updated successfully', data: resp });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    deleteById: async (req, res) => {
        const { id } = req.params;
        try {
            const cart = await Carts.findOneAndDelete({ _id: id });
            res.status(200).json({ message: 'Cart deleted successfully', data: cart });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getByUserId: async (req, res) => {
        const { id } = req.params;
        try {
            const cart = await Carts.find({ user: id });
            res.status(200).json({ message: 'Carts fetched successfully', data: cart });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

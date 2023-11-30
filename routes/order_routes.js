const express= require('express');
const router= express.Router();

const controller = require("../controller/ordercontroller")

router.get("/getOrdersByUserId",controller.getOrdersByUserId)

router.get("/addOrder",controller.addOrder)

//for admin
router.get("/showallorder",controller.showallorder)

module.exports= router;
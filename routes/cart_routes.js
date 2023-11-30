const express= require('express');
const router= express.Router();

const controller = require("../controller/cartcontroller")

router.post("/addproducttocart",controller.addproducttocart)

router.put("/updatecart/:id",controller.updatecart)

router.delete("/deleteById/:id",controller.deleteById)

router.get("/getByUserId/:id",controller.getByUserId )

module.exports= router;
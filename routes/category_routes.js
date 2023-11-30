const express= require('express');
const controller = require("../controller/categorycontroller")
const router= express.Router();


router.post("/addCategory",controller.addCategory)

router.put("/updateCategory",controller.updateCategory)

router.delete("/deleteCategory/:id",controller.deleteCategory)

router.get("/getAllCategory",controller.getAllCategory)

module.exports= router;
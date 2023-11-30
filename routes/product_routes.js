const express= require('express');
const router= express.Router();
// const upload = require('../routes/image_route');

const path= require('path');
const multer= require('multer');

const storage= multer.diskStorage({
    destination:'../images/',
    filename: (req,file,cb)=>{
        cb(null,`${Date.now()}--${file.originalname}`)
    }
})

const upload= multer({
    storage:storage,
    limits:{fileSize:10000000},//10MB
    fileFilter:(req,file,cb)=>{
        checkFileType(file,cb);
    }
})

const checkFileType= (file,cb)=>{
    const fileTypes= /jpeg|jpg|png/;
     const extName=fileTypes.test(path.extname(file.originalname).toLowerCase());
     const mimetype= fileTypes.test(file.mimetype);

     if(extName && mimetype){
        return cb(null,true)
     }else{
        cb("ERROR..  You can only upload JPEG, JPG & PNG ")
     }
}

const controller = require("../controller/productscontroller")

//router.post("/images",express.static('images'), upload)

router.post("/addProduct", upload.single('image'), (req, res, next) => {
    console.log(req.body);
    console.log(req.file);
    next();
  }, controller.addProduct);

router.put("/updateProduct/:id",controller.updateProduct)

router.get("/getProductById/:id",controller.getProductById)

router.get("/getProductByCategory/:id",controller.getProductByCategory)

router.delete("/deleteProduct/:id",controller.deleteProduct)

router.get("/getAllProducts",controller.getAllProducts)

module.exports= router;
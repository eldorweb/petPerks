const express = require("express")
const { AddProducts, DeleteProduct, GetProducts, GetProductsById } = require("../Controllers/controller")

const router = express.Router()

router.post("/add", AddProducts)
router.get("/get", GetProducts)
router.get("/getById/:id", GetProductsById)
router.delete('/delete/:id', DeleteProduct

    
)
module.exports = router
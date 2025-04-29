const Product = require("../Models/model")


exports.AddProducts = async (req, res) => {
    try {
        const { name, img, description } = req.body;
        const newProduct = new Product({ name, img, description });
        await newProduct.save();
        res.status(201).json({ message: "Product added", product: newProduct })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to add product" })
    }
}


exports.DeleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteProduct = await Product.findByIdAndDelete(id);
        if (!deleteProduct) {
            return res.status(404).json({ error: "Product not found" })
        }
        res.status(200).json({ messageg: "Product deleted successfully" })
    } catch (error) {
        res.status(500).json({ error: "Failed to delete product" })
    }
}

exports.GetProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json({ products })
    } catch (error) {
        res.status(500).json({ error: "Failed to get product" })
    }
}

exports.GetProductsById = async (req, res) => {
    try {
        const { id } = req.params;
        const findById = await Product.findById(id)
        if (!findById) {
            return res.status(404).json({ error: "Product not found" })
        }
        res.status(200).json({ findById })
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch product" })
    }
}
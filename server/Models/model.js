const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
},
{timestamps: true}   //qoshilgan vaqtini jonatadi. real time
) 



module.exports = mongoose.model("Product", productSchema);

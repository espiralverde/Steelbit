const mongoose = require ("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        // title: {type: String, required: true, unique: true}, le saco el unique: true para que mas de un elemento pueda tener el mismo nombre
        desc: {type:String, required: true },
        img: {type:String, required:true },
        categories: {type: Array },
        size: {type: Array },
        color: {type: Array },
        price: {type: Number, required:true },
        inStock: {type: Boolean, default:true},

    }, {timestamps: true}
);

module.exports = mongoose.model("Product", ProductSchema);
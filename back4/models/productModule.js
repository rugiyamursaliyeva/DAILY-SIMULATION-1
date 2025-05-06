import mongoose from "mongoose";

const productShema = mongoose.Schema({
    name:{type:String, required: true},
    price:{type:String, required: true},
    image:{type:String, required: true}
}, {timestamps:true})

const ProductModel = mongoose.model('Product', productShema)

export default ProductModel
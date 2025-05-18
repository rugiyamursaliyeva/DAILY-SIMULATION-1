import mongoose from "mongoose";

const basketShema = mongoose.Schema({
    name:{type:String, required: true},
    price:{type:String, required: true},
    image:{type:String, required: true}
}, {timestamps:true})

const BasketModel = mongoose.model('Basket', basketShema)

export default BasketModel
import mongoose from "mongoose";

const wishlistShema = mongoose.Schema({
    name:{type:String, required: true},
    price:{type:String, required: true},
    image:{type:String, required: true}
}, {timestamps:true})

const WishlistModel = mongoose.model('Wishlist', wishlistShema)

export default WishlistModel
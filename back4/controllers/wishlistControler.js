import WishlistModel from "../models/wishlistModule.js"

const getWishlist = async (req, res) => {
    const wishlists = await WishlistModel.find()
    res.json(wishlists)
}

const postWishlist = async (req, res) => {
    const {name, price, image} = req.body
    const wishlist = {name, price, image}
    await WishlistModel.create(wishlist)
    res.json(wishlist)
}

const deleteWishlist = async (req, res) => {
    const {id} = req.params
    await WishlistModel.findByIdAndDelete(id)
    res.json(`${id} -li wish silindi`)
}

export {getWishlist, postWishlist, deleteWishlist}
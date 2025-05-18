import express from 'express'
import { deleteProduct, getProducts, postProduct } from '../controllers/productController.js'
import { deleteBasket, getBaskets, postBasket } from '../controllers/basketController.js'
import { deleteWishlist, getWishlist, postWishlist } from '../controllers/wishlistControler.js'

const router = express.Router()

router
.get('/product', getProducts)
.post('/product', postProduct)
.delete('/product/:id', deleteProduct)
.get('/basket', getBaskets)
.post('/basket', postBasket)
.delete('/basket/:id', deleteBasket)
.get('/wish', getWishlist)
.post('/wish', postWishlist)
.delete('/wish/:id', deleteWishlist)

export default router
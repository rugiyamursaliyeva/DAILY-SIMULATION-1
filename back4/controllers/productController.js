import ProductModel from "../models/productModule.js";

const getProducts = async (req, res) => {
    const products = await ProductModel.find()
    res.json(products)
}

const postProduct = async (req, res) => {
    const {name, price, image} = req.body
    const product = {name, price, image}
    await ProductModel.create(product)
    res.json(product)
}

const deleteProduct = async (req, res) => {
    const {id} = req.params
    await ProductModel.findByIdAndDelete(id)
    res.json(`${id} -li product silindi`)
}

export {getProducts, postProduct, deleteProduct}
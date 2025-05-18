import BasketModel from "../models/basketModule.js"

const getBaskets = async (req, res) => {
    const baskets = await BasketModel.find()
    res.json(baskets)
}

const postBasket = async (req, res) => {
    const {name, price, image} = req.body
    const basket = {name, price, image}
    await BasketModel.create(basket)
    res.json(basket)
}

const deleteBasket= async (req, res) => {
    const {id} = req.params
    await BasketModel.findByIdAndDelete(id)
    res.json(`${id} -li product silindi`)
}

export {getBaskets, postBasket, deleteBasket}
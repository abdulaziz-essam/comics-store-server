import express from "express"
import {add,addToCart} from "../database/insert.js"
import bodyParser from "body-parser"
const router = express.Router()
router.use(express.json())
router.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({ extended: false })
router.post('/', urlencodedParser, (req, res) => {
    const name = req.body.name
    const release_date = req.body.release
    const quantity = req.body.quantity
    const number = req.body.company
    const price = req.body.price

    add(name, release_date, quantity, number, price)

    res.send("good job")
})
router.post('/cart', urlencodedParser, (req, res) => {
    const name = req.body.name
    const release_date = req.body.release
    const quantity = req.body.quantity
    const number = req.body.company
    const price = req.body.price

    addToCart(name,release_date,quantity,number,price)

    res.send("good job")
})

export default router
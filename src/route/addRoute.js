import express from "express"
import add from "../database/insert.js"
import bodyParser from "body-parser"
const router = express.Router()
router.use(express.json())
router.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({ extended: false })
export default router.post('/',urlencodedParser, (req, res) => {
    const name = req.body.name
    const email = req.body.company
    const quantity = req.body.quantity
    const number=req.body.number

    add(name, email, quantity, number)

    res.send("good job")
})
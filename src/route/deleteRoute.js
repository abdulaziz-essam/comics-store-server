import express from "express"
import deleteCom from "../database/delete.js" 
import bodyParser from "body-parser"
const router = express.Router()
router.use(express.json())
router.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({ extended: false })

export default router.post('/',urlencodedParser, (req, res) => {
    const chatbotname = req.body.chatbotname
    deleteCom(chatbotname)

    res.send("good job")
})
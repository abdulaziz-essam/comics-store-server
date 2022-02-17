import express from "express"
import add from "../database/insert.js"
import bodyParser from "body-parser"
const router = express.Router()
router.use(express.json())
router.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({ extended: false })
export default router.post('/',urlencodedParser, (req, res) => {
    const question = req.body.question
    const answer = req.body.answer
    const chatbotName = req.body.chatbot
    add(question, answer, chatbotName)

    res.send("good job")
})
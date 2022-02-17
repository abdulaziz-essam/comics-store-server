import express from "express" 
import show from "../database/show.js"

import bodyParser from "body-parser"
const router = express.Router()
router.use(express.json())
router.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({ extended: false })
 export default  router.get('/',urlencodedParser, (req, res) => {
     const chatbotname= req.body.chatbotname
show(chatbotname)

     res.send("good job")
 })
import express from "express"
import update from "../database/update.js"
import bodyParser from "body-parser"
const router = express.Router()
router.use(express.json())
router.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({ extended: false })

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
router.post('/post', urlencodedParser , (req, res) => {
    const oldData = req.body.oldData
const newData = req.body.newData
    update( oldData, newData)

    res.send("good job"+oldData+"hi")
})

export default router




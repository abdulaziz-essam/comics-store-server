import express from "express" 
import {show }from "../database/show.js"

import bodyParser from "body-parser"
const router = express.Router()
router.use(express.json())
router.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({ extended: false })
 export default  router.get('/',urlencodedParser, (req, res) => {
  const comicsName="peacemaker"
     res.setHeader('Content-Type', 'application/json', "Access-Control-Allow-Origin" ,"*",
         "Access-Control-Allow-Credentials" , true);
  
// res.json((show(comicsName)))
    //  const resData = JSON.stringify(show(comicsName))
   
let data=(show(comicsName))
data.then((result) =>{
    console.log(result)
    res.json(result);

})
}
)
// router.get('/all', urlencodedParser, (req, res) => {
//     const comicsName = "peacemaker"
//     res.setHeader('Content-Type', 'application/json', "Access-Control-Allow-Origin", "*",
//         "Access-Control-Allow-Credentials", true);

//     // res.json((show(comicsName)))
//     //  const resData = JSON.stringify(show(comicsName))
//     // Filter all healthcare bios by region

//     let data = (showAll(comicsName))
//     data.then((result) => {
//         console.log(result);
//         res.json(result);

    

// })
// })


 
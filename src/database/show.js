import db from '../database/connect.js';


const show = (chatbotname) => {
 

    try {
        const data = db.collection("chatbot").findOne({  chatbotname:chatbotname }, function (err, obj) { console.log(obj); });
 
        db.save
        console.log(data)

    } catch (error) {
        console.log(error);
    }

    console.log("good job ")

}
export default show
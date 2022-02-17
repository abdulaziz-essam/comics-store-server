import db from '../database/connect.js';
const add = async (question,answer,chatbotname) => {


    try {
        await db.collection('chatbot').insertOne({ question:question , answer: answer, chatbotname:chatbotname });
        db.save
    } catch (error) {
        console.log(error);
    }

    console.log("good job ")

}
export default add;
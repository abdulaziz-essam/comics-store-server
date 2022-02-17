import db from '../database/connect.js';
const update = async (  oldData, newData) => {

    const filter = { chatbotname: oldData };
    const update = { $set: { chatbotname: newData } }

    await db.collection("chatbot").findOneAndUpdate(filter, update);

    db.save


    console.log("good job ")

}
export default update
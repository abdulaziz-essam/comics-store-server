import db from '../database/connect.js';


const deleteCom = async (chatbotName) => {


    try {
        await db.collection("chatbot").deleteOne({ chatbotname:chatbotName }, function (err) {
            if (err) {
                console.log(err)
                return handleError(err);
            }
            // deleted at most one tank document
        });
        db.save
    } catch (error) {
        console.log(error);
    }

    console.log("good job ")

}
export default deleteCom
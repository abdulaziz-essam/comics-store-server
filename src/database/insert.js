import db from '../database/connect.js';
const add = async (name,email,quantity,number) => {


    try {
        await db.collection('comicsStore').insertOne({ name:name , email: email, quantity:quantity,number ,number });
        db.save
    } catch (error) {
        console.log(error);
    }

    console.log("good job ")

}
export default add;
import db from '../database/connect.js';
const add = async (name, release_date,quantity,company) => {


    try {
        await db.collection('comicsStore').updateOne(
            { company: company },
            { $push: { comics :{name: name , release_date: release_date ,quantity:quantity}}}
        )
        db.save
    } catch (error) {
        console.log(error);
    }

    console.log("good job ")

}
export default add;
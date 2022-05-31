import db from '../database/connect.js';
const add = async (name, release_date, quantity, company, price) => {


    try {
        await db.collection('comicsStore').updateOne(
            { company: company },
            { $push: { comics: { name: name, release_date: release_date, quantity: quantity, price: price } } }
        )
        db.save
    } catch (error) {
        console.log(error);
    }

    console.log("good job ")

}

const addToCart = async (name, release_date, quantity, number, price)=>{
        try {
        await db.collection('carts').updateOne(
            { email:"azoz"},
            { $push: { comics: { name: name, release_date: release_date, quantity: quantity, price: price } } }
        )
        db.save
    } catch (error) {
        console.log(error);
    }

    console.log("good job ")

}
export  {add ,addToCart};
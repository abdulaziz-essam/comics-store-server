import db from '../database/connect.js';


const show =  async  (comicName) => {
   try {
       let data = await db.collection("comicsStore").findOne({
           "company": "dc"
        })
        
       return data;  
   } catch (error) {
       console.log(error)
   }
 
}


//find all
// const showAll = async (comicName) => {




    
// try {
//     let data = await db.collection().findOne({ "company": "dc" })
//   data.then((data) => {
//       console.log(data)
//   })
//   return data
// } catch (error) {
//     console.log(error);
// }
 

// }
export {show}
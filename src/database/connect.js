import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()
const databaseUrl = process.env.MONGO_URI
mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })
const conn = mongoose.connection
export default conn
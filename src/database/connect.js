import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(__dirname)
console.log(__filename)
dotenv.config(({ path: path.resolve(__dirname, '../.env') }))
const databaseUrl = process.env.USER_KEY
mongoose.connect(databaseUrl)
const conn = mongoose.connection
export default conn
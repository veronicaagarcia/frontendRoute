import mongoose from "mongoose";

const URI = process.env.MONGODB_URI 
? process.env.MONGODB_URI
: 'mongodb://127.0.0.1:27017/databasetest'

mongoose.connect(URI)

const connection = mongoose.connection

connection.once('open', () => {
    console.log('database connect')
})
"use strict"

const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config();

// ** Code to connect to mongoDB using mongoose.

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongo_connection);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log("Error connecting to MongoDB:", error)
        process.exit(1);
    }
}

module.exports = connectDB;
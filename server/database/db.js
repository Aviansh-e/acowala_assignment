const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

const connection = async () => {
    try {
        const username = process.env.username;
        const passward = process.env.passward;
        // const url = "mongodb://localhost:27017/"

        const url = 'mongodb+srv://motaavinash96:2iqI2pGP37ZMWJi6@cluster0.dzcrw.mongodb.net/';
        // Replace with your MongoDB connection URL
        await mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log("Successfully connected to MongoDB");
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
    }
};
module.exports = connection;

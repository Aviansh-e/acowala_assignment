const mongoose = require('mongoose');
const { Schema } = mongoose;

const User_Aschema = new Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        min: 5,
        max: 20,
        index: true,
        lowecase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    passward: {
        type: String,
        required: true,

    }

});
const user_schema = mongoose.model('userdata', User_Aschema);

module.exports = user_schema;
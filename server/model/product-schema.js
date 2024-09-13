const mongoose = require('mongoose');
const { Schema } = mongoose;

const Product_Schema = new Schema({
    id: {
        type: String,
        unique: true
    },
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String

});
const product_schema = mongoose.model('FoodProducts', Product_Schema);

module.exports = product_schema;
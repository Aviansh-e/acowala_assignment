
const Products = require('./Constant/data.js');
const product_sch = require('./model/product-schema.js');

const defaultdata = async () => {
    try {
        // Check if any product already exists
        const existingProducts = await product_sch.find();

        // If the collection is not empty, skip inserting
        if (existingProducts.length > 0) {
            console.log("Data already exists. Skipping insertion.");
            return;
        }

        // Insert data if collection is empty
        await product_sch.insertMany(Products);
        console.log("Data inserted successfully.");
    } catch (err) {
        console.log("Error is", err.message);
    }
}

module.exports = defaultdata;

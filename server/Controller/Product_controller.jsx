// const { request } = require('io');
const Product = require('../model/product-schema.js');

const getproducts = async (request, response) => {
    try {
        const products = await Product.find({});
        // Now you can send the fetched products to the frontend
        response.status(200).json(products);

    } catch (err) {
        response.status(500).json({ error: err });
    }
};

const getProductById = async (request, resonse) => {
    try {
        const id = request.params.id;
        const Product = await Product.findOne({ 'id': id });
        resonse.status(200).json(Product);
    }
    catch (err) {
        resonse.status(501).json({ error: err.message });
    }
}
// module.exports = getproducts;
module.exports = {
    getproducts: getproducts,
    getProductById: getProductById
}
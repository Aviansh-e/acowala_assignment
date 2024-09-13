const express = require('express');
const router = express.Router();
const { Usercontroller, userlogin } = require('../Controller/user_controller.jsx');
const { getproducts, getProductById } = require('../Controller/Product_controller.jsx');

// const  = require('../Controller/user_controller.jsx');
router.post('/signup', Usercontroller);
router.post('/login', userlogin);

router.get('/products', getproducts);
router.get('/product', getProductById);
module.exports = router;
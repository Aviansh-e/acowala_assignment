const express = require('express')
const app = express()
const Router = require('./route/route.js');
const cors = require('cors');
const BodyParser = require('body-parser');

const mongose = require('./database/db.js');
const defaultdata = require('./default.js');

app.use(cors());
app.use(BodyParser.json({ extended: true }));
app.use(BodyParser.urlencoded({ extended: true }));

mongose();
app.get('/', function (req, res) {
    res.send('Hello World')
})
const port = process.env.PORT || 3001;

app.use('/', Router);
app.listen(port, () => {
    console.log(`server get started in port number ${port}`)
})
// defaultdata();
console.log("chalo ab sb run ho gya");
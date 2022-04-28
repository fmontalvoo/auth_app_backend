require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const auth = require('./routes/auth.route.js');

app.use('/auth', auth);

const port = process.env.PORT ?? 3000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
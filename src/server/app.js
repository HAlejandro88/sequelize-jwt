const express = require('express');
const cors = require('cors');

const app = express();
const Routes = require('./routes/index');
const errorHandler = require('./middlewares/error.middleware');


app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

app.use(Routes)
app.use(errorHandler)


module.exports = app
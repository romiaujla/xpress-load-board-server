require('dotenv').config();
const {NODE_ENV} = require('./config');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
const morganOptions = NODE_ENV === 'production'
    ? 'tiny'
    : 'common';

app.use(morgan(morganOptions));
app.use(cors());
app.use(helmet());


app.get(`/`, (_, res)=>{
    res.send(`Server is running`);
});

module.exports = app;
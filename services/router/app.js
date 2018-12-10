const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes');

const app = express();

if (process.env.NODE_ENV === 'dev') {
  app.use(morgan('dev'));
}
app.use(cors());
app.use(bodyParser.json());
app.use('/', routes);

module.exports = app;

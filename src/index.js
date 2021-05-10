const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const db = require('./config/database');
const { serverPort } = require('../.env');
const api = require('./api/v1/routes/api/index');
const auth = require('./api/v1/routes/auth/index');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

try {
  db.authenticate();
} catch (err) {
  throw new Error(err);
}

app.use('/api/v1', api);
app.use('/auth', auth);

app.listen(serverPort);

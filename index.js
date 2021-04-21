const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const db = require('./config/database');
const { serverPort } = require('./env');
const api = require('./routes/api/index');

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

app.listen(serverPort);

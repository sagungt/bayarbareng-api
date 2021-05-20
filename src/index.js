const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');
const rfs = require('rotating-file-stream');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const compression = require('compression');

const db = require('./config/database');
const { serverPort } = require('../.env');
const api = require('./api/v1/routes/api/index');
const auth = require('./api/v1/routes/auth/index');
const swaggerOption = require('./api/v1/docs');

const app = express();

app.use(compression());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('dev', {
  skip(req, res) { return res.statusCode < 400; },
}));
app.use(morgan('common', {
  stream: rfs.createStream('access.log', {
    interval: '1d',
    path: path.join(__dirname, 'logs'),
    compress: 'gzip',
  }),
}));

try {
  db.authenticate();
} catch (err) {
  throw new Error(err);
}

app.use('/api/v1', api);
app.use('/auth', auth);
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerOption));

app.listen(serverPort);

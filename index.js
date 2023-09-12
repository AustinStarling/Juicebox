require('dotenv').config();

const { PORT = 3000 } = process.env;
const express = require('express');
const server = express();

const bodyParser = require('body-parser');
server.use(bodyParser.json());

const morgan = require('morgan');
server.use(morgan('dev'));

server.use((req, res, next) => {
  console.log("<____Body Logger START____>");
  console.log(req.body);
  console.log("<_____Body Logger END_____>");

  next();
});

app.get('/protected-route', requireUser, (req, res) => {
  res.json({ message: 'You have acces to this protected route.' });
});

const apiRouter = require('./api');
server.use('/api', apiRouter);

const { client } = require('./db');
const { requireUser } = require('./api/utils');
client.connect();

server.listen(PORT, () => {
  console.log("The server is up on port", PORT);
});
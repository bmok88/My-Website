const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../dist')));

const connection = mysql.createConnection({
  connectionLimit: '10',
  host: process.env.HOST || 'localhost',
  user: process.env.USERNAME || 'root',
  password: process.env.PASSWORD || 'Lbj08151992',
  database: process.env.DATABASE ||'brendan_mok',
  port: process.env.PORT || '3306'
});

connection.connect(err => {
  if (err) console.error(err);
  console.log('Database connected');
});

const port = process.env.PORT || 9999;
app.listen(port, () => {
  console.log('Website server is up!')
});


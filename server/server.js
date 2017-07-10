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
  host: 'localhost',
  user: 'root',
  password: 'Lbj08151992',
  database: 'brendan_mok',
  port: '3306'
});

connection.connect(err => {
  if (err) console.error(err);
  console.log('Database connected');
});

const port = 9999;
app.listen(port, () => {
  console.log('Website server is up!')
});


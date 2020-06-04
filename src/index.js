const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const app = express();
app.use(bodyParser.json());

app.use(routes)
app.get('/', function (req, res) {
    res.send('Hello World!')
  })    
app.listen(4005)
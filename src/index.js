const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.emit({message: "Hello World"})
app.listen(4005)
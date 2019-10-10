const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect("mongodb+srv://mongodb:mongodb@mongodb-84ytb.mongodb.net/teste?retryWrites=true&w=majority", {
  useNewUrlParser: true, useUnifiedTopology: true
});

const app = express();
app.use(express.json());
app.use(routes);
app.listen(80);
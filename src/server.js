const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://TinDev:TinDev@cluster0-sg3qs.mongodb.net/TinDev?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
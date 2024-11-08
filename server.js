const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
const expressServer = app.listen(3000);
const socket = require('socket.io');
const io = socket(expressServer);
const helmet = require('helmet');
app.use(helmet());


module.exports = {
    app,
    io
}
const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
const expressServer = app.listen(3000);
const socket = require('socket.io');
const io = socket(expressServer);


module.exports = {
    app,
    io
}
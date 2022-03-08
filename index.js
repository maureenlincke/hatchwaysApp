const express = require('express');
const server = express();

server.use(express.json());

const morgan = require('morgan');
server.use(morgan('dev'));

const path = require('path');
server.use(express.static(path.join(__dirname, 'build')));

server.use('/api', require('./routes'));

server.use((error, req, res, next) => {
    res.status(500);
    console.log(error.message);
    res.send({
        error: 500,
        message: error.message
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, async () => {
    console.log(`Server is running on ${PORT}`)
});
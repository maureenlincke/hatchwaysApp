const express = require('express');
const server = express();

server.use(express.json());

const morgan = require('morgan');
server.use(morgan('dev'));

const path = require('path');
server.use(express.static(path.join(__dirname, 'build')));

server.use('/api', require('./routes'));

const PORT = process.env.PORT || 5000;
server.listen(PORT, async () => {
    console.log(`Server is running on ${PORT}`)
});
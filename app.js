const http = require('http');
const config = require('./config');
const router = require('./routes');

const server = http.createServer(router);

server
    .listen(config.port)
    .once('listening', console.log.bind(this, `Server listening on port:${config.port}`));
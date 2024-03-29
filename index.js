'use strict';

const server = require('./server');
const router = require('./router');
const requestHandler = require('./requestHandlers');

var handle = {};
handle['/'] = requestHandler.start;
handle['/start'] = requestHandler.start;
handle['/upload'] = requestHandler.upload;

server.start(router.route, handle);

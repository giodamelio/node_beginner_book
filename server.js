'use strict';

const http = require('http');
const url = require('url');

function start(route, handle) {
  function onRequest(request, response) {
    let postdata = '';
    const pathname = url.parse(request.url).pathname;
    console.log('Request for', pathname, 'recieved');

    request.setEncoding('utf8');
    request.addListener('data', function(postDataChunk) {
      postdata += postDataChunk;
      console.log('Recieved POST data chunk', postDataChunk);
    });
    request.addListener('end', function() {
      route(handle, pathname, response, postdata);
    });
  };

  http.createServer(onRequest).listen(8888);
  console.log('Server started at http://localhost:8888');
};

exports.start = start;


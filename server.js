const http = require('http');
const url = require('url');

function start(route, handle) {
  function onRequest(request, response) {
    const pathname = url.parse(request.url).pathname;
    console.log('Request for', pathname, 'recieved');

    route(handle, pathname, response);
  };

  http.createServer(onRequest).listen(8888);
  console.log('Server started at http://localhost:8888');
};

exports.start = start;


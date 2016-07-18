const http = require('http');
const url = require('url');

function start() {
  function onRequest(request, response) {
    const pathname = url.parse(request.url).pathname;
    console.log('Request for', pathname, 'recieved');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World');
    response.end();
  };

  http.createServer(onRequest).listen(8888);
  console.log('Server started at http://localhost:8888');
};

exports.start = start;


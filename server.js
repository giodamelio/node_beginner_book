const http = require('http');
const url = require('url');

http.createServer(function(request, response) {
  const pathname = url.parse(request.url).pathname;
  console.log('Request for', pathname, 'recieved');
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello World');
  response.end();
}).listen(8888);

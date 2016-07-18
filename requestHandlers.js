module.exports.start = function(response) {
  console.log('Request handler start was called');
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello start');
  response.end();
}

module.exports.upload = function(response) {
  console.log('Request handler upload was called');
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello upload');
  response.end();
}

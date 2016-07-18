'use strict';

function route(handle, pathname, response, postData) {
  console.log('Routing request at', pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, postData);
  } else {
    console.log('Route', pathname, 'not found');
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('404 Not Found');
    response.end();
  }
}

exports.route = route;

function route(handle, pathname) {
  console.log('Routing request at', pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname]();
  } else {
    console.log('Route', pathname, 'not found');
  }
}

exports.route = route;

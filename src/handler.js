var fs = require('fs');
var path = require('path');


function handler (request, response) {
  var endpoint = request.url;

/* Setting up response for endpoint / */

  if (endpoint === '/') {
    response.writeHead(200, {'Content-Type': 'text/html'});

    fs.readFile(path.join(__dirname, '..', 'public/index.html'), function (error, file) {
      if (error) {
        console.log(error);
        return;
      } else {
        console.log(endpoint);
      }

    response.end(file);
    })

/* Setting up response for all other endpoints */

  } else {

    response.writeHead(200);
    fs.readFile(path.join(__dirname, '..', 'public') + endpoint, function (error, file) {
      if (error) {
        console.log(error);
        return;
      }
    response.end(file);
    })
    
  }

}

module.exports = handler;

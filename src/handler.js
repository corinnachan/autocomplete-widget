var fs = require('fs');
var path = require('path');


function handler (request, response) {
  var endpoint = request.url;

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
  }

}

module.exports = handler;

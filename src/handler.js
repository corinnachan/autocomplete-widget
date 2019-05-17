var fs = require('fs');
var path = require('path');

const handlerHomepage = 

  function (request, response) {
    var endpoint = request.url;
    console.log(endpoint);

  /* Setting up response for endpoint */
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

/* Setting up response for all other endpoints */


const handlerNonHomepage = 
    function (request, response) {
      response.writeHead(200);
      response.write('404 This page does not exist');
      response.end();
    }
    
    

module.exports = {
  handlerHomepage,
  handlerNonHomepage,
};

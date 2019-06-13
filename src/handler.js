var fs = require('fs');
var path = require('path');
var querystring = require('querystring');
var pokedex = require('./pokedex.json');



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

const handlerAutocomplete =
  function (request, response) {
    response.writeHead(200, {'Content-Type': 'application/json'});
    var requestQuery = querystring.parse(request.url.split('?')[1]);
    var pokemonArray = pokedex.pokemon
    var searchTerm = requestQuery.pokemon
    var searchRegex = new RegExp('^' + searchTerm, 'i')

    var resultingItems = pokemonArray.filter(function (arrayItem) {
      return searchRegex.test(arrayItem.name);
    });

    var mappedItems = resultingItems.map(function(filteredItem) {
      return filteredItem.name;
    })

    var json = JSON.stringify(mappedItems);
    response.end(json);

    // console.log(request.url.split('?')[1])
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
  handlerAutocomplete
};

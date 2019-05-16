var http = require('http');
var handler = require('./handler.js');

var server = http.createServer(handler);

server.listen(4000, function () {
  console.log('Server is listening on port 4000. Ready to accept requests!');
});

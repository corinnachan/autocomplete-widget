var http = require('http');

var server = http.createServer();

server.listen(4000, function () {
  console.log('Server is listening on port 4000. Ready to accept requests!');
});
